export interface ExperienceEntry {
  title: string;
  organization: string;
  period: string;
  description: string;
  kind: 'work' | 'education';
}

// TODO: replace with your real experience and education
export const experience: ExperienceEntry[] = [
  {
    title: 'Software Engineer',
    organization: 'Your Company',
    period: '2024 — Present',
    description:
      'Building web applications and AI-powered tools. Replace this with a short summary of what you do and your impact.',
    kind: 'work',
  },
  {
    title: 'Freelance Developer',
    organization: 'Self-employed',
    period: '2022 — 2024',
    description:
      'Delivered websites and automation tools for small businesses. Replace with your own highlights.',
    kind: 'work',
  },
  {
    title: 'B.S. in Computer Science',
    organization: 'Your University',
    period: '2018 — 2022',
    description: 'Replace with your degree, school, and any honors or notable coursework.',
    kind: 'education',
  },
];
