import React, { Component, PropTypes } from 'react';

export default class AppFooter extends Component {

    render() {
		return (
			<footer className="main-footer">
				<div className="pull-right hidden-xs">
					<b>Version</b> 2.3.3
				</div>
				<strong>Copyright &copy; 2014-2015 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights reserved.
			</footer>
        );
  	}
}