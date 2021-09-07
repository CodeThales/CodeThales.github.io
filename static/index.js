const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/index.html'));
})

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/about.html'));
})

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/projects.html'));
})

app.use('/', router);