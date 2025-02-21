
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "Rasmus",
    "Samuel",
    "Katrine",
    "Tala",
];

const nameToRemove ="Ahmad"
const index = names.indexOf("Ahmad");
if (name >-1){
    names.splice(index,1);
}
console.log(names);
console.log(names[names.length]);


/* //another way?

const nameToRemove = "Ahmad";
delete names[1];

console.log(names); */



