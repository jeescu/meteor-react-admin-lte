import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';

import CallOutMessage from './warnings/callout_message.jsx';

export default class SignIn extends Component {
	constructor(props) {
        super(props);

        this.state = {
        	email: '',
        	password: '',
        	hasError: false
        }
    }

    onChangeEmail(event) {
    	let email = event.target.value;
    	this.setState({email});
    }

    onChangePassword(event) {
    	let password = event.target.value;
    	this.setState({password});
    }

	onSubmit(event) {
        event.preventDefault();

		Meteor.loginWithPassword({ email: this.state.email }, this.state.password, function(error) {

			if (error) {
				this.setState({ hasError: true });
				return;
			}

        	browserHistory.push('/dashboard');

		}.bind(this));
	}

    render() {

    	let getMessage = () => {
    		if (this.state.hasError) {
            	return <CallOutMessage description='Forbidden' />
        	}
    	};

        return (
			<div className="login-box">
				<div className="login-logo">
					<a href="/"><b>Admin</b>LTE</a>
				</div>

				<div className="login-box-body">
					<p className="login-box-msg">Sign in to start your session</p>
					{ getMessage() }

					<form onSubmit={this.onSubmit.bind(this)}>
						<div className="form-group has-feedback">
							<input type="email" className="form-control" placeholder="Email" onChange={this.onChangeEmail.bind(this)} value={this.state.email}/>
							<span className="glyphicon glyphicon-envelope form-control-feedback" />
						</div>
						
						<div className="form-group has-feedback">
							<input type="password" className="form-control" placeholder="Password"  onChange={this.onChangePassword.bind(this)} value={this.state.password}/>
							<span className="glyphicon glyphicon-lock form-control-feedback" />
						</div>

						<div className="row">
							<div className="pull-right col-xs-4">
								<button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
							</div>
						</div>
					</form>

					<a href="#">I forgot my password</a><br />

				</div>
			</div>
        );
    }
}