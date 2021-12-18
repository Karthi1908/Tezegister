import React, { useState } from 'react';
import {Tezos, getContract } from '../tezos';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../static/css/transfer.css';

function Transfer(props){

    const [modalIsOpen, setIsOpen] = useState(false);
    const [tez, setTez] = useState(0);

    function openModal(){
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    async function handleClick() {
        // Send tez
        const contract = await getContract();
		console.log(contract.address)
	
        const op = await Tezos.contract
        	.transfer({to: contract.address, amount: tez})
        	.send()
        await op.confirmation()
        alert("Sent!");

        setIsOpen(false);
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
                        <Form.Label>Enter amount to send: </Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="0.0" 
                            id="tez"
                            onChange={e => setTez(e.target.value)}
                            value={tez}
                            className="modal-input"/>
                    </Form.Group>
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>Close</Button>
                    <Button variant="primary" onClick={handleClick} className="modal-submit-btn">Submit</Button>
                </Modal.Footer>
            </Modal>
            <button onClick={openModal} className="btn btn-transfer"><span className="text">Support</span> 💰</button>
        </>
    );
}

export default Transfer;
