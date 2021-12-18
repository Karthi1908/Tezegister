import React, { useState } from "react"
import { getContract, getContractStorage } from '../tezos';

import '../static/css/register.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register(){

    const [modalIsOpen, setIsOpen] = useState(false);
    const [gameId, setgameId] = useState("");
    

    function openModal(){
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    async function handleClick() {
        // Register here
        
        const contract = await getContract();
		const storage = await getContractStorage();
		const surety = await storage.gameDetails.get(gameId).surety;
		const amt   = Number(surety);
        const op =  await contract.methods.joinGame(gameId).send({amount : amt});
        await op.confirmation();
        alert("Registered!")
        
    }

    return(
        <>
            <Modal
                show={modalIsOpen}
                onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Game Id</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter GameId " 
                            id="gameId"
                            onChange={e => setgameId(e.target.value)}
                            value={gameId}
                            classaddress="modal-input"/>
                    </Form.Group>

                   
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>Close</Button>
                    <Button variant="primary" onClick={handleClick} className="modal-submit-btn">Submit</Button>
                </Modal.Footer>
            </Modal>
            <button onClick={openModal} className="btn btn-DaoDetails">Register</button>
        </>
    );
}

function Verify(){

    const [modalIsOpen, setIsOpen] = useState(false);
    const [gameId, setGameId] = useState("");
	const [gstatus, setGstatus] = useState("");
	const [user, setUser] = useState("");
    

    function openModal(){
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    async function handleClick() {
        // Register here
        
        const contract = await getContract();
        const op =  await contract.methods.verifyUser(gameId, gstatus, user).send();
        await op.confirmation();
        alert("Verification done!")
        
    }

    return(
        <>
            <Modal
                show={modalIsOpen}
                onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Game Id</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter GameId " 
                            id="gameId"
                            onChange={e => setGameId(e.target.value)}
                            value={gameId}
                            classaddress="modal-input"/>
						<Form.Label>User</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter User " 
                            id="gameId"
                            onChange={e => setUser(e.target.value)}
                            value={user}
                            classaddress="modal-input"/>
						<Form.Label>Status</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Pass / Fail " 
                            id="status"
                            onChange={e => setGstatus(e.target.value)}
                            value={gstatus}
                            classaddress="modal-input"/>
                    </Form.Group>

                   
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>Close</Button>
                    <Button variant="primary" onClick={handleClick} className="modal-submit-btn">Submit</Button>
                </Modal.Footer>
            </Modal>
            <button onClick={openModal} className="btn btn-DaoDetails">Verify User</button>
        </>
    );
}

export {Register, Verify};
