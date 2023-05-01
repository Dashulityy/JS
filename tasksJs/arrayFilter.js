const mixedArray = [3,13,74,14,66,15,22,4];

function isEven(num){
    if(num % 2 == "0"){
        return true
    }
    else{
        return false
    }
}

function filterArray(data, isEven){
    let output = [];
    for(let i = 0; i < data.length; i++){
        if(isEven(data[i])){
            output.push(data[i]);
        }
    }
    return output
}

let result = filterArray(mixedArray, isEven);
console.log(result)
