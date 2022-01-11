let cats = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendCat(){
    cats.push('Ralph')
}
function destructivelyPrependCat(){
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat(){
    cats.pop(cats)
}
function destructivelyRemoveFirstCat(){
    cats.shift(cats)
}
function appendCat(name){
    const newArray = [...cats]
    newArray.push(name);
    return newArray
}
function prependCat(name){
    return [name, ...cats]
}
function removeLastCat(){
    return cats.slice(0, cats.length - 1)
}
function removeFirstCat(){
    return cats.slice(1)
}