// Code your solution here
function findMatching(array, string){
    return array.filter(element => element.toLowerCase() === string.toLowerCase());
};

function fuzzyMatch(array, string){
    return array.filter(function(element){
        if (element.indexOf(string) === 0){
            return element;
        };
    });
};

function matchName(drivers, string){
    return drivers.filter(element => element.name.toLowerCase() === string.toLowerCase());
};