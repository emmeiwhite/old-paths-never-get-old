import React from 'react'
import ReactDOM from 'react-dom/client'

function BookList() {
  return (
    <>
      <Book />
      <Book />
    </>
  )
}

function Book() {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

// Let's further create sub-components for Book

function Image() {
  return (
    <img src="https://images-na.ssl-images-amazon.com/images/I/61njsKWSC9L._AC_UL900_SR900,600_.jpg" />
  )
}

function Title() {
  return <h2>KIM’S LOST WORDS: A journey for justice, from the other side</h2>
}

function Author() {
  return (
    <p>
      Author: <strong>JAMAL T. MILLWOOD</strong>
    </p>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
