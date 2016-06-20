import React, { Component, PropTypes } from 'react';

import { Home } from './home.jsx';
import { PublicHeader } from './layouts/public/public_header.jsx';
 
export default class Index extends Component {

    render() {
    	console.log('render index!')

    	var getChildren = () => {
    		if (!this.props.children ) {
    			return <Home />
    		}

    		return this.props.children;
    	}

        return (
            <div className="wrapper public-layout">
				<PublicHeader />
                <div className="container">
				    { getChildren() }
                </div>
			</div>
        );
    }
}