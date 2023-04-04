import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Bachelor of Computer Science (Hons.)',
      institution: 'Universiti Teknologi MARA',
      image: import('@/assets/logos/uitm-logo.png'),
      dates: [new Date('2020.10'), new Date('2023.03')],
      description: "Bachelor's degree.",
      links: [website({ url: '#' })],
    },
    {
      title: 'Diploma in Computer Science',
      institution: 'Universiti Teknologi MARA',
      image: import('@/assets/logos/uitm-logo.png'),
      dates: [new Date('2017.6'), new Date('2020.07')],
      description: "Diploma.",
      links: [website({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
