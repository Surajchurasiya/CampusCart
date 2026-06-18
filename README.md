Markdown
# 🛒 CampusCart - Full-Stack Campus Marketplace

CampusCart is a live, production-ready MERN stack e-commerce web application designed specifically for college campuses. It enables students to seamlessly buy, sell, and trade campus essentials (textbooks, electronics, cycles, etc.) within a secure and optimized ecosystem.

🔗 **Live Frontend (Vercel):** [https://campus-cart-sepia.vercel.app/](https://campus-cart-sepia.vercel.app/)  
🔗 **Live Backend API (Render):** [https://campuscart-s5c0.onrender.com](https://campuscart-s5c0.onrender.com)

---

## 🛠️ Tech Stack & Architecture

CampusCart utilizes a decoupled architecture, separating the client presentation layer from the server logic for optimal scaling and independent deployment.

* **Frontend:** React.js, Tailwind CSS, React Router (Hosted on **Vercel**)
* **Backend:** Node.js, Express.js (Hosted on **Render**)
* **Database:** MongoDB Atlas (Cloud Database)
* **Authentication:** JSON Web Tokens (JWT) & bcryptjs for password hashing

---

## ✨ Key Features

* **Secure Authentication:** User signup and login protected by HTTP-Only JWT tokens and password encryption.
* **Dynamic Product Catalog:** Real-time search and structural category filtering for items listed on campus.
* **Complete CRUD Operations:** Users can create, read, update, and delete their own product listings.
* **Responsive UI:** Fully optimized mobile-first design built with Tailwind CSS.

---

## 📂 Project Structure

```text
CampusCart/
├── client/          # Frontend React codebase (Deploys to Vercel)
│   ├── src/
│   ├── public/
│   └── package.json
└── server/          # Backend Node/Express API codebase (Deploys to Render)
    ├── config/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── index.js
    └── package.json
🚀 Local Installation & Setup
Follow these steps to run CampusCart locally on your machine.

Prerequisites
Node.js installed (v16.x or higher recommended)

A MongoDB Atlas account or local MongoDB instance

1. Clone the Repository
Bash
git clone https://github.com/Surajchurasiya/CampusCart.git
cd CampusCart
2. Backend Configuration
Bash
cd server
npm install
Create a .env file in the server/ directory:

Code snippet
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_jwt_key
Start the backend:

Bash
npm start
3. Frontend Configuration
Bash
cd client
npm install
npm start
🌐 Deployment Details
Frontend: Automatically built and deployed by Vercel on every push to the main branch.

Backend: Hosted on Render's web service tier, directly communicating with MongoDB Atlas for persistent storage.

👥 Author
Suraj Churasiya - GitHub Profile
