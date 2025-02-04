let firstWords = ["Tech", "Creative", "Bright", "Smart", "Future", "Innovator", "Dynamic", "Artistic", "Witty", "Labs", "Geometric", "Solution", "Boost", "Spark", "Empower",]

let secondWords = ["Clean", "Elegant", "Adventurous", "Curious", "Polish", "Cozy", "Curated", "Floral", "Engaging", "Quirky", "AI", "Eco", "Digital",]

const randomNumber1 = Math.floor(Math.random() *13);
const randomNumber2 = Math.floor(Math.random() *13);

let startupName = firstWords[randomNumber1] + " " + secondWords[randomNumber2];


console.log("The startup: " + startupName + " contains " + startupName.length + "characters.");
