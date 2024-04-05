import { getRandomInt } from "./getRandomInt"

const bodies = [
  "blue",
  "dark-brown",
  "dark-green",
  "light-brown",
  "yellow-green",
]
export const getRandomBody = () => {
  const index = getRandomInt(5);
  console.log(index);
  return bodies[index];
}