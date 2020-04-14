const express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://duc:duc123123@cluster0-l46rb.azure.mongodb.net/test?retryWrites=true&w=majority';


router.get('/', (req,res)=>
{
    res.render("employeepage");
})


router.get('/product', async(req,res)=>
{
    let client= await MongoClient.connect(url);
    let dbo = client.db("ATNCompany");
    let results = await dbo.collection("Account").find({}).toArray();
    let count = await dbo.collection("Account").countDocuments();
    res.render('employeeProducts',{accounts:results, count:count});
})


module.exports = router;