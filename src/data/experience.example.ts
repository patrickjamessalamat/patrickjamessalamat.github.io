// Template for src/data/experience.ts — copy this over that file and fill it in.

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
  headline?: string; // overarching title for multi-role companies
  tenure?: string; // total time across all roles, e.g. "5 yrs 2 mos"
  location?: string;
  roles: Role[];
  kind: 'work' | 'education';
}

export const experience: ExperienceEntry[] = [
  {
    organization: 'Current Company',
    location: 'City, Country',
    kind: 'work',
    roles: [
      {
        title: 'Your Title',
        employmentType: 'Full-time',
        period: 'Jan 2024 — Present',
        description: [
          'What you own and the impact it has.',
          'A second paragraph if the role has distinct areas.',
        ],
        skills: ['TypeScript', 'React', 'PostgreSQL'],
      },
    ],
  },
  {
    // Multi-role company: renders as a grouped header with a nested timeline.
    organization: 'Previous Company',
    headline: 'Software Developer',
    tenure: '4 yrs',
    location: 'City, Country',
    kind: 'work',
    roles: [
      {
        title: 'Senior Developer',
        employmentType: 'Full-time',
        period: 'Jan 2022 — Dec 2023',
        duration: '2 yrs',
        description: ['What changed after you were promoted.'],
        skills: ['C#', 'Azure'],
      },
      {
        title: 'Developer',
        employmentType: 'Full-time',
        period: 'Jan 2020 — Dec 2021',
        duration: '2 yrs',
        description: ['What you built here.'],
        skills: ['C#', 'MS SQL'],
      },
    ],
  },
  {
    organization: 'Your University',
    location: 'City, Country',
    kind: 'education',
    roles: [
      {
        title: 'B.S. in Computer Science',
        period: '2016 — 2020',
      },
    ],
  },
];
