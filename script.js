function getData(dataset) {
  var data = [];

  switch (dataset) {
    case "dataset1":
        data = openPrices;
        break;
    case "dataset2":
        data = closePrices;
        break;
    case "dataset3":
        data = highs;
        break;
    case "dataset4":
        data = lows;
        break;
    case "dataset5":
        data = volumes;
        break;
    default:
        data = openPrices;
        break;
  };

var url1 = ""
var url2 = ""
var url3 = ""
var url4 = ""
var url5 = ""
var url6 = ""

var x = document.getElementById("selDataset");
var option = document.createElement("option");
option.text = "Kiwi";
x.add(option);