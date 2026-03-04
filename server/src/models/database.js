const dotenv = require('dotenv');
const sql = require('mssql');

dotenv.config();

const config = {
    user: process.env.MSSQL_USER,
    password: process.env.MSSQL_PASSWORD,
    server: process.env.MSSQL_SERVER,
    database: process.env.MSSQL_DATABASE,
    port: parseInt(process.env.MSSQL_PORT) || 3000,
    options: {
        encrypt: true,
        trustServerCertificate: true,
        enableArithAbort: true
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};

async function connectToDatabase(){
    try{
        await sql.connect(config);
        console.log("Kết nối sql thành công");
        const result = await sql.query`SELECT @@VERSION AS version`;
        console.log(result.recordset[0].version);
        return sql;
    }catch(err){
        console.error("Lỗi khi kết nối database : ",err.message);
        throw err;
    }
}

module.exports = {sql , connectToDatabase};

