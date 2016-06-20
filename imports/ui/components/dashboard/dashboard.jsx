import React, { Component, PropTypes } from 'react';

export default class Dashboard extends Component {

    render() {
    	console.log('render dashboard!')

        var sampleWidth = {
            width: '40%'
        }
    	
        return (
            <div className="wrapper">

              <header className="main-header">

                <a href="index2.html" className="logo">
                  <span className="logo-mini"><b>A</b>LT</span>
                  <span className="logo-lg"><b>Admin</b>LTE</span>
                </a>

                <nav className="navbar navbar-static-top">
                  <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span className="sr-only">Toggle navigation</span>
                  </a>
                  <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                      <li className="dropdown messages-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                          <i className="fa fa-envelope-o"></i>
                          <span className="label label-success">4</span>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="header">You have 4 messages</li>
                          <li>
                            <ul className="menu">
                              <li>
                                <a href="#">
                                  <div className="pull-left">
                                    <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                                  </div>
                                  <h4>
                                    Support Team
                                    <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                  </h4>
                                  <p>Why not buy a new awesome theme?</p>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <div className="pull-left">
                                    <img src="dist/img/user3-128x128.jpg" className="img-circle" alt="User Image"/>
                                  </div>
                                  <h4>
                                    <small><i className="fa fa-clock-o"></i> 2 hours</small>
                                  </h4>
                                  <p>Why not buy a new awesome theme?</p>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <div className="pull-left">
                                    <img src="dist/img/user4-128x128.jpg" className="img-circle" alt="User Image"/>
                                  </div>
                                  <h4>
                                    Developers
                                    <small><i className="fa fa-clock-o"></i> Today</small>
                                  </h4>
                                  <p>Why not buy a new awesome theme?</p>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <div className="pull-left">
                                    <img src="dist/img/user3-128x128.jpg" className="img-circle" alt="User Image"/>
                                  </div>
                                  <h4>
                                    Sales Department
                                    <small><i className="fa fa-clock-o"></i> Yesterday</small>
                                  </h4>
                                  <p>Why not buy a new awesome theme?</p>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <div className="pull-left">
                                    <img src="dist/img/user4-128x128.jpg" className="img-circle" alt="User Image"/>
                                  </div>
                                  <h4>
                                    Reviewers
                                    <small><i className="fa fa-clock-o"></i> 2 days</small>
                                  </h4>
                                  <p>Why not buy a new awesome theme?</p>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="footer"><a href="#">See All Messages</a></li>
                        </ul>
                      </li>

                      <li className="dropdown notifications-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                          <i className="fa fa-bell-o"></i>
                          <span className="label label-warning">10</span>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="header">You have 10 notifications</li>
                          <li>
                            <ul className="menu">
                              <li>
                                <a href="#">
                                  <i className="fa fa-users text-aqua"></i> 5 new members joined today
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-warning text-yellow"></i> Very long description here that may not fit into the
                                  page and may cause design problems
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-users text-red"></i> 5 new members joined
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-cart text-green"></i> 25 sales made
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-user text-red"></i> You changed your username
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="footer"><a href="#">View all</a></li>
                        </ul>
                      </li>
                      <li className="dropdown tasks-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                          <i className="fa fa-flag-o"></i>
                          <span className="label label-danger">9</span>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="header">You have 9 tasks</li>
                          <li>
                            <ul className="menu">
                              <li>
                                <a href="#">
                                  <h3>
                                    Design some buttons
                                    <small className="pull-right">20%</small>
                                  </h3>
                                  <div className="progress xs">
                                    <div className="progress-bar progress-bar-aqua" style={sampleWidth} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                      <span className="sr-only">20% Complete</span>
                                    </div>
                                  </div>
                                </a>
                              </li>

                              <li>
                                <a href="#">
                                  <h3>
                                    Create a nice theme
                                    <small className="pull-right">40%</small>
                                  </h3>
                                  <div className="progress xs">
                                    <div className="progress-bar progress-bar-green" style={sampleWidth} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                      <span className="sr-only">40% Complete</span>
                                    </div>
                                  </div>
                                </a>
                              </li>

                              <li>
                                <a href="#">
                                  <h3>
                                    Some task I need to do
                                    <small className="pull-right">60%</small>
                                  </h3>
                                  <div className="progress xs">
                                    <div className="progress-bar progress-bar-red" style={sampleWidth} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                      <span className="sr-only">60% Complete</span>
                                    </div>
                                  </div>
                                </a>
                              </li>

                              <li>
                                <a href="#">
                                  <h3>
                                    Make beautiful transitions
                                    <small className="pull-right">80%</small>
                                  </h3>
                                  <div className="progress xs">
                                    <div className="progress-bar progress-bar-yellow" style={sampleWidth} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                      <span className="sr-only">80% Complete</span>
                                    </div>
                                  </div>
                                </a>
                              </li>

                            </ul>
                          </li>
                          <li className="footer">
                            <a href="#">View all tasks</a>
                          </li>
                        </ul>
                      </li>

                      <li className="dropdown user user-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                          <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image"/>
                          <span className="hidden-xs">Alexander Pierce</span>
                        </a>
                        <ul className="dropdown-menu">

                          <li className="user-header">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>

                            <p>
                              Alexander Pierce - Web Developer
                              <small>Member since Nov. 2012</small>
                            </p>
                          </li>

                          <li className="user-body">
                            <div className="row">
                              <div className="col-xs-4 text-center">
                                <a href="#">Followers</a>
                              </div>
                              <div className="col-xs-4 text-center">
                                <a href="#">Sales</a>
                              </div>
                              <div className="col-xs-4 text-center">
                                <a href="#">Friends</a>
                              </div>
                            </div>

                          </li>

                          <li className="user-footer">
                            <div className="pull-left">
                              <a href="#" className="btn btn-default btn-flat">Profile</a>
                            </div>
                            <div className="pull-right">
                              <a href="#" className="btn btn-default btn-flat">Sign out</a>
                            </div>
                          </li>
                        </ul>
                      </li>

                    </ul>
                  </div>

                </nav>
              </header>

              <aside className="main-sidebar">

                <section className="sidebar">

                  <div className="user-panel">
                    <div className="pull-left image">
                      <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                    </div>
                    <div className="pull-left info">
                      <p>Alexander Pierce</p>
                      <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                    </div>
                  </div>

                  <form action="#" method="get" className="sidebar-form">
                    <div className="input-group">
                      <input type="text" name="q" className="form-control" placeholder="Search..."/>
                          <span className="input-group-btn">
                            <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                            </button>
                          </span>
                    </div>
                  </form>


                  <ul className="sidebar-menu">
                    <li className="header">MAIN NAVIGATION</li>
                    <li className="active treeview">
                      <a href="#">
                        <i className="fa fa-dashboard"></i> <span>Dashboard</span> <i className="fa fa-angle-left pull-right"></i>
                      </a>
                      <ul className="treeview-menu">
                        <li><a href="index.html"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
                        <li className="active"><a href="index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="fa fa-files-o"></i>
                        <span>Layout Options</span>
                        <span className="label label-primary pull-right">4</span>
                      </a>
                      <ul className="treeview-menu">
                        <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o"></i> Top Navigation</a></li>
                        <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o"></i> Boxed</a></li>
                        <li><a href="pages/layout/fixed.html"><i className="fa fa-circle-o"></i> Fixed</a></li>
                        <li><a href="pages/layout/collapsed-sidebar.html"><i className="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="pages/widgets.html">
                        <i className="fa fa-th"></i> <span>Widgets</span>
                        <small className="label pull-right bg-green">new</small>
                      </a>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="fa fa-pie-chart"></i>
                        <span>Charts</span>
                        <i className="fa fa-angle-left pull-right"></i>
                      </a>
                      <ul className="treeview-menu">
                        <li><a href="pages/charts/chartjs.html"><i className="fa fa-circle-o"></i> ChartJS</a></li>
                        <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o"></i> Morris</a></li>
                        <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o"></i> Flot</a></li>
                        <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o"></i> Inline charts</a></li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="fa fa-laptop"></i>
                        <span>UI Elements</span>
                        <i className="fa fa-angle-left pull-right"></i>
                      </a>
                      <ul className="treeview-menu">
                        <li><a href="pages/UI/general.html"><i className="fa fa-circle-o"></i> General</a></li>
                        <li><a href="pages/UI/icons.html"><i className="fa fa-circle-o"></i> Icons</a></li>
                        <li><a href="pages/UI/buttons.html"><i className="fa fa-circle-o"></i> Buttons</a></li>
                        <li><a href="pages/UI/sliders.html"><i className="fa fa-circle-o"></i> Sliders</a></li>
                        <li><a href="pages/UI/timeline.html"><i className="fa fa-circle-o"></i> Timeline</a></li>
                        <li><a href="pages/UI/modals.html"><i className="fa fa-circle-o"></i> Modals</a></li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="fa fa-edit"></i> <span>Forms</span>
                        <i className="fa fa-angle-left pull-right"></i>
                      </a>
                      <ul className="treeview-menu">
                        <li><a href="pages/forms/general.html"><i className="fa fa-circle-o"></i> General Elements</a></li>
                        <li><a href="pages/forms/advanced.html"><i className="fa fa-circle-o"></i> Advanced Elements</a></li>
                        <li><a href="pages/forms/editors.html"><i className="fa fa-circle-o"></i> Editors</a></li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="fa fa-table"></i> <span>Tables</span>
                        <i className="fa fa-angle-left pull-right"></i>
                      </a>
                      <ul className="treeview-menu">
                        <li><a href="pages/tables/simple.html"><i className="fa fa-circle-o"></i> Simple tables</a></li>
                        <li><a href="pages/tables/data.html"><i className="fa fa-circle-o"></i> Data tables</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="pages/calendar.html">
                        <i className="fa fa-calendar"></i> <span>Calendar</span>
                        <small className="label pull-right bg-red">3</small>
                      </a>
                    </li>
                    <li>
                      <a href="pages/mailbox/mailbox.html">
                        <i className="fa fa-envelope"></i> <span>Mailbox</span>
                        <small className="label pull-right bg-yellow">12</small>
                      </a>
                    </li>

                  </ul>
                </section>

              </aside>

              <div className="content-wrapper">

                <section className="content-header">
                  <h1>
                    Dashboard
                    <small>Version 2.0</small>
                  </h1>
                  <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                    <li className="active">Dashboard</li>
                  </ol>
                </section>

                
                <section className="content">
                 
                </section>

              </div>

              <footer className="main-footer">
                <div className="pull-right hidden-xs">
                  <b>Version</b> 2.3.3
                </div>
                <strong>Copyright &copy; 2014-2015 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights
                reserved.
              </footer>

              <div className="control-sidebar-bg"></div>

            </div>
        );
    }
}