
function getFriends(){
  $.get('/api/friends') 
  .done(function(friends) {
    console.log("friend data" , friends);
    submitFriend(friends)
  })
}

getFriends()

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



  function submitFriend(friends){
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

  // for (var i = 1; i <= 10; i++) {
	// 	newFriend.scores[i-1] = $('input[name="q[' + i + ']"]:checked').val();
	// };


  console.log("new friend scores" , newFriend.scores)
  $.post('/api/friends', newFriend) 
  .done(function(data) {
    console.log(data);
    alert('Adding Friend...');
  })


  friendCaller(friends, newFriend)
});

}
   

function friendCaller(friends , newFriend){
//console.log(newFriend.scores);
// console.log("friends " + friends[0].scores[0]);




var allScores = [];

for(var i =0; i  < friends.length; i++){
  
  var indvidualScore = 0;
   for(var j =0; j <10; j++){
       console.log("i" + i + " " + j)
       

      
        indvidualScore += Math.abs(newFriend.scores[j] - friends[i].scores[j]);
         
         
   }
  //console.log(indvidualScore)
   allScores.push(indvidualScore)

   


}
 // console.log(allScores)
   makeMatch(friends, allScores);
}

function makeMatch(friends, allScores){
  //console.log(allScores)
  var lowestNum = Math.min(...allScores)
  //console.log(lowestNum)
  var matchIndex = allScores.indexOf(lowestNum)
  //console.log(matchIndex)
  //console.log(friends[matchIndex])
  var matchData = friends[matchIndex]
  //console.log(matchData)
  populateModal(matchData)
}


function populateModal(matchData){
 //console.log("line 504" , matchData)
 var modalData = matchData;
 //console.log(modalData)
 //console.log(modalData.name)
 var matchName = modalData.name;
 
 var matchImg = modalData.photo;
 //console.log(matchName)
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

