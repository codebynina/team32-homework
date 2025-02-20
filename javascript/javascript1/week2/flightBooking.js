function getFullname(firstname, surname, useFormalName = false, title = null) {
    if (!firstname.trim() || !surname.trim()) {
        return "Invalid name";
    }

    const maleNames = ["John", "Benjamin", "Ross"];
    const femaleNames = [ "Jessica", "Anna", "Jane"];

    if (useFormalName && title === null) {
        if (maleNames.includes(firstname)) {
            title = "Mr.";
        } else if (femaleNames.includes(firstname)) {
            title = "Ms.";
        } else {
            title = "Mx."; // Default for unknown or gender-neutral names
        }
    }

    let prefix = useFormalName ? `${title} ` : "";

    return `${prefix}${firstname} ${surname}`;
}

// Test cases
console.log(getFullname("Benjamin", "Hughes", true)); // Mr. Benjamin Hughes
console.log(getFullname("Ross", "Geller", true, "Dr.")); // Dr. Ross Geller
console.log(getFullname("Jane", "Doe", true)); // Ms. Jane Doe
