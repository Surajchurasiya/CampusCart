# 🛒 [CampusCart](https://campus-cart-sepia.vercel.app/) - Full-Stack Campus Marketplace

CampusCart is a live, production-ready MERN stack e-commerce web application designed specifically for college campuses. It enables students to seamlessly buy, sell, and trade campus essentials (textbooks, electronics, cycles, etc.) within a secure and optimized ecosystem.

🔗 **Live Frontend (Vercel):** [https://campus-cart-sepia.vercel.app/](https://campus-cart-sepia.vercel.app/)  
🔗 **Live Backend API (Render):** [https://campuscart-s5c0.onrender.com](https://campuscart-s5c0.onrender.com)

---

## 🛠️ Tech Stack & Architecture

CampusCart utilizes a decoupled architecture, separating the client presentation layer from the server logic for optimal scaling and independent deployment.

* **Frontend:** [React.js](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [React Router](https://reactrouter.com/) (Hosted on [Vercel](https://vercel.com/))
* **Backend:** [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/) (Hosted on [Render](https://render.com/))
* **Database:** [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) (Cloud Database)
* **Authentication:** JSON Web Tokens (JWT) & [bcryptjs](https://www.npmjs.com/package/bcryptjs) for password hashing

---

## ✨ Key Features

* **Secure Authentication:** User signup and login protected by HTTP-Only JWT tokens and password encryption.
* **Dynamic Product Catalog:** Real-time search and structural category filtering for items listed on campus.
* **Complete CRUD Operations:** Users can create, read, update, and delete their own product listings.
* **Responsive UI:** Fully optimized mobile-first design built with [Tailwind CSS](https://tailwindcss.com/).

---

## 🚀 Local Installation & Setup

Follow these steps to run CampusCart locally on your machine.

### Prerequisites
* [Node.js](https://nodejs.org/) installed (v16.x or higher recommended)
* A [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) account or local MongoDB instance

### 1. Clone the Repository
```bash
git clone [https://github.com/Surajchaurasiya/CampusCart.git](https://github.com/Surajchaurasiya/CampusCart.git)
cd CampusCart


2. Backend Configuration
<Bash>
cd server
npm install
Create a .env file in the server/ directory:

Code snippet
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_jwt_key


Start the backend:
<Bash>
npm start


3. Frontend Configuration
<Bash>
cd ../client
npm install
npm start

Deployment Details
Frontend: Automatically built and deployed by Vercel on every push to the main branch.
Backend: Hosted on Render's web service tier, directly communicating with MongoDB Atlas for persistent storage.

👥 Author
Suraj Chaurasiya - GitHub Profile
