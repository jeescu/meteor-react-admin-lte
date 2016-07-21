import { Accounts } from 'meteor/accounts-base';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import CallOutMessage from './warnings/callout_message.jsx';

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            hasError: false,
            errorMessage: ''
        }
    }

    onChangeUsername(event) {
        let username = event.target.value;
        this.setState({username});
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

        Accounts.createUser({ username: this.state.username, email: this.state.email, password: this.state.password }, function(error) {
            if (error) {
                this.setState({ hasError: true });
                this.setState({ errorMessage: error.reason });
            }
        }.bind(this));
    }

    getSignUpResponseMessage() {
        if (this.state.hasError) {
            return <CallOutMessage description={ this.state.errorMessage } />
        }
    };

    render() {

        return (
            <div className="login-box">
                <div className="register-logo">
                    <a href="/"><b>Admin</b>LTE</a>
                </div>

                <div className="register-box-body">
                    <p className="login-box-msg">Register</p>
                    { this.getSignUpResponseMessage() }

                    <form onSubmit={ this.onSubmit.bind(this) }>
                        <div className="form-group has-feedback">
                            <input type="text" onChange={ this.onChangeUsername.bind(this) } value={ this.state.username } className="form-control" placeholder="Username" />
                                <span className="glyphicon glyphicon-user form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="email" onChange={ this.onChangeEmail.bind(this) } value={ this.state.email } className="form-control" placeholder="Email" />
                                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" onChange={ this.onChangePassword.bind(this) } value={ this.state.password } className="form-control" placeholder="Password" />
                                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Retype password" />
                                <span className="glyphicon glyphicon-log-in form-control-feedback"></span>
                        </div>
                        <div className="row">

                            <div className="col-xs-4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat">Register</button>
                            </div>
                        </div>
                    </form>

                    <div className="social-auth-links text-center">
                        <p>- OR -</p>
                        <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign up using
                            Facebook</a>
                        <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign up using
                            Google+</a>
                    </div>

                    <Link to={'/sign-in'}>
                        I already have an account
                    </Link>

                </div>
            </div>
        );
    }
}