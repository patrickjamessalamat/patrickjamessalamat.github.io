// Description strings are rendered with set:html, so they may contain inline
// markup — <a>, <strong>, <em>. Anchors pick up the global accent styling.
// They are NOT escaped, so write a literal < or & as &lt; / &amp;.

// A sub-project inside a grouped entry, e.g. one client site under "CMS Projects".
export interface ProjectItem {
  name: string;
  description: string[]; // one string per paragraph; may contain inline HTML
  tags?: string[]; // narrows the parent entry's tags for this sub-project
  demoUrl?: string; // the sub-project's own live site; makes its name a link
  repoUrl?: string; // rendered as a "Source" link beside the name
  visibility?: 'Web' | 'Desktop'; // badge beside the name; omit to inherit the parent entry's
}

export interface Project {
  title: string;
  description?: string[]; // one string per paragraph, may contain inline HTML; omit on grouped entries that lead with items
  items?: ProjectItem[]; // sub-projects: names only on the pinned card, full detail on the Projects page
  language: string; // shown with a colored dot, like GitHub's repo language
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  pinned?: boolean; // pinned projects also appear on the Overview page
  visibility?: 'Web' | 'Desktop'; // repo visibility badge; defaults to Public
}

// GitHub's language colors, shared by the pinned cards and the Projects page
export const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572a5',
  Astro: '#ff5a03',
  HTML: '#e34c26',
  CSS: '#663399',
  Go: '#00add8',
  Rust: '#dea584',
  // Not a GitHub language — React's own brand cyan
  React: '#61dafb',
  // .NET family — GitHub's C# green
  'C#': '#178600',
  'ASP.NET': '#178600',
  'VB.NET': '#178600',
  'F#': '#178600',
  '.NET': '#178600',
};

