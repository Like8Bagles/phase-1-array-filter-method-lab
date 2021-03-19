// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(function (match) { 
        return match.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter( function (match) {
        return match.toLowerCase().indexOf(string.toLowerCase()) == 0
    })
}

function matchName(drivers, name) {
    return drivers.filter( function (arrayFind) {
        return arrayFind.name == name
    })
}