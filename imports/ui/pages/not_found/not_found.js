import React from 'react';
import './not_found.css';

const NotFound = () => (
  <div className="error-page">
    <h2 className="headline text-yellow"> 404</h2>

    <div className="error-content">
      <h3><i className="fa fa-warning text-yellow" /> Oops! Page not found.</h3>
      <p>We could not find the page you were looking for.
        Meanwhile, you may <a href="/">return to dashboard</a>
      </p>
    </div>
  </div>
);

export default NotFound;
