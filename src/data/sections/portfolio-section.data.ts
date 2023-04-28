import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import {
  apolloGraphql,
  bootstrap,
  expressJs,
  fastApi,
  flutter,
  laravel,
  materialDesign,
  sql,
  nextJs,
  nodeJs,
  postgreSql,
  prisma,
  python,
  sass,
  tailwindCss,
  vercel,
} from '../helpers/skills';
import { mongoDb } from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'FooDeli',
      image: import('@/assets/portfolio/wip-logo.png'),
      dates: [new Date('2023-01'), null],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Fullstack Developer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web app', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/golden-bulls', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Third screenshot' },
      ],
      description:
        'Food delivery system that uses MERN stack. Consists of role of Admin(Business Admin, Finance), Customer(User) and Vendor.',
      tagsList: {
        title: 'Technologies',
        tags: [nextJs(), sass(), materialDesign(), nodeJs(), expressJs(), mongoDb(), apolloGraphql()],
      },
      links: [mockups({ url: '#' }), demo({ url: '#' })],
    },
    {
      name: 'SemesterSell',
      image: import('@/assets/portfolio/wip-logo.png'),
      dates: [new Date('2023-01'), null],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Fullstack developer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web app'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://tru-quest-ck7ea3.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/tru-quest', url: '#' },
      ],
      description:
        'A marketplace specifically made for university/college students who want to buy or sell their used books.',
      tagsList: {
        title: 'Technologies',
        tags: [nextJs(), tailwindCss(), nodeJs(), expressJs(), prisma(), postgreSql()],
      },
      links: [mockups({ url: '#' }), demo({ url: '#' }), github({ url: 'https://github.com/ajeeq/foodeli' })],
    },
    {
      name: 'UiTM Scheduler',
      image: import('@/assets/portfolio/us-logo.png'),
      dates: [new Date('2021-09'), null],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Front-end Developer', 'Designer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Mobile app', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://software-chasers-e82l8e.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/software-chasers', url: '#' },
      ],
      description: `
      • This app can collect list of course requested by user and provide the details of each course such as campus/faculty name, course name, group, start time, end time, day, mode, status, and room/class.
      • Built a Flutter-powered mobile application that can generate a vertical class timetable for UiTM students based on their campus or faculty, course name and group.
      • Developed a functionality which the app can detect the clashed course time in the timetable.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [flutter()],
      },
      links: [
        website({ name: 'Privacy Policy', url: '/uitmscheduler/uitmschedprivpol', icon: 'fa6-solid:lock' }), 
        website({ name: 'Terms and Conditions', url: '/uitmscheduler/uitmschedtnc', icon: 'fa6-solid:file-lines' }), 
        github({ url: 'https://github.com/ajeeq/uitmscheduler' })
      ],
    },
    {
      name: 'i-CRESS Scraper (Discontinued)',
      image: import('@/assets/portfolio/nodejs-logo.png'),
      dates: [new Date('2020-12'), new Date('2022-12')],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: 'Backend developer' },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Backend app'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://disco-ninjas-g321ol.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/disco-ninjas', url: '#' },
      ],
      description:
        'A Node.js appplication server that is capable to scrape UITM i-CRESS timetable data such as campus name, faculty name, course code, group/class, start/end time, day, mode, status and room/lab from i-CRESS website based on input given (campus/faculty name, course code and group/class). Discontinued due to some reason.',
      tagsList: {
        title: 'Technologies',
        tags: [nodeJs(), vercel()],
      },
      links: [mockups({ url: '#' }), github({ url: '#' })],
    },
    {
      name: 'Product Purchasing Analysis Using FP-Growth Algorithm',
      image: import('@/assets/portfolio/uitm-logo.png'),
      dates: [new Date('2022-03'), new Date('2022-08')],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: 'Fullstack developer' },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web app', 'Big data'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://disco-ninjas-g321ol.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/disco-ninjas', url: '#' },
      ],
      description: `• Bachelor's Degree Final Year Project
        • Built a web-based system that has the functionality to analyze the product purchasing patterns using Next.JS and FastAPI (Python).
        • Created a feature which the system generates the dataset analysis result in form of bar graph visualization.
        • Provided better decision making for marketing personnel to increase sales at a retail store using the Frequent Pattern-Growth Algorithm.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [nextJs(), bootstrap(), python(), fastApi()],
      },
      links: [mockups({ url: '#' }), github({ url: '#' })],
    },
    {
      name: 'HiroDeli Vendor Signup',
      image: import('@/assets/portfolio/hirodeli-logo.png'),
      dates: [new Date('2020-08'), new Date('2020-09')],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: 'Frontend developer' },
        { label: 'Company', value: 'HiroDeli' },
        { label: 'Category', value: ['Web app'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://disco-ninjas-g321ol.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/disco-ninjas', url: '#' },
      ],
      description: `A website that served a vendor registration form for HiroDeli.`,
      tagsList: {
        title: 'Technologies',
        tags: [nextJs(), vercel()],
      },
      links: [mockups({ url: '#' }), github({ url: '#' })],
    },
    {
      name: 'Asset dan Inventori ICT PERHEBAT (AdIIP)',
      image: import('@/assets/portfolio/perhebat-logo.png'),
      dates: [new Date('2020-01'), new Date('2020-03')],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: 'Software Developer' },
        { label: 'Company', value: 'Perbadanan Hal Ehwal Bekas Angkatan Tentera (PERHEBAT)' },
        { label: 'Category', value: ['Web app'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://disco-ninjas-g321ol.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/disco-ninjas', url: '#' },
      ],
      description: `
        • Built a web-based asset management system using Laravel 6.2 PHP framework and MySQL database that managed in PHPMyAdmin.
        • Hosted the system locally within the organization network in one of computer in Unit Teknologi Maklumat using XAMPP software that runs Apache and SQL server.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [laravel(), sql(), bootstrap()],
      },
      links: [mockups({ url: '#' }), github({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
