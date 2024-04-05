import { getRandomInt } from "./getRandomInt"

const pathPrefix = "./src/assets/bodies/";
const bodies = [
  "blue",
  "dark-brown",
  "dark-green",
  "light-brown",
  "yellow-green",
]
export const getRandomBody = () => {
  return `${pathPrefix}${bodies[(getRandomInt(5))]}.png`;
}