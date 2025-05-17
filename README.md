# TaskBoard
# TaskBoard Pro

**TaskBoard Pro** is an advanced task collaboration platform designed to streamline team productivity with intuitive Kanban boards and powerful workflow automation. Built for modern project teams, it allows seamless project and task management, user collaboration, and custom automations to handle repetitive actions.

---

## 🚀 Features

### 🔐 User Authentication
- Stores user profile (Name, Email).

### 📁 Project Management
- Create projects with title and description.
- Invite users to collaborate via email.
- Project access limited to members only.

### ✅ Task Management
- Create tasks with title, description, due date, and assignee.
- Move tasks across default statuses: **To Do**, **In Progress**, **Done**.
- Bonus: Create custom statuses per project.
- Display tasks in a **Kanban View** grouped by status.

### ⚙️ Workflow Automation
Project owners can define custom automations:
- When a task is moved to `Done`, assign a badge.
- When a task is assigned to a specific user, move to `In Progress`.
- When due date passes, send a notification.

> Automations are stored in the database and executed server-side.

### 🔌 Backend API Endpoints
- `/auth` - Authentication logic
- `/projects` - Create, edit, delete, invite to projects
- `/tasks` - Manage task lifecycle
- `/automations` - Define and manage workflow rules
- `/notifications` *(Bonus)* - For sending reminders and updates

### 🗃️ Database Models (MongoDB)
- **Users** - Stores user info and auth details
- **Projects** - Stores project metadata and member list
- **Tasks** - Stores task information and status
- **Automations** - Defines project-specific workflows
- **Notifications** *(Optional Bonus)* - Stores due date alerts and other notices

---


---

## 🛠️ Tech Stack

| Layer         | Technology                     |
|---------------|--------------------------------|
| Frontend      | React.js / Next.js (optional)  |
| Backend       | Node.js, Express.js            |
| Database      | MongoDB (Mongoose ORM)         |
| Auth          | Firebase Authentication (OAuth)|
| Realtime      | Socket.io                      |
| Hosting       | Render / Vercel / Firebase     |

---

## 🧪 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/taskboard-pro.git
   cd taskboard-pro
   cd backend
   npm install
   cp .env.example .env   # Create .env file from template and fill in your variables
   npm start
   cd ../frontend
   npm install
   npm run dev 

![Screenshot from 2025-05-17 10-04-21](https://github.com/user-attachments/assets/f7a5a280-f5f4-4b48-a941-d4ba13b2dcb0)

