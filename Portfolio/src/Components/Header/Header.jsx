import { useState } from 'react';

import './Header.css';
import ListItem from '../ListItem';

export default function Header() {
  const [isExtended, setIsExtended] = useState(false);

  const headerItems = (
    <>
      <ListItem link="#top" content="About" />
      <ListItem link="#projects" content="Projects" />
      <ListItem link="#skills" content="Skills" />
    </>
  );

  return (
    <>
      <header>
        <section className="narrow-header">
          <a href="https://portfolio-website.ct8.pl/">
            <span className="logo">Portfolio</span>
          </a>
        </section>
        <section className="wide-header">
          <ul>{headerItems}</ul>
        </section>

        <section className="narrow-header">
          <button
            className={`hamburger ${isExtended ? 'hamburger--active' : ''}`}
            onClick={() => setIsExtended((isExtended) => !isExtended)}
          >
            <span className="hamburger__box">
              <span className="hamburger__inner"></span>
            </span>
          </button>
        </section>
      </header>

      <section
        className={`navigation ${isExtended ? 'navigation--active' : ''}`}
      >
        <ul>{headerItems}</ul>
      </section>
    </>
  );
}
