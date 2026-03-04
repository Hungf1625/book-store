
const express = require('express');
const { connectToDatabase, sql } = require('./src/models/database');

const app = express();
const port = 3000;


app.get('/',async (req,res)=>{

});

async function startServer(){
    try{
        await connectToDatabase();
        app.listen(port, ()=> console.log(`Localhost:${port}`));
    }catch(err){
        console.error("Không thể khới động server : ",err);
        process.exit(1);
    }
};

startServer();