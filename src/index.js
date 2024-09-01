import React from 'react'
import ReactDOM from 'react-dom/client'

function Greeting() {
  return <h2>Welcome to React, TypeScript, NextJS & more</h2>
}

// Create root to inject all our application in it.

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<Greeting />)
