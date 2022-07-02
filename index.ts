const express = require('express');

const apiCotnroller = require('./controllers/book-corner-api');
const usersCotnroller = require('./controllers/book-corner-users');

const database = require('./models/index');

const cors = require('./middlewares/cors');
const auth = require('./middlewares/auth');
const serverInfo: object = {
    serverName: 'Book-Corner-API',
    version: '0.1',
};

initRest();

async function initRest() {
    const app = express();
    const port: number = 4000;
    //TODO: check if database is imported correctly
    // await database();

    app.use(express.json());
    app.use(cors());
    app.use(auth());
    app.use('/api', apiCotnroller);
    app.use('/users', usersCotnroller);

    app.get('/', (req: any, res: { json: (arg0: any) => any; }) => res.json(serverInfo));

    app.listen(port, () => console.log(`Rest server is running on ${port}`));
}