import React, { useEffect, useState } from 'react';
import data from '../modules/data';
import NoteList from './NoteList'

const NoteForm = props => {
    const [note, setNote] = useState({timestamp: "", noteContent: ""});

    const handleFieldChange = event => {
        const stateToChange = {...note}
            
        stateToChange[event.target.id] = event.target.value;
        setNote(stateToChange);
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
                <input 
                type="number" 
                id="timestamp" 
                placeholder="Timestamp"
                onChange={handleFieldChange}
                >
                </input>
                <br></br>
                <button
                    type="button"
                    // disabled={isLoading}
                    onClick={props.constructNote}
                >Submit</button>
            </form>
        </>
    );
};

export default NoteForm