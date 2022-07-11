import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './profile/header/header.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { IntroComponent } from './profile/intro/intro.component';
import { ProjectsComponent } from './profile/projects/projects.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { ProjectCardComponent } from './profile/project-card/project-card.component';
import { ExperiencesComponent } from './profile/experiences/experiences.component';
import { TimelineComponent } from './profile/timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
    IntroComponent,
    ProjectsComponent,
    SkillsComponent,
    ProjectCardComponent,
    ExperiencesComponent,
    TimelineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    NgxNavbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
