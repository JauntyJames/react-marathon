import React from 'react'
const Song = (props) => {


   return (
     <li className={props.styling} onClick={props.handleSongSelect}>{props.name}-{props.artist}</li>

   )
}

export default Song;
