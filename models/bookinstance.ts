export{}
const db = require('../utils/db')
require('./book')

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
`)

exports.count = async (callback?: () => any ): Promise<number> => {
    const count: Promise<number> = await db('SELECT COUNT(*) FROM BookInstance;')
    console.log(3, count[0]['COUNT(*)'])

    return count[0]['COUNT(*)']
}

exports.countAvailable = async (callback?: () => any ): Promise<number> => {
    const count: Promise<number> = await db("SELECT COUNT(*) FROM BookInstance WHERE status='Available';")
    console.log(4, count[0]['COUNT(*)'])

    return count[0]['COUNT(*)']
}