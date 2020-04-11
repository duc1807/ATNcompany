const express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://duc:duc123123@cluster0-l46rb.azure.mongodb.net/test?retryWrites=true&w=majority';


router.get('/',(req,res)=>{
    res.render('index');
})

router.post('/homepage', async(req,res)=>{
    var username = req.body.username;
    var password = req.body.password;

    let client= await MongoClient.connect(url);
    let dbo = client.db("ATNCompany");
    let results = await dbo.collection("Account").find({Username:username, Password:password}).toArray();
        if(results == 0)
        {
            res.render("index");          
        }
        else
        {
            if(username == "admin")
            res.render("homepage");
        }

})




module.exports = router;