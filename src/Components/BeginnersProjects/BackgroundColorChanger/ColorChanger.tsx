import React, { useEffect, useState } from 'react'
import { getRandomHexDigit } from '../../../tools'

const ColorChanger = () => {
  const [currentColor, setCurrentColor] = useState('')
  const [isCopied, setIsCopied] = useState(false)

  console.log(currentColor)
  const ColorChangeHandler = () => {
    const hexCode = Array.from({ length: 6 }, getRandomHexDigit).join('')
    setCurrentColor('#' + hexCode)
    setIsCopied(false)
  }

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(currentColor)
      .then(() => {
        setIsCopied(true)
      })
      .catch((err) => {
        console.error('Unable to copy text to clipboard:', err)
      })
  }

  useEffect(() => {
    let timeoutId = 10

    if (isCopied) {
      timeoutId = setTimeout(() => {
        setIsCopied(false)
      }, 1000)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [isCopied])

  return (
    <div>
      <div
        className="colorbox"
        style={{
          backgroundColor: currentColor,
          width: '350px',
          height: '150px',
          border: '2px solid red',
        }}
        onClick={copyToClipboard}
      >
        {isCopied ? 'Copied!' : ''}
      </div>
      <button
        onClick={ColorChangeHandler}
        style={{ margin: '10px', width: '150px', height: '50px' }}
      >
        ChangeColor
      </button>
    </div>
  )
}

export default ColorChanger

// import { useState } from 'react'
// import { getRandomHexDigit } from './tools'

// const ColorChanger = () => {
//   const [currentColor, setCurrentColor] = useState<string>('')

//   const ColorChangeHandler = () => {
//     setCurrentColor(getRandomColor())
//     console.log('currentColor', currentColor)
//   }
//!Method 1
// function getRandomColor() {
//   let letter = '012345ABCDEF'
//   let color = '#'

//   for (let i = 0; i <= 5; i++) {
//     color += letter[Math.floor(Math.random() * 16)]
//   }
//   return color
// }
//!Method 2
// function getRandomColor() {
//   let letter = '012345ABCDEF'
//   return (
//     '#' +
//     Array.from(
//       { length: 6 },
//       () => letter[Math.floor(Math.random() * 16)]
//     ).join('')
//   )
// }
//!Method 3

// function getRandomColor() {
//   let letter = '012345ABCDEF'
// return (
//   '#' +
//   Array.from({ length: 6 })
//     .map(() => letter[Math.floor(Math.random() * 16)])
//     .join('')
// )

// return (
//   '#' +
//   [...Array(6)].map(() => letter[Math.floor(Math.random() * 16)]).join('')
// )

//   return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
//     Math.random() * 256
//   )}, ${Math.floor(Math.random() * 256)})`
// }
//!Method 4

// function getRandomColor() {
//   // Generate six random hexadecimal digits
//   const randomDigits = Array.from({ length: 6 }, () =>
//     Math.floor(Math.random() * 16)
//   )

//   // Convert each digit to a hexadecimal character
//   const hexColor = randomDigits.map((digit) => digit.toString(16)).join('')

//   // Prepend '#' to the color code
//   return '#' + hexColor
// }

// function getRandomHexDigit(): string {
//   const hexCharacters = '0123456789ABCDEF'
//   const randomIndex = Math.floor(Math.random() * 16)
//   return hexCharacters[randomIndex]
// }

// function getRandomColor(): string {
//   // Generate six random hexadecimal digits
//   const randomDigits = Array.from({ length: 6 }, getRandomHexDigit)

//   // Concatenate the digits to form a six-character color code
//     return '#' + randomDigits.join('')
//   }
//   return (
//     <>
//       <div
//         className="colorbox"
//         style={{
//           backgroundColor: currentColor,
//           width: '350px',
//           height: '150px',
//           border: '2px solid red',
//         }}
//       ></div>
//       <button
//         onClick={ColorChangeHandler}
//         style={{ margin: '10px', width: '150px', height: '50px' }}
//       >
//         ChangeColor
//       </button>
//     </>
//   )
// }

// export default ColorChanger
