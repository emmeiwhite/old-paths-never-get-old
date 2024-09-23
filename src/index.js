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

// Writing JS within JSX: We use curly brackets and use expressions within. Remember: An expression must return a value

let title = 'KIM’S LOST WORDS: A journey for justice, from the other side'
function Book() {
  let author = 'JAMAL T. MILLWOOD'
  return (
    <article className="book">
      <img
        src="./images/book-1.jpg"
        className="author-img"
        alt="book"
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
