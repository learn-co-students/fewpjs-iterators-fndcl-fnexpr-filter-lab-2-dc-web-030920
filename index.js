const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

// Code your solution here
let findMatching = (array, name) => {
    return array.filter( x => {
        return x.toUpperCase() === name.toUpperCase();
    })
}

let fuzzyMatch = (array, name) => {
    return array.filter( x => {
        return x[0].toUpperCase() === name[0].toUpperCase();
    })
}