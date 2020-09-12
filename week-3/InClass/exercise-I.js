//const arr = [ 100, 'iSMael', 55, 45, 'sANyiA', 66, 'JaMEs', 'eLAmIn', 23, 'IsMael', 67, 19, 'ElaMIN' ];
//const strArr = [];
//const output = arr
//	.filter((element) => typeof element === 'string')
//	.map((element) => element.toUpperCase())
//	.map((str) => `${str}!`);

// console.log(output);

const messyArray = [ 100, 'iSMael', 55, 45, 'sANyiA', 66, 'JaMEs', 'eLAmIn', 23, 'IsMael', 67, 19, 'ElaMIN' ];

console.log(
    arr.filter(
        (elem) => { return typeof elem === "string"}
    ).map((elem) => {
        return `${elem.toUpperCase()}!`;
    })
);
// console.log(
//   arr.filter(
//        function (elem) { return typeof elem === "string" }
//    ).map(
//        function (elem) {
//            return `${elem.toUpperCase()}!`;
//        }
//    )
//);