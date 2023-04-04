import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';
import {
  flutter,
  javascript,
  laravel,
  materialDesign,
  nextJs,
  nodeJs,
  php,
  postman,
  sass,
  restApi,
  vercel,
  wordpress,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Mobile App Developer',
      company: 'None',
      image: import('@/assets/logos/us-logo.png'),
      dates: [new Date('2020-09'), null],
      description: `
        • Self-learned the Dart language and Flutter mobile application framework.
        • Built a mobile app called UiTM Scheduler which generates student's course timetable. 
        • Published UiTM Scheduler to Google Play Store and it is downloaded about more than 1000 times.
      `,
      tagsList: {
        title: 'Skills',
        tags: [flutter()],
      },
      links: [facebook({ url: '#' }), linkedin({ url: '#' })],
    },
    {
      role: 'Internship Trainee',
      company: 'Suruhanjaya Perkhidmatan Awam Malaysia Negeri Pahang (SPANP)',
      image: import('@/assets/logos/spanp-logo.png'),
      dates: [new Date('2022-09'), new Date('2022-12')],
      description: `
        • Underwent an industrial training period as part of Bachelor's Degree program's requirements.
        • Built a module named “Semak Keputusan Panggilan Layak Temu Duga” in a Wordpress-powered SPA Pahang website portal using PHP language.
        • Provided technical support to the organization including hardware and software troubleshooting.
      `,
      tagsList: {
        title: 'Skills',
        tags: [wordpress(), php() ],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
    {
      role: 'Frontend Web Developer',
      company: 'HiroDeli',
      image: import('@/assets/logos/hirodeli-logo.png'),
      dates: [new Date('2020-05'), new Date('2021-03')],
      description: `
        • Assisted the IT Department of HiroDeli Enterprise, a food delivery startup by building a web application using Next.JS and SCSS. 
        • Deployed early prototype of HiroDeli web application to the Vercel cloud platform.
      `,
      tagsList: {
        title: 'Skills',
        tags: [nextJs(), sass(), materialDesign(), javascript(), nodeJs(), restApi(), postman(), vercel()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
    {
      role: 'Internship Trainee',
      company: 'Perbadanan Hal Ehwal Bekas Angkatan Tentera (PERHEBAT)',
      image: import('@/assets/logos/perhebat-logo.png'),
      dates: [new Date('2020-01'), new Date('2020-03')],
      description: `
        • Underwent an internship period as part of Diploma program's requirements.
        • Built a web-based system called “Asset dan Inventori ICT PERHEBAT (AdIIP)” using Laravel PHP framework.
      `,
      tagsList: {
        title: 'Skills',
        tags: [laravel(), php()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
