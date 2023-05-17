let chartData = "./DataSet1.csv";
let id = [];
let rot = [];
let totalRot = [];
let onTime = [];
let offTime = [];
let time = [];
let avgRpm = [];
document.addEventListener("DOMContentLoaded", function() {
d3.csv(chartData).then((datapoints) => {
  // console.log(datapoints[0]);
  for (i = 0; i < datapoints.length; i++) {
    id.push(datapoints[i].Device_id);
    rot.push(datapoints[i].RPM);
    totalRot.push(datapoints[i].Total_rotations);
    onTime.push(datapoints[i].On_time);
    offTime.push(datapoints[i].Off_time);
    var temp = datapoints[i].time.split(" ");
    // console.log(temp[1]);
    time.push(temp[1]);
  }

  const firstIndex1 = id.indexOf("1");
  const lastIndex1 = id.lastIndexOf("1");
  const firstIndex2 = id.indexOf("2");
  const lastIndex2 = id.lastIndexOf("2");
  const firstIndex3 = id.indexOf("3");
  const lastIndex3 = id.lastIndexOf("3");

  const avg1 = totalRot[lastIndex1] / (lastIndex1 - firstIndex1 + 1);
  const avg2 = totalRot[lastIndex2] / (lastIndex2 - firstIndex2 + 1);
  const avg3 = totalRot[lastIndex3] / (lastIndex3 - firstIndex3 + 1);
  avgRpm.push(avg1.toFixed(2));
  avgRpm.push(avg2.toFixed(2));
  avgRpm.push(avg3.toFixed(2));
  // console.log(avgRpm);

  const data3 = {
    labels: time.slice(firstIndex3, lastIndex3 + 1),
    fill: true,
    datasets: [
      {
        label: "RPM for device 3",
        data: rot.slice(firstIndex3, lastIndex3 + 1),
        backgroundColor: ["rgba(255, 26, 104, 0.2)"],
        borderColor: ["rgba(255, 26, 104, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const config3 = {
    type: "line",
    data: data3,
    options: {
      elements: {
        point: {
          radius: 1.3,
          hoverRadius: 5,
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "TIME",
          },
        },
        y: {
          title: {
            display: true,
            text: "RPM",
          },
        },
      },
    },
  };
  const myChart3 = new Chart(document.getElementById("myChart3"), config3);

  const divTime3 = [
    parseInt(onTime[lastIndex3]),
    parseInt(offTime[lastIndex3]),
  ];
  //   console.log(divTime1);
  const data7 = {
    labels: [
      "OnTime" + ":" + onTime[lastIndex3],
      "OffTime" + ":" + offTime[lastIndex3],
    ],
    datasets: [
      {
        data: divTime3,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderWidth: 0,
      },
    ],
    label: "Working time for device 3",
  };

  const config7 = {
    type: "pie",
    data: data7,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: "bottom",
        labels: {
          fontColor: "#333",
          fontSize: 12,
          boxWidth: 12,
        },
      },
      title: {
        display: true,
        text: "Pie Chart",
        fontSize: 20,
        fontColor: "#333",
      },
      animation: {
        animateScale: true,
        animateRotate: true,
      },
      plugins: {
        title: {
          display: true,
          text: "Working time for device 3(mins)",
          fontSize: 22,
        },
      },
    },
  };
  // render init block
  //   const myChart1 = await new Chart(document.getElementById("myChart1"), config);
  //   const myChart2 = await new Chart(document.getElementById("myChart2"), config2);
  //   const myChart3 = await new Chart(document.getElementById("myChart3"), config3);
  //   const myChart4 = await new Chart(document.getElementById("myChart4"), config4);
  //   const myChart5 = await new Chart(document.getElementById("myChart5"), config5);
  //   const myChart6 = await new Chart(document.getElementById("myChart6"), config6);
  //   const myChart7 = await new Chart(document.getElementById("myChart7"), config7);

  const myChart7 = new Chart(document.getElementById("myChart7"), config7);
});

// setup
});