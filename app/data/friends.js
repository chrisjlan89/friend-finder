var friends = [
    {
        "name":"Chris",
        "photo": "https://www.dropbox.com/s/skufnxw4sz2cwu6/chris.jpg?raw=1",
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
        "photo": "https://www.dropbox.com/s/4qil9xkw41pyk0j/ryan.jpg?raw=1",
        //"photo":"../public/assets/img/ryan.jpg",
        "scores":[
            4,
            4,
            5,
            2,
            3,
            1,
            3,
            1,
            1,
            1
          ]
    },

    {
        "name":"Goku",
        "photo": "https://pbs.twimg.com/profile_images/833767319973212161/Ft904pMk_400x400.jpg",
        "scores":[
            3,
            1,
            2,
            2,
            4,
            1,
            2,
            4,
            2,
            1
          ]
    },

    {
        "name":"Vegeta",
        "photo": "http://static.tvtropes.org/pmwiki/pub/images/vegetavwx2014_928.jpg",
        "scores":[
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ]
    },

    {
        "name": "Andrew",
        "photo": "https://www.dropbox.com/s/e9wtejvr00p8y3s/andrew.jpg?raw=1",
        "scores": [
         4,
         3,
         3,
         3,
         5,
         2,
         4,
         1,
         3,
         4,
        ]
        
        }


    

]

module.exports = {
    friends
}

//   using data attributes 

	// collect data in proper format
	// data.name = $('input[name="name"]').val().trim();
	// data.photo = $('input[name="photo"]').val().trim();
	// data.scores = [];
	// for (var i = 1; i <= 10; i++) {
	// 	data.scores[i-1] = $('input[name="scores[' + i + ']"]:checked').val();
	// };
