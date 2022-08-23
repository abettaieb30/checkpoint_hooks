import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { v4 as uuidv4 } from 'uuid';
 


function AddMovie({addMovie}) {
    
  
    const [show, setShow] = useState(false);
    const [newMovie, setnewMovie] = useState({
      id :uuidv4() ,
      title:"",
      poster:"",
      description:"",
      year:"",
      rate:""
    });
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange=(e)=>{ setnewMovie({...newMovie,[e.target.name]:e.target.value})}
  
  const handleSave = () => {
    addMovie(newMovie)
    handleClose()
  }
  
  
  return (
    <div>
       <Button variant="primary" onClick={handleShow}>
       Add a Movie to the list!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie Adding</Modal.Title>
        </Modal.Header>
        <Modal.Body className='addcard'>
            <input type="text" placeholder='Movie Title' className='item' onChange={handleChange}name="title"/>
            <input type="url" placeholder='poster' className='item'onChange={handleChange}name="poster"/>
            <input type="text" placeholder='Movie Description' className='item' onChange={handleChange} name="description"/>
            <input type="text" placeholder='Release year' className='item'onChange={handleChange} name="year"/>
            <input type="text" placeholder='Rate' className='item'onChange={handleChange} name="rate"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}> Cancel </Button>
          <Button variant="primary" onClick={handleSave}>
            Add the movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )}
  export default AddMovie
