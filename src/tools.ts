export const getRandomHexDigit = () => {
  const hexCharacters = '0123456789ABCDEF'
  const randomIndex = Math.floor(Math.random() * 16)
  return hexCharacters[randomIndex]
}
