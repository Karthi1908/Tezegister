import React, { useState, useEffect } from 'react';

import '../static/css/home.css'
import Transfer from './Transfer.js';

import {getContractStorage} from '../tezos';


function Table(){

   const [userData, setUserData] = useState([]);
 
    useEffect(() => {
        async function fetchStorage() {
            // Fetch data from contract
            let storage = await getContractStorage();
            let stakeholders = storage.stakeHolders.valueMap;
	    let users = []
	    stakeholders.forEach(stakeholder => {
			stakeholder.member = stakeholder.member;
			stakeholder.tokenBalance = stakeholder.tokenBalance.toString();
			stakeholder.communityActivityPoints =stakeholder.communityActivityPoints.toString();
			stakeholder.daoExperiencePoints =stakeholder.daoExperiencePoints.toString();
			stakeholder.platformActivityPoints =stakeholder.platformActivityPoints.toString();
			
			
			console.log(stakeholder);
    		users.push(stakeholder);
			
			
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
                    <div className="col-md-4" key={index}>
                        <div className="card" >
                            <div className="card-header">
                                <div className="Member">{user.Member}</div>
                            </div>
                            <div className="card-body">
								 <h5>Member           : </h5> <p className="Proposal">{user.Member}</p> 
                            	 <h5>Token Balance    : </h5> <td className="Proposal">{user.tokenBalance}</td><br/>
								 <h5>Community Points : </h5> <td className="Proposal">{user.communityActivityPoints}</td><br/>
								 <h5>Dao Points       : </h5> <td className="Proposal">{user.daoExperiencePoints}</td><br/>
								 <h5>Platform Points  : </h5> <td className="Proposal">{user.platformActivityPoints}</td><br/>
                                                       
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
        </div>
  );
}


export default Table;
