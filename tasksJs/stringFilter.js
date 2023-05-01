const string = "Привет! Как дела?";
const stringEn = "Hi! How are you?";
const vowelsRus = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
const vowelsEn = ["a", "e", "i", "o", "u", "y"];

function getVowels(data){
    let output = [];
    let curLetter = [];
    for (let i = 0; i < data.length; i++){
        curLetter = data[i].toLowerCase();
        if(vowelsRus.includes(curLetter) || vowelsEn.includes(curLetter)){
            output = output + curLetter;
        } 
    }
    return output
}

let resultRus = getVowels(string);
let resultEn = getVowels(stringEn);

console.log(resultRus)
console.log(resultEn)