"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require('../utils/db');
require('./book');
db(`
CREATE TABLE IF NOT EXISTS BookInstance
(
    BookInstanceID int primary key not null auto_increment,
    bookID         int             not null,
    imprint        varchar(250),
    status         varchar(250),
    due_bacl       date            not null,
    url            varchar(250),
    CONSTRAINT FOREIGN KEY (bookID) REFERENCES Books (bookID)
);
`);
exports.count = async (callback) => {
    const count = await db('SELECT COUNT(*) FROM BookInstance;');
    return count[0]['COUNT(*)'];
};
exports.countAvailable = async (callback) => {
    const count = await db("SELECT COUNT(*) FROM BookInstance WHERE status='Available';");
    return count[0]['COUNT(*)'];
};
exports.getAll = async (callback) => {
    const allBookInstance = await db('SELECT * FROM BookInstance LEFT JOIN Books ON Books.bookID = BookInstance.bookID;');
    console.log(allBookInstance.map((el => Object.assign({}, el))));
    return allBookInstance.map((el => Object.assign({}, el)));
};
