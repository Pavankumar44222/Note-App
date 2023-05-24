import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addNote } from '../Redux/action';
import './NotesForm.css'

const NotesForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmission = (e) => {
    e.preventDefault();
    dispatch(addNote(title, content));
    setTitle('');
    setContent('');
    navigate('/allNotes');
  }

  return (
    <>
    <h3 style={{textAlign:'center'}}>Notes App by using React  Redux and React Router </h3>
  <div className='formContainer mx-auto bg-gradient-primary text-success'>
      <h3>React Notes</h3>
      <form onSubmit={handleSubmission}>
          Title <br/>
          <input type='text' name='title' value={title} placeholder='enter title' onChange = {(e)=> setTitle(e.target.value)} required/> <br/>
          Content <br/>
          <textarea rows="4"  name='content' value={content} placeholder='enter content' onChange = {(e)=> setContent(e.target.value)} required></textarea>
          <button class="button-29" role="button"  >Add note</button>
         
      </form>
  </div>
</>
  )
}

export default NotesForm;