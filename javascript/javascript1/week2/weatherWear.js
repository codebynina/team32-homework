function whatToWear(temperature) {
    if (temperature >= 25) {
      return "shorts and a t-shirt";
    } else if (temperature >= 15) {
      return "light jacket and jeans";
    } else {
      return "warm coat, scarf, and gloves";
    }
  }
  
  // Test cases
  console.log(whatToWear(18)); // light jacket and jeans
  console.log(whatToWear(30)); // shorts and a t-shirt
  