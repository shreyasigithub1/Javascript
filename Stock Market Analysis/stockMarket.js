const Stocks = [
  "AAPL",
  "MSFT",
  "GOOGL",
  "AMZN",
  "PYPL",
  "TSLA",
  "JPM",
  "NVDA",
  "NFLX",
  "DIS",
];
let timestampLabels = [];
const chart = document.getElementById("chart");
const canvas = document.getElementById("myChart");
const stockList = document.getElementById("list");
const listButtonDiv = document.getElementById("listButtonDiv");
const bookValueDiv = document.getElementById("bookValueDiv");
const profitDiv = document.getElementById("profitDiv");
const summarysDiv = document.getElementById("summaryDiv");
const summaryHeading = document.getElementById("summaryHeading");
const summaryBody = document.getElementById("summaryBody");
const chartButtons = document.getElementById("chartButtons");

let chartInstance = null;

Stocks.forEach((n) => {
  displayList(n);
});

//function to display stockName,bookvalue and profit
function displayList(stockName) {
  fetch("https://stocksapi-uhe1.onrender.com/api/stocks/getstockstatsdata")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.stocksStatsData[0]);//getting the obect with stockName,bookValue and profit
      const firstKey = Object.keys(data.stocksStatsData[0])[0];
      console.log(firstKey);
      console.log(data.stocksStatsData[0][stockName].bookValue);
      console.log(data.stocksStatsData[0][stockName].profit);
      const listButton = document.createElement("button");
      listButton.textContent = stockName;
      listButtonDiv.append(listButton);
      const bookValue = document.createElement("p");
      bookValue.textContent = `$${data.stocksStatsData[0][stockName].bookValue}`;//fething the bookvalue of the given stockName
      bookValueDiv.append(bookValue);
      const profit = document.createElement("p");

      profit.textContent = `${data.stocksStatsData[0][stockName].profit}%`;
      if (data.stocksStatsData[0][stockName].profit > 0) {
        profit.style.color = "green";
      } else {
        profit.style.color = "red";
      }
      profitDiv.append(profit);
      displaySummary(  //always show AAPL stock summary 
        firstKey,
        data.stocksStatsData[0][firstKey].profit,
        data.stocksStatsData[0][firstKey].bookValue
      );
      listButton.addEventListener("click", function () {  //addEventListeners to show to chart and summary of the particular stock
        displaySummary(
          stockName,
          data.stocksStatsData[0][stockName].profit,
          data.stocksStatsData[0][stockName].bookValue
        );
        displayChart(stockName);
      });
    });
}
//function to display stock summary
function displaySummary(stockName, profit, bookValue) {
  fetch("https://stocksapi-uhe1.onrender.com/api/stocks/getstocksprofiledata")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.stocksProfileData[0][stockName].summary);
      console.log("Profit:", profit);
      console.log("Book Value:", bookValue);

      summaryHeading.innerHTML = `
      <span style="color: white; background-color:#26A69A;">${stockName}</span> 
      <span style="color: ${profit > 0 ? "green" : "red"};">${profit}%</span>  
      <span style="color: #00B2B3;">$${bookValue}</span>
    `;
      summaryBody.textContent = data.stocksProfileData[0][stockName].summary;
      summarysDiv.append(summaryHeading, summaryBody);
    });
} 
displayChart(Stocks[0]); //always show to AAPL stock chart

//function to create chartButtons
function displayChart(stockName) {
  fetch("https://stocksapi-uhe1.onrender.com/api/stocks/getstocksdata")
    .then((response) => response.json())
    .then((data) => {
      chartButtons.innerHTML = "";
      console.log(data.stocksData[0][stockName]);//values and timestamps for all the time
      display(stockName, data.stocksData[0][stockName], "5y");//always display the '5y' chart
      let keys = [];
      console.log(keys);
      keys = Object.keys(data.stocksData[0][stockName]); //extracting the '5y', '1y', '1mo', '3mo'
      console.log(keys);
      keys.forEach((n) => {
        if (n !== "_id") {
          console.log("Creating button for:", n);
          const button = document.createElement("button");
          button.className = "timeButton";
          button.textContent = n;
          chartButtons.append(button);
          button.addEventListener("click", () =>
            display(stockName, data.stocksData[0][stockName], n)
          );
        }
      });
    });
}

//function to display chart on clicking the chartbuttons
function display(stockName, data, year) {
  const valueArray = data[year]["value"]; //data.stocksData[0][stockName]["5y"]["Value"]

  const timestampArray = data[year]["timeStamp"];

  timestampArray.forEach((timestamp) => {
    const new_timestamp = new Date(timestamp * 1000).toLocaleDateString();

    timestampLabels.push(new_timestamp);
  });

  const minValue = Math.min(...valueArray);
  const maxValue = Math.max(...valueArray);
  const minIndex = valueArray.indexOf(minValue);
  const maxIndex = valueArray.indexOf(maxValue);

  console.log("Lowest Value:", minValue, "at", timestampLabels[minIndex]);
  console.log("Highest Value:", maxValue, "at", timestampLabels[maxIndex]);

  const config = {
    type: "line",
    data: {
      labels: timestampLabels,//all the timestamps
      datasets: [
        {
          label: stockName,//stockname
          data: valueArray,//giving the values
          borderColor: "#26A69A",
          backgroundColor: "#D0EBEA",
          pointRadius: 3,
          pointHoverRadius: 8,
          pointBackgroundColor: valueArray.map((val, idx) =>
            idx === minIndex ? "red" : idx === maxIndex ? "#263339" : "#26A69A"
          ),
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: false },
        tooltip: {
          enabled: true,
          mode: "index",
          intersect: false,
          callbacks: {
            label: function (context) {
              let label = `${stockName}: ${context.raw}`;
              if (context.raw === minValue) label += " (Low)";
              if (context.raw === maxValue) label += " (Peak)";
              return label;
            },
          },
        },
      },
      scales: {
        x: {
          ticks: { display: false },
          grid: { drawTicks: false, drawBorder: false, display: false },
        },
        y: {
          ticks: { display: false },
          grid: { drawTicks: false, drawBorder: false, display: false },
        },
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
    },
    plugins: [
      {
        afterDraw: (chart) => {
          const ctx = chart.ctx;
          ctx.font = "bold 14px Arial";
          ctx.fillStyle = "#0076A2";

          const minMeta = chart.getDatasetMeta(0).data[minIndex];
          if (minMeta) {
            ctx.fillText("Low", minMeta.x - 10, minMeta.y - 10);
          }

          const maxMeta = chart.getDatasetMeta(0).data[maxIndex];
          if (maxMeta) {
            ctx.fillText("Peak", maxMeta.x - 10, maxMeta.y - 10);
          }
        },
      },
    ],
  };

  if (canvas) {
    if (chartInstance) {
      chartInstance.destroy();
      console.log("Previous chart destroyed");
    }

    chartInstance = new Chart(canvas.getContext("2d"), config);
  } else {
    console.error("Canvas element with id 'myChart' not found.");
  }

  timestampLabels = [];
}
