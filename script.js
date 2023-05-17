let chartData = "./DataSet1.csv";
let id = [];
let rot = [];
let totalRot = [];
let onTime = [];
let offTime = [];
let time = [];
let avgRpm = [];
document.addEventListener("DOMContentLoaded", function () {
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

    const avg1 = totalRot[lastIndex1] / (parseInt(onTime[lastIndex1]) + 1);
    const avg2 = totalRot[lastIndex2] / (parseInt(onTime[lastIndex2]) + 1);
    const avg3 = totalRot[lastIndex3] / (parseInt(onTime[lastIndex3]) + 1);
    avgRpm.push(avg1.toFixed(2));
    avgRpm.push(avg2.toFixed(2));
    avgRpm.push(avg3.toFixed(2));
    // console.log(avgRpm);

    const uniqueId = Array.from(new Set(id)).sort();
    //   console.log(uniqueId);
    const data4 = {
      labels: uniqueId,
      fill: true,
      datasets: [
        {
          label: "Average RPM for each device(based upon onTime)",
          data: avgRpm,
          backgroundColor: [
            "rgba(255, 26, 104, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(0, 0, 0, 0.2)",
          ],
          borderColor: [
            "rgba(255, 26, 104, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(0, 0, 0, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const config4 = {
      type: "bar",
      data: data4,
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: "DEVICE",
            },
          },
          y: {
            title: {
              display: true,
              text: "AVG RPM",
            },
          },
        },
      },
    };
    const myChart4 = new Chart(document.getElementById("myChart4"), config4);
  });

  // setup
});
