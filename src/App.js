import Home from './components/Home.js';
import HomeTez from './components/HomeTez.js';
import Navbar from './components/Navbar.js';
import User from './components/User.js';
import Register from './components/Register.js';
import Title from './components/Title.js';
import Details from './components/Details.js';
import DaoDaoDetails from './components/DaoDaoDetails.js';
import NewReferral from './components/NewReferral.js';
import Tezgister  from './components/tezgister.js';
import React, {Component} from 'react';
import FA2 from './components/FA2.js';

function App() {
  return (
    <>

      
   <Title />
	<Tezgister />
	<HomeTez />
   
    <Details />
	  <Home />
   
   
   <Navbar />
   < NewReferral />
   

	
   

    
       
  
     
    </>
  );
}

export default App;
