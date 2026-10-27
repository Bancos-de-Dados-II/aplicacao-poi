import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('Conectado com o MongoDB');
    }).catch((err)=>{
        console.log('Falha na conexão: ', err);
    });

export default mongoose;