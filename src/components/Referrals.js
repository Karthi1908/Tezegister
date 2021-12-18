import React, { useState } from "react";
import  {Component} from 'react';
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
                        <Form.Label>Game Id</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Game Id" 
                            id="gameId"
                            onChange={e => setgameId(e.target.value)}
                            value={gameId}
                            classname="modal-input"/>
                    </Form.Group>
                    

                    <Form.Group className="mb-3">
                        <Form.Label>Refree Address</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Refree Address" 
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
            <button onClick={openModal} className="btn btn-DaoDetails">Add Referrals</button>
        </>
    );
}

function Challenges(){
	const contractAddress = getContract();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [gameId, setgameId] = useState("");
	const [user, setUser] = useState("");

    

    function openModal(){
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    async function handleClick() {
        // DaoDetails here
        
        const contract = await getContract();
        const op =  await contract.methods.challengeUser( gameId, user).send();
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
                        <Form.Label>Game Id</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Game Id" 
                            id="gameId"
                            onChange={e => setgameId(e.target.value)}
                            value={gameId}
                            classname="modal-input"/>
                    </Form.Group>
                    

                    <Form.Group className="mb-3">
                        <Form.Label>User Address</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Refree Address" 
                            id="referee"
                            onChange={e => setUser(e.target.value)}
                            value={user}
                            classname="modal-input"/>
                    </Form.Group>
                     
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>Close</Button>
                    <Button variant="primary" onClick={handleClick} className="modal-submit-btn">Submit</Button>
                </Modal.Footer>
            </Modal>
            <button onClick={openModal} className="btn btn-DaoDetails">Challenge User</button>
        </>
    );
}

export { Refferals, Challenges} ;
