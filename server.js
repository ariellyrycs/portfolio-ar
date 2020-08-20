import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
const app = express();

app.use(cors({
		origin: 'http://localhost:4200'
}));

const port = 3000;
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/content', express.static('server/assets'));

app.get('/personal', (req, res) => {
    res.json({});
});
 
app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);
