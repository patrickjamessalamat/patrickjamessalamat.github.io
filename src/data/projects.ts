export interface Project {
  title: string;
  description: string;
  language: string; // shown with a colored dot, like GitHub's repo language
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  pinned?: boolean; // pinned projects also appear on the Overview page
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
};

// TODO: replace with your real projects
export const projects: Project[] = [
  {
    title: 'my-portfolio-app',
    description:
      'This site — a GitHub-profile-style portfolio built with Astro, deployed to GitHub Pages via GitHub Actions.',
    language: 'Astro',
    tags: ['astro', 'typescript', 'github-actions'],
    repoUrl: 'https://github.com/patrickjamessalamat/my-portfolio-app',
    demoUrl: 'https://patrickjamessalamat.github.io/',
    pinned: true,
  },
  {
    title: 'ai-chat-assistant',
    description:
      'A conversational assistant that answers questions over custom documents using retrieval-augmented generation.',
    language: 'Python',
    tags: ['fastapi', 'llm', 'rag'],
    repoUrl: 'https://github.com/patrickjamessalamat',
    pinned: true,
  },
  {
    title: 'task-manager-app',
    description:
      'A full-stack task management app with authentication, real-time updates, and a clean drag-and-drop interface.',
    language: 'TypeScript',
    tags: ['react', 'nodejs', 'postgresql'],
    repoUrl: 'https://github.com/patrickjamessalamat',
    pinned: true,
  },
  {
    title: 'automation-scripts',
    description:
      'A collection of small scripts that automate everyday developer chores — file wrangling, report generation, deployments.',
    language: 'Python',
    tags: ['cli', 'automation'],
    repoUrl: 'https://github.com/patrickjamessalamat',
  },
];
