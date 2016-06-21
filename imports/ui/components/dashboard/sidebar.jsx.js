import React, { Component, PropTypes } from 'react';

export default class SideBar extends Component {

    render() {
    	return (
    		<aside className="main-sidebar">

                <section className="sidebar">

	                <div className="user-panel">
	                    <div className="pull-left image">
	                      	<img src="/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
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
								<li><a href="/"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
								<li className="active"><a href="/"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
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

					</ul>
                </section>

            </aside>
        )
    }
}
    	