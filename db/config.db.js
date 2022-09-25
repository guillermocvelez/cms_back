const mongoose = require('mongoose');

const dbConnection = async () => {
  try{    
    await mongoose.connect( process.env.API_URL)
  } catch(err) {
    console.log(err);
    throw new Error('Error al conectarse a la base de datos')
  }
}

module.exports = {
  dbConnection,
}