import React from 'react';

const NoteCard = props => {
    return (
        <div className="note">
            <p>{props.note.timestamp}  </p><p>{props.note.noteContent}</p>
        </div>
    )
}

export default NoteCard