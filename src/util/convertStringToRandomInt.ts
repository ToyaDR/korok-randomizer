import { getRandomInt } from "./getRandomInt"

export const convertStringToRandomInt = (stringToConvert: string) => {
  const intMax = Array.from(stringToConvert)
    .map(char => char.charCodeAt(0))
    .reduce((acc, asciiValue) => acc + asciiValue, 0)

    return getRandomInt(intMax);
}