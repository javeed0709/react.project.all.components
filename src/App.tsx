import React from 'react'
import './index.css'
import {
  SignatureDateApp,
  ColorChanger,
} from './Components/BeginnersProjects'
import PostLike from './Components/BeginnersProjects/PostLike/PostLike'
import Calculator from './Components/Calculator/Calculator'
import { SignatureDateApp, ColorChanger } from './Components/BeginnersProjects'

const App = () => {
  return (
    <>
      {/* <SignatureDateApp /> */}
      {/* <Calculator /> */}
      {/* <ColorChanger /> */}
      <ColorChanger />
      <PostLike />
    </>
  )
}

export default App
