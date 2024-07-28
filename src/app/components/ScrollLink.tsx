import React from 'react';
import PropTypes from 'prop-types';

interface Scroll {
  href: string;
  children: string;
}

const ScrollLink: React.FC<Scroll> = ({ href, children }) => {
  const handleClick = (e: any) => {
    e.preventDefault();

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    const navbar = document.querySelector('.header');

    if (targetElement) {
      const elementOffset = targetElement.offsetTop - navbar.offsetHeight - 50;
      window.scrollTo({
        top: elementOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <a
      href={href}
      className="text-white transition-all hover:opacity-70"
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default ScrollLink;
