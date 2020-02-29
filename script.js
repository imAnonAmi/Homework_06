//Pulled over from index.html. Clean up comments further at completion  
    $(document).ready(function () {
//Moment call, snippet in HTML too
    moment().format();
//Global declare of API key for later use.
    var APIKey = "2fd18f12ec9c7da34ce699baf01b9739";

//Search button push function, initial city call built in
    $("#searchBtn").click(function (event) {
        event.preventDefault();
        var cityEl = $("#searchInput").val();

// AJAX call for current Weather
// The URL we will use to query Current Weather by city name
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityEl + "&appid=" + APIKey;

// The URL we need to query 5 Day Forecast by city name
    var queryURL5Day = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityEl + "&appid=" + APIKey;
        
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function (response) {

        console.log(response);
// Define variables for currentWeather forecast
        var weatherBox = $("<div>").addClass("card");
        var date = moment().format("lll");
        var TempF = Math.floor(response.main.temp - 273.15) * 1.80 + 32;
        var cityDateEl = $("<h4>").addClass("card-title").text(response.name + " " + "(" + date + ")");
        var tempEl = $("<p>").addClass("card-text").text("Temp: " + TempF + " F");
        var humidityEl = $("<p>").addClass("card-text text-nowrap").text("Humidity: " + response.main.humidity + " %");
        var windspeedEl = $("<p>").addClass("card-text").text("Windspeed: " + response.wind.speed + " mph");

//Append data to the weatherBox card
        $(weatherBox).append(cityDateEl);
        $(weatherBox).append(tempEl);
        $(weatherBox).append(humidityEl);
        $(weatherBox).append(windspeedEl);

//Then append weatherBox card to #currentWeather div
        $("#currentWeather").append(weatherBox);

        },

//AJAX call for 5 Day forecast. Do this next, should be able to recreate card format above, and append 5 to that area.
        $.ajax({
            url: queryURL5Day,
            method: "GET"
        }).then(function (response5Day) {


            // Create CODE HERE to log the resulting object
            console.log(response5Day);




            }
            ));
    })
})