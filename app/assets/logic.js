 var friendArr = require('../data/friends')
function validate(){
  for(var p = 0; p < 10; p++){
  if(name!==undefined && photo!==undefined && (isNaN("q" + p) === false)){
      return true;
  } 
       else{
           return false;
       }

  }

}



  function submitFriend(){
  var newFriend;
    $('#submit').on('click', function(event){
  event.preventDefault();
   newFriend = {
    name: $('#name').val().trim(),
    photo: $('#photo').val().trim(),
    
    
    // use a for loop here to cut down on code ????
    scores : [
      parseInt($("input[name=q1]:checked").val()),
       parseInt($("input[name=q2]:checked").val()),
      parseInt($("input[name=q3]:checked").val()),
      parseInt($("input[name=q4]:checked").val()),
      parseInt($("input[name=q5]:checked").val()),
      parseInt($("input[name=q6]:checked").val()),
      parseInt($("input[name=q7]:checked").val()),
      parseInt($("input[name=q8]:checked").val()),
        parseInt($("input[name=q9]:checked").val()),
      parseInt($("input[name=q10]:checked").val())
  ],
        date : new Date,

  };
  // for(var i =0; i < 10; i++){
  //    var qScore = "input[name=q" +'i' + "]:checked"
  //     newFriend.scores.push(qScore)
  // }
  console.log(newFriend)
  $.post('/api/friends', newFriend) 
  .done(function(data) {
    console.log(data);
    alert('Adding Friend...');
  })


  friendCaller(newFriend)
});

}
submitFriend();    
//https://pbs.twimg.com/profile_images/833767319973212161/Ft904pMk_400x400.jpg


// module.exports = {
//     friends
// }





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

function friendCaller(newFriend){
console.log(newFriend.scores);
console.log("friends " + friends[0].scores[0]);




var allScores = [];

for(var i =0; i  < friends.length; i++){
  
  var indvidualScore = 0;
   for(var j =0; j <10; j++){
       console.log("i" + i + " " + j)
       
       console.log( " friend " + i + " scores " + j +" : " + friends[i].scores[j]) 
       console.log("new friend score" + j + " : " + newFriend.scores[j])
      
        indvidualScore += Math.abs(newFriend.scores[j] - friends[i].scores[j]);
         
         
   }
  console.log(indvidualScore)
   allScores.push(indvidualScore)

   


}
  console.log(allScores)
   makeMatch(allScores);
}

function makeMatch(allScores){
  console.log(allScores)
  var lowestNum = Math.min(...allScores)
  console.log(lowestNum)
  var matchIndex = allScores.indexOf(lowestNum)
  console.log(matchIndex)
  console.log(friends[matchIndex])
  var matchData = friends[matchIndex]
  console.log(matchData)
  populateModal(matchData)
}


function populateModal(matchData){
 console.log("line 504" , matchData)
 var modalData = matchData;
 console.log(modalData)
 console.log(modalData.name)
 var matchName = modalData.name;
 
 var matchImg = modalData.photo;
 console.log(matchName)
 //
 $('#myModal').modal('toggle');
// document.getElementById('results-modal').setAttribute('data-toggle', 'modal')
 const matchNameField = document.querySelector('.modal-match-name')
 const matchImgField = document.querySelector('#modal-img-name').setAttribute("src" , matchImg)

 
 
 
 matchNameField.append(matchName)



}


$("#close-modal").on('click', function(event){
  event.preventDefault();
  $('.modal-match-name').empty();
})

