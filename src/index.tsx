// import App from './App'
// import { createRoot } from 'react-dom/client'

// const root = createRoot(document.getElementById('root'))
// root.render(<App />)

import App from './App'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('root')

if (rootElement) {
  const root = createRoot(rootElement)
  root.render(<App />)
} else {
  console.error("Root element with id 'root' not found in the document.")
}
