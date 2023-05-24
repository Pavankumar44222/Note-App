import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeNote, updateNote } from '../Redux/action';
import { useNavigate } from 'react-router-dom';
import './AllNotes.css'

export default function AllNotes() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editNoteId, setEditNoteId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  const handleEditNote = (note) => {
    setEditNoteId(note.id);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  const handleUpdateNote = (e) => {
    e.preventDefault();
    dispatch(updateNote(editNoteId, editTitle, editContent));
    setEditNoteId(null);
    setEditTitle('');
    setEditContent('');
  };

  const handleDeleteNote = (id) => {
    dispatch(removeNote(id));
  };

  return (
    <>
    <nav>
        <h1 style={{textAlign:'center'}}>All Notes </h1>
        <button className="button-29" role="button" onClick={() => navigate('/')}>
          Home
        </button>
        </nav>
        <div>
          {
          notes.map((note) => (
            <div className="mainbody" key={note.id}>
              <div className="form-container">
                {editNoteId === note.id ? (
                  <form onSubmit={handleUpdateNote}>
                    <div>
                      <label htmlFor="">Title:</label><br />
                      <input
                        type="text"
                        id="editTitle"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="">Content:</label><br/>
                      <textarea
                        id="editContent"
                        rows="3"
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={() => setEditNoteId('')}>
                      Cancel
                    </button>
                  </form>
                ) : (
                    <div class="card w-50">
                      <div class="card-body">
                        <h5 class="card-title">{note.title}</h5>
                      <p class="card-text">{note.content}</p>
                      <button className="btn btn-danger" onClick={() => handleDeleteNote(note.id)}>
                               Remove
                             </button>
                             <button className="btn btn-secondary" onClick={() => handleEditNote(note)}>
                               Update
                             </button>
                      </div>
                    </div>
                )}
              </div>
            </div>
          ))}
        </div>
    </>
  );
}