import React, { Component, PropTypes } from 'react';

export default class StatisticView extends Component {

    render() {
        return (
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
	            
	            <section className="content"><span>statistics</span></section>
            </div>
        );
    }
}

