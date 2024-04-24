import React from 'react';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <div id="inner-lay">{children}</div>
    </div>
  );
};

export default Layout;
