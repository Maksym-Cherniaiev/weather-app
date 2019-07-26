function getCurrentLocation() {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  })
}

function getUserLocation() {
 return getCurrentLocation()
 .then(position => {
   let location = {};
   const {latitude: lat, longitude: lng} = position.coords;
   location = {
     lat,
     lng
   }
   return location;
 })
 .catch(err => console.log(err))
}

export default getUserLocation;