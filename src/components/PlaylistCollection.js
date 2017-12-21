import React, { Component } from 'react';
import Playlist from './Playlist'

const PlaylistCollection = props => {

    let playlistImport = props.playlists;

    let playlists = playlistImport.map((playlist) => {
      let className;

      if(props.selectedPlaylistId === playlist.id) {
        className = "selected"
      }


      let handlePlaylistSelect = () => {
        props.handlePlaylistSelect(playlist.id)
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

export default PlaylistCollection;
