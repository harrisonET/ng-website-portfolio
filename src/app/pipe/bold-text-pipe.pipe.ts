import { Pipe, PipeTransform, Sanitizer, SecurityContext } from '@angular/core';
import { noop } from 'rxjs';

@Pipe({
  name: 'boldText'
})
export class BoldTextPipe implements PipeTransform, Sanitizer {

  constructor(private sanitizer: Sanitizer) { }

  transform(value: string): any {
    const regex = /[\*][\w\W]*[\*]/gmi;
    return this.sanitize(this.replace(value, regex));
  }

  replace(str: string, regex: RegExp) {
    let matched = str.match(regex);
    matched ? matched.forEach(foundString => {
      foundString = foundString.substring(1, foundString.length - 1);
      str = str.replace(regex, `<b>${foundString}</b>`);
    }) : noop;
    return str;
  }

  sanitize(str: {} | null) {
    return this.sanitizer.sanitize(SecurityContext.HTML, str);
  }
}