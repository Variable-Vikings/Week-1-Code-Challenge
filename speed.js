//Create a function called speedDetector
function speedDetector(speed){
    //Create a condition that checks speed limit
    if (speed<=70){
        return "Ok"
    }
    if (speed > 70){
        let demeritPoints = (speed-70)/5;
        if(demeritPoints < 12){
        // Return demerit points when speed is less than 70.
        console.log(`You have earned ${demeritPoints} demerit points.`)
        }
        else {
            //Return the demerit points when speed is above 70
            console.log(`You have earned ${demeritPoints} demerit points and your license has been suspended.`)
        }
    
    }
    }
    //Call the speedDetector function
    speedDetector();