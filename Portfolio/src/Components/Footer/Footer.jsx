import './Footer.css';

import igIcon from '../../assets/ig-icon.png';
import linkedinIcon from '../../assets/linkedin.png';
import githubIcon from '../../assets/github-icon2.png';

import termsPDF from '../../assets/Terms.pdf';
import privacyPDF from '../../assets/Privacy.pdf';

const labels = ['Terms', 'Privacy', 'Contact'];

export default function Footer() {
  return (
    <footer>
      <ul className="footer-left">
        <li>
          <a
            href="https://www.instagram.com/konradxmalinowski/"
            target="_blank"
            aria-label="Visit Instagram profile"
          >
            <img src={igIcon} alt="instagram icon" loading="lazy" />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/konrad-malinowski-894a36323/"
            target="_blank"
            aria-label="Visit Linkedin profile"
          >
            <img src={linkedinIcon} alt="linkedin icon" loading="lazy" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/konradxmalinowski"
            target="_blank"
            aria-label="Visit Github profile"
          >
            <img src={githubIcon} alt="github icon" loading="lazy" />
          </a>
        </li>
      </ul>

      <ul className="footer-center">
        <li>
          <a href="portfolio-website.ct8.pl" target="_blank">
            &copy; {new Date().getFullYear()} Konrad Malinowski
          </a>
        </li>
      </ul>

      <ul className="footer-right">
        <li className="grey">
          <a
            href={termsPDF}
            target="_blank"
            aria-label="View terms and conditions"
          >
            {labels[0]}
          </a>
        </li>
        <li className="grey">
          <a href={privacyPDF} target="_blank" aria-label="View privacy policy">
            {labels[1]}
          </a>
        </li>
        <li className="grey">
          <a
            href="mailto:malinowski.konrad45@gmail.com"
            target="_blank"
            aria-label="Contact via email"
          >
            {labels[2]}
          </a>
        </li>
      </ul>
    </footer>
  );
}
