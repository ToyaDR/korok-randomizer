import { getRandomInt } from "./getRandomInt"

const pathPrefix = "./src/assets/";
const bodies = [
  "blue",
  "darkbrown",
  "darkgreen",
  "lightbrown",
  "lightgreen",
]

export const getRandomBody = (pathInfix: 'flying' | 'standing' | 'handsup') => {
  const file = `${pathPrefix}${pathInfix}/bodies/${bodies[getRandomInt(bodies.length)]}.png`;
  console.log(file);
  return file;
}