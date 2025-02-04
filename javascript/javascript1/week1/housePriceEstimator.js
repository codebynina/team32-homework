let peterWidth = 8;
let peterDepth = 10;
let peterHeight = 10;
let peterGardensize = 100;
let peterHouseCost = 2500000;


let juliaWidth = 5;
let juliaDepth = 11;
let juliaHeight = 8;
let juliaGardensiz = 70;
let juliaHouseCost = 1000000;



let peterVolume = peterWidth * peterDepth * peterHeight;
let juliaVolume = juliaWidth * juliaDepth * juliaHeight;


let peterEstimatedPrice = peterVolume * 2.5 * 1000 + peterGardenSize * 300;
let juliaEstimatedPrice = juliaVolume * 2.5 * 1000 + juliaGardenSize * 300;


if (peterHouseCost > peterEstimatedPrice) {
console.log ("Peter is paying too much for the house.")
} else { console.log("Peter is getting a good deal!");
}


if (juliaHouseCost > juliaEstimatedPrice) {
console.log ("Julia is paying too much for the house.")
} else { console.log("Julia is getting a good deal!");
}



