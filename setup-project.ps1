Write-Host 'Starting CampusCart India Setup...' -ForegroundColor Cyan

# 1. Check for Node.js
if (Get-Command node -ErrorAction SilentlyContinue) {
    $nodeVersion = node -v
    Write-Host "Node.js detected: $nodeVersion" -ForegroundColor Green
}
else {
    Write-Host 'Error: Node.js is not installed. Please install it from https://nodejs.org/' -ForegroundColor Red
    exit 1
}

# 2. Install Project Dependencies
Write-Host 'Installing all dependencies for Root, Client, and Server...' -ForegroundColor Cyan
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host 'All dependencies installed successfully.' -ForegroundColor Green
}
else {
    Write-Host 'Error: Dependency installation failed.' -ForegroundColor Red
    exit 1
}

# 3. Setup Environment Variables
Write-Host 'Setting up environment variables...' -ForegroundColor Cyan
if (!(Test-Path "server/.env")) {
    if (Test-Path "server/.env.example") {
        Copy-Item "server/.env.example" "server/.env"
    }
    else {
        'PORT=5000' + "`n" + 'MONGO_URI=mongodb://localhost:27017/mern-ecommerce' + "`n" + 'JWT_SECRET=yoursecretkey' | Out-File -FilePath "server/.env" -Encoding utf8
    }
    Write-Host 'Created server/.env' -ForegroundColor Green
}

if (!(Test-Path "client/.env")) {
    'BASE_API_URL=http://localhost:5000/api' | Out-File -FilePath 'client/.env' -Encoding utf8
    Write-Host 'Created client/.env' -ForegroundColor Green
}

Write-Host "Setup complete! You can now run 'npm run dev' to start the project." -ForegroundColor Magenta