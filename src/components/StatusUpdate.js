import React, { useState } from 'react';
import {Tezos, getContract } from '../tezos';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../static/css/transfer.css';

function StatusUpdate(props){

    const [modalIsOpen, setIsOpen] = useState(false);
    const [vote, setVote] = useState(0);

    function openModal(){
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    async function handleClick() {
        // Send tez
        const contract = await getContract();
        const op =  await contract.methods.updateStatus( props.pID).send();
        await op.confirmation();
        alert("Latest Status Displayed")

        setIsOpen(false);
    }

    return(
        <>

            <button onClick={handleClick} className="btn btn-transfer"><span className="text">Latest</span> </button>
        </>
    );
}

export default StatusUpdate;
