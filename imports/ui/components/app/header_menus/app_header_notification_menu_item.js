import React from 'react';
import PropTypes from 'prop-types';

const AppHeaderNotificationMenuItem = ({ classNames, message }) => (
  <li>
    <a href="#">
      <i className={classNames} /> {message}
    </a>
  </li>
);

AppHeaderNotificationMenuItem.propTypes = {
  classNames: PropTypes.string,
  message: PropTypes.string,
};

export default AppHeaderNotificationMenuItem;
