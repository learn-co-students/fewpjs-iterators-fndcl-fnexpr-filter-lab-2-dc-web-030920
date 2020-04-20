const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

// Code your solution here

let findMatching = (array, string) => array.filter(name => {
    return name.toUpperCase() === string.toUpperCase();
});

let fuzzyMatch = (array, string) => array.filter(name => {
    return name[0].toUpperCase() === string[0].toUpperCase();
});
