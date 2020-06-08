import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player'
import NoteCard from './NoteCard'
import data from '../modules/data';
import NoteForm from './NoteForm'

const NoteList = () => {
    const [playing, setPlaying] = useState(false)
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [targetTimestamp, setTargetTimestamp] = useState("");
    const [note, setNote] = useState({timestamp: "", noteContent: ""});

    const handleFieldChange = event => {
        const stateToChange = {...note}
        stateToChange.timestamp = getTimestamp();
        stateToChange[event.target.id] = event.target.value;
        setNote(stateToChange);
    };

    const constructNote = event => {
        event.preventDefault();
        setIsLoading(true);
        data.post(note)
            .then(getNotes)
            .then(setIsLoading(false))
    };

    const handlePlayPause = () => {
        playing ? setPlaying(false) : setPlaying(true)
    }

    const getNotes = () => {
        return data.getAllNotes().then(notes => {
            setNotes(notes)
        })
    };

    const player = React.useRef();

    const getTimestamp = () => {
        let currentTime = player.current.getCurrentTime()
        let minutes = Math.floor(currentTime / 60)
        let seconds = ('0' + Math.floor(currentTime - minutes * 60)).slice(-2);
        return `${minutes}:${seconds}`
    }

    const applyTimestamp = timestamp => {
        let minutes = parseInt(timestamp.split(":")[0])
        let seconds = parseInt(timestamp.split(":")[1])

        let targetTime = (minutes * 60) + seconds

        return player.current.seekTo(targetTime)
    }

    useEffect(() => {
        getNotes();
    }, []);



    return (
        <>
            <ReactPlayer
                className="react-player"
                url='https://www.youtube.com/watch?v=MdvoA-sjs0A'
                ref={player}
                playing={playing}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                controls
            />
            <button onClick={handlePlayPause}>{playing ? 'Create timestamp' : 'Cancel timestamp'}</button>
            <button onClick={() => applyTimestamp(120)}>Seek to 3:00</button>
            <button onClick={() => console.log(getTimestamp())}>Get current time</button>
            {!playing
            ? <form>
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
                    disabled={isLoading}
                    onClick={constructNote}
                >Submit timestamp</button>
            </form>
            : null}
            <section className="note-list">
                {notes.map(note => {
                    return <div className="note">
                                <button type="button" onClick={() => applyTimestamp(note.timestamp)} key={note.id}>{note.timestamp}</button><p>{note.noteContent}</p>
                            </div>
                })}
            </section>
        </>
    )
}

/* <NoteForm 
        getNotes={getNotes}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
    /> */

/*  <NoteCard
        key={note.id}
        note={note}
    /> */

export default NoteList