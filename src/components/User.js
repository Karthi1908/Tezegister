import React, { useState, useEffect } from 'react';

import '../static/css/home.css'
import Transfer from './Transfer.js';

import {getContractStorage} from '../tezos';


function User(){

   const [userData, setUserData] = useState([]);
 
    useEffect(() => {
        async function fetchStorage() {
            // Fetch data from contract
            let storage = await getContractStorage();
            let tradeBlotter = storage.tradeBlotter.valueMap;
	    let users = []
	    tradeBlotter.forEach(trade => {
			
			trade.tokenBalance = trade.tokenBalance.toString();
			trade.communityActivityPoints =trade.communityActivityPoints.toString();
			trade.daoExperiencePoints =trade.daoExperiencePoints.toString();
			trade.platformActivityPoints =trade.platformActivityPoints.toString();
			
			
			console.log(trade);
    		users.push(trade);
			
			
		}
		);
		
		setUserData(users);
            
        }
        fetchStorage();
        
    }, [])
 
    
     return (
     <div className="container">
            <div className="row">
                {userData.map((user, index) => 
                    <div className="col-md-6" key={index}>
                        <div className="card" >
                            <div className="card-header">
                                <div className="Member">{user.id}</div>
                            </div>
                            <div className="card-body">
								<tr>
									<h6>Member &emsp;&emsp;&emsp;&emsp;&emsp;: </h6> <td className="Proposal">&emsp;{user.id}</td> 
								</tr>
								<tr>
									<h6>Token Balance &emsp;&emsp;   : </h6> <td className="Proposal">&emsp;{user.tokenBalance}</td>
								</tr>
								<tr>
									<h6>Community Points&ensp; : </h6> <td className="Proposal">&emsp;{user.communityActivityPoints}</td>
								</tr>
								<tr>
									<h6>Dao Points  &emsp;&emsp;&emsp;&ensp;     : </h6> <td className="Proposal">&emsp;{user.daoExperiencePoints}</td>
								 </tr>
								 <tr>
									<h6>Platform Points &emsp;&ensp; : </h6> <td className="Proposal">&emsp;{user.platformActivityPoints}</td>
								 </tr>
                                                       
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
        </div>
  );
}


export default User;
