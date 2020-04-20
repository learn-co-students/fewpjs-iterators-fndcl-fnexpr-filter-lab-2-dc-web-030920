const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

// Code your solution here
function findMatching(drivers,string){
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}


function fuzzyMatch(drivers, string){
    return drivers.filter(driver => {
        return driver.startsWith(string)
    })
}