import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpg'),
  fullName: 'Muhammad Haziq',
  role: 'Bachelor of Computer Science Recent Graduate',
  details: [
    // { label: 'Phone', value: '', url: 'tel:' },
    // { label: 'Email', value: '', url: 'mailto:' },
    // { label: 'From', value: ', ' },
    // { label: 'Salary range', value: 'RM - RM' },
  ],
  pdfDetails: [
    // { label: 'Phone', value: '' },
    // { label: 'Email', value: '' },
    { label: 'LinkedIn', value: '/in/mark-freeman', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/mark-freeman', url: 'https://github.com' },
    { label: 'Website', value: 'mark-freeman-personal-website.com', url: '/', fullRow: true },
  ],
  description: `
  As a recent graduate with a Bachelor of Computer Science, I am motivated to apply my skills and knowledge in a professional setting. I am seeking opportunities to work in the technology industry, where I can learn from experienced professionals and gain hands-on experience. I am enthusiastic about staying up-to-date with the latest technologies and trends, and am excited to apply this knowledge to real-world projects. I am a dedicated and hardworking individual, with strong problem-solving skills and a passion for innovation. I am eager to contribute to a dynamic team and make a meaningful impact in the industry.
  `,
  tags: [{ name: 'Open to work' }, { name: 'Working on side project' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Mark_Freeman.pdf',
  },
  links: [github({ url: 'https://github.com/ajeeq' }), linkedin({ url: 'https://www.linkedin.com/in/hazfarjohari/' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
