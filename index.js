const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

// Code your solution here
const findMatching = (drivers, string) => {
    return drivers.filter(driver => driver.toUpperCase() == string.toUpperCase())
}

const fuzzyMatch = (drivers, string) => {
    return drivers.filter(driver => driver.slice(0, string.length).toUpperCase() === string.toUpperCase())
}