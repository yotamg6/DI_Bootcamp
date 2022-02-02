const exp = require('express');
const env = require('dotenv');
const DB = require('./modules/db');
// init express
const app = exp();
env.config();
// for get http body data
app.use(exp.urlencoded())
app.use(exp.json())
// listen to....
app.listen(process.env.PORT, ()=>{
  console.log(`listening on port ${process.env.PORT}`);
})
// get request with route '/customers'
app.get('/customers', (req,res)=>{
  DB.getCustomers()
  .then(data => {
    res.json(data)
  })
  .catch(e => {
    console.log(e);
  })
})
// get request with route '/customer' - get as a query string
app.get('/customer',(req,res)=>{
  console.log('query',req.query);
  DB.getCustomer(req.query.cid)
  .then(data => {
    res.json(data)
  })
  .catch(e => {
    console.log(e);
  })
})
// get request with route '/customer' - get as a params
app.get('/customer/:id',(req,res)=>{
  console.log(req.params);
  DB.getCustomer(req.params.id)
  .then(data => {
    res.json(data)
  })
  .catch(e => {
    console.log(e);
  })
})
// post request with route '/customer' - get data in http body
app.post('/customer',(req,res)=>{
  console.log('body',req.body);
  DB.getCustomer(req.body.cid)
  .then(data => {
    res.json(data)
  })
  .catch(e => {
    console.log(e);
  })
})
// for static file in public folder
app.use('/',exp.static(__dirname+'/public'))

app.get('/about', (req,res)=>{
  res.sendFile(__dirname+'/public/about.html')
})
app.get('/welcome', (req,res)=>{
  res.redirect('/home')
})
app.get('/home',(req,res)=>{
  res.sendFile(__dirname+'/public/index.html')
})
