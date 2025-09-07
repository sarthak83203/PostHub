
 📌 PostHub

PostHub is a simple backend-powered web application built with **Node.js** and **Express.js**.  
It allows users to perform full **CRUD operations** (Create, Read, Update, Delete) on posts.  
Users can share their **feelings, thoughts, and ideas** in the form of posts.

---

## ✨ Features
- ➕ Create new posts
- 📖 Read and view posts
- ✏️ Update existing posts
- ❌ Delete posts
- 💬 Store and manage personal thoughts/feelings

---

## 🛠️ Technologies Used
- [Node.js](https://nodejs.org/) – JavaScript runtime environment  
- [Express.js](https://expressjs.com/) – Web framework for Node.js  
- [EJS](https://ejs.co/) – Template engine for rendering views  

---

## 📂 Project Structure

PostHub/
│-- node_modules/
│-- public/
│-- views/
│ │-- index.ejs
│ │-- form.ejs
│ │-- edit.ejs
│ │-- show.ejs
│-- index.js
│-- package.json
│-- package-lock.json
│-- README.md


---

## ⚙️ Installation & Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/PostHub.git
   cd PostHub

    Install dependencies:

npm install

Start the server:

node index.js

or (if you have nodemon installed):

nodemon index.js

Open in your browser:

    http://localhost:3000

🔗 API Routes (Basic CRUD)
Method	Route	Description
GET	/posts	Show all posts
GET	/posts/:id	Show a single post
POST	/posts	Create a new post
PATCH	/posts/:id	Update a post
DELETE	/posts/:id	Delete a post
📌 Future Enhancements

    User authentication & login system

    Database integration (MongoDB/PostgreSQL)

    Like & comment system for posts

    Responsive frontend design


