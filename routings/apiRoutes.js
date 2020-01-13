const friend = require("../app/data/friends")


module.exports = function (app) {

    app.get ("/api/friends", function (req, res){
        res.json(friendData)
    });



app.post("/api/friends", function(req, res) {

     const bestMatch = {
        name: "",
        photo: "",
        difference: 30

        };
        let newFriend = req.body;
	    let newphoto = req.body.newphoto;
	    let newName = req.body.newName;
        let newScores = req.body.scores;
        console.log (friendData)

        for (let i=0; i<friend.length; i++) {
            console.log(friend[i].name);
           let totalDiff = 0;
    
           for (let j=0; j<friend[i].scores.length; j++){
    
            totalDiff += Math.abs(friend[i].scores[j] - newScores[j]);
            console.log("total diffrent: " + totalDiff);
    
            if (totalDiff < bestMatch.difference) {
                bestMatch.name = friendData[i].name;
                bestMatch.photo = friendData[i].photo;
                bestMatch.difference = totalDiff;
                console.log("bestMatch.name: " + bestMatch.name);
                console.log("bestMatch.difference: " + bestMatch.difference);
        
            }
            
           }
    
           console.log("bestMatch: " + bestMatch.name);
           console.log("bestMatch.photo: " + bestMatch.photo);
    
        }
        
        friend.push(newFriend);
        res.json(bestMatch);
      
      }); 
    }