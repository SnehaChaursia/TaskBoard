"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Dashboard = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("/projects")
        setProjects(res.data)
        setLoading(false)
      } catch (err) {
        setError("Error fetching projects")
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const handleDelete = async (projectId) => {
    if (!window.confirm("Are you sure you want to delete this project?")) {
      return
    }

    try {
      await axios.delete(`/projects/${projectId}`)
      setProjects(projects.filter((project) => project._id !== projectId))
    } catch (err) {
      setError("Failed to delete project")
    }
  }

  if (loading) {
    return <div>Loading projects...</div>
  }

  return (
    <div>
      <div style={styles.header}>
        <h1>My Projects</h1>
        <Link to="/projects/new" style={styles.createButton}>
          Create Project
        </Link>
      </div>

      {error && <div style={styles.error}>{error}</div>}

      {projects.length === 0 ? (
        <div style={styles.noProjects}>
          <p>You don't have any projects yet.</p>
          <Link to="/projects/new" style={styles.linkButton}>
            Create your first project
          </Link>
        </div>
      ) : (
        <div style={styles.projectGrid}>
          {projects.map((project) => (
            <div key={project._id} style={styles.projectCard}>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDescription}>{project.description || "No description"}</p>
              <div style={styles.projectMeta}>
                <span>Members: {project.members.length}</span>
              </div>
              <div>
                <Link to={`/projects/${project._id}`} style={styles.viewButton}>
                  View Project
                </Link>
                <button
                  style={styles.deleteButton}
                  onClick={() => handleDelete(project._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
  },
  createButton: {
    padding: "10px 18px",
    backgroundColor: "#5a4da7",    // deep bluish purple
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
    transition: "transform 300ms ease-in-out",
  },
  createButtonHover: {
    transform: "scale(1.05)",
  },
  error: {
    color: "#a4306a",              // muted magenta-ish red for errors
    marginBottom: "18px",
  },
  noProjects: {
    textAlign: "center",
    padding: "48px",
    backgroundColor: "#e2e0f7",    // very light lavender
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(90, 77, 167, 0.12)",
    transition: "transform 300ms ease-in-out",
  },
  noProjectsHover: {
    transform: "scale(1.03)",
  },
  linkButton: {
    display: "inline-block",
    marginTop: "12px",
    padding: "10px 18px",
    backgroundColor: "#3f3590",    // darker bluish purple
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
    transition: "transform 300ms ease-in-out",
  },
  linkButtonHover: {
    transform: "scale(1.05)",
  },
  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "24px",
  },
  projectCard: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(90, 77, 167, 0.15)",
    padding: "24px",
    transition: "transform 300ms ease-in-out",
  },
  projectCardHover: {
    transform: "scale(1.1)",
    boxShadow: "0 6px 16px rgba(90, 77, 167, 0.25)",
  },
  projectTitle: {
    marginBottom: "12px",
    color: "#574aad",              // medium bluish purple
  },
  projectDescription: {
    color: "#5a5f82",              // cool grayish purple
    marginBottom: "18px",
  },
  projectMeta: {
    fontSize: "14px",
    color: "#7e7faf",              // muted periwinkle
    marginBottom: "18px",
  },
  viewButton: {
    display: "inline-block",
    padding: "8px 14px",
    backgroundColor: "#b3b0f7",    // soft lavender
    color: "#3f3590",              // dark bluish purple
    textDecoration: "none",
    borderRadius: "6px",
    transition: "transform 300ms ease-in-out",
  },
  viewButtonHover: {
    transform: "scale(1.05)",
  },
  deleteButton: {
    marginLeft: "12px",
    padding: "8px 14px",
    backgroundColor: "#3f3590",    // deep magenta-red
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "transform 300ms ease-in-out",
  },
  deleteButtonHover: {
    transform: "scale(1.05)",
  },
};


export default Dashboard
