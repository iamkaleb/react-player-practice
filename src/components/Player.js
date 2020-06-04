import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import NoteForm from './NoteForm'
import NoteList from './NoteList'
 
const Player = props => {

    return (
    <article>
        <h1>React Player</h1>
        <ReactPlayer
            className="react-player"
            url='https://www.youtube.com/watch?v=DLX62G4lc44' 
            controls />
        <NoteList />
    </article>
    )
}

export default Player