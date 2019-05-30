function SET_FEATURED_ARTISTS (state, artists) {
  state.featured.artists = artists;
}

function SET_FEATURED_SONGS (state, songs) {
  state.featured.songs = songs;
}

function SET_FEATURED_ALBUMS (state, albums) {
  state.featured.albums = albums;
}

export default {
  SET_FEATURED_ARTISTS,
  SET_FEATURED_SONGS,
  SET_FEATURED_ALBUMS
};
