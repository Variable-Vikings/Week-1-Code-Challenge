// Here is my solution
// We assign score a value which is entered when a prompt appears
let score=parseFloat(prompt("Enter student marks (between 0 and 100):"));
//Then we define a fuction generategrade(score) and execute loop conditions
function generateGrade(score){

    //The first condition checks whether the score is below 40 and returns a grade E if the score is below 40
    if(score>=0 && score<40){
        console.log(`Your score is ${score} and your grade is an E`);
    }
    //The second condition checks whether the score is between 40 and 49 and return the corresponding grade D
    else if(score>=40 && score<49){
        console.log(`Your score is ${score} and your grade is a D`);
    }
    // The third condition checks whether the score is between 49 and 59 and prints the corresponding grade C
    else if(score>=49 && score<59){
        console.log(`Your score is ${score} and your grade is a C`);
    }
    //The fourth condition checks whether the score is between 59 and 79 and prints the corresponding grade B
    else if (score>=59 && score<79){
        console.log(`Your score is ${score} and your grade is a B`);
    }
    // The fifth condition checks whether the score is between 79 to 100 and prints the corresponding grade A
    else if (score>=79 && score <=100){
        console .log(`Awesome!Your score is ${score} and your grade is an A`);
    }
    // The final condition checks whether the input is between 0 and 100 and if the score entered does not lie
    // between 0 and 100 a statment is displayed prompting the to input a value in between
    else{
        console.log(`Please input a number between 0 to 100!`)
    }

}
console.log(generateGrade(score));
