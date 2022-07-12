import { Project } from './project';
import { Experience } from './experience';

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

export const EXPSLIST: Experience[] = [
    {
        id: 1,
        companyName: "OMNI",
        role: "Backend Developer Part Time",
        fromDate: "Feb 2020",
        toDate: "Oct 2020",
        tasks: [
            {
                projectName: "AER Membership App",
                descs: [
                    "Constructed Application Programming Interface for mobile using Lumen and admin panel using Laravel to manage online e-commerce transactions",
                    "Successfully delivered the system as ready to use in live environment and available in Google Play / App store"
                ]
            },

        ],
    },
    {
        id: 2,
        companyName: "Toppan Ecquaria Technologies Pte Ltd",
        role: "Software Engineer",
        fromDate: "Mar 2020",
        toDate: "Feb 2021",
        tasks: [
            {
                projectName: "IFAMS (Integrated Family Application Management System) - FJC",
                descs: [
                    "Maintained IFAMS on External Interface features that transfers information to different government agencies in XML format",
                    "Fixed 10+ issues on reporting side using Oracle SQL and Elixir Tech Reporting tools"
                ]
            },
            {
                projectName: "IDEAS - GovTech",
                descs: [
                    "Maintained and resolved 10+ issues on ideas.gov.sg web application that is developed using Ecquaria’s Service Oriented Platform, Java framework, including security bugs (XSS prevention)",
                ]
            },
            {
                projectName: "WRMS (Waste Resource Management Systems) - NEA",
                descs: [
                    "Developed new Cognos report and helped 3 other track code reports passing User Acceptance Testing (UAT)",
                ]
            },
        ],
    },
    {
        id: 2,
        companyName: "Toppan Ecquaria Technologies Pte Ltd",
        role: "Senior Software Engineer",
        fromDate: "Mar 2021",
        toDate: "Jun 2022",
        tasks: [
            {
                projectName: "IP4SG Mobile App - IPOS",
                descs: [
                    "Led and developing ongoing project using Flutter for the mobile applications and Java Spring Boot for backend integration",
                    "Integrated mobile app and backend api with ENETS Payment API"
                ]
            }
        ],
    },
    {
        id: 3,
        companyName: "Mandrill Tech Sdn Bhd",
        role: "Software Engineer",
        fromDate: "Jun 2022",
        toDate: "Present",
        tasks: [
            {
                projectName: "Servedeck",
                descs: [
                    "Responsible on resolving issues and develop new enhancements to existing systems which are using Angular as the Front-end framework and Spring as the backend framework",
                ]
            }
        ],
    }
];