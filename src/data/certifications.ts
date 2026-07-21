// Trainings and certifications, split the same way experience.ts splits work
// from education: one `kind` field, one section per kind on the page.
// The page mirrors LinkedIn's "Licenses & certifications" layout.
export interface Credential {
  name: string;
  issuer?: string; // issuing organization; omit for trainings with no named provider
  issued: string; // "Jan 2025" for credentials, or a range like "May 20–24, 2019"
  expires?: string; // omit for credentials that do not expire
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
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    issued: 'Jun 2025',
    expires: 'Dec 2025',
    credentialId: '6155F6689B55C729',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7344179116264386560/',
    // skills: ['Microsoft Azure', 'Cloud Computing'],
    certificate: {
      label: 'Microsoft Certified: Azure Fundamentals',
      src: 'images/certificates/microsoft-azure-fundamentals.jpg',
    },
    kind: 'certification',
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'The Knowledge Academy',
    issued: 'Jan 2025',
    certificate: {
      label: 'Certificate of Completion - AZ 900',
      src: 'images/certificates/knowledge-academy-az900.jpg',
    },
    kind: 'certification',
  },
  {
    name: 'Microsoft Windows Server 2016 Training',
    issued: 'May 20–24, 2019',
    location: 'Burgundy Empire Tower, Pasig City',
    courses: [
      'Installation, Storage and Compute with Windows Server 2016',
      'Networking with Windows Server 2016',
      'Identity with Windows Server 2016',
    ],
    kind: 'training',
  },
  {
    name: 'Cisco Certified Network Associate V3 200-125 Training',
    issued: 'June 10–14, 2019',
    location: 'Burgundy Empire Tower, Pasig City',
    kind: 'training',
  },
  {
    name: 'Penetration Testing with Ethical Hacking Training',
    issued: 'June 10–14, 2019',
    location: 'Burgundy Empire Tower, Pasig City',
    kind: 'training',
  },
];
