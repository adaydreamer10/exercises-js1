function birthYearFcn(age, name){
    const birthYear = 2020 - age ;
    const person = ` My name is ${name} and My Birth Year is ${birthYear}. `;
    return person;
}

let result = birthYearFcn(29,"Ali Ashraf" );
console.log(result)