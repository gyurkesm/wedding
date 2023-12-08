/*import fs from 'fs';
import { createServer } from 'http';
import app from 'express'
*/

import express from 'express';
import cors from 'cors';
import fs from 'fs';


const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

let jsonData = [];

app.get('/api/data', (req, res) => {
  res.json(jsonData);
});

app.post('/api/data', (req, res) => {
  const newData = req.body;
  jsonData.push(newData);
  res.json(newData);
  let a = res.json(newData);

  
  fs.appendFile('database.txt', newData.name + '\n', (err) => {
    if (err) throw err;
    console.log('Saved!');
  });
  
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
});

 /*
app.get('/tshirt', (req, res) => {
  res.status(200).send({
    tshirt: 'red',
    size: 'large'
  });
});

createServer((req, res) =>{
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(req.url);
  res.end();
}).listen(8080);
*/


/*
fetch('https://quotes.toscrape.com/random')
  .then((response) => response.text())
  .then((body) => {
    console.log(body)
  });
*/