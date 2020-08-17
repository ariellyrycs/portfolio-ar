import express from 'express';
import bodyParser from 'body-parser';

const port = 3000;
const app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/content', express.static('server/personal'));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/personal', (req, res) => {
    res.json({});
});
 
app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);
