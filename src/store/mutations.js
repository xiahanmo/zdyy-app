export default{
  changeCityCommit (state, city) {
    console.log(city)
    state.city = city
    try {
      localStorage.city = city
    } catch (error) {
    }
  },
  POSITION (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (error) {
    }
  },
  lngAndlat (state, obj) {
    state.longitude = obj.longitude
    state.latitude = obj.latitude
  }
}
