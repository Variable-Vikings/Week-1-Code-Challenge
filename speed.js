//Create a function called speedDetector
function speedDetector(speed){
    //If condition to check speed limit
    if (speed > 70){
        let demeritPoints = (speed-70)/5;
        if(demeritPoints < 12){
        // Print the results when speed is less than 70.
        console.log(`You are driving at a speed of ${speed} therefore your you have earned ${demeritPoints} demerit points.`)
        }
        else {
            //Print the results when speed is above 70
            console.log(`You are driving at a speed of ${speed} therefore your you have earned ${demeritPoints} demerit points and your license has been suspended.`)
        }
    
    }
    }
    //Call the speedDetector function
    speedDetector();