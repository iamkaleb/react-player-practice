import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player'
import NoteCard from './NoteCard'
import data from '../modules/data';
import NoteForm from './NoteForm'

const NoteList = () => {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getNotes = () => {
        return data.getAllNotes().then(notes => {
            setNotes(notes)
        })
    };

    const reactPlayer = React.useRef();

    const getTimestamp = () => {
        reactPlayer.current.getCurrentTime()
    }

    const applyTimestamp = time => {
        reactPlayer.current.seekTo(time)
    }

    useEffect(() => {
        getNotes();
    }, []);

    // <button onClick={() => reactPlayer.current.seekTo(180)}>Seek to 3:00</button>
    // <button onClick={() => console.log(reactPlayer.current.getCurrentTime())}>Get current time</button>

    return (
        <>
            <ReactPlayer
                className="react-player"
                url='https://www.youtube.com/watch?v=MdvoA-sjs0A'
                playing
                controls
                ref={reactPlayer} 
            />
            <NoteForm 
                getNotes={getNotes}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
                getTimeStamp={getTimestamp}
                applyTimestamp={applyTimestamp}
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