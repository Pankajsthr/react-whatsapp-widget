import React, { useState } from 'react'
import styles from './SendButton.module.css'

export default function SendButton({ sendButton, phoneNumber, placeholder, inputMessage }) {
  const [message, setMessage] = useState('')

  const handleSend = () => {
    if (!phoneNumber) {
      window.alert('Invalid Phone Number')
      return false
    }
    window.open(`https://wa.me/${phoneNumber}?text=${inputMessage}`)
    setMessage('')
  }

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div className={styles.root}>
      <input
        placeholder={placeholder}
        className={styles.input}
        onChange={handleChange}
        value={inputMessage}
      />
      <button className={styles.button} onClick={handleSend}>
        {sendButton}
      </button>
    </div>
  )
}
