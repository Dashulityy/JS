const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}
];
function getWorthyWorkers(data){
    let output = [];
    for(let i = 0; i < data.length; i++){
        if(data[i].salary > 1000){
            output.push(data[i].name)
        }
    }
    return output;
}

let result = getWorthyWorkers(workers);
console.log(result)