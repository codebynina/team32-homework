let userName = "";
let todos = [] ;

function getReply(command) {
if (command.startsWith("Hello my name is")) {
let name = command.split(" ").pop();
if (userName) return `You've already introduced yourself as ${userName}.`;
userName = name;
return `Nice to meet you, ${userName}`;
}

if (command === "What is my name?") {
return userName ? `Your name is ${userName}` : "I don't know your name yet.";
}

if (command.startsWith("Add") && command.endsWith("to my todo")) {
let task = command.slice(4, -10). trim();
todos.push(task);
return `${task} added to your todo`;
}



if (command.startsWith("Remove") && command.endsWith("from my todo")) {
    let task = command.slice(7, -13). trim(); // Extract tasks from the command
let index = todos.indexOf(task);
if (index !== -1) {
todos.splice(index, 1);
return `Removed ${task} from your todo`;
}
return `${task} is not in your to do list.`;
}

if (command === "What is on my todo?") {
return todos.length ? `You have ${todos.length} todos: ${todos.join (", ")}` : "Your todo list is empty."}

if (command === "What day is it today?") {
return new Date ().toDateString();
} 

if (command.startsWith("What is")) {
try {
return new Function(`return ${command.slice(8)}`)();
} catch {
return "I can't calculate that.";
}
}

if (command.startsWith("Set a timer for")) {
let minutes = parseInt(command.split (" ")[4]); // Get the number of minutes from the command
setTimeout(() => console.log("Timer done!"), minutes * 60000); // 1 minute =60000 milliseconds
return `Timer set for ${minutes} minutes`;
}


if (command === "What time is it?") {
return new Date().toLocaleTimeString();
}


if (command.startsWith("Repeat")) {
let phrase = command.slice(7).trim(); //Extract the phrase to repeat
if (phrase.toLowerCase() === "hello"){
return `Welcome, ${userName}!`;
}
return phrase ? phrase : "You didn't give me anything to repeat!";
}

return "Sorry, I don't understand that command."
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 + 3?"));
console.log(getReply("Set a timer for 1 minute"));

//New commands

console.log(getReply("What time is it?"));
console.log(getReply("Repeat Hello"));
console.log(getReply("Repeat I am learning JavaScript!"));




















