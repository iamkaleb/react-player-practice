import React, { useEffect, useState } from 'react';
import data from '../modules/data';
// import NoteList from './NoteList'

const NoteForm = props => {
    const [note, setNote] = useState({timestamp: "", noteContent: ""});

    const handleFieldChange = event => {
        const stateToChange = {...note}
            
        stateToChange[event.target.id] = event.target.value;
        setNote(stateToChange);
    };

    const constructNote = event => {
        event.preventDefault();
        props.setIsLoading(true);
        data.post(note)
            .then(props.getNotes)
            .then(props.setIsLoading(false))
    };

    return (
        <>
            <form>
                <textarea 
                placeholder="Add note"
                id="noteContent"
                name="noteContent"
                rows="4"
                cols="50"
                onChange={handleFieldChange}
                >
                </textarea>
                <br></br>
                <button
                    type="button"
                    disabled={props.isLoading}
                    onClick={constructNote}
                >Submit timestamp</button>
            </form>
        </>
    );
};

export default NoteForm