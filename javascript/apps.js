  
//seudo code//
//1. create the array of songs and loop to the every index of song
//create the function that is assigning clickable button to the every song in the array.
//create the form with button for search and submit button.
// create the another function that preserve the input value from user and add to array of song.
// get the gifphay key from the gifphay.com
//make ajax function with url and method
//get the response and display in the div 

  var songs = ["Old Town Road", "bad guy", "I dont care", "Dancing with A stranger", "You Need To Calm Down", "Boyfriend", "7 rings", "ME!", "Someone You Loved", "juice",];
function renderButtons() {

    $("#buttons-view").empty();

    // Looping through the array of songs
    for (var i = 0; i < songs.length; i++) {

        var a = $("<button>");
        a.addClass("song");
        a.attr("data-name", songs[i]);
        a.text(songs[i]);
        $("#song-view").append(a);
    }
}
$("#add-song").on("click", function(event) {
    event.preventDefault();

    var song = $("#song-input").val().trim();
    songs.push(song);

    renderButtons();
  });
  renderButtons();


  var topic = $(this).attr("data-name");
var api = 'https://api.giphy.com/v1/gifs/search?';
var limit = '&limit=10';
var key = 'api_key=1bQ9pVg5vAqAtTnBRvSSBLn8iR4U8Yi4&q=';
var rating = '&rating=G';
//queryURL variable
var queryURL = api + key + topic + limit + rating;
console.log("queryURL", queryURL);
//ajax jquery Object
$.ajax({
    url: queryURL,
    method: "GET"
})
.then(function (response) {
    console.log("response",response);

    var songDiv = $("<div class='song'>");
    var rating = response.rating;


    var ratedisplay = $("<p>").text("Rating: " + rating);

    songDiv.append(ratedisplay);
    var import_datetime = response.import_datetime;

    var pTwo = $("<p>").text("Released: " + import_datetime);

    // Displaying the release year
    songDiv.append(pTwo);

    // Storing the plot
    var source_post_url = response.source_post_url;

    // Creating an element to hold the plot
    var pDate = $("<p>").text("Plot: " + source_post_url);

    // Appending the plot
    songDiv.append(pDate);

    // Retrieving the URL for the image
    var imgURL = response.images;

    // Creating an element to hold the image
    var pimage = $("<img>").attr("src", imgURL);

    // Appending the image
    songDiv.append(pimage);

    // Putting the entire movie above the previous movies
    $("#movies-view").prepend(songDiv);
  });




