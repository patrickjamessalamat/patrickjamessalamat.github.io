// Template for src/data/certifications.ts — copy this over that file and fill it in.

// Trainings and certifications, split the same way experience.ts splits work
// from education: one `kind` field, one section per kind on the page.
// The page mirrors LinkedIn's "Licenses & certifications" layout.
export interface Credential {
  name: string;
  issuer?: string; // omit for trainings with no named provider
  issued: string; // "Jan 2025" for credentials, or a range like "May 20–24, 2019"
  expires?: string;
  credentialId?: string;
  url?: string; // renders the "Show credential" button
  courses?: string[]; // modules covered by a multi-part training
  location?: string; // venue, for in-person trainings
  skills?: string[];
  // Certificate thumbnail. Drop the file in public/images/certificates/ and set
  // `src` to its path; until then a placeholder tile renders in its place.
  certificate?: { label: string; src?: string };
  kind: 'certification' | 'training';
}

export const credentials: Credential[] = [
  {
    name: 'Certification Name',
    issuer: 'Issuing Organization',
    issued: 'Jan 2025',
    expires: 'Jan 2028',
    credentialId: 'ABC123',
    url: 'https://example.com/verify',
    skills: ['Cloud', 'Security'],
    certificate: {
      label: 'Certificate title as shown on the file',
      src: 'images/certificates/example.jpg',
    },
    kind: 'certification',
  },
  {
    name: 'Training or Course Name',
    issued: 'May 20–24, 2019',
    location: 'Venue, City',
    courses: [
      'Module one covered by the training',
      'Module two',
    ],
    kind: 'training',
  },
];
