import React, { Component } from 'react'
import ReactPlayer from 'react-player'
 
const Player = props => {

    return <ReactPlayer 
        url='https://www.twitch.tv/videos/638166070' 
        playing />
}

export default Player