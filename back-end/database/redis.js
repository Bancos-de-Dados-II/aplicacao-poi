import {createClient} from 'redis';
import dotenv from 'dotenv';
dotenv.config();

const client = createClient({
    url: process.env.REDIS_URL
}).on("error", (err)=>{
    console.log('Falha na conexão com o redis');
}).connect().then(()=>{
    console.log('Conectado com o redis');
})

export default client;