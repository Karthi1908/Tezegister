import React, {Component} from 'react';
import '../static/css/navbar.css'
import LoginButton from './LoginButton';
import { Refferals, Challenges} from './Referrals';

function NewReferral(){
    return(
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">Referrals</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item mr-auto">
                       <Refferals />
                    </li>
                </ul>


                <ur className="navbar-nav mx-auto">
                    <li className="nav-item mr-auto">
                       <Challenges />
                    </li>
                </ur>

            </div>
        </nav>
        
        
    );
}

export default NewReferral;
