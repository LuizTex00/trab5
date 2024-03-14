const mongoose = require('mongoose');


const DB_URL = 'mongodb://localhost:27017/nome-do-seu-banco-de-dados';


const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Conectar ao MongoDB
mongoose.connect(DB_URL, options)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro na conexão com o MongoDB:', err));


module.exports = mongoose;