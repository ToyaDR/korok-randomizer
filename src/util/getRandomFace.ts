import { getRandomInt } from "./getRandomInt"

const pathPrefix = "./src/assets/";
const faceType = [
  'red-chevron',
  'orange-lemon', 
  'lightgreen-maple', 
  'green-winkheart', 
  'green-spearhead', 
  'green-longheart', 
  'green-long', 
  'green-lilypad', 
  'green-butterfly',
]
const noseType = [
  'blue',
  'darkbrown',
  'darkgreen',
  'lightbrown',
  'lightgreen',
]

export const getRandomFace = (pathInfix: 'flying' | 'standing' | 'handsup') => {
  const face = faceType[getRandomInt(faceType.length)];
  const nose = noseType[getRandomInt(noseType.length)];

  return `${pathPrefix}${pathInfix}/faces/${face}/${nose}-nose.png`;
}