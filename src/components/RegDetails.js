import React, { useState } from "react"
import { getContract, getActiveAccount } from '../tezos';
import Transfer from './Transfer.js';

import '../static/css/register.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegDetails(){
	const contractAddress = getContract();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [gameId, setGameId] = useState("");

    

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
        const op =  await contract.methods.addToRegistry( gameId ).send();
        await op.confirmation();
        alert("Added to Regsitry")
        
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
                        <Form.Label>Game Id</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Game Id" 
                            id="gameId"
                            onChange={e => setGameId(e.target.value)}
                            value={gameId}
                            classname="modal-input"/>
                    </Form.Group>
                    
                   
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>Close</Button>
                    <Button variant="primary" onClick={handleClick} className="modal-submit-btn">Submit</Button>
                </Modal.Footer>
            </Modal>
            <button onClick={openModal} className="btn btn-DaoDetails">Get Registered</button>
        </>
    );
}

function TokenMint(){
	const contractAddress = getContract();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [gameId, setGameId] = useState("");

    

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
        const op =  await contract.methods.mintTrustToken( gameId ).send();
        await op.confirmation();
        alert("Trust Token Minted")
        
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
                        <Form.Label>Game Id</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Game Id" 
                            id="gameId"
                            onChange={e => setGameId(e.target.value)}
                            value={gameId}
                            classname="modal-input"/>
                    </Form.Group>
                    
                   
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>Close</Button>
                    <Button variant="primary" onClick={handleClick} className="modal-submit-btn">Submit</Button>
                </Modal.Footer>
            </Modal>
            <button onClick={openModal} className="btn btn-DaoDetails">Mint Trust</button>
        </>
    );
}

export {RegDetails, TokenMint} ;
