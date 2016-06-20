import React from 'react';
 
export const PublicHeader = () => (
	 <header className="main-header">
        <a href="/" className="logo"><b>Admin</b>LTE</a>

        <nav className="navbar navbar-static-top" role="navigation">
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <a href="/signin" className="btn btn-default navbar-btn">Sign in</a>
                    <a href="/signup" className="btn btn-primary navbar-btn">Register</a>
                </ul>
            </div>
        </nav>
    </header>
);