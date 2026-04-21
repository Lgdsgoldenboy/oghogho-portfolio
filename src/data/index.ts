import type { Project, Experience, Qualification, WritingItem, Stat, FactRow, SkillColumn, ContactLink } from '../types';

export const stats: Stat[] = [
  { value: '2+', label: 'YRS EXPERIENCE' },
  { value: '7+', label: 'PROJECTS SHIPPED' },
  { value: '1K+', label: 'COMMUNITY MEMBERS' },
  { value: '1', label: 'PUBLISHED BOOK' },
];

export const projects: Project[] = [
  {
    id: 'ox-lms',
    index: '001 / 008',
    name: 'OX LMS',
    year: '2025 — Present',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'LMS Platform'],
    desc: 'Learning management system for iQube.ox Tech Community. Sole frontend engineer — translated product designs into responsive, production-ready interfaces ensuring high design accuracy and performance.',
    link: 'https://ox.iqubelabs.com/',
    linkLabel: 'View live',
    image: '/OX.png',
  },
  {
    id: '85gifts',
    index: '002 / 008',
    name: '85gifts.com',
    year: '2025 — Present',
    tags: ['React.js', 'Firebase', 'Tailwind CSS', 'E-commerce'],
    desc: 'Core feature engineering for a gifting platform. Built responsive UIs with React, Tailwind, and Firebase, optimised for performance and scalability. Collaborated cross-functionally with media teams.',
    link: 'https://85gifts.com',
    linkLabel: 'View live',
    image: '/85gifts.png',
  },
 {
  id: 'chatter',
  index: '003 / 008',
  name: 'ChatterVerse',
  year: '2023',
  tags: ['Next.js', 'Firebase', 'Full Stack', 'Auth'],
  desc: 'Full-stack blogging platform where authors create and readers explore rich text-based content. Built with Next.js and Firebase auth, featuring a personalized feed, dashboard, content moderation, and real-time analytics.',
  link: 'https://chatter-verse-og.vercel.app/',
  linkLabel: 'View live',
  image: '/ChatterVerse.png',
},
  {
    id: 'get-aid',
    index: '004 / 008',
    name: 'Get Aid',
    year: '2023',
    tags: ['React.js', 'API integration', 'Healthcare'],
    desc: 'A carefinder web application connecting users with healthcare facilities. Built with React and external API integration to help Nigerians find medical care near them.',
    link: 'https://carefinder--five.vercel.app/',
    linkLabel: 'View project',
    image: '/Get-Aid.png',
  },
  {
    id: 'github-search',
    index: '005 / 008',
    name: 'GitHub Search',
    year: '2023',
    tags: ['React.js', 'GitHub API', 'Search UX'],
    desc: 'A simple yet polished web app for searching GitHub profiles. Users can look up any GitHub username and instantly view repositories, followers, and profile information.',
    link: 'https://my-github-repo-ten.vercel.app/home',
    linkLabel: 'View project',
    image: '/Github-search.png',
  },
  {
    id: 'tech-care',
    index: '006 / 008',
    name: 'Tech-Care Dashboard',
    year: '2024',
    tags: ['React.js', 'Figma → Code', 'Dashboard UI'],
    desc: 'Pixel-perfect Figma-to-code conversion of a healthcare dashboard. Demonstrates precision in implementing complex UI designs into clean, responsive React code.',
    link: 'https://tech-care-dashboard-cyan.vercel.app/',
    linkLabel: 'View project',
    image: '/Tech-Dashboard.png',
  },
  {
    id: 'valentine',
    index: '007 / 008',
    name: 'Valentine App',
    year: '2024',
    tags: ['React.js', 'CSS Animations', 'Fun'],
    desc: 'A fun, interactive Valentine-themed React application showcasing playful UI design, smooth CSS animations, and creative use of React state management.',
    link: 'https://valentine-react-app-igho.vercel.app/',
    linkLabel: 'View project',
    image: '/Val-App.jpeg',
  },
  {
    id: 'ilike',
    index: '008 / 008',
    name: 'iLike',
    year: '2025 — Present',
    tags: ['React.js', 'TypeScript', 'iQubeLabs', 'Social Platform'],
    desc: 'Social platform built at iQubeLabs. Contributing as assistant frontend developer — building and maintaining features, implementing responsive UI components, and collaborating with the core engineering team.',
    link: 'https://staging.ilike.ng/home',
    linkLabel: 'View staging',
    image: '/iLike.png',
  },
];

export const skillColumns: SkillColumn[] = [
  {
    title: 'FRONTEND',
    items: ['React.js', 'TypeScript', 'JavaScript ES6+', 'HTML5 & CSS3', 'Tailwind CSS', 'Vue.js', 'Webflow'],
  },
  {
    title: 'TOOLS & CLOUD',
    items: ['Firebase', 'Git & GitHub', 'GitHub Actions', 'Vite / pnpm', 'Figma', 'API integration'],
  },
  {
    title: 'DATA & QA',
    items: ['Data automation', 'VBA coding', 'Software testing', 'JUnit', 'Technical writing', 'Data entry'],
  },
  {
    title: 'HUMAN',
    items: ['Leadership', 'Team mentorship', 'Agile dev', 'Creative writing', 'Content creation', 'Problem solving'],
  },
];

