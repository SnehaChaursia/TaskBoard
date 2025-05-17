"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext.jsx"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()

  const { email, password } = formData

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError("")

    const result = await login(formData)

    if (result.success) {
      navigate("/")
    } else {
      setError(result.error)
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Login</h1>
      {error && <div style={styles.error}>{error}</div>}
      <form onSubmit={onSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  )
}
const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#f4f5fc", // soft cool lavender
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(70, 70, 120, 0.1)", // subtle bluish shadow
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#4b4e8c", // deep cool indigo
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #b0b3d9", // soft bluish border
    borderRadius: "4px",
    fontSize: "16px",
    backgroundColor: "#fff",
    color: "#4b4e8c",
  },
  button: {
    padding: "10px",
    backgroundColor: "#5a57a3", // rich bluish purple
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  },
  error: {
    color: "#a94d7c", // muted magenta-red
    marginBottom: "15px",
    textAlign: "center",
  },
};

export default Login
