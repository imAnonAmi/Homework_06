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
        var weatherBox = $("<div>").addClass("card text-white bg-primary mb-3");
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

//On the forecast response.list array we want items [5, 13, 21, 29, 37]. These are the 3pm values for the next 5 days
        $.ajax({
            url: queryURL5Day,
            method: "GET"
        }).then(function (response5Day) {

            console.log(response5Day);
            //Testing time call
            //console.log(response5Day.list[5]);

// Define variables for first day of five Day forecast

//Doing this in the sloppiest way possible due to lack of time, would clean up and turn into a for loop
//1 of  5 Day
var fiveBox = $("<div>").addClass("card text-white bg-success mb-3");
var date = moment(response5Day.list[5].dt_txt).format("lll");
var TempF = Math.floor(response5Day.list[5].main.temp - 273.15) * 1.80 + 32;
var tempEl = $("<p>").addClass("card-text").text("Temp: " + TempF + " F");
var humidityEl = $("<p>").addClass("card-text text-nowrap").text("Humidity: " + response5Day.list[5].main.humidity + " %");

//Append data to the fiveBox card
$(fiveBox).append(date);
$(fiveBox).append(tempEl);
$(fiveBox).append(humidityEl);

//Then append fiveBox card to #fiveDay div
$("#fiveDay").append(fiveBox);

//2 of 5 Day
fiveBox = $("<div>").addClass("card text-white bg-success mb-3");
date = moment(response5Day.list[13].dt_txt).format("lll");
TempF = Math.floor(response5Day.list[13].main.temp - 273.15) * 1.80 + 32;
tempEl = $("<p>").addClass("card-text").text("Temp: " + TempF + " F");
humidityEl = $("<p>").addClass("card-text text-nowrap").text("Humidity: " + response5Day.list[13].main.humidity + " %");

//Append data to the fiveBox card
$(fiveBox).append(date);
$(fiveBox).append(tempEl);
$(fiveBox).append(humidityEl);

//Then append fiveBox card to #fiveDay div
$("#fiveDay").append(fiveBox);

//3 of 5 Day
fiveBox = $("<div>").addClass("card text-white bg-warning mb-3");
date = moment(response5Day.list[21].dt_txt).format("lll");
TempF = Math.floor(response5Day.list[21].main.temp - 273.15) * 1.80 + 32;
tempEl = $("<p>").addClass("card-text").text("Temp: " + TempF + " F");
humidityEl = $("<p>").addClass("card-text text-nowrap").text("Humidity: " + response5Day.list[21].main.humidity + " %");

//Append data to the fiveBox card
$(fiveBox).append(date);
$(fiveBox).append(tempEl);
$(fiveBox).append(humidityEl);

//Then append fiveBox card to #fiveDay div
$("#fiveDay").append(fiveBox);

//4 of 5 Day
fiveBox = $("<div>").addClass("card text-white bg-warning mb-3");
date = moment(response5Day.list[29].dt_txt).format("lll");
TempF = Math.floor(response5Day.list[29].main.temp - 273.15) * 1.80 + 32;
tempEl = $("<p>").addClass("card-text").text("Temp: " + TempF + " F");
humidityEl = $("<p>").addClass("card-text text-nowrap").text("Humidity: " + response5Day.list[29].main.humidity + " %");

//Append data to the fiveBox card
$(fiveBox).append(date);
$(fiveBox).append(tempEl);
$(fiveBox).append(humidityEl);

//Then append fiveBox card to #fiveDay div
$("#fiveDay").append(fiveBox);

//5 of 5 Day
fiveBox = $("<div>").addClass("card text-white bg-danger mb-3");
date = moment(response5Day.list[37].dt_txt).format("lll");
TempF = Math.floor(response5Day.list[37].main.temp - 273.15) * 1.80 + 32;
tempEl = $("<p>").addClass("card-text").text("Temp: " + TempF + " F");
humidityEl = $("<p>").addClass("card-text text-nowrap").text("Humidity: " + response5Day.list[37].main.humidity + " %");

//Append data to the fiveBox card
$(fiveBox).append(date);
$(fiveBox).append(tempEl);
$(fiveBox).append(humidityEl);

//Then append fiveBox card to #fiveDay div
$("#fiveDay").append(fiveBox);


}

            
            ));
    })
})