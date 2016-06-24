import React, { Component } from 'react';

export default class SideBarUserPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const displayName = this.props.userName;
        
        return (
            <div className="user-panel">
                <div className="pull-left image">
                    <img src="/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                </div>
                <div className="pull-left info">
                    <p>{ displayName }</p>
                    <a href="#"><i className="fa fa-circle text-success"/> Online</a>
                </div>
            </div>
        )
    }
}