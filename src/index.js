import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const book1 = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  image: './images/book-1.jpg'
}

const book2 = {
  author: 'James Clear',
  title: 'Atomic Habits',
  image: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg'
}

function BookList() {
  return (
    <section className="booklist">
      <Book
        image={book1.image}
        author={book1.author}
        title={book1.title}
      />
      <Book
        image={book2.image}
        author={book2.author}
        title={book2.title}
      />
    </section>
  )
}

// Writing JS within JSX: We use curly brackets and use expressions within. Remember: An expression must return a value

// Every component in React, has a props object. First steps towards making a component re-usable & dding dynamism to a component

function Book({ image, author, title }) {
  return (
    <article className="book">
      <img
        src={image}
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
    </article>
  )
}

// Let's further create sub-components for Book

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
