import React, { useState, useEffect } from 'react';
import {Component} from 'react';
import '../static/css/home.css';
import {getContractStorage} from '../tezos';


function HomeTez(){

    const [userData, setUserData] = useState([]);
 
    useEffect(() => {
        async function fetchStorage() {
            // Fetch data from contract
            let storage = await getContractStorage();
            let gameDetails = storage.registry.valueMap;
		
	    let users = []
	    gameDetails.forEach(game => {
			game.maxDuration =  Number(game.maxDuration.toString());
			game.maxPeopleCount = Number(game.maxPeopleCount.toString());
			game.maxPotsize = Number(game.maxPotsize.toString()) /100000;
			game.totalGamesEnded = Number(game.totalGamesEnded.toString());
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
                    <div className="col-md-4.75" key={index}>
                        <div className="card" >
                            <div className="card-header">
                                <div className="Proposer">{user.userAddress}</div>
                            </div>
                            <div className="card-body">
                            	<tr>
									<h6>Max Duration</h6> <td className="Proposal">: &emsp;{user.maxDuration} Days</td>
								 </tr>
                            	<tr>
									<h6>Max GroupSize</h6> <td className="Proposal">: &emsp;{user.maxPeopleCount}</td>
								 </tr>
								 <tr>
									<h6>Max PotSize</h6> <td className="Proposal">: &emsp;{user.maxPotsize} Tez</td>
								 </tr>
								 
                            	<tr>
									<h6>Games Completed &emsp;</h6> <td className="Proposal">: &emsp;{user.totalGamesEnded} </td>
								 </tr>
                            	
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
        </div>
    );
}

export default HomeTez;
