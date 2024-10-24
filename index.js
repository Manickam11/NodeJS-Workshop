// Function to check if a string contains a specific substring
function containsSubstring(str, substring) {
    const string = str.split(" ")
    console.log(string)
    for(let i=0;i<string.length;i++){
        if(string[i]==substring){
            return true;
        }
    }
    return false;
}

let str="Hello World"
let substring="World"
let m=containsSubstring(str,substring);
console.log(m);