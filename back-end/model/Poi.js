import sequelize from
  './database/sequelize.js';
import { DataTypes } from 'sequelize';

const Poi = sequelize.define(
  'Poi',{
    nome:{
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao:{
      type: DataTypes.STRING
    },
    tipo:{
      type: DataTypes.STRING,
      enum: ['Educação', 'Lazer', 'Saúde', 
        'Trabalho']
    },
    localizacao:{
      type: DataTypes.GEOMETRY('POINT'),
      allowNull: false
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    }
  }
);

Poi.sync();

export default Poi;