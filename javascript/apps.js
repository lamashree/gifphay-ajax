
//seudo code//
//1. create the array of songs and loop to the every index of song
//create the function that is assigning clickable button to the every song in the array.
//create the form with button for search and submit button.
// create the another function that preserve the input value from user and add to array of song.
// get the gifphay key from the gifphay.com
//make ajax function with url and method
//get the response and display in the div //

var songs = ["Old Town Road", "bad guy", "I dont care", "Dancing with A stranger", "You Need To Calm Down", "Boyfriend", "7 rings", "ME!", "Someone You Loved", "juice",];
function renderButtons() {

    $("#buttons-view").empty();

    // Looping through the array of songs
    for (var i = 0; i < songs.length; i++) {

        var a = $("<button>");
        a.addClass("song");
        a.attr("data-name", songs[i]);
        a.text(songs[i]);
        $("#buttons-view").append(a);
    }
}
$("#add-song").on("click", function (event) {
    event.preventDefault();

    var song = $("#song-input").val().trim();
    songs.push(song);
    //console.log(songs);
    renderButtons();
});
$(document).on("click", ".movie-btn", displayMovieInfo);

renderButtons();

function displayMovieInfo() {
    var topic = $(this).attr("data-name");
    var api = 'https://api.giphy.com/v1/gifs/search?';
    var limit = '&limit=10';
    var key = 'api_key=1bQ9pVg5vAqAtTnBRvSSBLn8iR4U8Yi4&q=';
    //var rating = '&rating=G';
    //queryURL variable
    var queryURL = api + key + topic + limit; //+ rating;
    console.log("queryURL", queryURL);
    //ajax jquery Object
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log("67676sstytyttstysy")
        var resData = response.data;
        //console.log("response", resData);
        var songDiv = $("<div class ='song'>");
        var import_datetime_v = resData.import_datetime;
        var p = $("<p>").text("datetime;", import_datetime_v);
        songDiv.append(p);

        var rating_v = resData.rating;
        var p = $("<p>").text("rated;", rating_v);
        songDiv.append(p);

        var image = resData.images.fixed_height_still.url;
        var p = $("<p>").text("images;", image);
        songDiv.append(p);

        var title_v = resData.title;
        var p = $("<p>").text("title;", title_v);
        songDiv.append(p);

        $("#song-view").prepend(songDiv);

        console.log(import_datetime_v);
        console.log(rating_v);
        console.log(image);
        console.log(title_v);
});

}


