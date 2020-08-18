const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const cors = require('cors');
var _ = require('lodash')

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost/artwebsite').then(
    () => console.log('Connected to MongoDB')
).catch(err => console.error('Could not connect to MongoDB...', err));
const paintingSchema = new mongoose.Schema({
    objectType: String,
    artistName: String,
    paintingTitle: String,
    date: { type: Date, default: Date.now },
    price: Number,
    description: String,
    tags:[String],
    rating: [
        {
            star1: Number,
            star2: Number,
            star3: Number,
            star4: Number,
            star5: Number
        }
    ],
    height: Number,
    width: Number,
    genre: String,
    img: { data: Buffer, contentType: String}
});
const Painting = mongoose.model('Painting', paintingSchema);
//GET ALL Paintings
app.get('/painting/', async (req, res) =>{
    let paintings = await Painting.find({}, (err, paint) => 
    {
        if (err){
            console.log("Error");
            return;
        }
    }
    );
    res.send(paintings);
});
//GET Single painting
app.get('/painting/:_id', async (req, res) =>{
    let painting = await Painting.find({_id:req.params._id}, (err, paint) => 
    {
        if (err){
            console.log("Error");
            return;
        }
    }
    );
    res.send(painting);
});
//UPDATE
app.put('/painting/update_product/:id/:objType/:artistName/:objTitle/:objPrice/:objDesc/:height/:width/:genre/', (req, res)=>{
    //tags passed in query string
    Painting.findByIdAndUpdate(req.params.id, {$set:{
        objectType: req.params.objType,
        artistName: req.params.artistName,
        paintingTitle: req.params.objTitle,
        price: parseInt(req.params.objPrice),
        description: req.params.objDesc,
        tags:req.query.tags,
        height: parseInt(req.params.height),
        width: parseInt(req.params.width),
        genre: req.params.genre,
        img: {
            data: fs.readFileSync('./pic2.jpg'),
            contentType: 'image/jpeg'
        }
    }},{upsert:true}, function(err, result){
        if(err){
            console.log(err);
        }
        console.log("RESULT: " + result);
    });
    res.sendStatus(200);
});
//DELETE Single painting
app.delete('/painting/delete_product/:id', (req, res)=>{
    console.log("Deleting...");
    Painting.findByIdAndDelete({_id: req.params.id}, function(err){
        res.send(err);
        console.log(err);
    });
});
//UPDATE
app.post('/painting/upload_product/:objType/:artistName/:objTitle/:objPrice/:objDesc/:height/:width/:genre/:tags', (req, res)=>{
    //tags passed in query
    let obj1 =  new Painting({
        objectType: req.params.objType,
        artistName: req.params.artistName,
        paintingTitle: req.params.objTitle,
        price: parseInt(req.params.objPrice),
        description: req.params.objDesc,
        rating: [
            {
                star1: 0,
                star2: 0,
                star3: 0,
                star4: 0,
                star5: 0
            }
        ],
        tags:req.params.tags.split(","),
        height: parseInt(req.params.height),
        width: parseInt(req.params.width),
        genre: req.params.genre,
        img: {
            data: fs.readFileSync(req.query.url),
            contentType: 'image/jpeg'
        }
    });
    obj1.save();
    res.send(obj1);
});
/*
Author: Sameed Atif
-Added dynamic query
-Added partial string search
-Handle no input through front-end
-Add min-max
*/
app.get('/painting/search/:searchstring', async (req, res)=>{
    let result = [];
    let paintings;
    if(req.params.searchstring !== ""){
        paintings = await Painting.find({
            $or:[{objectType: { $regex: req.params.searchstring, $options: "i" } },
            {artistName: { $regex: req.params.searchstring, $options: "i" }},
            {paintingTitle: { $regex: req.params.searchstring, $options: "i" }},
            {description: { $regex: req.params.searchstring, $options: "i" }},
            {tags:{ $elemMatch: { $eq: req.params.searchstring } }},
            {genre: { $regex: req.params.searchstring, $options: "i" }}
            ]
        }, (err, paint) => {
            if (err){
                console.log("Error");
                return;
            }
        });
    }else{
        paintings = await Painting.find({
            
        }, (err, paint) => {
            if (err){
                console.log("Error");
                return;
            }
        });
    }
    if(req.query!= null) {
        let searchCriteria = {};
        for(key in req.query){
            searchCriteria[key] = req.query[key];
        }
        console.log("search criteria", searchCriteria);
        paintings.filter(painting=>{
            for (pro in searchCriteria){
                console.log(painting[pro], searchCriteria[pro]);
                if(Array.isArray(searchCriteria[pro])){
                    console.log("Array length", searchCriteria[pro].length)
                    for (let i = 0; i < searchCriteria[pro].length; i++){
                        console.log("str: ", searchCriteria[pro][i]);
                        if(searchCriteria[pro][i] === painting[pro]){
                            result.push(painting);
                        }
                    }
                }else (painting[pro] === searchCriteria[pro])
                    result.push(painting);
            }
        });
    }
    res.send(_.uniqBy(result, '_id'));
});
/*
TODO: Increment rating
*/
/*app.put('/increment_product_rating/:id/', (req, res)=>{
    //tags passed in query string
    
    Painting.findByIdAndUpdate(req.params.id, {$set:{
        rating: [
            {
                
            }
        ]
    }},{upsert:true}, function(err, result){
        if(err){
            console.log(err);
        }
        console.log("RESULT: " + result);
    });
    res.sendStatus(200);
});

/*
*
*
USER 
*
*
*/

