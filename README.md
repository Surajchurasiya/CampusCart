# 🛒 CampusCart - Full-Stack Campus Marketplace

CampusCart is a live, production-ready MERN stack e-commerce web application designed specifically for college campuses. It enables students to seamlessly buy, sell, and trade campus essentials (textbooks, electronics, cycles, etc.) within a secure and optimized ecosystem.

🔗 **Live Frontend (Vercel):** [https://campus-cart-sepia.vercel.app/](https://campus-cart-sepia.vercel.app/)  
🔗 **Live Backend API (Render):** [https://campuscart-s5c0.onrender.com](https://campuscart-s5c0.onrender.com)

---

## 🛠️ Tech Stack & Architecture

CampusCart utilizes a decoupled architecture, separating the client presentation layer from the server logic for optimal scaling and independent deployment.

*   **Frontend:** React.js, Tailwind CSS, React Router (Hosted on **Vercel**)
*   **Backend:** Node.js, Express.js (Hosted on **Render**)
*   **Database:** MongoDB Atlas (Cloud Database)
*   **Authentication:** JSON Web Tokens (JWT) & bcryptjs for password hashing

---

## ✨ Key Features

*   **Secure Authentication:** User signup and login protected by HTTP-Only JWT tokens and password encryption.
*   **Dynamic Product Catalog:** Real-time search and structural category filtering for items listed on campus.
*   **Complete CRUD Operations:** Users can create, read, update, and delete their own product listings.
*   **Responsive UI:** Fully optimized mobile-first design built with Tailwind CSS.

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
