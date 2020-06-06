import React from 'react';

const NoteCard = props => {
    return (
        <div className="note">
        <button onClick={() => props.reactPlayer.current.seekTo(180)}>Seek to 3:00</button>
        <button onClick={() => console.log(props.reactPlayer.current.getCurrentTime())}>Get current time</button>
        </div>
    )
}

export default NoteCard