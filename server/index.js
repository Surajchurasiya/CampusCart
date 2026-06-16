require('dotenv').config();
const express = require('express');
const chalk = require('chalk');
const cors = require('cors');
const helmet = require('helmet');

const keys = require('./config/keys');
const routes = require('./routes');
const socket = require('./socket');
const setupDB = require('./utils/db');

const { port } = keys;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: false,
    frameguard: true
  })
);
app.use(cors());

// Simple Request Logger Middleware
app.use((req, res, next) => {
  const method = chalk.magenta(req.method);
  const url = chalk.gray(req.url);
  console.log(`[${new Date().toLocaleTimeString()}] ${method} ${url}`);
  next();
});

setupDB();
require('./config/passport')(app);
app.use(routes);

// Root route to provide status and guidance
app.get('/', (req, res) => {
  res.status(200).send('CampusCart India API is running. Access the storefront at http://localhost:8080');
});

app.use((err, req, res, next) => {
  console.error(chalk.red('Global Error Handler:'), err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
});

const server = app.listen(port, () => {
  console.log(
    `${chalk.green('✓')} ${chalk.blue(
      `Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
    )}`
  );
});

socket(server);
