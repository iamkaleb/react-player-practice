import React, { useRef } from 'react'
import ReactPlayer from 'react-player'
import NoteList from './NoteList'
 
const Player = props => {

    const reactPlayer = React.useRef();

    return (
    <article>
        <h1>React Player</h1>
        <ReactPlayer
            className="react-player"
            url='https://www.youtube.com/watch?v=MdvoA-sjs0A'
            playing
            controls
            ref={reactPlayer} />
        <button onClick={() => reactPlayer.current.seekTo(180)}>Seek to 3:00</button>
        <button onClick={() => console.log(reactPlayer.current.getCurrentTime())}>Get current time</button>
        <NoteList />
    </article>
    )
}

export default Player