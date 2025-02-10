const dogYearOfBirth = 2022;
const dogYearFuture = 2045;
const shouldShowResultInDogYears = true;

const humanAge = dogYearFuture - dogYearOfBirth;
const dogYear = shouldShowResultInDogYears ? humanAge * 7 : humanAge;


console.log (`Your dog will be ${dogYear} ${shouldShowResultInDogYears ? "dog" : "human"} years old in ${dogYearFuture}.`);
