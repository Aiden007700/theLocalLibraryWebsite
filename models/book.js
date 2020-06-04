const db = require('../utils/db')
require('./author')

db.query(`
CREATE TABLE IF NOT EXISTS Books
(
    bookID   int primary key not null auto_increment,
    title    varchar(250)    not null,
    authorID int             not null,
    summary  varchar(500),
    isbn     varchar(50)     not null,
    url      varchar(250),
    CONSTRAINT FOREIGN KEY (authorID) REFERENCES Author (authorID)
);`
)