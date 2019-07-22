import React from 'react';
import './index.scss';

function PageNotFound() {
  return (
    <div className="PageNotFound">
      <p>
        Oh no! Page not found!{' '}
        <span role="img" aria-label="Scared face emoji">
          😱
        </span>
      </p>
      <a href="/">Go Home</a>
    </div>
  );
}

export default PageNotFound;
