const fs = require("fs") // import file system to use read and write methods 


/**
 * 
 * @param {Array} numbers [List of numbers to sorted]
 * @param {Boolean} reverse  [type of sorting ASC or DESC] 
 */
function bubbleSort(numbers , reverse = false) {
    // check type of sort ASC or DESC
    let sign = (reverse) ? "<" : ">"

    /*
        Bubble Sort Functionallity
        Loop around the array from first element to last element
    */
    for(let i = 0 ; i < numbers.length ; i++) {

        /*
            Fix code by add minus {i} to the loop limit

            Loop from first element to last element minus {i} 
            and that means the result will indicate from 0 to the location of the element that will not be sorted in next time
            example :  2 4 1 5
            if i = 1
            then the loop will be from  j = 0 To j = 1 
        */
         
        for(let j = 0 ; j < numbers.length - i - 1 ; j++) {

                /* 
                    Fix minimize the repeated of code because ASC and DESC have some same code the defference is the sign operator
                    
                    
                    Check the type of order by passing string in eval to execute it
                    and sort the array 
                */ 
                if(eval(`${numbers[j]} ${sign} ${numbers[j + 1]}`))
                 {
                    /*
                        Fix swap operation between two elements 

                        swap operation between two elements
                    */
                    let temp = numbers[j];
                    numbers[j] = numbers[j + 1]
                    numbers[j + 1] = temp;
                 }
                 
                 
       } // end second loop
    } // end first loop
    
   
}


// main example in Task
let numbers = [
    5,
    8,
    0,
    1,
    9,
    11,
    15,
    16
];

let nums = Array.from(numbers) // Create immutable array from original Array

bubbleSort(nums)

console.log("Original numbers list: ", numbers)

console.log("Numbers list After ASC sorting: ", nums)

bubbleSort(nums ,true)

console.log("Numbers list After DESC sorting: ", nums)


// To-Do : Read the numbers list from data.txt file, sort it in ASC order, then store it in a new file called output.txt

let listNumbers = fs.readFileSync("data.txt",{encoding:'utf8', flag:'r'}).trim().split(",").map(Number) // fetch the string data from data.txt file and return list of numbers
bubbleSort(listNumbers)
console.log("Open output.txt file to see the result") // print the result
fs.writeFileSync("output.txt",listNumbers.join(","))  // Write the result into output.txt file