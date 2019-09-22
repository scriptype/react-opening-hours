const { hostname } = window.location
const API_BASE_URL = `http://${hostname}:3001`

const Api = {
  async getJSON(endpoint) {
    try {
      const res = await fetch(`${API_BASE_URL}${endpoint}`)
      return res.json()
    } catch (error) {
      console.error(error)
      throw error
    }
  },

  getPlace(placeId) {
    return this.getJSON(`/places/${placeId}`)
  }
}

export default Api
