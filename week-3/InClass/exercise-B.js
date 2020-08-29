let classMates = ["Bipasha", "Thony", "Aleksey", "Diana"];
let workMates = ["Joana", "Ramin", "Charlotte"];
let mates = classMates.concat(workMates)
console.log(mates);

let matesInOrder = mates.sort();
console.log(matesInOrder);

function isAMate(name, classArray){
    
    let result = classArray.includes(name);

    if (result === true){
        return `${name} is a class mate`
    }

    else {
    return `${name} is not a class mate`
    }
}

     let mateCheck = isAMate("Bipasha", mates);
     console.log(mateCheck);
