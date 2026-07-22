// Template for src/data/skills.ts — copy this over that file and fill it in.
export interface SkillGroup {
  category: string;
  items: string[];
}

// Ordered so the large groups fill the first grid row and the small
// ones share the second (see src/pages/stacks.astro).
export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'PostgreSQL', 'REST', 'Redis'],
  },
  {
    category: 'Developer Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    category: 'DevOps & Cloud',
    items: ['Docker', 'GitHub Actions'],
  },
];
