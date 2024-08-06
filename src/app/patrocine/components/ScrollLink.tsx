import React from 'react';

interface Scroll {
  href: string;
  children: any;
}

const ScrollLink: React.FC<Scroll> = ({ href, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    const navbar = document.querySelector('.header') as HTMLElement;

    if (targetElement && navbar) {
      const elementOffset = targetElement.offsetTop - navbar.offsetHeight - 50;
      window.scrollTo({
        top: elementOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <a href={href} className="text-white transition-all hover:opacity-70 nav_link" onClick={handleClick}>
      {children}
    </a>
  );
};

export default ScrollLink;
