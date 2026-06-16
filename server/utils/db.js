require('dotenv').config();
const chalk = require('chalk');
const mongoose = require('mongoose');

const keys = require('../config/keys');
const { database } = keys;

const setupDB = async () => {
  try {
    mongoose.set('useCreateIndex', true);

    await mongoose.connect(database.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });

    console.log(`${chalk.green('✓')} ${chalk.blue('MongoDB Connected Successfully!')}`);
  } catch (error) {
    console.error(`${chalk.red('x')} ${chalk.red('MongoDB Connection Failed:')}`, error.message);
    return null;
  }
};

module.exports = setupDB;
