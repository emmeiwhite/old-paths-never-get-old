import React, { useState } from 'react'
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
        <Book
          {...book}
          key={book.id}
        />
      ))}
    </section>
  )
}

// Writing JS within JSX: We use curly brackets and use expressions within. Remember: An expression must return a value

// Every component in React, has a props object. First steps towards making a component re-usable & dding dynamism to a component

function Book({ img, author, title, children }) {
  const [price, setPrice] = useState(0)
  const [userName, setUserName] = useState('')
  function handleChange(e) {
    console.log('Name of input:', e.target.name)
    console.log('Value of input:', e.target.value)
    setPrice(e.target.value)
  }

  const formStyles = {
    margin: '1rem 0'
  }

  const handleLoginForm = e => {
    e.preventDefault()
    console.log('Form is submitted & user details are sent to the backend')

    //   clear the form values
    setUserName('')
  }
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
      <input
        type="number"
        onChange={handleChange}
        value={price || ''}
        name="price"
      />

      {price > 0 && <p>Price: {price}</p>}

      <form
        style={formStyles}
        onSubmit={handleLoginForm}
      >
        <h2>Login</h2>
        <input
          type="text"
          onChange={e => setUserName(e.target.value)}
          name="userName"
          value={userName}
        />
        <button>Login</button>
      </form>
    </article>
  )
}

// Let's further create sub-components for Book

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
