export interface Project {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  image?: string; // path under public/images/
}

// TODO: replace with your real projects
export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description:
      'This site — a fast, zero-JS static portfolio built with Astro and deployed to GitHub Pages via GitHub Actions.',
    tags: ['Astro', 'TypeScript', 'GitHub Actions'],
    repoUrl: 'https://github.com/patrickjamessalamat/my-portfolio-app',
    demoUrl: 'https://patrickjamessalamat.github.io/my-portfolio-app/',
  },
  {
    title: 'AI Chat Assistant',
    description:
      'A conversational assistant that answers questions over custom documents using retrieval-augmented generation.',
    tags: ['Python', 'FastAPI', 'LLM', 'RAG'],
    repoUrl: 'https://github.com/patrickjamessalamat',
  },
  {
    title: 'Task Manager App',
    description:
      'A full-stack task management app with authentication, real-time updates, and a clean drag-and-drop interface.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    repoUrl: 'https://github.com/patrickjamessalamat',
  },
];
