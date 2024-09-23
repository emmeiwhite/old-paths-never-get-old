import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
    </section>
  )
}

function Book() {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

// Let's further create sub-components for Book

function Image() {
  return (
    <img
      src="./images/book-1.jpg"
      className="author-img"
    />
  )
}

function Title() {
  return <h2 className="title">KIM’S LOST WORDS: A journey for justice, from the other side</h2>
}

function Author() {
  return (
    <p className="author">
      <strong>Author:</strong> JAMAL T. MILLWOOD
    </p>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
