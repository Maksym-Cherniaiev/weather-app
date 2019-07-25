import get from "lodash.get";
import Position from "./geocode";

function getLocationByCity() {
  return get(Position, "results[0].geometry.location", null);
}

export default getLocationByCity;