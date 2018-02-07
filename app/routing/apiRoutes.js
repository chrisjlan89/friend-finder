// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

module.exports = function(app, path){

var friendArr = require('../data/friends')


console.log(friendArr.friends)


app.get("/api/friends", function(req,res){
    return res.json(friendArr.friends);
});




app.post("/api/friends" , function(req,res){
    console.log(req.body)
    var newFriend = req.body;
    console.log("survey submitted")
    console.log(newFriend)

    friendArr.friends.push(newFriend);


});






}





