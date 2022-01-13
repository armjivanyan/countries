import { BASE_URL } from "../constants/url.constants.js";

export async function getCountryByName(name) {
  const url = `${BASE_URL}/name/${name}`;
  return await fetch(url)
    .then((r) => r.json())
    .then((r) => r);
}
