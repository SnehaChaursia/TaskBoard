"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const CreateProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  })
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const { title, description } = formData

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      const res = await axios.post("/projects", formData)
      navigate(`/projects/${res.data._id}`)
    } catch (err) {
      setError(err.response?.data?.message || "Error creating project")
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Create New Project</h1>
      {error && <div style={styles.error}>{error}</div>}
      <form onSubmit={onSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="title">Project Title</label>
          <input type="text" id="title" name="title" value={title} onChange={onChange} required style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={onChange}
            style={styles.textarea}
            rows="4"
          ></textarea>
        </div>
        <div style={styles.buttonGroup}>
          <button type="button" onClick={() => navigate("/")} style={styles.cancelButton}>
            Cancel
          </button>
          <button type="submit" style={styles.submitButton}>
            Create Project
          </button>
        </div>
      </form>
    </div>
  )
}
const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#f5f6fc", // very light bluish lavender
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(60, 60, 120, 0.15)", // subtle bluish shadow
  },
  title: {
    marginBottom: "20px",
    color: "#3f427d", // deep indigo
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
    border: "1px solid #a3a7d6", // soft blue-lavender border
    borderRadius: "4px",
    fontSize: "16px",
    backgroundColor: "#fff",
    color: "#3f427d",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    border: "1px solid #a3a7d6",
    borderRadius: "4px",
    fontSize: "16px",
    resize: "vertical",
    backgroundColor: "#fff",
    color: "#3f427d",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
  },
  cancelButton: {
    padding: "10px",
    backgroundColor: "#c4c7e7", // muted periwinkle
    color: "#3f427d",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  },
  submitButton: {
    padding: "10px",
    backgroundColor: "#6750a4", // rich deep purple
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  },
  error: {
    color: "#b25687", // muted magenta-red
    marginBottom: "15px",
  },
};

export default CreateProject
