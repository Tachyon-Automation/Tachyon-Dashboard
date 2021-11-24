const pg = require('pg');

const pool = new pg.Pool({
    user: 'postgres',
    host: '143.198.20.27',
    database: 'monitors',
    password: 'thisistooeasy',
    port: 5432,
});

module.exports = pool;