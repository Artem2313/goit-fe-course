const twentyWords = string => {        
    const count = string.replace(/([.?!;:])\s*(?=[A-Z])/g, "$1|").split("|");
    let newArr = [];
    return count.filter(str => {
        if(str.split(' ').length >= 21) {
            return newArr.push(str);
        }
    })    
};

function count_words()
{
str1 = document.getElementById("InputText").value;
//exclude  start and end white-space
str1 = str1.replace(/([.?!;])\s*(?=[A-Z])/g, "$1|").split("|");
document.getElementById("noofwords").value = str1.length;    
};

let string = document.getElementById('InputText').value;

const getArr = twentyWords(string);
const getArr2 = getArr.forEach(i => console.log(i));
