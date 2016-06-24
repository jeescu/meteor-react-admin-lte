import React, { Component, PropTypes } from 'react';

// components
import ContentHeader from '../content_header.jsx';

export default class StatisticView extends Component {
	constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="statistic-content">
	            <ContentHeader name="Statistics" description="statistics" breadcrumb="Statistics" breadcrumbIcon="fa fa-dashboard"/>
	            
	            <section className="content"><span>statistics</span></section>
            </div>
        );
    }
}

