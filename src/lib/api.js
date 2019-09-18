const API_BASE_URL = 'http://localhost:3001'

const Api = {
  async getJSON(endpoint) {
    const res = await fetch(`${API_BASE_URL}${endpoint}`)
    return res.json()
  },

  getPlace(placeId) {
    return this.getJSON(`/places/${placeId}`)
  }
}

export default Api
