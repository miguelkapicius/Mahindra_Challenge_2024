google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Resposta", "Porcentagem"],
        ["Sim", 68.3],
        ["Não", 31.7],

    ]);

    var options = {
        titleTextStyle: {
            color: "#fff",
            fontSize: 18,
        },
        legend: {
            color: "#fff"
        },
        title: "My Daily Activities",
        width: 500,
        is3D: true,
        backgroundColor: "transparent",
        colors: ['#5271ff', '#e6693e'],
        color: "#fff",

    };

    var chart = new google.visualization.PieChart(
        document.getElementById("piechart")
    );

    chart.draw(data, options);
}

let poli = function(x) {
    const numberString = toString(x)
    for (char in numberString) {
        
    }
}