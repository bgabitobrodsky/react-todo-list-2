import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { setNewColor } from '../helpers/setNewColor';
import { ColorPicker } from './ColorPicker';
import { v4 as uuidv4 } from 'uuid';

export const AddItem = ({setItems}) => {

    const defaultState = {
        title: '',
        desc: '',
        color: '#333333',
        isModalOpen: false
    }

    const [{title,desc,color,isModalOpen}, setState] = useState(defaultState);

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
            
        }
    }

    const handleCancel = (e) => {
        setState({...defaultState});
        handleClose();
    }

    const handleChangeTitle = (e) => setState(state => ({
        ...state,
        title: e.target.value
    }));

    const handleChangeDesc = (e) => setState(state => ({
        ...state,
        desc: e.target.value
    }));
    
    const handleChangeColor = (e) => setState(state => ({
        ...state,
        color: e.target.value
    }));

    const handleClose = () => setState(state=>({
        ...state,
        isModalOpen: false
    }));

    const handleShow = () => setState(state=>({
        ...state,
        isModalOpen: true
    }));


  return (
    <div>
        <div className='row mb-4 mt-2'>
            <div className='col-12'>
                <Button className='btn btn-success d-block p-4 m-0 w-100 add-button' onClick={handleShow}>New</Button>
            </div>
        </div>
            <Modal show={isModalOpen} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>New Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className='row mt-2 mb-2'>
                            <div className='col-12'>
                                <label htmlFor="input-title" className="form-label">Title</label>
                                <input type="text" className='form-control' id='input-title' value={title} onChange={handleChangeTitle} required></input>
                            </div>
                            <div className='col-12 mt-3'>
                                <label htmlFor="input-desc" className="form-label">Description</label>
                                <input className='form-control' id='input-desc' value={desc} onChange={handleChangeDesc}></input>
                            </div>
                            <div className='col-12 mt-3'>
                                <ColorPicker setColor={handleChangeColor} color={color}></ColorPicker>
                            </div>
                        </div>
                    </form>
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
