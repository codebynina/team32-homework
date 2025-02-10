let firstWords = ["Creative", "Bright", "Innovator", "Dynamic", "Witty", "Labs", "Geometric", "Solution", "Boost", "Spark"];

let secondWords = ["Clean", "Elegant", "Adventurous", "Curious", "Cozy", "Curated", "Floral", "Engaging","AI", "Eco"];

const randomNumber1 = Math.floor(Math.random() *10);
const randomNumber2 = Math.floor(Math.random() *10);

const startupName = `${firstWords[randomNumber1]}${secondWords[randomNumber2]}`;


console.log(`The startup: ${startupName} contains ${startupName.length} characters.`);
