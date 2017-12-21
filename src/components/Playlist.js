import React from 'react';

const Playlist = (props) => {
  return (
  <li className={props.styling}> {props.playlist.name} </li>
  )
}


export default Playlist;
