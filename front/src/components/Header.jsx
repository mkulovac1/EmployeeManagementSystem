import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a className='navbar-brand'>Employee Management Application</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;