const express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://duc:duc123123@cluster0-l46rb.azure.mongodb.net/test?retryWrites=true&w=majority';


router.get('/',(req,res)=>{
    res.render('homepage');
})

router.get('/employee', (req,res)=>
{
    res.render('allAccounts');
})

router.get('/employee/add', (req,res)=>
{
    res.render('allAccounts');
})


module.exports = router;