import React from 'react';
import '../static/css/navbar.css'
import LoginButton from './LoginButton';
import Register from './Register';

function Title(){
    return(
        <nav className="navbar navbar-expand-lg">


                <a className="navbar-brand mr-auto" href="#">Tezegister</a>
            <button className="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <LoginButton/>
                    </li>
                </ul>
         
        </nav>
    );
}

export default Title;
