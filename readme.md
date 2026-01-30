# CRUD Backend API

A simple RESTful CRUD backend API built using **Node.js, Express.js, and MongoDB**.  
This project focuses on backend fundamentals like routing, controllers, database operations, and project structure.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Morgan
- Nodemon

---

## 📁 Project Structure

src/
├── index.js
├── app.js
├── routers/
│ └── crud.router.js
├── controllers/
│ └── crud.controller.js
├── models/
│ └── crud.model.js
├── config/ 
│ └── db.js 


---

## Features

- Create data
- Read all data
- Update data by ID
- Delete data by ID
- MongoDB connection using Mongoose
- REST API architecture
- MVC-like folder structure

---

## API Endpoints

| Method | Endpoint            | Description          |
|------|---------------------|----------------------|
| POST | /crud/create        | Create new data      |
| GET  | /crud/read          | Get all data         |
| PUT  | /crud/update/:id    | Update data by ID    |
| DELETE | /crud/delete/:id  | Delete data by ID    |

---

## Installation & Setup

### Clone the repository
```bash
git clone https://github.com/your-username/crud-backend-api.git
cd crud-backend-api
