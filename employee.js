const express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://duc:duc123123@cluster0-l46rb.azure.mongodb.net/test?retryWrites=true&w=majority';


router.get('/',(req,res)=>
{
    res.render('homepage');
})

router.get('/homepage/employee', async(req,res)=>
{
    let client= await MongoClient.connect(url);
    let dbo = client.db("ATNCompany");
    let results = await dbo.collection("Account").find({}).toArray();
    res.render('allAccounts',{sanPham:results});
})


module.exports = router;