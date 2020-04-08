const express = require('express');

var router = express.Router();
router.get('/',(req,res)=>{
    res.render('index');
})

router.get('/about', (req,res)=>{
    //pass model to view
    res.render('about', {
        name:"Bill", 
        job: "CEO"});
})



module.exports = router;