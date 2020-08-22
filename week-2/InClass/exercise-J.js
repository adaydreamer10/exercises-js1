function secondMatchesAmy(names) {
  if ( names[1] === "Amy" ) {
    return "Second index matched!";
  }
  return "Second index not matched";
}
let names = ["Ali","Amy","Ramin","Charlotte"]

console.log(secondMatchesAmy(names))
