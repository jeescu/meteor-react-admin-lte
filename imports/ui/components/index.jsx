import React, { Component, PropTypes } from 'react';

import { Home } from './home.jsx';
 
export default class Index extends Component {

    render() {
    	console.log('render index!')

    	var getChildren = () => {
    		if (!this.props.children ) {
    			return <Home />
    		}

    		return this.props.children ;
    	}

        return (
            <div>
				<h1>Index page Header</h1>
					{ getChildren() }
				<h1>Index page Footer</h1>
			</div>
        );
    }
}