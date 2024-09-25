import React, { useState } from 'react'

function Book({
  img,
  author,
  title,
  children,
  someValue,
  displayValue,
  id,
  getBook,
  serialNumber
}) {
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

    // This function came as props from the parent component
    displayValue()

    //   clear the form values
    setUserName('')
  }

  return (
    <article className="book">
      {/* serial-number */}
      <div className="serial-number">
        <span># {serialNumber + 1}</span>
      </div>
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
      {/* <input
        type="number"
        onChange={handleChange}
        value={price || ''}
        name="price"
      />

      <button onClick={() => getBook(id)}>Get Book Details</button>

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
      </form> */}
    </article>
  )
}

export default Book
