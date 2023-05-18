const server = require('./src/app')
const dotenv = require('dotenv')
const { db } = require('./src/database/db.js')


dotenv.config();


const port = process.env.Server_PORT || 3001 
 

server.listen(port, async () => {
    await db.sync({ force: false });
    console.log(`Server raised in port: ${port}`);
}) 