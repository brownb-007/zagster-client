const BASE_URL = "https://zagster-service.herokuapp.com"
// const PI = 3.14159

// //Jquery command wait until webpage loads call function
// //Whose name is in the parenthesis
// //fuunction call means run the code

// //call function add
// add(2, 3);
// //greeter is the function identifier 
// //argument (info needed to do its job)
// function add(num1, num2) {
//     answer = num1 + num2
//     console.log("The answer is: " + answer);
//     return answer;
// }
// function greeter(name) {
//     alert("Welcome to " + name + " data visualization")
// }



// greeter("Brayden Brown's")

// var person = {name: "Brayden", age: 19, car: {model: " CrossTrek", year: 2019} }
// console.log("My Name is " + person.name);
// console.log("I'm " + person.age + " years old");
// console.log("My car model is a" + person.car.model);

// function young(age){
//     if (age <= 30) {
//         alert("You're Young and agile");
//     } 
// }

// young(19)
var color = new Array();
color[0] = "#c7d0d8";
color[1] = "#B5B2CB ";


function changeColor()
{
  var randomColor = Math.floor(Math.random() * color.length);
  console.log(color[randomColor]);
    document.getElementsByTagName("body")[0].style.backgroundColor=color[randomColor];
};

var data = {"2016":[{"9":220},{"10":141},{"11":89},{"12":16}]}
var year_list = data[2016]
console.log('Year list is ' + year_list)
console.log(year_list[0][9])
console.log(year_list[1][10])
console.log(year_list[2][11])
console.log(year_list[3][12])


$(updateView)

let years = []

let years1 = []

let months = []

let months2016 = []

let months2017 = []

let months2018 = []

let hours = []

function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount);

  $.when ($.getJSON(BASE_URL + "/rides/count/per_year", perYear), 
  ).then(updateCountPerYear);

  $.when ($.getJSON(BASE_URL + "/rides/count/per_month", perMonth), 
  ).then(updateCountPerMonth);

  $.when ($.getJSON(BASE_URL + "/rides/count/per_hour", perHour),
  ).then(updateCountPerHour)
}

function updateRideCount(data) {
  numberOfRides = data.count
  $("h2#rideCount").html(numberOfRides)
  console.log(data)
}


function perMonth(data) {
    for (var i = 2016; i <= 2018; ++i){
        years.push(data[i]);//index key
    }
    for (var t = 0, q = 9; t <=3, q <= 12; ++t, ++q) {
        months.push(years[0][t][q]);//2016
    }
    for (var t = 0, q = 1; t <=11, q <= 12; ++t, ++q) {
        months.push(years[1][t][q]);//2017
    }
    for (var t = 0, q = 1; t <=9, q <= 10; ++t, ++q) {
        months.push(years[2][t][q]);//2018
    }
}

function perYear(data) {
    for (var l = 2016; l <= 2018; ++l){
        years1.push(data[l]);
    }
}

function perHour(data) {
    for (var h = 0; h <= 23; ++h){
        hours.push(data[h]);
    }
}



function updateCountPerMonth() {

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [ "September 2016", "October 2016", "November 2016", "December 2016", "January 2017", "February 2017", "March 2017", "April 2017", "May 2017", "June 2017", "July 2017", "August 2017", "September 2017", "October 2017", "November 2017", "December 2017", "January 2018", "February 2018", "March 2018", "April 2018", "May 2018", "June 2018", "July 2018", "August 2018", "September 2018", "October 2018"],
            datasets: [{
                label: "Zagster Rides Per Month",
                backgroundColor: '#31005e',
                data: months,
            }]
        },
    

        options: {
            legend: {
                labels: {
                    fontColor: "black"
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: 'black',
                    },
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: 'black',
                    },
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }   
                }]
            },
            tooltips: {
                callbacks: {
                  label: function(tooltipItem, chartData) {
                    return ' Ride Count' + ': ' + chartData.datasets[0].data[tooltipItem.index];
                }
            }
        }}
    });
}

function updateCountPerYear() {

    var ctx = document.getElementById('myChart2').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [ "2016", "2017", "2018"],
            datasets: [{
                label: "Zagster Rides Per Year",
                backgroundColor: '#31005e',
                data: years1,
            }]
        },
    

        options: {
            legend: {
                labels: {
                    fontColor: "black"
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: 'black',
                    },
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: 'black',
                    },
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }   
                }]
            },
            tooltips: {
                callbacks: {
                  label: function(tooltipItem, chartData) {
                    return ' Ride Count' + ': ' + chartData.datasets[0].data[tooltipItem.index];
                }
            }
        }}
    });
}

function updateCountPerHour() {

    var ctx = document.getElementById('myChart3').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [ "Hour : 0", "Hour : 1", "Hour : 2", "Hour : 3", "Hour : 4", 
            "Hour : 5", "Hour : 6", "Hour : 7", "Hour : 8", "Hour : 9", "Hour : 10", 
            "Hour : 11", "Hour : 12", "Hour : 13", "Hour : 14", 
            "Hour : 15", "Hour : 16", "Hour : 17", "Hour : 18", "Hour : 19", 
            "Hour : 20", "Hour : 21", "Hour : 22", "Hour : 23"],
            datasets: [{
                label: "Zagster Rides Hourly",
                backgroundColor: '#31005e',
                data: hours,
            }]
        },
    

        options: {
            legend: {
                labels: {
                    fontColor: "black"
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: 'black',
                    },
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }
                }],
                yAxes: [{
                    ticks: {
                        stepSize: 200,
                        fontColor: 'black',
                    },
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }   
                }]
            },
            tooltips: {
                callbacks: {
                  label: function(tooltipItem, chartData) {
                    return ' Ride Count' + ': ' + chartData.datasets[0].data[tooltipItem.index];
                }
            }
        }}
    });
}