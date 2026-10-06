import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.API_PORT || 3000;

app.listen(port, ()=>{
  console.log('Aplicação rodando na porta '+port);
});