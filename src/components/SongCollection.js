import React, {Component} from 'react'
import Song from './Song'


class SongCollection extends Component{
  constructor(props){
    super(props)
  }
render(){


  let songs = this.props.songs.map((song)=>{

    let className;
    if (this.props.selectedSongId === song.id) {
      className = "selected"
    }

    let handleSongSelect = () => {this.props.handleSongSelect(song.id)}
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
}


export default SongCollection
