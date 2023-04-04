import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const bootstrap = createSkillFactory({
  name: 'Bootstrap',
  icon: 'simple-icons:bootstrap',
  iconColor: '#7952B3',
  url: 'https://getbootstrap.com/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const css3 = createSkillFactory({
  name: 'CSS3',
  icon: 'simple-icons:css3',
  iconColor: '#1572B6',
  url: 'https://www.w3.org/Style/CSS/Overview.en.html/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const expressJs = createSkillFactory({
  name: 'Express.js',
  icon: 'simple-icons:express',
  iconColor: '#000000',
  url: 'https://expressjs.com/',
});

export const fastApi = createSkillFactory({
  name: 'Fast API',
  icon: 'simple-icons:fastapi',
  iconColor: '#009688',
  url: 'https://fastapi.tiangolo.com/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const flutter = createSkillFactory({
  name: 'Flutter',
  icon: 'simple-icons:flutter',
  iconColor: '#02569B',
  url: 'https://flutter.dev/',
});

export const github = createSkillFactory({
  name: 'GitHub',
  icon: 'simple-icons:github',
  iconColor: '#181717',
  url: 'https://github.com/',
});

export const html5 = createSkillFactory({
  name: 'HTML5',
  icon: 'simple-icons:html5',
  iconColor: '#E34F26',
  url: 'https://html5.org/',
});

export const java = createSkillFactory({
  name: 'Java',
  icon: 'simple-icons:java',
  iconColor: '#5283A2',
  url: 'https://www.java.com/en/',
});

export const javascript = createSkillFactory({
  name: 'JavaScript (ES6)',
  icon: 'simple-icons:javascript',
  iconColor: '#F7DF1E',
  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const laravel = createSkillFactory({
  name: 'Laravel',
  icon: 'simple-icons:laravel',
  iconColor: '#FF2D20',
  url: 'https://laravel.com/',
});

export const materialDesign = createSkillFactory({
  name: 'Material Design',
  icon: 'simple-icons:materialdesign',
  iconColor: '#757575',
  url: 'https://m3.material.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const nodeJs = createSkillFactory({
  name: 'Node.js',
  icon: 'simple-icons:nodedotjs',
  iconColor: '#339933',
  url: 'https://nodejs.org/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const php = createSkillFactory({
  name: 'PHP',
  icon: 'simple-icons:php',
  iconColor: '#777BB4',
  url: 'https://www.php.net/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const postman = createSkillFactory({
  name: 'Postman',
  icon: 'simple-icons:postman',
  iconColor: '#FF6C37',
  url: 'https://www.postman.com/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const prisma = createSkillFactory({
  name: 'Prisma',
  icon: 'simple-icons:prisma',
  iconColor: '#2D3748',
  url: 'https://www.prisma.io/',
});

export const python = createSkillFactory({
  name: 'Python',
  icon: 'simple-icons:python',
  iconColor: '#3776AB',
  url: 'https://www.python.org/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const restApi = createSkillFactory({
  name: 'RESTful API',
  icon: 'mdi:api',
  iconColor: '#4D4D4D',
  url: '#',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const sql = createSkillFactory({
  name: 'SQL',
  icon: 'mdi:database-search',
  iconColor: '#4D4D4D',
  url: 'https://www.mysql.com/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const terminal = createSkillFactory({
  name: 'Terminal',
  icon: 'simple-icons:windowsterminal',
  iconColor: '#4D4D4D',
  url: '#',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const vercel = createSkillFactory({
  name: 'Vercel',
  icon: 'simple-icons:vercel',
  iconColor: '#000000',
  url: 'https://vercel.com/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});

export const vscode = createSkillFactory({
  name: 'Visual Studio Code',
  icon: 'simple-icons:visualstudiocode',
  iconColor: '#007ACC',
  url: 'https://code.visualstudio.com/',
});

export const wordpress = createSkillFactory({
  name: 'Wordpress',
  icon: 'simple-icons:wordpress',
  iconColor: '#21759B',
  url: 'https://wordpress.com/',
});
