import React, { useState, useEffect } from 'react';
import {Component} from 'react';
import '../static/css/home.css';
import Steal from './Steal.js';
import StatusUpdate from './StatusUpdate.js';

import {getContractStorage} from '../tezos';


function Home(){

    const [userData, setUserData] = useState([]);
 
    useEffect(() => {
        async function fetchStorage() {
            // Fetch data from contract
            let storage = await getContractStorage();
            let gameDetails = storage.gameDetails.valueMap;
		
	    let users = []
	    gameDetails.forEach(game => {
			game.amtToSteal =  Number(game.amtToSteal.toString());
			game.currentCount = Number(game.currentCount.toString());
			game.gameId = Number(game.gameId.toString());
			console.log(game.endingTime);
			game.minCount = Number(game.minCount.toString());
			game.potSize = Number(game.potSize.toString())/1000000;
			game.surety = Number(game.surety.toString());
			console.log(game);
    		users.push(game);
		});
		setUserData(users);
            
        }
        fetchStorage();
        
    }, [])

    return(
        <div className="container">
            <div className="row">
                {userData.map((user, index) => 
                    <div className="col-md-6" key={index}>
                        <div className="card" >
                            <div className="card-header">
                                <div className="Proposer">{user.gameId}</div>
                            </div>
                            <div className="card-body">
                            	<tr>
									<h6>Name &emsp;</h6> <td className="Proposal">: &emsp;{user.name}</td>
								 </tr>
                            	<tr>
									<h6>Covenor </h6> <td className="Proposal">: &emsp;{user.convenor}</td>
								 </tr>
								 <tr>
									<h6>Game ID </h6> <td className="Proposal">: &emsp;{user.gameId}</td>
								 </tr>
								 
                            	<tr>
									<h6>Status </h6> <td className="Proposal">: &emsp;{user.gameStatus} <StatusUpdate pID={user.gameId}
                                /></td>
								 </tr>
                            	<tr>
									<h6>Expected Count &emsp; </h6> <td className="Proposal">: &emsp;{user.minCount}</td>
								 </tr>
                            	<tr>
									<h6>Current Count </h6> <td className="Proposal">: &emsp;{user.currentCount}</td>
								 </tr>
                            	<tr>
									<h6>Surety </h6> <td className="Proposal">: &emsp;{user.surety}</td>
								 </tr>
								 <tr>
									<h6>Pot Size </h6> <td className="Options" title = "Options">: &emsp;{user.potSize} <Steal
                                    pID={user.gameId}
                                /></td>
								 </tr>
								 <tr>
									<h6>Games Ends on</h6> <td className="Status">: &emsp;{user.endingTime}</td>
								</tr>


                            </div>
                        </div>
                    </div>
                )}
            </div>
            
        </div>
    );
}

export default Home;
