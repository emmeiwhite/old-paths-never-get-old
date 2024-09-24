import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Assuming that we have fetched the data from an API
// Remember a general principle: Fetch & Render
const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book-1.jpg',
    id: 1
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2
  }
]

function BookList() {
  return (
    <section className="booklist">
      {/* Iterate over list */}
      {books.map(book => (
        <Book {...book} />
      ))}
    </section>
  )
}

// Writing JS within JSX: We use curly brackets and use expressions within. Remember: An expression must return a value

// Every component in React, has a props object. First steps towards making a component re-usable & dding dynamism to a component

function Book({ img, author, title, children }) {
  return (
    <article className="book">
      <img
        src={img}
        className="author-img"
        alt={title}
      />
      <h2 className="title">{title}</h2>
      <h4
        className="author"
        style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}
      >
        <strong>Author:</strong> {author}
      </h4>
      {children}
    </article>
  )
}

// Let's further create sub-components for Book

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
