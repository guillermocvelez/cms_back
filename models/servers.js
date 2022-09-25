const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../db/config.db');

class Server {
  constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/users';

    this.connectDB();
    this.middlewares();
    this.routes();
  }

  async connectDB(){
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use ( express.json() );
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(`${this.usuariosPath}`, require('../routes/users.routes'))
  }

  listen() {    
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo', this.port)
    })
  }
}


module.exports = Server;