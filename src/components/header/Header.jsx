import React from 'react';
import './header.css';

const links = [
  { label: 'Contact' },
  { label: 'Resume' },
  { label: 'About' },
  { label: 'Certificate' },
  { label: 'Projects' },
];

const Header = () => {
  return (
    <div id="header">
      <div id="link-wrap">
        {links.map(({ label }) => (
          <span id="link">{label}</span>
        ))}
      </div>
    </div>
  );
};

export default Header;
