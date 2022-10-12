import express from 'express';
import bodyParser from 'body-parser';
import { routes } from './routes/helloRoute';

const app = express();

app.use(bodyParser.json()); // To deserialise client's request


routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

app.listen(8080,() => { console.log('Server is listening on port 8080')});
app.get('/hello', (req,res) => {
    res.send('hello there!');
});