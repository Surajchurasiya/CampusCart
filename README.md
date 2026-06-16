# Campus Cart India 🎓🇳 - The Ultimate Student Hub by Suraj Chaurasiya

[![Author](https://img.shields.io/badge/Author-Suraj%20Chaurasiya-blue.svg)](https://github.com/surajchaurasiya)

## Description

**Campus Cart India** is a premier student-centric e-commerce platform built by **Suraj Chaurasiya**. Designed specifically for the vibrant Indian student community, it offers a seamless and affordable shopping experience for everything from semester essentials to hostel lifestyle upgrades.

1. Buyers browse the store categories, products and brands
2. Sellers or Merchants manage their own brand component
3. Admins manage and control the entire store components 

### Key Features for Students:

*   **Semester Essentials:** Dedicated categories for engineering tools, medical supplies, and exam prep books.
*   **Hostel Living:** Curated collections for room decor, snacks, and compact electronics.
*   **Campus Tech:** Latest gadgets and accessories at student-friendly prices.
*   **Modern Stack:** Built with the MERN stack (MongoDB, Express, React, Node.js) for high performance during "Big Campus Sales."

### Why Campus Cart India? 🇮🇳
* **Student-First Approach:** Categorized for hostel life, exam prep, and tech-savvy students.
* **Optimized UI:** Clean, modern interface designed for fast browsing on mobile devices.
* **Scalable Tech:** Built on the robust MERN stack for high performance during "Big Campus Sales."

### Tech Stack:
*   **Frontend:** React with Redux for seamless state management.
*   **Backend:** Node.js & Express for a robust API.
*   **Database:** MongoDB with Mongoose for flexible data modeling.
*   **Styling:** Modern SCSS with a student-centric vibrant palette (Indigo & Saffron).

## Docker Guide

To run this project locally you can use docker compose provided in the repository. Here is a guide on how to run this project locally using docker compose.

Clone the repository
```
git clone https://github.com/surajchaurasiya/mern-ecommerce.git
```

Edit the dockercompose.yml file and update the the values for MONGO_URI and JWT_SECRET

Then simply start the docker compose:

```
docker-compose build
docker-compose up
```

## Database Seed

* The seed command will create an admin user in the database
* The email and password are passed with the command as arguments
* Like below command, replace brackets with email and password. 
* For more information, see code [here](server/utils/seed.js)

```
npm run seed:db [email-***@****.com] [password-******] // This is just an example.
```

## 🚀 Quick Start for Beginners

Follow these 3 steps to get the store running on your computer:

1. **Install Prerequisites**: Download [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/try/download/community).
2. **Run Setup**: 
   - **Windows**: Run `.\setup-project.ps1` in PowerShell.
   - **Mac/Linux**: Run `./setup-project.sh` in Terminal.
3. **Add Products & Start**:
   - Run `npm run seed:db admin@example.com password123` (to add student products).
   - Run `npm run dev` and visit http://localhost:8080.

---

## Detailed Prerequisites & Installation

Ensure you have the following installed:
- **Node.js** (v14+)
- **MongoDB** (Local or Atlas)

### One-Click Setup
Run the automated setup script based on your operating system to install dependencies and generate `.env` files:

**For Linux/macOS/Git Bash:**
```sh
chmod +x setup-project.sh
./setup-project.sh
```

### Manual Installation
If you prefer manual installation:

```
npm install
```

## ENV

Create `.env` file for both client and server. See examples:

[Frontend ENV](client/.env.example)

[Backend ENV](server/.env.example)


## Vercel Deployment

Both frontend and backend are deployed on Vercel from the same repository. When deploying on Vercel, make sure to specifiy the root directory as `client` and `server` when importing the repository. See [client vercel.json](client/vercel.json) and [server vercel.json](server/vercel.json).

## Start development

```
npm run dev
```

## Languages & tools

- [Node](https://nodejs.org/en/)

- [Express](https://expressjs.com/)

- [Mongoose](https://mongoosejs.com/)

- [React](https://reactjs.org/)

- [Webpack](https://webpack.js.org/)


### Code Formatter

- Add a `.vscode` directory
- Create a file `settings.json` inside `.vscode`
- Install Prettier - Code formatter in VSCode
- Add the following snippet:  

```json

    {
      "editor.formatOnSave": true,
      "prettier.singleQuote": true,
      "prettier.arrowParens": "avoid",
      "prettier.jsxSingleQuote": true,
      "prettier.trailingComma": "none",
      "javascript.preferences.quoteStyle": "single",
    }

```
