import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function BookList() {
  return (
    <section className="booklist">
      <Book
        image={'./images/book-1.jpg'}
        author="JAMAL T. MILLWOOD"
        title="KIM’S LOST WORDS: A journey for justice, from the other side"
      />
      <Book />
    </section>
  )
}

// Writing JS within JSX: We use curly brackets and use expressions within. Remember: An expression must return a value

// Every component in React, has a props object. First steps towards making a component re-usable & dding dynamism to a component
function Book(props) {
  return (
    <article className="book">
      <img
        src={props.image}
        className="author-img"
        alt={props.title}
      />
      <h2 className="title">{props.title}</h2>
      <h4
        className="author"
        style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}
      >
        <strong>Author:</strong> {props.author}
      </h4>
    </article>
  )
}

// Let's further create sub-components for Book

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
