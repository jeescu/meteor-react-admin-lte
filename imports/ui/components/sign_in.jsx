import React, { Component, PropTypes } from 'react';

export default class SignIn extends Component {

    render() {
        return (
           <div className="container">
			    <div className="row">
			      <div className="col-md-6 col-md-offset-3">
			        
				    <div className="at-form">
				      
				        <div className="at-title">
						    <h3>Sign In</h3>
						  </div>
				      
				        <div className="at-pwd-form">
						    <form role="form" id="at-pwd-form" novalidate="" action="#" method="POST">
						      <fieldset>
							    <div className="at-input form-group">
							    <label className="control-label" for="at-field-email">
							      Email 
							    </label>
							    <input type="email" className="form-control" id="at-field-email" name="at-field-email" placeholder="Email" autocapitalize="none" autocorrect="off"/>
							    
							    <span className="help-block hide"></span>
							  </div>    
							    
							    <div className="at-input form-group">
							    <label className="control-label" for="at-field-password">
							      Password 
							    </label>
							    <input type="password" className="form-control" id="at-field-password" name="at-field-password" placeholder="Password" autocapitalize="none" autocorrect="off"/>
							    
							    <span className="help-block hide"></span>
							  </div>    
							        <button type="submit" className="at-btn submit btn btn-lg btn-block btn-default" id="at-btn">
							    Sign In
							  </button>
						      </fieldset>
						    </form>
				  		</div>
				      
				        <div className="at-signup-link">
					    <p>
					      Don't have an account?
					      <a href="/sign-up" id="at-signUp" className="at-link at-signup">Register</a>
					      
					    </p>
				  	</div>
				      
				    </div>
			  
			      </div>
			    </div>
			  </div>
        );
    }
}