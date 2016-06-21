import React, { Component, PropTypes } from 'react';

import { Home } from './home.jsx';
import { PublicHeader } from './layouts/public/public_header.jsx';
 
export default class Index extends Component {

    render() {

    	var getChildRoute = () => {
    		return this.props.children ? this.props.children : <Home />;
    	}

        return (
            <div className="wrapper public-layout">
				<PublicHeader />
                <div className="container">
				    { getChildRoute() }
                </div>
			</div>
        );
    }
}