
//seudo code//
//1. create the array of songs and loop to the every index of song
//create the function that is assigning clickable button to the every song in the array.
//create the form with button for search and submit button.
// create the another function that preserve the input value from user and add to array of song.
// get the gifphay key from the gifphay.com
//make ajax function with url and method
//get the response and display in the div //

var songs = [];

function renderButtons() {
    $("#buttons-view").empty();

    // Looping through the array of songs
    for (var i = 0; i < songs.length; i++) {
        console.log([i]);
        var a = $("<button>");
        a.addClass("btsong");
        a.attr("data-name", songs[i]);
        a.text(songs[i]);
        $("#buttons-view").append(a);
    }
}
$("#add-song").on("click", function (event) {
    event.preventDefault();

    var song = $("#song-input").val().trim();
    songs.push(song);
    alert("the" + song + " is adding in your list");
    //console.log(songs);
    renderButtons();
});
$(document).on("click", "#buttons-view", displaySongInfo);

renderButtons();

function displaySongInfo() {
    // console.log('it work')

    var topic = $("#song-input").val().trim();

    console.log("this is the topic", topic);

    var api = 'https://api.giphy.com/v1/gifs/search?';
    var limit = '&limit=10';
    var key = 'api_key=1bQ9pVg5vAqAtTnBRvSSBLn8iR4U8Yi4&q=';
    //var rating = '&rating=G';
    //queryURL variable
    var queryURL = api + key + topic + limit; //+ rating;
    // console.log("queryURL", queryURL);
    //ajax jquery Object
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
            console.log(response);
            var resData = response.data[i];
            // console.log(resData)
            //console.log("response", resData);
            var songDiv = $("<div class ='song'>");
            var import_datetime_v = resData.import_datetime;
            var rating_v = resData.rating;
            var p = $("<p>").text("datetime:" + import_datetime_v);
            songDiv.append(p);

            var rating_v = resData.rating;
            // console.log(rating_v)
            var p = $("<p>").text("rated:" + rating_v);
            songDiv.append(p);

            //var image = resData.images.fixed_height_still.url;
            var nonanimate= resData.images.fixed_height_still;
            var animateImage= resData.images.fixed_height;
            
            var gifImg = $("<img>");
                gifImg.attr("data-still");
                gifImg.attr("src", nonanimate);
                gifImg.addclass("imgclass");

            /*$(document).on ("click", ".gif", function() {
                
                p.attr("alt", 'pictures for song');
            }) */      
            
            // var animateImage = resData.images.w_still;
            // console.log(animateImage + "this");
            // if (state == "still"){
            //     var p = $("<img>"); 
            //     p.attr("src", animateImage);
            // }
            // else{
            // var p = $("<img>");
            // p.attr("src", image);
            // p.attr("alt", 'pictures for song');
            // }
            songDiv.append(p);

            var title_v = resData.title;
            var p = $("<p>").text("title;" + title_v);
            songDiv.append(p);

            var video = resData.source_post_url;
            var p = $("<a>");
            p.attr("link:", p)
            p.attr("href", video);
            songDiv.append(video);

            $("#song-view").prepend(songDiv);

        }
    });

    $('imgclass').on ("click", function() {});
    $(document).on("click", ".imgclass", function() {});

}


