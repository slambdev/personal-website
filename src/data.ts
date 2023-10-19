import { Resume } from './types/resume';

export const resume: Resume = {
  experiences: [
    {
      company: `Showrunner`,
      link: `https://showrunner.tech/`,
      description: `Built an integrated platform to help studios coordinate and manage their physical and virtual sets, integrating with Unreal Engine using RCAPI.`,
      role: `Staff Fullstack Engineer`,
      startDate: new Date(2023, 1, 1),
      endDate: new Date(2023, 8, 1),
      logoPath: `/showrunner.svg`,
      technologies: [
        `NodeJS`,
        `Typescript`,
        `SQL`,
        `Prisma`,
        `React`,
        `NextJS`,
        `NestJS`,
        `Apollo`,
        `GraphQL`,
        `Unreal`,
        `GitHub Actions`,
        `Storybook`,
        `Vagrant`,
      ],
      callouts: [
        `Pre-Series A employee`,
        `2nd top contributor within a month of joining the team`,
      ],
    },
    {
      company: `IBM`,
      description: `Built an integration platform to help users build and deploy data pipelines with off the shelf AI components using low code/no code.`,
      role: `Senior Fullstack Engineer`,
      startDate: new Date(2021, 6, 1),
      endDate: new Date(2023, 1, 1),
      logoPath: `/ibm.png`,
      technologies: [
        `NodeJS`,
        `Typescript`,
        `Postgres`,
        `gRPC`,
        `Terraform`,
        `AWS EC2`,
        `React`,
        `Mobx`,
        `Docker`,
        `Storybook`,
      ],
      team: `ConveyorAI`,
      link: `https://conveyorai.com/`,
      callouts: [`Top contributor of the codebase`, `Conducted user research`],
    },
    {
      company: `IBM`,
      description: `Lead a team of engineers in building and managing systems that integrated platforms such as Slack, PagerDuty, and GitHub with internal systems.`,
      role: `Full Stack Engineer and Team Lead`,
      startDate: new Date(2018, 1, 1),
      endDate: new Date(2021, 6, 1),
      logoPath: `/ibm.png`,
      technologies: [
        `PagerDuty`,
        `Typescript`,
        `MongoDB`,
        `Redis`,
        `Bolt`,
        `NewRelic`,
        `LogDNA`,
        `Docker`,
        `Kubernetes`,
        `Watson Assistant`,
        `SQL Query`,
        `Cloud Object Storage (COS)`,
        `React`,
        `Travis`,
        `GitHub Actions`,
        `Artifactory`,
      ],
      team: `Powerups@IBM`,
      callouts: [
        `Top contributor of the codebase`,
        `Acting project manager and managed the backlog`,
        `Lead Scrum events`,
        `Instrumented monitoring and alerting with various third party tools`,
      ],
    },
    {
      company: `IBM`,
      description: `Helped roll out Slack to all of IBM and built out a microservice architecture that deeply integrated with Slack’s APIs. These integrations manage crucial admin tasks such as: offboarding, profile sync, provisioning.`,
      role: `Full Stack Engineer`,
      startDate: new Date(2016, 6, 1),
      endDate: new Date(2018, 1, 1),
      logoPath: `/ibm.png`,
      technologies: [
        `NodeJS`,
        `RabbitMQ`,
        `Redis`,
        `Seneca`,
        `Botkit`,
        `Slapp`,
        `Cloudant`,
        `Amazon S3`,
        `Travis`,
        `Docker`,
      ],
      team: `Slack@IBM`,
      callouts: [
        `Met regularly with enterprise team at Slack to evaluate roadmap, provide feedback on beta features and test new APIs`,
        `Used test driven development (TDD) to implement high quality code and minimize production bugs`,
        `Pair programmed with designers when implementing an internal website`,
      ],
    },
    {
      company: `Hudl`,
      description: `Built new features for athlete profiles, including newsfeeds with reactions, and updates to the iOS app that were rolled out to millions of users.`,
      role: `Full Stack Engineer Intern`,
      startDate: new Date(2015, 7, 1),
      endDate: new Date(2016, 6, 1),
      logoPath: `/hudl.png`,
      technologies: [`C#`, `.Net`, `CSS`, `React`, `Swift`],
      team: `Community`,
      link: `https://www.hudl.com/`,
      callouts: [],
    },
    {
      company: `IBM`,
      description: `Designing and developing a Web interface for IBM executives to aid in the analysis of medical documents and their correlating ranking metrics generated by Watson.`,
      role: `UI/UX Web Developer Intern`,
      startDate: new Date(2015, 4, 1),
      endDate: new Date(2015, 7, 1),
      logoPath: `/ibm.png`,
      technologies: [`Java`, `Angular`, `CSS`, `CloudantDB`],
      team: `Extreme Blue`,
      callouts: [
        `Owned the design, implementation, and deployment of the website`,
        `Used design thinking to identify user personas and design an appropriate solution`,
      ],
    },
  ],
  education: {
    school: `University of Nebraska - Lincoln`,
    program: `Jeffrey Raikes School of Computer Science and Business Management`,
    startYear: 2012,
    endYear: 2016,
    degrees: [
      {
        degree: `Bachelors`,
        study: `Computer Science`,
      },
      {
        degree: `Bachelors`,
        study: `Mathematics`,
      },
      {
        degree: `Minor`,
        study: `Business management`,
      },
    ],
  },
  contact: {
    name: `Shannen Lambdin`,
    location: `Raleigh, NC`,
  },
  skills: [
    `Typescript`,
    `DevOps`,
    `React`,
    `NodeJS`,
    `System architecture`,
    `Incident management`,
    `CI/CD`,
    `Database management`,
    `Project management`,
    `Infrastructure management`,
  ],
  interests: [],
  tldr: `I'm a heads-down get sh*t done engineer. I enjoy working with designers and product managers to implement the best user experience possible. With a proven record of producing high quality code (and a lot of it) to meet stringent deadlines, I will be a great addition to your company.`,
};
