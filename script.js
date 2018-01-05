// function getData(dataset) {
//   var data = [];

//   switch (dataset) {
//     case "dataset1":
//         data = openPrices;
//         break;
//     case "dataset2":
//         data = closePrices;
//         break;
//     case "dataset3":
//         data = highs;
//         break;
//     case "dataset4":
//         data = lows;
//         break;
//     case "dataset5":
//         data = volumes;
//         break;
//     default:
//         data = openPrices;
//         break;
//   };

// var url1 = ""
// var url2 = ""
// var url3 = ""
// var url4 = ""
// var url5 = ""


// Set up one set of plots

// Make it pull dynamically from API

// Make it dynamically switch datasets on cases




for (i = 0; i < names.length; i++) {
    var x = document.getElementById("selDataset");
    var option = document.createElement("option");
    option.text = names[i];
    x.add(option);
}


function pie() {
  var data = [{
    values: sample_values,
    labels: otu_ids,
    type: "pie"
  }];

  var layout = {
    height: 450,
    width: 400
  };
  var PIE = document.getElementById("pie");

  Plotly.plot("pie", data, layout);
}

function gauge() {
    var level = 100;

    var degrees = 180 - level,
        radius = .5;
    var radians = degrees * Math.PI / 180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);

    var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
        pathX = String(x),
        space = ' ',
        pathY = String(y),
        pathEnd = ' Z';
    var path = mainPath.concat(pathX,space,pathY,pathEnd);

    var data = [{ type: 'scatter',
        x: [0], y:[0],
        marker: {size: 28, color:'850000'},
        showlegend: false,
        name: 'speed',
        text: level,
        hoverinfo: 'text+name'},
        { values: [50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50],
        rotation: 90,
        text: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3',
                '1-2', '0-1', ''],
        textinfo: 'text',
        textposition:'inside',
        marker: {colors:['rgba(0, 127, 0, .5)', 'rgba(28, 127, 0, .5)',
                        'rgba(57, 127, 0, .5)', 'rgba(85, 127, 0, .5)',
                        'rgba(113, 154, 22, .5)', 'rgba(142, 202, 42, .5)',
                        'rgba(170, 209, 95, .5)', 'rgba(198, 206, 145, .5)',
                        'rgba(227, 226, 202, .5)', 'rgba(255, 255, 255, 0)']},
        labels: ['161-180', '141-160', '121-140', '101-120', '81-100', '61-80', '41-60', '21-40', '0-20', ''],
        hoverinfo: 'label',
        hole: .5,
        type: 'pie',
        showlegend: false
}];

var layout = {
  shapes:[{
      type: 'path',
      path: path,
      fillcolor: '850000',
      line: {
        color: '850000'
      }
    }],
  title: "Belly Button Washing Frequency (Scrubs per Week)",
  height: 450,
  width: 450,
  xaxis: {zeroline:false, showticklabels:false,
             showgrid: false, range: [-1, 1]},
  yaxis: {zeroline:false, showticklabels:false,
             showgrid: false, range: [-1, 1]}
};

Plotly.plot("gauge", data, layout);
}

pie()
gauge()