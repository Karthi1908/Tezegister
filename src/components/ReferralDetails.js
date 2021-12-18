import React, { useState } from "react"
import { getContract } from '../tezos';
import Transfer from './Transfer.js';

import '../static/css/register.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Refferals(){
	const contractAddress = getContract();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [gameId, setgameId] = useState("");
	const [referee, setreferee] = useState("");

    

    function openModal(){
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    async function handleClick() {
        // DaoDetails here
        
        const contract = await getContract();
        const op =  await contract.methods.addReffral( gameId, referee).send();
        await op.confirmation();
        alert("Referral Added!")
        
    }

    return(
        <>
            <Modal
                show={modalIsOpen}
                onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Referral Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Referral</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Referral" 
                            id="gameId"
                            onChange={e => setgameId(e.target.value)}
                            value={gameId}
                            classname="modal-input"/>
                    </Form.Group>
                    

                    <Form.Group className="mb-3">
                        <Form.Label>Result Type</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Refree Address" 
                            id="referee"
                            onChange={e => setreferee(e.target.value)}
                            value={referee}
                            classname="modal-input"/>
                    </Form.Group>
                     
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>Close</Button>
                    <Button variant="primary" onClick={handleClick} className="modal-submit-btn">Submit</Button>
                </Modal.Footer>
            </Modal>
            <button onClick={openModal} className="btn btn-DaoDetails">Add Proposal</button>
        </>
    );
}

export default Refferals;
