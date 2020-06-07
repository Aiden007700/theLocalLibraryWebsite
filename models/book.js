"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require('../utils/db');
require('./author');
db(`
CREATE TABLE IF NOT EXISTS Books
(
    bookID   int primary key not null auto_increment,
    title    varchar(250)    not null,
    authorID int             not null,
    summary  varchar(500),
    isbn     varchar(50)     not null,
    url      varchar(250),
    CONSTRAINT FOREIGN KEY (authorID) REFERENCES Author (authorID)
);`);
exports.count = async (callback) => {
    const count = await db('SELECT COUNT(*) FROM Books;');
    return count[0]['COUNT(*)'];
};
exports.findAll = async (callback) => {
    const allBooks = await db('SELECT * FROM Books LEFT JOIN Author ON Books.authorID = Author.authorID;');
    return allBooks.map((el => Object.assign({}, el)));
};