// TODO: replace with your real projects
export const projects: Project[] = [
  {
    title: 'DXP+ Control Panel',
    visibility: 'Web',
    description: [
      'A SaaS-based deployment platform designed to initiate and manage the automated deployment of CMS websites and other digital products across the organization. It centralizes deployment workflows, reduces manual processes, and provides a more consistent and efficient approach to delivering digital solutions across different markets.',
      'Served as the Lead Backend Engineer, responsible for designing and implementing the platform’s backend architecture, APIs, core business logic, and deployment workflows. Collaborated with cross-functional teams to translate operational requirements into scalable and maintainable technical solutions while promoting established coding standards, design principles, peer code reviews, and software development best practices.',
    ],
    language: 'React',
    tags: ['c#', 'ms sql', 'postgresql', 'ef core', 'react', 'typescript', 'rest api', 'saas', 'docker', 'azure', 'aks'],
    demoUrl: '#',
  },
  {
    title: 'CMS Projects',
    description: [
      'A collection of CMS websites developed for automotive brands across different markets. These projects were built using a reusable, component-based architecture and a highly configurable Umbraco CMS template that enables development teams and content editors to create and manage branded websites efficiently while maintaining consistency across different markets.',
    ],
    demoUrl: '#',
    visibility: 'Web',
    items: [
      {
        name: 'CMS Global Template 2.0',
        description: [
          'Led the development and re-engineering of the project’s overall architecture and implementation, establishing a more scalable, maintainable, and reusable foundation that received strong approval from the Product Owner.',
          'Built a highly configurable Umbraco CMS template with reusable components, predefined page templates, flexible content structures, and market-specific configurations aligned with individual brand guidelines. The solution enables development teams and content editors to create and manage branded websites efficiently while maintaining consistency across different markets.',
          'Utilized the CMS framework’s built-in form capabilities to simplify form creation, field configuration, validation, and lead-data mapping. Integrated these forms with the appropriate market CRM, enabling captured leads to be processed and routed according to each market’s requirements.',
          'Deployed Projects: <a href="https://www.xpeng.com/fi" target="_blank" rel="noopener noreferrer">Xpeng Finland</a> | <a href="https://www.bydauto.be/en/" target="_blank" rel="noopener noreferrer">BYD Belgium</a> | <a href="https://www.bydauto.lu/" target="_blank" rel="noopener noreferrer">BYD Luxembourg</a>'
        ],
        demoUrl: 'https://dxp-motors-ph.dev.dxp.globalinchcapedigital.com/',
      },
      {
        name: 'Mercedes Benz Indonesia',
        description: [
          'Led the development of the project and introduced a new implementation that was later incorporated as a feature of CMS Global Template 1.3. Engineered a lead-notification service with customizable email templates and integrated it with the company’s in-house Salesforce CRM.',
        ],
        demoUrl: 'https://www.mercedes-benz.co.id/en/',
      },
      {
        name: 'IM Used Cars HK / Lexus HK / BYD EE',
        description: [
          'Continuously enhanced and maintained these CMS websites by implementing market-requested features and improvements. Provided hypercare support by investigating and resolving production issues to maintain system reliability and a consistent user experience.',
        ],
        demoUrl: 'https://www.lexus.com.hk/en/',
      },
      {
        name: 'Deepal Australia / Foton Australia',
        description: [
          'Developed CMS websites for Deepal Australia and Foton Australia using CMS Global Template 1.3. Integrated the websites with a client-provided vehicle-pricing API to comply with government-regulated pricing requirements. Improved the user experience across both the customer-facing website and CMS back office, and integrated lead-capture workflows with the company’s in-house Salesforce CRM.',
        ],
        demoUrl: 'https://www.deepal.com.au/',
      },
      {
        name: 'Maxus Hong Kong',
        description: [
          'My first project implemented using CMS Global Template 1.3. Migrated the legacy website to the new template and adopted a reusable, component-based architecture. Improved the user experience across the front end and CMS back office while integrating lead-capture workflows with the company’s in-house Salesforce CRM.',
        ],
        demoUrl: 'https://www.maxus.com.hk/en/',
      },
      {
        name: 'LDV New Zealand',
        description: [
          'Led the development of a CMS website for LDV New Zealand. Engineered the website using a reusable, component-based architecture built with Razor views and Tailwind CSS. Integrated the platform with AutoPlay CRM to support lead capture and management.',
        ],
        demoUrl: 'https://ldv.co.nz/',
      },
      {
        name: 'KGM New Zealand',
        description: [
          'My first CMS website project, developed for KGM New Zealand using a component-based architecture, Razor views, and Tailwind CSS. Improved performance and maintainability by introducing a modern, structured implementation while resolving SEO issues and security vulnerabilities. Integrated the website with AutoPlay CRM for lead capture and management.',
        ],
        demoUrl: 'https://www.kgm.co.nz/',
      },
    ],    
    language: 'C#',
    tags: ['umbraco', 'c#', 'mvc',  'ef core', 'jquery', 'tailwind', 'vanilla.js', 'azure', 'aks', 'docker', 'css', 'html', 'javascript'],
    pinned: true,
  },
  {
    title: 'MasterCare+ AU',
    visibility: 'Web',
    description: [
      'A cloud-based SaaS healthcare platform that supports electronic medical records, patient management, appointments, referrals, clinical documentation, secure messaging, and regulatory reporting for healthcare organizations across Australia.',
      'Contributed as an L3 Support Engineer and Full-Stack .NET Developer by investigating complex application defects, resolving production incidents, performing root-cause analysis, and implementing reliable solutions to improve system stability and performance.',
      'Developed new features across the application stack while following the SDLC, technical design reviews, peer code reviews, testing, and controlled production releases.',
    ],
    language: 'C#',
    tags: ['c#', 'java', 'ms sql', 'nhibernate', 'redis', 'mvc',  'rest api', 'soap api', 'kendo ui', 'knockout.js', 'vue.js', 'saas', 'healthcare'],    
    demoUrl: 'https://www.master-care.com.au/plus/',
    pinned: true,
  },
  {
    title: 'UNC OES: Online Enrollment System',
    visibility: 'Web',
    description: [
      'An end-to-end, web-based enrollment platform developed by modernizing the university’s legacy LAN-based enrollment system. It provides students with a self-service enrollment experience—from admission and application processing to subject enrollment, payment, and official university registration.',
      'The platform integrates with payment gateways, CRM services, and other third-party systems to automate data exchange and support the complete enrollment workflow.',
      'Its centralized architecture enables students and university personnel to access enrollment services online while improving operational efficiency, accessibility, and data consistency across departments.',
    ],
    language: 'C#',
    tags: ['c#', 'ms sql', 'web forms', 'dapper orm', 'rest api', 'salesforce', 'saas'],    
    demoUrl: 'https://oes.unc.edu.ph/OES/Enrollment/Register.aspx',
    pinned: true,
  },
  {
    title: 'GEMS: Gate Entry Monitoring System',
    visibility: 'Desktop',
    description: [
      'An offline-first desktop access monitoring system integrated with RFID technology to record the entry and exit of students and employees across university gates.',
      'It validates identification records, captures time-stamped access events, and stores transactions locally, allowing gate operations to continue even when network connectivity is unavailable.',
      'The system also integrates with an SMS notification service to inform parents or guardians of student gate activity and provides reporting capabilities for monitoring campus traffic volume and access patterns.',
    ],
    language: 'C#',
    tags: ['c#', 'win forms', 'ms sql', 'sqlite', 'rfid', 'dapper orm', 'sms api'],
    demoUrl: '#',
  },
  {
    title: 'PATS 2.0: Personal Attendance Tracking System',
    visibility: 'Desktop',
    description: [
      'A desktop-based attendance management system integrated with fingerprint biometric devices for employee identity verification and timestamp capture.',
      'The application processes biometric attendance logs, associates them with employee records, and stores the results in a centralized database for attendance monitoring and reporting.',
      'It automates time-record collection while improving the accuracy, consistency, and reliability of university employee attendance data.',
    ],
    language: 'C#',
    tags: ['c#', 'win forms', 'ms sql', 'dapper orm', 'biometric', 'fingerprint', 'attendance'],
    demoUrl: '#',
  },
  {
    title: 'SII: Student Individual Inventory',
    visibility: 'Web',
    description: [
      'A web application integrated with the university portal that enables students to update and maintain their personal records for college guidance and student support purposes.',
      'It provides guidance offices with accurate, up-to-date information through a centralized platform.',
    ],
    language: 'ASP.NET',
    tags: ['web forms', 'vb.net', 'html', 'css', 'bootstrap', 'javascript'],
    demoUrl: 'https://my.unc.edu.ph/Login',
  },
];

// Total shown by the nav tab, the Projects page header, and the Overview
// heading. A grouped entry counts as its sub-projects, not as one container.
export const projectCount = projects.reduce(
  (total, project) => total + (project.items?.length ?? 1),
  0,
);
