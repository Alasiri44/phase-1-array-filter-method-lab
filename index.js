// Code your solution here
function findMatching(myarray, name){
    const finder = myarray.filter(element => element.toLowerCase() === name.toLowerCase());
    return finder;
}

function fuzzyMatch(myarray, commonLetter){     
    const finder = myarray.filter(element => element.startsWith(commonLetter));
    return finder;
}

function matchName(myarray, matchingName){
    const finder = myarray.filter(element => element.name === matchingName);
    return finder;
}