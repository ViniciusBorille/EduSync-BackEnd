const { Pool } = require('pg')

const pool = new Pool({
    user:'postgres',
    password:'postgres',
    host:'35.193.232.186',
    //host:'localhost',
    port:5432,
    database:'edusync'
}
)

module.exports=pool