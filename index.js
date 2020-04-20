const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

// Code your solution here
function findMatching(drivers,name){

    let match = drivers.filter(n => {
        return n.toLowerCase() === name.toLowerCase();
    });
    return match;
}

function fuzzyMatch(drivers,string){
    
    let match = drivers.filter(n => {
        return n.substring(0 ,string.length).includes(string);
    });

    return match;

}