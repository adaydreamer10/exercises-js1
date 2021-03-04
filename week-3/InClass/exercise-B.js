let classMates = ["Amara", "Thony", "Aleksey", "Diana"];
let workMates = ["Joana", "Ramin", "Charlotte"];
let mates = classMates.concat(workMates)
 mates.sort();

function isAMate(name, classArray){
   if (classArray.includes(name)) {
    return `${name} is at the class with ${classArray.join(', ')}`;
   } else {
    return `${name} is not at the class with ${classArray.join(', ')}`;
   }
}

console.log(isAMate("Amara", mates));
