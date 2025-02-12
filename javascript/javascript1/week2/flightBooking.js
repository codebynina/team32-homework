function getFullname(firstname, surname, useFormalName = false, title = "Mx.") {
    if (!firstname.trim() || !surname.trim()) {
        return "Invalid name";
    }
    
    let prefix = useFormalName ? `${title} ` : "";
    
    return `${prefix}${firstname} ${surname}`;
    
    }
    
    let fullname1 = getFullname("Benjamin", "Hughes", true);
    let fullname2 = getFullname("Ross", "Geller", true, "Dr.");
    let fullname3 = getFullname("Jane", "Doe", false);
    
    console.log(fullname1);
    console.log(fullname2);
    console.log(fullname3);