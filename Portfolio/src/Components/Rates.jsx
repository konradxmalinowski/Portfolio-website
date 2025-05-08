import Button from './Button/Button';
import { useEffect, useRef } from 'react';

const Rates = ({ handleScrollIntoView }) => {
  const ref = useRef();

  useEffect(() => {
    const [element, observer] = handleScrollIntoView(ref);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [handleScrollIntoView]);

  return (
    <div
      className="rates-wrapper wrapper reveal"
      ref={ref}
      aria-label="Rate this website section"
    >
      <h1 aria-label="Rate website heading">
        Do you want to rate this website?
      </h1>
      <p aria-label="Rate website description">
        I encourage you to click the button below and share your feedback on my
        work in creating this website.
      </p>
      <a
        href="mailto:konradmalinowski@zsezdwola.com"
        target="_blank"
        aria-label="Send feedback via email"
      >
        <Button label="Rate website" className="purple-button" />
      </a>
    </div>
  );
};

export default Rates;
