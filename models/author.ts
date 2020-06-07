export{}
const db = require('../utils/db')

db(`
CREATE TABLE IF NOT EXISTS Author
(
    authorID      int primary key not null auto_increment,
    first_name    varchar(100)    not null,
    family_name   varchar(100)    not null,
    date_of_birth date            not null,
    date_of_death date,
    name          varchar(100),
    lifespan      varchar(100),
    url           varchar(250)
);
`)

exports.count = async (callback?: () => any ): Promise<number> => {
    const count: Promise<number> = await db('SELECT COUNT(*) FROM Author;')
    return count[0]['COUNT(*)']
}