import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { setNewColor } from '../helpers/setNewColor';
import { ColorPicker } from './ColorPicker';
import { v4 as uuidv4 } from 'uuid';
import { useModal } from '../hooks/useModal';

export const AddItem = ({setItems}) => {

    const defaultState = {
        title: '',
        desc: '',
        color: '#333333'
    }

    const [{title,desc,color}, setState] = useState(defaultState);

    const {isModalOpen, openModal, closeModal} = useModal();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.length > 0){
            const newItem = {
                id: uuidv4(),
                title: title,
                desc: desc,
                datetime: new Date().toLocaleString(),
                color: color
            }
            setNewColor(color);
            setItems((items) => [newItem,...items])
            setState({...defaultState});
            closeModal();
        }
    }

    const handleCancel = (e) => {
        setState({...defaultState});
        closeModal();
    }

    const handleInputChange = (e) => setState(state => ({
        ...state,
        [e.target.name]: e.target.value
    }));

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            handleSubmit(e);
        }
    }

    return (
        <div>
            <div className='row mb-4 mt-2'>
                <div className='col-12'>
                    <Button className='btn btn-success d-block p-4 m-0 w-100 add-button' onClick={openModal}>New</Button>
                </div>
            </div>
            <Modal show={isModalOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                <Modal.Title>New Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row mt-2 mb-2' onKeyPress={handleKeyPress}>
                        <div className='col-12'>
                            <label htmlFor="input-title" className="form-label">Title:</label>
                            <input type="text" className='form-control' id='input-title' name='title' value={title} onChange={handleInputChange} required></input>
                        </div>
                        <div className='col-12 mt-3'>
                            <label htmlFor="input-desc" className="form-label">Description:</label>
                            <input className='form-control' name='desc' id='input-desc' value={desc} onChange={handleInputChange}></input>
                        </div>
                        <div className='col-12 mt-3'>
                            <ColorPicker setColor={handleInputChange} color={color}></ColorPicker>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleSubmit}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
