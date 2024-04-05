import { getRandomInt } from "./getRandomInt";

const pathPrefix = "./src/assets/accessories/right-hand/";
const rightHandAccessories = [
  "berry-branch-right"
];

export const getRandomRightHandAccessory = () => {
  const index = getRandomInt(rightHandAccessories.length + 1);
  if (index >= rightHandAccessories.length) {
    return null;
  }
  return `${pathPrefix}${rightHandAccessories[index]}.png`;
}