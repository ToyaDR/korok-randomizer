import { getRandomInt } from "./getRandomInt";

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

export const getAccessories = (pathInfix: 'flying' | 'standing' | 'handsup') => {
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