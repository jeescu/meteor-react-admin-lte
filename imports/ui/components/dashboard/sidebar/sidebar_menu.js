import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SideBarMenu = ({ userCount }) => (
  <ul className="sidebar-menu" data-widget="tree">
    <li className="header">MAIN NAVIGATION</li>

    <li className="active treeview">
      <a href="#">
        <i className="fa fa-dashboard" /><span>Dashboard</span>
        <span className="pull-right-container">
          <i className="fa fa-angle-left pull-right" />
        </span>
      </a>
      <ul className="treeview-menu">
        <li className="active">
          <Link to="/dashboard"><i className="fa fa-circle-o" /> Dashboard 1</Link>
        </li>
        <li><a href="#"><i className="fa fa-circle-o" /> Dashboard 2</a></li>
      </ul>
    </li>
    <li>
      <Link to="#">
        <i className="fa fa-users" /> <span> Users </span>
        <small className="label pull-right bg-blue" > {userCount} </small>
      </Link>
    </li>
  </ul>
);

SideBarMenu.propTypes = {
  userCount: PropTypes.number,
};

export default SideBarMenu;
