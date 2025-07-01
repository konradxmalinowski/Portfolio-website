import Language from './Language/Language';
import { useEffect, useRef } from 'react';

const NAMES = [
  'HTML',
  'CSS',
  'SASS',
  'Tailwind CSS',
  'JavaScript',
  'Typescript',
  'React',
  'PHP',
  'Java',
  'Python',
  'MySQL',
  'SQL Server',
  'Postman',
  'Figma',
  'Git',
  'Wordpress',
];

const IMAGES = [
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
  'https://img.icons8.com/color/200/tailwindcss.png',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
  'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg',
  'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
  'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
  'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-original.svg',
];

const LEVELS = [
  'Experienced', // HTML
  'Experienced', // CSS
  'Beginner', // SASS
  'Experienced', // Tailwind CSS
  'Experienced', // JavaScript
  'Intermediate', // TypeScript
  'Experienced', // React
  'Intermediate', // PHP
  'Beginner', // Java
  'Beginner', // Python
  'Experienced', // MySQL
  'Beginner', // SQL Server
  'Intermediate', // Postman
  'Intermediate', // Figma
  'Intermediate', // Git
  'Experienced', // Wordpress
];

const LINKS = [
  'https://developer.mozilla.org/en-US/docs/Web/HTML',
  'https://developer.mozilla.org/en-US/docs/Web/CSS',
  'https://sass-lang.com',
  'https://tailwindcss.com/',
  'https://www.javascript.com',
  'https://www.typescriptlang.org',
  'https://reactjs.org',
  'https://www.php.net/',
  'https://www.java.com/',
  'https://www.python.org/',
  'https://www.mysql.com',
  'https://learn.microsoft.com/en-us/sql/',
  'https://www.postman.com/',
  'https://www.figma.com',
  'https://git-scm.com',
  'https://wordpress.org',
];

const IDs = NAMES.map(
  (name) =>
    name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z\-]/g, '') + '-img'
);

const Skills = ({ handleScrollIntoView }) => {
  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleScrollIntoView]);

  const skills = NAMES.map((name, idx) => (
    <Language
      name={name}
      logo={IMAGES[idx]}
      level={LEVELS[idx]}
      key={idx}
      id={IDs[idx]}
      onClick={() => window.open(LINKS[idx], '_blank')}
    />
  ));

  return (
    <div
      className="skills-wrapper wrapper reveal"
      id="skills"
      ref={ref}
      aria-label="Skills Section"
    >
      <h1 aria-label="My skills heading">My skills</h1>
      <div id="skills-content" aria-label="List of skills">
        {skills}
      </div>
    </div>
  );
};

export default Skills;
