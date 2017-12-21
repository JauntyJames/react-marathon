import React from 'react';
import PlaylistCollection from './PlaylistCollection';
import SongCollection from './SongCollection';

class App extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    let data = this.props.data

    let selectedPlaylistSongIds = data.playlists[this.props.data.selectedPlaylistId-1].songs;

    let filterById = (obj) => {
      return selectedPlaylistSongIds.includes(obj.id);
    }

    let selectedPlaylistSongs = data.songs.filter(filterById);

    return (
      <div className="App row">
        <div className="PlaylistCollection">
          <h1>Playlist</h1>
          <PlaylistCollection
            playlists={data.playlists}
            selectedPlaylistId={data.selectedPlaylistId}
          />

        </div>
        <div className="song-list">
          <h1>Songs</h1>
          <SongCollection
            songs={data.songs}
            selectedSongId={data.selectedSongId}

          />
        </div>
      </div>

    );
  }
}

export default App;
