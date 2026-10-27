import mongoose from '../database/mongoose.js';
import { randomUUID } from 'crypto';

const PoiSchema = new mongoose.Schema({
  _id: {
    type: 'UUID',
    default: () => randomUUID(),
    required: true
  },
  nome: {
    type:String,
    required: true
  },
  descricao:{
    type:String
  },
  tipo:{
    type: String,
    required: true,
    enum: ['Educação', 'Lazer', 'Saúde', 'Trabalho']
  },
  localizacao:{
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates:{
      type: [Number],
      required: true
    }
  }
});

const Poi = mongoose.model('Poi', PoiSchema);

export default Poi;