#!/bin/bash

# CampusCart India - Project Setup Script
# Author: Suraj Chaurasiya

echo "🚀 Starting CampusCart India Setup..."

# 1. Check for Node.js
if ! [ -x "$(command -v node)" ]; then
  echo "❌ Error: Node.js is not installed. Please install it from https://nodejs.org/"
  exit 1
fi

echo "✅ Node.js detected: $(node -v)"

# 2. Install Project Dependencies
echo "📦 Installing all dependencies (Root, Client, Server)..."
npm install

if [ $? -eq 0 ]; then
  echo "✅ All dependencies installed successfully."
else
  echo "❌ Error: Dependency installation failed."
  exit 1
fi

# 3. Setup Environment Variables
echo "🔑 Setting up environment variables..."
if [ ! -f "server/.env" ]; then
  cp server/.env.example server/.env 2>/dev/null || printf "PORT=5000\nMONGO_URI=mongodb://localhost:27017/mern-ecommerce\nJWT_SECRET=yoursecretkey\n" > server/.env
  echo "✅ Created server/.env (Please update with your own keys)"
fi

if [ ! -f "client/.env" ]; then
  echo "BASE_API_URL=http://localhost:5000/api" > client/.env
  echo "✅ Created client/.env"
fi

echo "🎉 Setup complete! You can now run 'npm run dev' to start the project."