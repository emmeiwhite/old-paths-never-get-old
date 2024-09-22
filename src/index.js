import React from 'react'
import ReactDOM from 'react-dom/client'

function Greeting() {
  return (
    <>
      <h1>Hello World!</h1>
      <p>Enough talk, let's act</p>
      <p>It's never too late, just believe in yourself</p>

      {/* Camel case for HTML Properties */}
      <div
        tabIndex={1}
        className="camel-case"
      >
        <label htmlFor="name">Name</label>
        <input
          readOnly={true}
          id="name"
        />
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greeting />)
