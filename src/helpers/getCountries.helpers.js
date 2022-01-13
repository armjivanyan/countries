import { BASE_URL } from "../constants/url.constants.js";

export async function getCountries() {
  const url = `${BASE_URL}all`;
  const res = await fetch(url)
    .then((r) => r.json())
    .then((r) => r);

  return res;
}
