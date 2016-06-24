import React, { Component, PropTypes } from 'react';

export default class ContentHeader extends Component {
	constructor(props) {
        super(props);
    }

    render() {

        return (
        	<section className="content-header">
				<h1>
					{ this.props.name }
					<small>{ this.props.description }</small>
				</h1>

				<ol className="breadcrumb">
					{/*<li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>*/}
					<li className="active"><i className={ this.props.breadcrumbIcon } /> { this.props.breadcrumb }</li>
				</ol>
            </section>
        )
    }
}