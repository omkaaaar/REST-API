# 👨‍🎓 Students REST API with Node.js, Express & MongoDB

This is a simple REST API project built using **Node.js**, **Express**, and **MongoDB Native Driver**.  
It performs full **CRUD operations** on a `students` collection and demonstrates how to build scalable backend apps using modular file structure.

---

## 🚀 Features

➡️ `POST /students` — Add a new student  
➡️ `GET /students` — Get all students  
➡️ `PUT /students/:id` — Update student by ID  
➡️ `DELETE /students/:id` — Delete student by ID

---

## 📁 Folder Structure

```

student-api/
├── controllers/         # All CRUD logic
│   └── studentController.js
├── routes/              # Route endpoints
│   └── studentRoutes.js
├── db.js                # MongoDB connection
├── index.js             # Entry point of the app
├── .env                 # Secrets and MongoDB URI
├── package.json
└── README.md

````

---

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB (Native Driver)
- Thunder Client / Postman for testing

---

## 📦 Installation

```bash
git clone https://github.com/omkaaaar/students-api.git
cd students-api
npm install
````

---

## 🔑 Environment Variables

Create a `.env` file and add your MongoDB URI:

```
MONGO_URI=mongodb://localhost:27017
```

---

## ▶️ Run the App

```bash
node index.js
```

Your server will run on:
👉 `http://localhost:3000`

---

## 🧪 Example Body for POST /students

```json
{
  "name": "Omkar",
  "age": 22,
  "course": "Node.js",
  "city": "Goa"
}
```

---

## 🤝 Connect with Me

If you're hiring or mentoring, I'd love to connect!
Let’s build and grow together 🚀
**GitHub:** [omkaaaar](https://github.com/omkaaaar)
**LinkedIn:** [Omkar Kallekar](https://www.linkedin.com/in/omkarkallekar/)

---

## 📌 License

This project is for learning/demo purposes. Free to use and modify.
