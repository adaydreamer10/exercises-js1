function findName(names) {
    const myNameIsIncluded = names.find(
        (elem) => { return "Alexandra" === elem }
    );
    if (myNameIsIncluded) {
        return "Found me";
    } else {
        return "Not found me :(";
    }
}
const namesArr = ["David", "Ana", "Alexandra"];
console.log(findName(namesArr));