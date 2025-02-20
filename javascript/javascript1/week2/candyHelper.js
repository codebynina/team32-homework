const boughtCandyPrices = [];
const candyPrices = {
  sweet: 0.5,
  chocolate: 0.7,
  toffee: 1.1,
  chewingGum: 0.03,
};

function addCandy(candyType, weight) {
  const pricePerGram = candyPrices[candyType];
  if (pricePerGram) {
    const price = pricePerGram * weight;
    boughtCandyPrices.push(price);
  } else {
    console.log("Candy type not recognized.");
  }
}

function canBuyMoreCandy() {
  const amountToSpend = Math.random() * 100;
  let totalSpent = 0;
  
  for (const price of boughtCandyPrices) {
    totalSpent += price;
  }

  console.log(`Total spent: ${totalSpent.toFixed(2)} | Amount to spend: ${amountToSpend.toFixed(2)}`);
  return totalSpent < amountToSpend ? "You can buy more, so please do!" : "Enough candy for you!";
}

// Test cases
addCandy("sweet", 20);
addCandy("chocolate", 10);
addCandy("toffee", 15);
console.log(canBuyMoreCandy());
