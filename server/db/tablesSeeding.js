require('dotenv').config();
const chalk = require('chalk');
const { Pool } = require('pg');
/**
 * Create Users Table
 */

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_API,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.on('error', err => {
  // eslint-disable-next-line
  console.log(chalk.red('Unexpected error on idle client', err));
  process.exit(-1);
});

const createUsersTable = async () => {
  const queryText = `CREATE TABLE IF NOT EXISTS users (
      id serial primary key,
      name varchar(50) not null,
      email varchar (50) not null
    )`;
  try {
    const response = pool.query(queryText);
    console.log('create user table response', response);
  } catch (err) {
    console.error('create user table error', err);
  }
};

const createAccountsTable = async () => {
  const queryText = `CREATE TABLE IF NOT EXISTS accounts (
    id serial primary key,
    email varchar(50) not null,
    password varchar(50) not null
  )`;
  try {
    const response = pool.query(queryText);
    console.log('create accounts table response', response);
  } catch (err) {
    console.error('create accounts table error', err);
  }
};
//
// /**
//  * Create Users Table
//  */
// const createUsersTable = () => {
//   const queryText =
//     `CREATE TABLE IF NOT EXISTS users (
//           userId SERIAL PRIMARY KEY,
//           firstName VARCHAR (50) NOT NULL,
//           lastName VARCHAR (50) NOT NULL,
//           email VARCHAR (50) NOT NULL,
//           password VARCHAR (255) NOT NULL,
//           gender VARCHAR(10) check (gender in ('Male', 'Female')),
//           jobRole VARCHAR(10) check (jobRole in ('Admin', 'User')),
//           department VARCHAR (100) NOT NULL,
//           address VARCHAR (100) NOT NULL,
//           createdOn TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//           UNIQUE (email)
//         )`;
//
//   pool.query(queryText)
//     .then((res) => {
//       console.log(res);
//       pool.end();
//     })
//     .catch((err) => {
//       console.log(err);
//       pool.end();
//     });
// }
//
// /**
//  * Create GIFs Table
//  */
// const createGifsTable = () => {
//   const queryText =
//     `CREATE TABLE IF NOT EXISTS Gifs (
//           gifId SERIAL PRIMARY KEY,
//           image VARCHAR (50) NOT NULL,
//           title VARCHAR (50) NOT NULL,
//           flags INTEGER DEFAULT 0,
//           userId INTEGER REFERENCES Users(userId) ON DELETE CASCADE,
//           createdOn TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         )`;
//
//   pool.query(queryText)
//     .then((res) => {
//       console.log(res);
//       pool.end();
//     })
//     .catch((err) => {
//       console.log(err);
//       pool.end();
//     });
// }
//
// /**
//  * Create Articles Table
//  */
// const createArticlesTable = () => {
//   const queryText =
//     `CREATE TABLE IF NOT EXISTS Articles (
//           articleId SERIAL PRIMARY KEY,
//           title VARCHAR (100) NOT NULL,
//           article TEXT NOT NULL,
//           flags INTEGER DEFAULT 0,
//           userId INTEGER REFERENCES Users(userId) ON DELETE CASCADE,
//           createdOn TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         )`;
//
//   pool.query(queryText)
//     .then((res) => {
//       console.log(res);
//       pool.end();
//     })
//     .catch((err) => {
//       console.log(err);
//       pool.end();
//     });
// }
//
// /**
//  * Create Category Table
//  */
// const createCategoryTable = () => {
//   const queryText =
//     `CREATE TABLE IF NOT EXISTS Category (
//           categoryId SERIAL PRIMARY KEY,
//           category VARCHAR (50) NOT NULL,
//           articleId INTEGER REFERENCES Articles(articleId) ON DELETE CASCADE,
//           createdOn TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         )`;
//
//   pool.query(queryText)
//     .then((res) => {
//       console.log(res);
//       pool.end();
//     })
//     .catch((err) => {
//       console.log(err);
//       pool.end();
//     });
// }
//
// /**
//  * Create ArticleComments Table
//  */
// const createArticleCommentsTable = () => {
//   const queryText =
//     `CREATE TABLE IF NOT EXISTS ArticleComments (
//           commentId SERIAL PRIMARY KEY,
//           comment TEXT NOT NULL,
//           flags INTEGER DEFAULT 0,
//           articleId INTEGER REFERENCES Articles(articleId) ON DELETE CASCADE,
//           createdOn TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         )`;
//
//   pool.query(queryText)
//     .then((res) => {
//       console.log(res);
//       pool.end();
//     })
//     .catch((err) => {
//       console.log(err);
//       pool.end();
//     });
// }
//
// /**
//  * Create GifComments Table
//  */
// const createGifCommentsTable = () => {
//   const queryText =
//     `CREATE TABLE IF NOT EXISTS GifComments (
//           commentId SERIAL PRIMARY KEY,
//           comment TEXT NOT NULL,
//           flags INTEGER DEFAULT 0,
//           gifId INTEGER REFERENCES Gifs(gifId) ON DELETE CASCADE,
//           createdOn TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         )`;
//
//   pool.query(queryText)
//     .then((res) => {
//       console.log(res);
//       pool.end();
//     })
//     .catch((err) => {
//       console.log(err);
//       pool.end();
//     });
// }

/**
 * Create All Tables
 */
const createAllTables = () => {
  createUsersTable();
  createAccountsTable();
};
/**
 * Drop All Tables
 */

createAllTables();
