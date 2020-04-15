const express = require('express');
var router = express.Router();


const app = express();
const multer = require('multer');
fs = require('fs-extra')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

var url = 'mongodb+srv://duc:duc123123@cluster0-l46rb.azure.mongodb.net/test?retryWrites=true&w=majority';


var MongoClient = require('mongodb').MongoClient;
ObjectId = require('mongodb').ObjectId;

router.get('/',(req,res)=>{
    if(!req.session.username)
    {
      return res.status(401).send();
    }
      res.render('homepage');
})

router.get('/logout', function (req, res) {
  req.session.username = null;
  res.redirect('/');
 });

router.get('/employee', async(req,res)=>
{
  if(!req.session.username)
  {
    return res.status(401).send();
  }
  else 
  {
    let client= await MongoClient.connect(url);
    let dbo = client.db("ATNCompany");
    let results = await dbo.collection("Account").find({}).toArray();
    let count = await dbo.collection("Account").countDocuments();
    let messages = await dbo.collection("Messages").find({}).toArray();
    res.render('allAccounts',{accounts:results, count:count, messages:messages});
  }
})

router.post('/employee', async(req,res)=>
{
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let username = req.body.username;
    let password = req.body.password;
    let permission = req.body.permission;
    let newAccount = {Name: name, Email: email, Phone: phone, Username: username, Password: password, Permission: permission};
    
    let client= await MongoClient.connect(url);
    let dbo = client.db("ATNCompany");
    dbo.collection("Account").insertOne(newAccount,(err,res)=>
    {
        if (err) throw err;
        console.log("Add successfully");
        client.close();
    })

    let results = await dbo.collection("Account").find({}).toArray();
    res.render('allAccounts',{accounts:results});
})

//edit
router.get('/employee/edit', async(req,res)=>
{
  if(!req.session.username)
  {
    return res.status(401).send();
  }
  else 
  {
    let id = req.query.id;
    var ObjectID = require('mongodb').ObjectID;

    let client= await MongoClient.connect(url);
    let dbo = client.db("ATNCompany");
    let result = await dbo.collection("Account").findOne({"_id" : ObjectID(id)});
    res.render('editAccount',{accounts:result});
}})

router.post('/employee/edit', async(req,res)=>
{
    let id = req.body.id;
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let username = req.body.username;
    let password = req.body.password;
    let permission = req.body.permission;
    let newAccount = {$set:{Name: name, Email: email, Phone: phone, Username: username, Password: password, Permission: permission}}
    
    var ObjectID = require('mongodb').ObjectID;
    let condition = {_id: ObjectID(id)};

    let client= await MongoClient.connect(url);
    let dbo = client.db("ATNCompany");
    await dbo.collection("Account").updateOne(condition,newAccount);

    let results = await dbo.collection("Account").find({}).toArray();
    res.render('allAccounts',{accounts:results});
})

///. delete account
router.get('/employee/delete', async(req,res)=>
{
  if(!req.session.username)
  {
    return res.status(401).send();
  }
  else 
  {
    let id = req.query.id;
    var ObjectID = require('mongodb').ObjectID;
    let condition = {_id : ObjectID(id)};

    let client= await MongoClient.connect(url);
    let dbo = client.db("ATNCompany");
    dbo.collection("Account").deleteOne(condition);

    let results = await dbo.collection("Account").find({}).toArray();
    res.render('allAccounts',{accounts:results});
}})

////////Product

//khai bao storage
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
  
var upload = multer({ storage: storage })

///////////////////////////////////////
router.get('/photos', async(req, res) => {
    let client= await MongoClient.connect(url);
    let dbo = client.db("ATNCompany");
    dbo.collection('Product').find().toArray((err, result) => {
  
      const imgArray = result.map(element => element._id);
      console.log(imgArray);
      if (err) return console.log(err)
      res.send(imgArray)
    })
});

