var express = require('express');
var router = express.Router();

router.post('/animal', function(req, res){

    var animal = req.body.value;
    console.log(animal);
    var randNum = randomNumber(1, 100);
    randNum = randNum.toString();
    res.send(randNum);

    pg.connect(connectionString, function(err, client, done){
        client.query("INSERT INTO animals (animal, amount) VALUES ($1, $2) RETURNING id",
    [animal, randNum],
        function(err, result){
            done();
            if(err){
                console.log("error inserting data: ", err);
            }else{
                console.log("successfully added to DB!");
            }
        }
    });
});//end of animal url

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}


module.exports = router;


// TODO send incoming object into DB
// TODO give DB entry random number
// TODO send same random number to client/DOM
