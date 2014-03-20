

var data = [
	{
		value: 10,
		color:"#F7464A"
	},
	{
		value : 50,
		color : "#E2EAE9"
	},

/*	{
		value : 200,
		color : "#D4CCC5"
	},
	{
		value : 40,
		color : "#949FB1"
	},
	{
		value : 120,
		color : "#4D5360"
	}*/

]


var ctx = document.getElementById("myChart").getContext("2d");
var myNewChart = new Chart(ctx).Doughnut(data);


var data2 = [
	{
		value: 50,
		color:"#F7464A"
	},
	{
		value : 10,
		color : "#ffffff"
	},
/*	{
		value : 200,
		color : "#D4CCC5"
	},
	{
		value : 40,
		color : "#949FB1"
	},
	{
		value : 120,
		color : "#4D5360"
	}*/

]


var ctx = document.getElementById("myChart2").getContext("2d");
var myNewChart = new Chart(ctx).Doughnut(data2);

new Chart(ctx).Doughnut(data,options);




