const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']


function findMatching(drivers, string){
    return drivers.filter(driver =>  driver.toUpperCase() === string.toUpperCase()) ; 
    }

    function fuzzyMatch(drivers, string){
        return drivers.filter(driver => {
          return driver.startsWith(string)
        })
      }