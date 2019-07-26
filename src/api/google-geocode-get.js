import get from "lodash.get";
import Position from "./google-geocode-example";

function getLocationByCity() {
  return get(Position, "results[0].geometry.location", null);
}

export default getLocationByCity;