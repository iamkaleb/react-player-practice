import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import AnnotationCard from './Annotations/Annotations'
 
const Player = props => {

    return (
    <>
        <ReactPlayer
            className="react-player"
            url='https://www.youtube.com/watch?v=IomXcdAAt7E' 
            playing />
        <AnnotationCard />
    </>
    )
}

export default Player