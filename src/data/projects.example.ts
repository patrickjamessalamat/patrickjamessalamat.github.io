// Template for src/data/projects.ts — copy this over that file and fill it in.

// Description strings are rendered with set:html, so they may contain inline
// markup — <a>, <strong>, <em>. They are NOT escaped, so write a literal
// < or & as &lt; / &amp;.

// A sub-project inside a grouped entry, e.g. one client site under "Client Work".
export interface ProjectItem {
  name: string;
  description: string[]; // one string per paragraph; may contain inline HTML
  tags?: string[];
  demoUrl?: string; // makes the sub-project name a link
  repoUrl?: string; // rendered as a "Source" link beside the name
  visibility?: 'Web' | 'Desktop';
}

export interface Project {
  title: string;
  description?: string[]; // omit on grouped entries that lead with items
  items?: ProjectItem[]; // sub-projects: names only on the pinned card, full detail on the Projects page
  language: string; // shown with a colored dot, like GitHub's repo language
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  pinned?: boolean; // pinned projects also appear on the Overview page
  visibility?: 'Web' | 'Desktop';
}

// GitHub's language colors, shared by the pinned cards and the Projects page.
export const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572a5',
  Astro: '#ff5a03',
  HTML: '#e34c26',
  CSS: '#663399',
  Go: '#00add8',
  Rust: '#dea584',
  React: '#61dafb',
  'C#': '#178600',
};

export const projects: Project[] = [
  {
    title: 'A Standalone Project',
    visibility: 'Web',
    description: [
      'What the project is and who it serves.',
      'What you specifically contributed, and the outcome.',
    ],
    language: 'TypeScript',
    tags: ['typescript', 'react', 'postgresql'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/your-github-handle/example',
    pinned: true,
  },
  {
    // A grouped entry: the card lists sub-project names, the Projects page
    // shows each one in full with a nested timeline.
    title: 'Grouped Work',
    visibility: 'Web',
    description: ['One sentence framing the group as a whole.'],
    items: [
      {
        name: 'First Sub-Project',
        description: ['What you built and why it mattered.'],
        demoUrl: 'https://example.com',
      },
      {
        name: 'Second Sub-Project',
        description: ['Another one.'],
      },
    ],
    language: 'C#',
    tags: ['c#', 'azure'],
    pinned: true,
  },
];

// Total shown by the nav tab, the Projects page header, and the Overview
// heading. A grouped entry counts as its sub-projects, not as one container.
export const projectCount = projects.reduce(
  (total, project) => total + (project.items?.length ?? 1),
  0,
);
