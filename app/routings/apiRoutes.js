const FRIEND = require("../data/friends.js")


module.exports = function (app) {

    app.get ("/api/friends", function (req, res){
        res.json(FRIEND)
    });
// app.post("/api/friends", function(req, res) {
    app.post('/api/friends', function(req,res){
        //grabs the new friend's scores to compare with friends in FRIEND array
        var newscore = req.body.scores;
        var scoresArray = [];
        // var friendCount = 0;
        var bestMatch = 0;



//      const bestMatch = {
//         name: "",
//         photo: "",
//         difference: 30

//         };
//         let newFriend = req.body;
// 	    let newphoto = req.body.newphoto;
// 	    let newName = req.body.newName;
//         let newScores = req.body.scores;
//         console.log (friendData)

        for (let i=0; i<FRIEND.length; i++) {
            // console.log(friend[i].name);
            var scoresDiff = 0;
    
           for (let j=0; j<newscore.length; j++){
            scoresDiff += (Math.abs(parseInt(FRIEND[i].scores[j]) - parseInt(newscore[j])));
        }
        scoresArray.push(scoresDiff);
    }
            // totalDiff += Math.abs(friend[i].scores[j] - newScores[j]);
            // console.log("total diffrent: " + totalDiff);
    
    //         if (totalDiff < bestMatch.difference) {
    //             bestMatch.name = friendData[i].name;
    //             bestMatch.photo = friendData[i].photo;
    //             bestMatch.difference = totalDiff;
    //             console.log("bestMatch.name: " + bestMatch.name);
    //             console.log("bestMatch.difference: " + bestMatch.difference);
        for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    //return bestMatch data
    

    //pushes new submission into the friendsList array
 
    //         }
            
    //        }
    var bff = FRIEND[bestMatch];
    res.json(bff);
    
    //        console.log("bestMatch: " + bestMatch.name);
    //        console.log("bestMatch.photo: " + bestMatch.photo);
    
    //     }
        
    //     friend.push(newFriend);
    //     res.json(bestMatch);
    FRIEND.push(req.body);
});
};
      
    //   }); 
    // }