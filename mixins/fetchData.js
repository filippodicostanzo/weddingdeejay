export default {

  async getArtists() {
    const res = await fetch('https://weddingdeejay.herokuapp.com/artists');
    return res.json();
  },

  async getServices() {
    const res = await fetch('https://weddingdeejay.herokuapp.com/services');
    return res.json();
  },

  async getLocations() {
    const res = await fetch('https://weddingdeejay.herokuapp.com/locations?_sort=order:ASC');
    return res.json();
  },

  async getPackages() {
    const res = await fetch('https://weddingdeejay.herokuapp.com/packages');
    return res.json();
  }

}

