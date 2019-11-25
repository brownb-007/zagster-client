const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

let years = []

let months = []

function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount);

  $.when ($.getJSON(BASE_URL + "/rides/count/per_month", perMonth), 
  ).then(updateCountPerMonth);
}

function updateRideCount(data) {
  numberOfRides = data.count
  $("h2#rideCount").html(numberOfRides)
  console.log(data)
}

function perMonth(data) {
    for (var i = 2016; i <= 2018; ++i){
        years.push(data[i]);
    }
    for (var m = 0, y = 9; m <=3, y <= 12; ++m, ++y) {
        months.push(years[0][m][y]);
    }
    for (var m = 0, y = 1; m <=11, y <= 12; ++m, ++y) {
        months.push(years[1][m][y]);
    }
    for (var m = 0, y = 1; m <=9, y <= 10; ++m, ++y) {
        months.push(years[2][m][y]);
    }
    console.log(data)
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
            scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }
                }],
                yAxes: [{
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