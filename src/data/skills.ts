export interface SkillGroup {
  category: string;
  items: string[];
}

// Ordered so the large groups fill the first grid row and the small
// ones share the second (see src/pages/stacks.astro).
export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: [
      'JavaScript',
      'TypeScript',
      'React',
      'Vue.js',
      'Tailwind CSS',
      'Kendo UI',
      'Knockout.js',
      'Vanilla JS',
      'SCSS',
      'Vite',
      'Webpack',
      'ESLint',
      'Prettier',
    ],
  },
  {
    category: 'Backend',
    items: [
      'MS SQL',
      'PostgreSQL',
      'MySQL',
      'C#',
      'VB.NET',
      'VB6',
      'Java',
      'PHP',
      'Laravel',
      'Node.js',
      'REST',
    ],
  },
  {
    category: 'Developer Tools',
    items: [
      'Git',
      'GitHub',
      'GitLab',
      'Bitbucket',
      'VS Code',
      'Visual Studio',
      'Enterprise Architect',
      'Teams',
      'JIRA',
      'Figma',
      'Postman',      
    ],
  },
  {
    category: 'AI Engineering',
    items: ['Claude Code', 'Codex', 'GitHub Copilot', 'OpenAI', 'Anthropic'],
  },
  {
    category: 'DevOps & Cloud',
    items: ['Azure', 'GitHub Actions', 'Docker'],
  },
  {
    category: 'CMS',
    items: ['Umbraco', 'WordPress'],
  },
];
