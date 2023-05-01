const path = "/users/download/index.html"

function isHtml(data){
    let arr = data.split(".");
    if(arr.length == "1" || arr[arr.length-1] != "html"){
        return false
    }
    else{
        return true
    }
}
let result = isHtml(path);
console.log(result)
//console.log(isHtml(path))