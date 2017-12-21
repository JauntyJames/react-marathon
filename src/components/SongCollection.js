import React, {Component} from 'react'
import Song from './Song'


const SongCollection = props => {

  let songs = props.songs.map((song)=>{

    let className;
    if (props.selectedSongId === song.id) {
      className = "selected"
    }

    let handleSongSelect = () => {props.handleSongSelect(song.id)}
    return (
      <Song
        key = {song.id}
        name= {song.name}
        artist = {song.artist}
        album = {song.album}
        styling={className}
        handleSongSelect={handleSongSelect}
      />
    )
  }
)
  return(
    <ul>
      {songs}
    </ul>
  )

}


export default SongCollection
