import {createClient} from 'redis';
import dotenv from 'dotenv';
dotenv.config();

const client = await createClient({
    url: process.env.REDIS_URL
}).on("error", (err)=>{
    console.log('Falha na conexão com o redis');
}).connect();

export default client;