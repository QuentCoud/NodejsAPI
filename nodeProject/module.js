//Ceci est un export nommé
export const printMessage = (message) => {
  console.log(message)
}

export const utils = {
  printMessage: printMessage,
}
//1seul export default par module
export default utils;