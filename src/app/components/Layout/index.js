import React from 'react';
import './index.scss';

function Layout({ children }) {
  return (
    <React.Fragment>
      <header>
        <h1>
          Hello from eShop!
          <span role="img" aria-label="shopping bags emoji">
            🛍️
          </span>
        </h1>
      </header>
      <main>{children}</main>
      <footer>
        <span role="img" aria-label="LoL foot">
          🦶
        </span>
      </footer>
    </React.Fragment>
  );
}

export default Layout;
