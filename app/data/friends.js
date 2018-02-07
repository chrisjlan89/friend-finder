var friends = [
    {
        "name":"Chris",
        "photo":"img",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
    },
    {
        "name":"Ryan",
        "photo":"img",
        "scores":[
            5,
            1,
            4,
            4,
            3,
            1,
            2,
            5,
            3,
            1
          ]
    }

]

module.exports = {
    friends
}





// Determine the user's most compatible friend using the following as a guide:

// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
// Example:
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5
// Remember to use the absolute value of the differences. Put another way: no negative solutions! -------- >   Math.abs(x)
 // Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.



// var allScores = [];

// for( var i =0; friends.length; i++){
//     var indvidualScore = 0;
//     for(var j =0; j < 10; j++){
//           indvidualScore = Math.abs(newFriend.scores[j] - friends.scores[i]);
          
//     }



// }







//   using data attributes 

	// collect data in proper format
	// data.name = $('input[name="name"]').val().trim();
	// data.photo = $('input[name="photo"]').val().trim();
	// data.scores = [];
	// for (var i = 1; i <= 10; i++) {
	// 	data.scores[i-1] = $('input[name="scores[' + i + ']"]:checked').val();
	// };
