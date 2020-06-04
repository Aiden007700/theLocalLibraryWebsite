const db = require('../utils/db')
require('./book')

db.query(`
CREATE TABLE IF NOT EXISTS Genres
(
    genreID int primary key not null auto_increment,
    name    varchar(100)    not null,
    url     varchar(250)
);
`)

db.query(`
CREATE TABLE IF NOT EXISTS BookGenres
(
    BookGenresID int primary key not null auto_increment,
    genreID      int             not null,
    bookID       int             not null,
    CONSTRAINT FOREIGN KEY (genreID) REFERENCES Genres (genreID),
    CONSTRAINT FOREIGN KEY (bookID) REFERENCES Books (bookID)
);
`)