import React, { Component } from 'react';

export default class AppHeaderNotificationMenuItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const notificationClassNames = this.props.classNames;
        const notificationMessage = this.props.message;
        
        return (
            <li>
                <a href="#">
                    <i className={ notificationClassNames } /> { notificationMessage }
                </a>
            </li>
        )
    }
}