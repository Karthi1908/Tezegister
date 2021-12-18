import React, { useState } from "react"
import { getContract, getActiveAccount } from '../tezos';
import Transfer from './Transfer.js';

import '../static/css/register.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DaoDetails(){
	const contractAddress = getContract();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [holding, setHolding] = useState("");
    const [count, setCount] = useState("");
    const [surety, setSurety] = useState("");
    

    function openModal(){
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    async function handleClick() {
        // DaoDetails here
        
		//const user = await getActiveAccount().address;
        const contract = await getContract();
        const op =  await contract.methods.newGame( count, holding , name, surety ).send( {amount : surety});
        await op.confirmation();
        alert("New Game Started!")
        
    }

    return(
        <>
            <Modal
                show={modalIsOpen}
                onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>New Game Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Game Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Name" 
                            id="name"
                            onChange={e => setName(e.target.value)}
                            value={name}
                            classname="modal-input"/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Holding Period</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="(Holding Period)" 
                            id="holding"
                            onChange={e => setHolding(e.target.value)}
                            value={holding}
                            classname="modal-input"/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Member Count</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Member Count" 
                            id="count"
                            onChange={e => setCount(e.target.value)}
                            value={count}
                            classname="modal-input"/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Surety Amount</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="(numbers only)" 
                            id="surety"
                            onChange={e => setSurety(e.target.value)}
                            value={surety}
                            classname="modal-input"/>
                    </Form.Group>
                   
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>Close</Button>
                    <Button variant="primary" onClick={handleClick} className="modal-submit-btn">Submit</Button>
                </Modal.Footer>
            </Modal>
            <button onClick={openModal} className="btn btn-DaoDetails">Start a Game</button>
        </>
    );
}

export default DaoDetails;
