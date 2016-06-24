import React, { Component, PropTypes } from 'react';

export default class CallOutMessage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = this.props.title;

        let getTitle = () => {
            return title ? <h4>{title}</h4> : null;
        }

        return (
            <div className="callout callout-danger">
                { getTitle() }
                <p>{ this.props.description }</p>
            </div>
        );
    }
}