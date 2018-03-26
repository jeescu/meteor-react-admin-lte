import React from 'react';
import PropTypes from 'prop-types';

const SideBarUserPanel = ({ userName }) => (
  <div className="user-panel">
    <div className="pull-left image">
      <img alt="User" src="/img/user2-160x160.jpg" className="img-circle" />
    </div>
    <div className="pull-left info">
      <p>{userName}</p>
      <a href="#"><i className="fa fa-circle text-success" />Online</a>
    </div>
  </div>
);

SideBarUserPanel.propTypes = {
  userName: PropTypes.string,
};

export default SideBarUserPanel;
