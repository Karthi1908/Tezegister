import React, { useState } from 'react';
import {Tezos, getContract } from '../tezos';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../static/css/transfer.css';

function SubmitOptions(props){

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
        const op =  await contract.methods.voteOnProposal( props.pID, vote ).send();
        await op.confirmation();
        alert("Vote Submitted!")

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
                        <Form.Label>Proposal options: </Form.Label>
                         
							<select value={vote} id="vote" onChange={e => setVote(e.target.value)}>
								<option value="Agree">Agree</option>
								<option value="DisAgree">Disagree</option>
							</select>
                                                
				
                    </Form.Group>
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>Close</Button>
                    <Button variant="primary" onClick={handleClick} className="modal-submit-btn">Submit</Button>
                </Modal.Footer>
            </Modal>
            <button onClick={openModal} className="btn btn-transfer"><span className="text">Vote</span> 💰</button>
        </>
    );
}

export default SubmitOptions;
