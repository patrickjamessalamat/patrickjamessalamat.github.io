// A company can hold one or more roles (LinkedIn-style). Single-role
// companies render as a flat card; multi-role companies render as a
// grouped header with a nested timeline of positions.
export interface Role {
  title: string;
  employmentType?: string; // e.g. Full-time, Part-time, Contract
  period: string; // e.g. "Jun 2019 — Oct 2022"
  duration?: string; // e.g. "3 yrs 5 mos"
  workMode?: string; // e.g. Hybrid, Remote, On-site
  description?: string[]; // one string per paragraph
  skills?: string[];
}

export interface ExperienceEntry {
  organization: string;
  headline?: string; // overarching title for multi-role companies, e.g. "Software Developer"
  tenure?: string; // total time across all roles, e.g. "8 yrs 1 mo"
  location?: string;
  roles: Role[];
  kind: 'work' | 'education';
}

export const experience: ExperienceEntry[] = [
  {
    organization: 'Inchcape Digital',
    location: 'Ortigas Center, Pasig, Metro Manila',
    kind: 'work',
    roles: [
      {
        title: 'Senior Full-Stack .NET Engineer',
        employmentType: 'Full-time',
        period: 'Jan 2024 — Present',
        description: [
          'Lead the development of a new Umbraco CMS template designed to be fully customizable and configurable for different automotive markets. Also serve as the Lead Backend Engineer for a SaaS deployment platform that streamlines the delivery and management of newly developed CMS websites.',
          'Guide and mentor junior engineers in developing CMS websites for globally recognized automotive brands. Promote a strong engineering culture by encouraging the team to follow the Software Development Life Cycle (SDLC), apply proven software design principles, maintain high coding standards, and participate in peer code reviews.',
          'Maintain legacy websites and improve their performance, scalability, and maintainability by modernizing their architecture and redesigning existing implementations.',
        ],
        skills: ['.NET Core', 'C# 8', 'Umbraco 13', 'MVC', 'Tailwind CSS', 'Vanilla JS', 'Azure', 'React', 'Vite'],
      },
    ],
  },
  {
    organization: 'Global Health Limited',
    location: 'Melbourne, VIC, Australia',
    kind: 'work',
    roles: [
      {
        title: 'L3 Support Engineer / Full Stack .NET Developer',
        employmentType: 'Contract',
        period: 'Oct 2022 — Sep 2024',
        description: [
          'Supported and enhanced enterprise SaaS healthcare applications used by healthcare organizations across Australia. Investigated and resolved complex application defects and production incidents, performed root-cause analysis, and implemented reliable solutions to improve system stability and performance.',
          'Designed and developed new features across the application stack while following established software engineering practices and the SDLC. Collaborated with cross-functional teams through technical design reviews, peer code reviews, testing, and controlled releases to ensure each solution was secure, maintainable, and production-ready.',
        ],
        skills: ['ASP.NET Core', 'MVC', 'Kendo UI', 'Knockout.js', 'Vanilla JS'],
      },
    ],
  },
  {
    organization: 'University of Nueva Caceres',
    headline: 'Software Developer',
    tenure: '8 yrs 1 mo',
    location: 'Naga, Bicol Region, Philippines',
    kind: 'work',
    roles: [
      {
        title: 'Technical Consultant',
        employmentType: 'Part-time',
        period: 'Oct 2022 — Jun 2025',
        duration: '2 yrs 9 mos',
        workMode: 'Hybrid',
        description: [
          'Provided ongoing technical consultation, maintenance, and support for all applications developed during my tenure at the university. Ensured that each system remained reliable, secure, and aligned with evolving operational requirements.',
          'Investigated and resolved technical issues, implemented system enhancements, optimized application performance, and supported integrations with existing and third-party systems. Collaborated with university departments to assess new requirements, recommend practical solutions, and maintain the long-term stability and usability of business-critical applications.',
        ],
      },
      {
        title: 'Programmer',
        employmentType: 'Full-time',
        period: 'Jun 2019 — Oct 2022',
        duration: '3 yrs 5 mos',
        description: [
          'Designed, developed, and maintained business-critical applications that supported key university operations. These included an HR biometric attendance system for monitoring employee time records and an RFID-based identification system with automated SMS notifications, helping improve operational efficiency and communication across the university.',
          'Pioneered the modernization of the university’s legacy LAN-based enrollment system by transforming it into an accessible Online Enrollment System. Implemented third-party integrations to extend the platform’s capabilities and support a more efficient enrollment experience for students and university personnel.',
          'Participated throughout the software development lifecycle, including requirements analysis, system design, development, testing, deployment, troubleshooting, and ongoing application support. Collaborated with university departments to understand their processes and deliver practical software solutions aligned with their operational needs.',
        ],
        skills: ['Web Forms', 'MS SQL', 'C#', 'Dapper ORM', 'JavaScript', 'Bootstrap', 'CSS', 'HTML'],
      },
      {
        title: 'Junior Programmer',
        employmentType: 'Full-time',
        period: 'Jun 2017 — Jun 2019',
        duration: '2 yrs 1 mo',
        description: [
          'Supported the installation, configuration, and maintenance of legacy applications used during university enrollment periods.',
          'Modernized a LAN-based application into a web application for the University Guidance Office, improving the accessibility and management of student information records.',
        ],
        skills: ['WebForms', 'WinForms', 'MS SQL', 'VB.NET', 'JavaScript', 'CSS', 'HTML'],
      },
    ],
  },
  {    
    organization: 'University of Nueva Caceres',
    location: 'Naga, Bicol Region, Philippines',
    kind: 'education',
    roles: [
      {
        title: 'B.S. in Computer Science',
        period: '2014 — 2017',        
      },
    ],
  },
];
