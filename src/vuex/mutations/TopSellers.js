function SET_TOP_ARTISTS (state, artists) {
  state.top.artists = artists;
}

function SET_TOP_SONGS (state, songs) {
  state.top.songs = songs;
}

function SET_TOP_ALBUMS (state, albums) {
  state.top.albums = albums;
}

export default {
  SET_TOP_ARTISTS,
  SET_TOP_SONGS,
  SET_TOP_ALBUMS
};
