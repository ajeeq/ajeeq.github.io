import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  apolloGraphql,
  bootstrap,
  css3,
  expressJs,
  flutter,
  github,
  html5,
  java,
  javascript,
  laravel,
  mongoDb,
  nextJs,
  nodeJs,
  php,
  postgreSql,
  postman,
  python,
  react,
  restApi,
  sass,
  sql,
  tailwindCss,
  terminal,
  vscode,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'Programming languages',
      skills: [
        javascript({
          level: 4,
          description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        }),
        java({ level: 4 }),
        php({ level: 4 }),
        sql({ level: 4 }),
        python({ level: 2 }),
      ],
    },
    {
      title: 'Tools',
      skills: [
        github({
          level: 4,
          description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        }),
        vscode({
          level: 4,
          description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        }),
        postman({
          level: 4,
          description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        }),
        terminal({ name: 'Windows CMD/Linux Terminal', level: 4 }),
      ],
    },
    {
      title: 'Web technologies and frameworks',
      skills: [
        react({
          level: 4,
          description:
            'Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut.',
        }),
        nextJs({
          level: 4,
          description:
            'Praesent feugiat ultricies iaculis. In posuere vehicula odio, sed consequat velit porta viverra.',
        }),
        expressJs({
          level: 4,
        }),
        nodeJs({
          level: 4,
        }),
        html5({
          level: 6,
        }),
        css3({
          level: 4,
        }),
        sass({
          level: 2,
          description: 'Nulla interdum pellentesque ultricies. Ut id eros commodo, ultrices ligula eu, elementum ante.',
        }),
        bootstrap({
          level: 4,
          description: 'Nulla interdum pellentesque ultricies. Ut id eros commodo, ultrices ligula eu, elementum ante.',
        }),
        tailwindCss({ level: 2 }),
        laravel({ level: 2 }),
        restApi({ level: 4 }),
        mongoDb({ level: 2 }),
        postgreSql({ level: 2 }),
        apolloGraphql({ level: 2 }),
        flutter({ name: 'Dart/Flutter', level: 4 }),
      ],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:my', name: 'Malay - fluent' },
        { icon: 'circle-flags:us', name: 'English - intermediate' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
