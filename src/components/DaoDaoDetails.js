import React, { useState, useEffect } from 'react';
import '../static/css/home.css'
import Transfer from './Transfer.js';

import {getContractStorage} from '../tezos';

function DaoDaoDetails(){
       

  const [userData, setUserData] = useState([]);

		 useEffect(() => {
        async function fetchStorage() {
            let storage = await getContractStorage();
            console.log(storage);
            let daos = storage;
			let dev = { 'admin'        : storage.administrator,
						'daoname'      : storage.daoName,
						'tokenid'      : storage.daoTokenId.toString(),
						'tokenlimit'   : storage.maxTokenLimit.toString(),
						'tezbalance'   : storage.tezBalance.toString(),
						'tokenbalance' : storage.tokenBalance.toString()}
            let users = [];
             users.push(dev);
           
            setUserData(users);
        }
        fetchStorage();
        
    }, [])

    return(
	
        <div className="container">
            <div className="row">
                {userData.map((user, index) => 
                    <div className="col-md-12" key={index}>
                        <div className="card">
                            <div className="card-header">
                             <div className="Proposer">{'DAO Details'}</div>
                                
                            </div>
                            <div className="card-body">
								<tr>
									<h6>Administrator &emsp;:</h6> <td className="Admin">&ensp;{user.admin}</td>
                            	</tr>
								<tr>
									<h6>DAO Name &emsp;&emsp;: </h6> <td className="DAO Name">&ensp;{user.daoname}</td>
								</tr>
								<tr>
									<h6>DAO Token Id  &ensp; : </h6> <td className="DAO Token Id">&ensp;{user.tokenid}</td>
                                </tr>

                            </div>
                        </div>
						<div className="card" >
                            <div className="card-header">
                             <div className="Proposer">{'Treasury'}</div>
                                
                            </div>
                            <div className="card-body">
                            	 <tr>
                                 <h6>Total Tokens Generated &ensp; &nbsp;: </h6> <td className="DAO Name">&ensp;{user.tokenlimit}</td>
								 </tr>
								 <tr>
                                 <h6>Balance in Tokens &emsp;&emsp;&emsp;&ensp;: </h6> <td className="DAO Name">&ensp;{user.tokenbalance}</td>
								 </tr>
								 <tr>
                                 <h6>Balance in Tezos &emsp;&emsp;&emsp;&emsp;: </h6> <td className="DAO Name">&ensp;{user.tezbalance}</td>
								 </tr>

                            </div>
						</div>
                    </div>
                )}
            </div>
            
        </div>
    );
}

export default DaoDaoDetails;
