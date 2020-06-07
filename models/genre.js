const db = require('../utils/db');
require('./book');
db(`
CREATE TABLE IF NOT EXISTS Genres
(
    genreID int primary key not null auto_increment,
    name    varchar(100)    not null,
    url     varchar(250)
);
`);
db(`
CREATE TABLE IF NOT EXISTS BookGenres
(
    BookGenresID int primary key not null auto_increment,
    genreID      int             not null,
    bookID       int             not null,
    CONSTRAINT FOREIGN KEY (genreID) REFERENCES Genres (genreID),
    CONSTRAINT FOREIGN KEY (bookID) REFERENCES Books (bookID)
);
`);
exports.count = async (callback) => {
    const count = await db('SELECT COUNT(*) FROM Genres;');
    console.log(5, count[0]['COUNT(*)']);
    return count[0]['COUNT(*)'];
};
