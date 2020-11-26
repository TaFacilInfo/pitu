import app from './app';
import database from './database';

//database.sync({force: true});//Forçar criação de tabelas - usar somente em ambiente dev
database.sync();
console.log('Database runnig at 3306')

app.listen(3000);
console.log('Server runnig at 3000');