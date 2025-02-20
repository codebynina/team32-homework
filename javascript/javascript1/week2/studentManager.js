const class07Students = [];

function addStudentToClass(studentName) {
if (!studentName.trim()) {
	console.log("You cannot add an empty name to the class.");
	return;
}

if (class07Students.includes(studentName)) {
	console.log(`Student ${studentName} is already in the class`);
	return;
}
if (class07Students.length >= 6 && studentName !== "Queen") {
	console.log("Cannot add more students to class 07");
        return;
}
class07Students.push(studentName);
}

function getNumbersOfStudents() {
	return class07Students.length;
}

addStudentToClass("Benjamin");
addStudentToClass("Harry");
addStudentToClass("Hermione");
addStudentToClass("Ron");
addStudentToClass("Draco");
addStudentToClass("Luna");
addStudentToClass("Neville");
addStudentToClass("Bellatrix");
addStudentToClass("Queen");
addStudentToClass("");

console.log(`Total students: ${getNumbersOfStudents()}`);
