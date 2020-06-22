if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = require('./src/app');

async function init() {
  app.listen(app.get('port'), () => {
    console.log(`Iniciando API en el puerto ${app.get('port')}`);
  });
}
init();
