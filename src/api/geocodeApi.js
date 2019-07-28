import axios from "axios";

function getLocationByCityName(userValue) {
  let location = {};
  return axios.get(`http://api.geonames.org/searchJSON?q=${userValue}&maxRows=1&username=likeran&featureClass=P`)
  .then(result => {
    if (result.data.totalResultsCount === 0) {
      return location = "there is no such city in our database";
    }
    const {lat, lng} = result.data.geonames[0];
    location = {
      lat,
      lng
    }
    return location;
  })
}

export default getLocationByCityName;