const db = require('../utils/db')
require('./book')

db(`
CREATE TABLE IF NOT EXISTS Genres
(
    genreID int primary key not null auto_increment,
    name    varchar(100)    not null,
    url     varchar(250)
);
`)

db(`
CREATE TABLE IF NOT EXISTS BookGenres
(
    BookGenresID int primary key not null auto_increment,
    genreID      int             not null,
    bookID       int             not null,
    CONSTRAINT FOREIGN KEY (genreID) REFERENCES Genres (genreID),
    CONSTRAINT FOREIGN KEY (bookID) REFERENCES Books (bookID)
);
`)

exports.count = async (callback?: () => any ): Promise<number> => {
    const count: Promise<number> = await db('SELECT COUNT(*) FROM Genres;')

    return count[0]['COUNT(*)']
}