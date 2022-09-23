const express = require('express');

const fs = require('fs');

const app = express();


app.get('/images/:id', function (req, res){

  const id = req.params.id;

  fs.readFile(__dirname + '/images/' + id + '.jpg', function(error, data){

    if (error) {

        res.writeHead(404)
        res.write ('Error: File not found')

    } else {

        res.write(data)
        res.writeHead(200, { 'Content-Type': 'image/jpg' })
    }

    res.end()

  })
});

app.listen(7000, function (req, res ){
  console.log('Running...')
});