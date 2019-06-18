const express = require('express')
const app = express()
const port = 3000
const flights = require('./data/flights.js');

app.get('/', function(req, res){
  res.send('Hello World!')
});


app.get('/api/flights', function(req, res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  var response = [];
    response = flights.filter(function(flightDetail){
      if((flightDetail.flightNumber == req.query.fNumber || (flightDetail.origin == req.query.origin && flightDetail.destination == req.query.destination)) 
    	 && flightDetail.departure == req.query.date){
        return flightDetail;
      }
    });

  res.send(response);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))