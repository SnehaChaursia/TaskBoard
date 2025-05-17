"use client"

import { useState } from "react"

const InviteForm = ({ onSubmit, onCancel }) => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Email is required")
      return
    }

    onSubmit(email)
  }

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>Invite User</h2>
        {error && <div style={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="email">User Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              placeholder="Enter user email"
              required
            />
          </div>
          <div style={styles.buttonGroup}>
            <button type="button" onClick={onCancel} style={styles.cancelButton}>
              Cancel
            </button>
            <button type="submit" style={styles.submitButton}>
              Invite
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(45, 45, 70, 0.7)", // darker bluish overlay
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#f0f1fa", // very light bluish lavender
    borderRadius: "8px",
    padding: "20px",
    width: "400px",
    maxWidth: "90%",
  },
  title: {
    marginBottom: "20px",
    color: "#3f427d", // deep indigo
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #a3a7d6", // soft blue-lavender border
    borderRadius: "4px",
    fontSize: "16px",
    backgroundColor: "#fff",
    color: "#3f427d", // indigo text
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  },
  cancelButton: {
    padding: "8px 16px",
    backgroundColor: "#c4c7e7", // muted periwinkle
    color: "#3f427d", // deep indigo
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  submitButton: {
    padding: "8px 16px",
    backgroundColor: "#6750a4", // rich deep purple
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "#b25687", // muted magenta-red
    marginBottom: "15px",
  },
};


export default InviteForm
