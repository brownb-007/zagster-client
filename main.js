const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

// Arrays to hold pulled data 

let years = []

let rides = []

let months = []

// Pulls jQuery request from Json data 

function updatePage() {
    $.when ($.getJSON(BASE_URL + "/rides/count/per_month", CountPerYear), 
    ).then(updateCountPerMonth);
}

//Total number of rides per month
function updateRideCountPerMonth(data) {
    numberRidesPerMonth = data.count
    $("rideCountPerMonth").html(numberRidesPerMonth)
     console.log(data)
}

function CountPerYear(data) {
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
}


function updateCountPerMonth() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [ "9/16", "10/16", "11/16", "12/16", "1/17", "2/17", "3/17", "4/17", "5/17", "6/17", "7/17", "8/17", "9/17", "10/17", "11/17", "12/17", "1/18", "2/18", "3/18", "4/18", "5/18", "6/18", "7/18", "8/18","9/18", "10/18" ],
            datasets: [{
                label: "Count of Zagster Rides Per Month",
                backgroundColor: '#3c1547',
                borderColor: '#4fd581',
                data: months,
            }]
        },
    
        // Configuration options go here
        options: {}
    });
}