export const experiences: Experience[] = [
  {
    company: 'iQubeLabs',
    role: 'Frontend Engineering Intern & Learner Mentor',
    desc: 'Leading frontend development of the OX LMS. Primary frontend engineer ensuring high standards for design accuracy, usability, and performance. Also mentoring learners in the iQube.ox community and expanding into backend engineering.',
    date: 'Oct 2025 — Present',
  },
  {
    company: '85gifts',
    role: 'Frontend Engineer & Media Team Member',
    desc: 'Engineered and maintained core features for 85gifts.com. Built responsive UIs with React.js, Tailwind CSS, and Firebase. Collaborated cross-functionally with media and content teams.',
    date: 'Jan 2025 — Present',
  },
  {
    company: 'Independent',
    role: 'Frontend Engineer — Personal Projects',
    desc: 'Led independent frontend engineering projects including the Chatter blogging platform. Built reusable component libraries and demonstrated end-to-end project ownership from design to deployment.',
    date: 'Sep 2023 — Present',
  },
  {
    company: 'HNG',
    role: 'Frontend Engineering Intern',
    desc: 'Completed Level 2 of the HNG Internship program, building frontend features under real-world time constraints and collaborating in large distributed teams.',
    date: '2024',
  },
  {
    company: 'Jovation',
    role: 'Data Analyst Intern',
    desc: 'Performed accurate data entry, generated reports, automated routine tasks, assisted in software testing, and developed technical documentation.',
    date: 'May — Aug 2023',
  },
  {
    company: 'AltSchool Africa',
    role: 'Community Champion & Three-time Circle Lead',
    desc: 'Fostered a vibrant learning environment by leading initiatives, mentoring peers, and facilitating knowledge sharing. Recognised as Top Community Contributor and received an Honourable Mention on Instagram in 2023.',
    date: '2023 — 2024',
  },
];

export const qualifications: Qualification[] = [
  { type: 'CERTIFICATION', name: 'Webflow 102', org: 'Webflow University · May 2025' },
  { type: 'PROGRAMME', name: 'Leadership Program', org: 'Aspire Institute (Harvard Collab) · 2025' },
  { type: 'DIPLOMA', name: 'Frontend Engineering', org: 'AltSchool Africa · 2023–2024' },
  { type: 'AWARD', name: 'Top Contributor', org: 'AltSchool Africa Slack · 2023' },
  { type: 'AWARD', name: 'Honourable Mention', org: 'AltSchool Africa Instagram · 2023' },
  { type: 'DEGREE', name: 'Performing Arts (BA)', org: 'Delta State University · 2016–2020' },
];

export const writingItems: WritingItem[] = [
  {
    type: 'BOOK · 2023',
    title: 'Echoes of an Untold Mind',
    desc: 'A published work exploring inner worlds through creative prose and poetry. Available on Amazon and major platforms.',
    link: 'https://mybook.to/hQ6Xcl',
  },
  {
    type: 'COMMUNITY',
    title: 'AltSchool Top Contributor',
    desc: 'Active knowledge sharing, mentorship threads, and peer-to-peer learning resources contributed to a 1,000+ member tech community on Slack.',
  },
  {
    type: 'COMING SOON ↗',
    title: 'Dev Blog',
    desc: 'Thoughts on frontend engineering, building scalable products, and navigating tech from Nigeria. Topics: React patterns, Firebase architecture, remote work tips for African devs.',
  },
];

export const facts: FactRow[] = [
  { key: 'Location', value: 'Warri / Lagos, Nigeria' },
  { key: 'Availability', value: 'Open to remote work', isGreen: true },
  { key: 'Email', value: 'oghoghoorieno@gmail.com', href: 'mailto:oghoghoorieno@gmail.com' },
  { key: 'Phone', value: '+234 802 830 6270', href: 'tel:+2348028306270' },
  { key: 'Current role', value: 'Frontend Intern, iQubeLabs' },
  { key: 'Publication', value: 'Echoes of an Untold Mind ↗', href: 'https://mybook.to/hQ6Xcl' },
];

export const contactLinks: ContactLink[] = [
  { label: 'oghoghoorieno@gmail.com', href: 'mailto:oghoghoorieno@gmail.com', symbol: '→' },
  { label: '+234 802 830 6270', href: 'tel:+2348028306270', symbol: '→' },
  { label: 'GitHub', href: 'https://github.com', symbol: '↗' },
  { label: 'LinkedIn', href: 'https://linkedin.com', symbol: '↗' },
  { label: 'X / Twitter', href: 'https://twitter.com', symbol: '↗' },
  { label: 'Download CV', href: '/Oghogho Paul Orieno - FULL CV (1) update.pdf', symbol: '↓' },
];

export const tickerItems = [
  'FRONTEND ENGINEER',
  'REACT · TYPESCRIPT · FIREBASE',
  'PUBLISHED AUTHOR',
  'OPEN TO REMOTE WORK',
  'WARRI · LAGOS · NIGERIA',
  'ALTSCHOOL TOP CONTRIBUTOR',
  'WEBFLOW CERTIFIED',
  'ASPIRE INSTITUTE ALUMNI',
];