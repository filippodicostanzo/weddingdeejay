export default {

  async getArtists() {
    const res = await fetch('https://weddingdeejay.herokuapp.com/artists?_sort=order:ASC');
    return res.json();
  },

  async getServices() {
    const res = await fetch('https://weddingdeejay.herokuapp.com/services?_sort=order:ASC');
    return res.json();
  },

  async getLocations() {
    const res = await fetch('https://weddingdeejay.herokuapp.com/locations?_sort=order:ASC');
    return res.json();
  },

  async getPackages() {
    const res = await fetch('https://weddingdeejay.herokuapp.com/packages?_sort=order:ASC');
    return res.json();
  },

  async getCategories() {
    const res = await fetch('https://weddingdeejay.herokuapp.com/categories');
    return res.json();
  },
  async getPlaylists() {
    const res = await fetch('https://weddingdeejay.herokuapp.com/playlists?_sort=order:ASC');
    return res.json();
  },

  async getVideos() {
    const res = await fetch('https://api.vimeo.com/users/151602992/videos', {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 4b6f8b599830b497b6be580e2cc1c74b'
      }
    });
    return res.json();
  },




}

