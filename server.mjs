// const express = require('express')
import express from "express";
import path from 'path';
import cors from "cors";

console.log("i am a sever machice or software");
const app = express()
const port = process.env.PORT || 5001

app.use(cors());

app.get('/lahore', (req, res) => {

  res.send({
    temp:10,
    min:6,
    max: 35,
    humidity: 72,
    serverTime:new Date().toString()
  });
})
app.get('/islamabad', (req, res) => {

  // console.log("request ip",req.ip);
  res.send({
    temp:30,
    min:20,
    max: 35,
    humidity: 72,
    serverTime:new Date().toString()
  });

})

app.get('/karachi', (req, res) => {

  res.send({
    temp:28,
    min:13,
    max: 40,
    humidity: 72,
    serverTime:new Date().toString()
  });
})


const __dirname =path.resolve();
app.use('/', express.static(path.join(__dirname, './we/build')))
app.use('*', express.static(path.join(__dirname, './we/build')))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})