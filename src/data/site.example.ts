// Template for src/data/site.ts — copy this over that file and fill it in.
export const site = {
  name: 'Your Name',
  handle: 'your-github-handle',
  role: 'Your Job Title',
  tagline: 'One line about what you build. Doubles as the meta description, so keep it under ~160 characters.',
  bio: [
    'First paragraph of your README intro. One string per paragraph; inline HTML is allowed.',
    'Second paragraph — what you are working on now.',
  ],
  careerStart: '2020-01', // YYYY-MM of your first role; drives the years-of-experience count
  email: 'you@example.com',
  phone: '+00 000 000 0000', // spaces are stripped for the tel: link
  location: 'Your Country',
  socials: [
    { label: 'GitHub', url: 'https://github.com/your-github-handle' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/your-profile/' },
  ],
  // Leave both empty to ship no analytics and no verification tag.
  analyticsId: '', // GA4 measurement ID, e.g. 'G-XXXXXXXXXX'
  googleSiteVerification: '', // Search Console HTML-tag token (the content value only)
  resumeFile: 'resume.pdf', // lives in public/
  avatar: 'images/profile.png', // also the source for the generated favicon
};
