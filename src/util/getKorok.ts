import { convertStringToRandomInt } from "./convertStringToRandomInt";
import { getRandomInt } from "./getRandomInt";

const pathPrefix = "./src/assets/";

const bodyType: ('standing' | 'flying' | 'handsup')[] = ['standing', 'flying', 'handsup'];
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
const noseAndBodyColor = [
  'blue',
  'darkbrown',
  'darkgreen',
  'lightbrown',
  'lightgreen',
];

const getHandsUpAccessories = () => {
  let accessories = [];
  const hasRight = getRandomInt(2);
  const hasLeft = getRandomInt(2);
  if (hasRight > 0) {
    accessories.push("./src/assets/handsup/accessories/berry-branch-right.png")
  }
  if (hasLeft > 0) {
    accessories.push("./src/assets/handsup/accessories/berry-branch-left.png")
  }

  return accessories;
}

const getAccessories = (pathInfix: 'flying' | 'standing' | 'handsup') => {
  switch(pathInfix) {
    case 'flying':
      return ["./src/assets/flying/accessories/leaf-fan.png"];
    case 'handsup':
      return getHandsUpAccessories();
    case 'standing':
    default:
        return [];
  }
}
const getKorok = (name: string) => {
  const randomInt = convertStringToRandomInt(name);
  
  const body = bodyType[randomInt % bodyType.length];
  const face = faceType[randomInt % faceType.length];
  const color = noseAndBodyColor[randomInt % noseAndBodyColor.length];

  const path = `${pathPrefix}${body}`

  return {
    face: `${path}/faces/${face}/${color}-nose.png`,
    body: `${path}/bodies/${color}.png`,
    accessories: getAccessories(body),
  }
}

export default getKorok;