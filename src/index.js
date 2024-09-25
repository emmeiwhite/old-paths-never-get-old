import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Book from './components/Book'
import './index.css'
import books from './data'

function BookList() {
  // Assuming that we have fetched the data from an API
  // Remember a general principle: Fetch & Render

  const someValue = 'shakeAndBake'
  const displayValue = () => {
    console.log(someValue)
  }

  const getBook = id => {
    const currentBook = books.find(book => book.id === id)
    console.log(currentBook)
  }

  return (
    <section className="booklist">
      {/* Iterate over list */}
      {books.map((book, index) => (
        <Book
          {...book}
          key={book.id}
          someValue={someValue}
          displayValue={displayValue}
          getBook={getBook}
          serialNumber={index}
        />
      ))}
    </section>
  )
}

// Writing JS within JSX: We use curly brackets and use expressions within. Remember: An expression must return a value

// Every component in React, has a props object. First steps towards making a component re-usable & dding dynamism to a component

// Let's further create sub-components for Book

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
