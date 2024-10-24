// Function to check data types
function getDataTypes() {
    let number=10;
    let string="Hello"
    let array=[1,2,3]
    let object={name:"muthu"}
    return {number,array,string,object};
}


// Function to calculate the sum using a for loop
function sumUsingForLoop(limit) {

    let sum=0;
    for (let i=1;i<=limit;i++)
    {
        sum=sum+i;
    }

    return sum;
}

// Function to calculate the sum using a while loop
function sumUsingWhileLoop(limit) {
    let sum=0,i=1;
    while(i<=limit){
        sum=sum+i
        i=i+1
    }

    return sum;
}

// Function to check if a number is positive
function isPositive(num) {
    return num>0;
    // if(num>0){
    //     return true;
    // }
    // else{
    //     return false;
    // }
}

// Function to check if a number is even or odd
function isEven(num) {
    return num%2==0?'even':'odd'
    // if(num%2==0)
    //     return "even";
    // else{
    //     return "odd";
    // }
}

// Function to check if a string contains a specific substring
function containsSubstring(str, substring) {
    return str.includes(substring);
    // const string = str.split(" ")
    // for(let i=0;i<string.length;i++){
    //     if(string[i]==substring){
    //         return true;
    //     }
    // }
    // return false;
}

module.exports = { getDataTypes, sumUsingForLoop, sumUsingWhileLoop, isPositive, isEven, containsSubstring }
