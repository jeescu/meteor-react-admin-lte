import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="lockscreen-wrapper">
                <div className="lockscreen-logo">
                    <a href="../../index2.html"><b>Admin</b>LTE</a>
                </div>

                <div className="lockscreen-name text-center"><b>Meteor React Boilerplate in ES6</b></div>

                <div className="text-center">
                    <Link to={ '/sign-in' }>Sign in </Link>or
                    <Link to={ '/sign-up' }> Register</Link>
                </div>
                <div className="lockscreen-footer text-center">
                    Copyright © 2014-2015 <b><a href="http://almsaeedstudio.com" className="text-black">Almsaeed Studio</a></b><br/>
                    All rights reserved
                </div>
            </div>
        );
    }
}