const userSchema = new mongoose.Schema({
    artistName: String,
    email: String,
    password: String,
    cart: [
        {
            painting_id: String,
            painting_name: String,
            paintng_author: String,
            painting_price: String
        }
    ]
});
const User = mongoose.model('User', userSchema);
//GET ALL users
app.get('/users/', async (req, res) =>{
    let users = await User.find({}, (err, paint) => 
    {
        if (err){
            console.log("Error");
            return;
        }
    }
    );
    res.send(users);
});

//GET Single user
app.get('/users/getSingleUser/:_id', async (req, res) =>{
    let user = await User.find({_id:req.params._id}, (err, paint) => 
    {
        if (err){
            console.log("Error");
            return;
        }
    }
    );
    res.send(user);
});
//UPDATE
app.put('/user/update_user/:id/:name/:email/:password', (req, res)=>{
    //tags passed in query string
    User.findByIdAndUpdate(req.params.id, {$set:{
        artistName: req.params.name,
        email: req.params.email,
        password: req.params.password,
    }},{upsert:true}, function(err, result){
        if(err){
            console.log(err);
        }
        console.log("RESULT: " + result);
    });
    res.sendStatus(200);
});
//DELETE
app.delete('/user/delete_user/:id', (req, res)=>{
    console.log("Deleting...");
    User.findByIdAndDelete({_id: req.params.id}, function(err){
        res.send(err);
        console.log(err);
    });
    res.sendStatus(200);
});
//UPDATE
app.post('/user/create_user/:artistName/:email/:password', (req, res)=>{
    //tags passed in query
    let obj1 =  new User({
        artistName: req.params.artistName,
        email: req.params.email,
        password: req.params.password,
        });
    obj1.save();
    res.send(obj1);
});
/*
ADD TO CART
EMPTY THE CART
*/







/****
 * 
 * 
 * 
 * 
 * Hira 
 */
//GET  user signin 
app.get('/users/signin/:_email/:_psw', async (req, res) =>{
    let user =await  User.find({email:req.params._email ,password:req.params._psw }, (err, paint) => 
    {
        if (err){
            res.send(err);
        }
    }
    );
   res.send(user);
});
app.listen(8080, () => { console.log("Running server on 8080") });