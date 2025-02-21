
let activities = [];  


let usageLimit = 100; 


function addActivity(date, activity, duration) {  
    if (!date || !activity || !duration) {  
        console.log("All parameters are required!");  
    }  
    activities.push({ date, activity, duration });  
}  


function setUsageLimit(limit) {  
    if (limit < 0) {  
        console.log("Limit cannot be negative!");  
    }  
    usageLimit = limit;  
    console.log(`Usage limit set to ${limit} minutes.`);  
}  


function showStatus() {  
    if (activities.length == 0) { 
        console.log("Add some activities before calling showStatus");  
        return;  
    }  

    let totalDuration = activities.reduce((sum, act) => sum + act.duration, 0);  

    console.log(`You have added ${activities.length} activities. They amount to ${totalDuration} min. of usage.`);  

    if (totalDuration >= usageLimit) {  
        console.log("You have reached your limit, no more smartphoning for you!");  
} 

addActivity("23/7-18", "Youtube", 30);  
addActivity("23/7-18", "Spotify"); 
addActivity("23/7-18", "Goodreads", 40);  
addActivity("23/7-18", "Instagram", 40);  

showStatus();  


setUsageLimit(); 
