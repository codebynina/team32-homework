function getEventWeekday(daysFromToday) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",        	"Saturday"];

   const today = new Date().getDay();
   const eventDayIndex = (today + daysFromToday) % 7;


   return weekdays[eventDayIndex];
}

console.log(getEventWeekday(5));
console.log(getEventWeekday(6));
console.log(getEventWeekday(7));

