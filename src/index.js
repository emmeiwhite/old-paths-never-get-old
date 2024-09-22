import React from 'react'
import ReactDOM from 'react-dom/client'

function BookList() {
  return (
    <>
      <Book />
      <Book />
      <Book />
      <Book />
    </>
  )
}

function Book() {
  return (
    <article>
      <img src="" />
      <h2>Title Goes here</h2>
      <p>Author: </p>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
