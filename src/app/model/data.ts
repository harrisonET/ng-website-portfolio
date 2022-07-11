import { Project } from './project';

export const PROJECTS: Project[] = [
    { 
        id: 1, name: 'Krypto Android Mobile Application', 
        desc: 'A final year project, creating an Android application for teaching students on basic Crypthography (Caesar, Viginere, etc). Developed using Java.',
        imageUrl: 'assets/images/project-krypto.PNG', link: '', 
        tags: ['Android', 'Java'] 
    },
    { 
        id: 2, name: 'Greek Gods Card Game', 
        desc: 'Built a turn-based card game using Java GUI that can be run in desktop.',
        imageUrl: 'assets/images/project-ggcg.PNG', link: 'https://github.com/harrisonET/Greek-Gods-Card-Game', 
        tags: ['Desktop', 'Java', 'GUI']
    }
];

export const SKILLSLIST = [
    'Flutter', 'Dart',
    'Angular', 'Typescript',
    'Spring', 'Java'
];