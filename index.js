const server = require('./src/app')
const dotenv = require('dotenv')
const { db } = require('./src/database/db.js')


dotenv.config();


const port = process.env.port_server || 3001 
 

server.listen(port, async () => {
    await db.sync({ force: false });
    console.log(`Server raised in port: ${port}`);
}) 