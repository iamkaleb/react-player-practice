import React from 'react';

const NoteCard = props => {
    return (
        <div className="note">
            <button type="button" key={props.note.id}>{props.timestamp}</button><p>{props.noteContent}</p>
        </div>
    )
}

export default NoteCard