import React from 'react';

const Playlist = (props) => {
  return (
  <li className={props.styling} onClick={props.handlePlaylistSelect}> {props.playlist.name} </li>
  )
}


export default Playlist;
