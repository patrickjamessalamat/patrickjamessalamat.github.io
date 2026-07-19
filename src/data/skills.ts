export interface SkillGroup {
  category: string;
  items: string[];
}

// TODO: adjust to your real skill set
export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Node.js', 'Astro', 'FastAPI', 'Express'],
  },
  {
    category: 'AI Engineering',
    items: ['LLM APIs', 'RAG', 'Prompt Engineering', 'LangChain'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub Actions', 'Docker', 'PostgreSQL', 'Vercel', 'Cloudflare'],
  },
];