router.get('/photo/:id', async(req, res) => {
    var filename = req.params.id;
  
    let client= await MongoClient.connect(url);
    let dbo = client.db("ATNCompany");
    dbo.collection('Product').findOne({'_id': ObjectId(filename)}, {Image : 1}, (err, result) => {
      if (err) return console.log(err)
      res.contentType('image/jpeg'); 
      //res.send(result.image.buffer);
    })
  })





router.get('/product', async(req,res)=>
{
  if(!req.session.username)
  {
    return res.status(401).send();
  }
  else 
  {
    let client= await MongoClient.connect(url);
    let dbo = client.db("ATNCompany");
    let results = await dbo.collection("Product").find({}).toArray();
    let count = await dbo.collection("Product").countDocuments();
 
    res.render('allProducts',{products:results, count:count});
  }})

router.post('/product', upload.single('picture'), async(req,res)=>
{
    let name = req.body.name;
    let price = req.body.price;
    let origin = req.body.origin;
    let description = req.body.description;

    var img = fs.readFileSync(req.file.path);
    var encode_image = img.toString('base64');

    var finalImg = {
      contentType: req.file.mimetype,
      image: new Buffer(encode_image, 'base64')
    };

    let newProduct= {Name: name, Price: price, Origin: origin, Image:finalImg, Description: description};
    
    let client= await MongoClient.connect(url);
    let dbo = client.db("ATNCompany");
    dbo.collection("Product").insertOne(newProduct);

    var filename = req.params.id;
  
    dbo.collection('Product').findOne({ '_id': ObjectId(filename) }, (err, result) => {
      if (err) return console.log(err)
      res.contentType('image/jpeg');
      res.send(result.image);
    })
    let results = await dbo.collection("Product").find({}).toArray();
    let count = await dbo.collection("Product").count();
    res.render('allProducts',{products:results, count:count});
})

///Edit product
router.get('/product/edit', async(req,res)=>
{
  if(!req.session.username)
  {
    return res.status(401).send();
  }
  else 
  {
    let id = req.query.id;
    var ObjectID = require('mongodb').ObjectID;

    let client= await MongoClient.connect(url);
    let dbo = client.db("ATNCompany");
    let result = await dbo.collection("Product").findOne({"_id" : ObjectID(id)});
    res.render('editProduct',{products:result});
}})

router.post('/product/edit', upload.single('picture'), async(req,res)=>
{

    let id = req.body.id;
    let name = req.body.name;
    let price = req.body.price;
    let origin = req.body.origin;
    let description = req.body.description;

    var img = fs.readFileSync(req.file.path);
    var encode_image = img.toString('base64');
    var filename = req.params.id;
    
    var finalImg = {
      contentType: req.file.mimetype,
      image: new Buffer(encode_image, 'base64')
    };

    var ObjectID = require('mongodb').ObjectID;
    let condition = {_id: ObjectID(id)};
    let newProduct= {$set:{Name: name, Price: price, Origin: origin, Image:finalImg, Description: description}};
    
    let client= await MongoClient.connect(url);
    let dbo = client.db("ATNCompany");
    await dbo.collection("Product").updateOne(condition,newProduct);

  
    /* 
    dbo.collection('Product').findOne({ '_id': ObjectId(filename) }, (err, result) => {
      if (err) return console.log(err)
      res.contentType('image/jpeg');
      res.send(result.image.buffer);
    })
    */
    let results = await dbo.collection("Product").find({}).toArray();
    let count = await dbo.collection("Product").count();
    res.render('allProducts',{products:results, count:count});
})

///Delete product

router.get('/product/delete', async(req,res)=>
{
  if(!req.session.username)
  {
    return res.status(401).send();
  }
  else 
  {
    let id = req.query.id;
    var ObjectID = require('mongodb').ObjectID;
    let condition = {_id : ObjectID(id)};

    let client= await MongoClient.connect(url);
    let dbo = client.db("ATNCompany");
    dbo.collection("Product").deleteOne(condition);

    let results = await dbo.collection("Product").find({}).toArray();
    res.render('allProducts',{products:results});
}})



module.exports = router;