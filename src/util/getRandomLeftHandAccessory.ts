import { getRandomInt } from "./getRandomInt";

const pathPrefix = "./src/assets/accessories/left-hand/";
const leftHandAccessories = [
  "berry-branch-left",
  "leaf-fan",
];

export const getRandomLeftHandAccessory = () => {
  const index = getRandomInt(leftHandAccessories.length + 1);
  if (index >= leftHandAccessories.length) {
    return null;
  }
  return `${pathPrefix}${leftHandAccessories[index]}.png`;
}