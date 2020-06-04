import React, { useState, useEffect } from 'react';
import NoteCard from './NoteCard'
import data from '../modules/data';
import NoteForm from './NoteForm'

const NoteList = (props) => {
    const [note, setNote] = useState({timestamp: "", noteContent: ""});
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getNotes = () => {
        return data.getAllNotes().then(notes => {
            setNotes(notes)
        })
    };

    const constructNote = event => {
        event.preventDefault();
        setIsLoading(true);
        data.post(note)
            .then(setNotes);
    };

    useEffect(() => {
        getNotes();
    }, []);


    return (
        <>
            <NoteForm 
                constructNote={constructNote}
            />
            <section className="note-list">
                {notes.map(note =>
                <NoteCard 
                key={note.id}
                note={note}
                />
                )}
            </section>
        </>
    )
}

export default NoteList