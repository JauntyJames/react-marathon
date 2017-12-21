import React, { Component } from 'react';
import Playlist from './Playlist'

class PlaylistCollection extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    let playlistImport = this.props.playlists;

    let playlists = playlistImport.map((playlist) => {
      let className;

      if(this.props.selectedPlaylistId === playlist.id) {
        className = "selected"
      }


      let handlePlaylistSelect = () => {
        this.props.handlePlaylistSelect(playlist.id)
      }

      return (
        <Playlist
          key={playlist.id}
          playlist={playlist}
          styling={className}
          handlePlaylistSelect={handlePlaylistSelect}
        />
      )
    }
    )
    return (
      <ul>
        {playlists}
      </ul>
    )
  }
}

export default PlaylistCollection;
