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

PoiSchema.index({ localizacao: '2dsphere' });
PoiSchema.index({nome:'text', descricao:'text'},
  {default_language: 'pt', weights:{nome:2, decricao:1}});

const Poi = mongoose.model('Poi', PoiSchema);

export default Poi;