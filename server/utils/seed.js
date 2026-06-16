const chalk = require('chalk');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');

const setupDB = require('./db');
const { ROLES } = require('../constants');
const User = require('../models/user');
const Brand = require('../models/brand');
const Product = require('../models/product');
const Category = require('../models/category');

const args = process.argv.slice(2);
const email = args[0];
const password = args[1];

const NUM_PRODUCTS = 100;
const NUM_BRANDS = 10;
const NUM_CATEGORIES = 10;

const INDIAN_CATEGORIES = [
  'Engineering Essentials',
  'Hostel & Dorm Living',
  'Exam Prep & Books',
  'Campus Fashion & Ethnic Wear',
  'Electronics & Gadgets'
];

const INDIAN_BRANDS = [
  'Casio',
  'Wildcraft',
  'Boat',
  'Dell',
  'Classmate',
  'Fastrack',
  'HP',
  'Puma India',
  'Mi Store',
  'FabIndia'
];

const STUDENT_PRODUCTS = [
  'Scientific Calculator FX-991ES', 'Anti-Theft Student Backpack', 'Noise Cancelling Headphones',
  'Mechanical Engineering Drafter', 'Premium Hardbound Notebook', 'Ergonomic Study Lamp',
  'Cotton Ethnic Kurta for Fests', 'High-Performance Laptop for Coding', 'Rechargeable Study Fan',
  'Organic Cotton Hostel Bedding'
];

const STUDENT_IMAGES = [
  'https://images.unsplash.com/photo-1574607383476-f517f220d308',
  'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
  'https://images.unsplash.com/photo-1517842645767-c639042777db',
  'https://images.unsplash.com/photo-1534073828943-f801091bb18c',
  'https://images.unsplash.com/photo-1581655353564-df123a1eb820',
  'https://images.unsplash.com/photo-1496181133206-80ce9b88a853'
];

const seedDB = async () => {
  try {
    let categories = [];

    console.log(`${chalk.blue('✓')} ${chalk.blue('Seed database started')}`);

    if (!email || !password) throw new Error('Missing arguments');
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      console.log(`${chalk.yellow('!')} ${chalk.yellow('Seeding admin user...')}`);
      const user = new User({
        email,
        password,
        firstName: 'admin',
        lastName: 'admin',
        role: ROLES.Admin
      });

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user.password, salt);
      user.password = hash;
      await user.save();
      console.log(`${chalk.green('✓')} ${chalk.green('Admin user seeded.')}`);
    } else {
      console.log(`${chalk.yellow('!')} ${chalk.yellow('Admin user already exists, skipping seeding for admin user.')}`);
    }

    const categoriesCount = await Category.countDocuments();
    if (categoriesCount >= NUM_CATEGORIES) {
      console.log(`${chalk.yellow('!')} ${chalk.yellow('Sufficient number of categories already exist, skipping seeding for categories.')}`);
      categories = await Category.find().select('_id');
    } else {
      for (let i = 0; i < NUM_CATEGORIES; i++) {
        const category = new Category({
          name: INDIAN_CATEGORIES[i % INDIAN_CATEGORIES.length],
          description: `Quality ${INDIAN_CATEGORIES[i % INDIAN_CATEGORIES.length]} specifically curated for Indian college students.`,
          isActive: true
        });
        await category.save();
        categories.push(category);
      }
      console.log(`${chalk.green('✓')} ${chalk.green('Categories seeded.')}`);
    }

    const brandsCount = await Brand.countDocuments();
    if (brandsCount >= NUM_BRANDS) {
      console.log(`${chalk.yellow('!')} ${chalk.yellow('Sufficient number of brands already exist, skipping seeding for brands.')}`);
    } else {
      for (let i = 0; i < NUM_BRANDS; i++) {
        const brand = new Brand({
          name: INDIAN_BRANDS[i % INDIAN_BRANDS.length],
          description: `Top student-favorite brand: ${INDIAN_BRANDS[i % INDIAN_BRANDS.length]}`,
          isActive: true
        });
        await brand.save();
      }
      console.log(`${chalk.green('✓')} ${chalk.green('Brands seeded.')}`);
    }

    const productsCount = await Product.countDocuments();
    if (productsCount >= NUM_PRODUCTS) {
      console.log(`${chalk.yellow('!')} ${chalk.yellow('Sufficient number of products already exist, skipping seeding for products.')}`);
    } else {
      const brands = await Brand.find().select('_id');
      for (let i = 0; i < NUM_PRODUCTS; i++) {
        const randomCategoryIndex = faker.number.int(categories.length - 1);
        const productName = STUDENT_PRODUCTS[i % STUDENT_PRODUCTS.length];
        const productImage = STUDENT_IMAGES[i % STUDENT_IMAGES.length];
        const product = new Product({
          sku: faker.string.alphanumeric(10),
          name: `${productName} ${faker.string.alphanumeric(4).toUpperCase()}`,
          description: faker.lorem.sentence(),
          quantity: faker.number.int({ min: 1, max: 100 }),
          price: faker.commerce.price(),
          imageUrl: productImage,
          taxable: faker.datatype.boolean(),
          isActive: true,
          brand: brands[faker.number.int(brands.length - 1)]._id,
          category: categories[randomCategoryIndex]._id
        });
        await product.save();
        await Category.updateOne({ _id: categories[randomCategoryIndex]._id }, { $push: { products: product._id } });
      }
      console.log(`${chalk.green('✓')} ${chalk.green('Products seeded and associated with categories.')}`);
    }
  } catch (error) {
    console.log(`${chalk.red('x')} ${chalk.red('Error while seeding database')}`);
    console.log(error);
    return null;
  } finally {
    await mongoose.connection.close();
    console.log(`${chalk.blue('✓')} ${chalk.blue('Database connection closed!')}`);
  }
};

(async () => {
  try {
    await setupDB();
    await seedDB();
  } catch (error) {
    console.error(`Error initializing database: ${error.message}`);
  }
})();