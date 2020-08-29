function abracaFunction(yourFunc) {
    console.log(
      "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
    );
  
    const abracaArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const abracaOutput = yourFunc(abracaArray);
  
    return abracaOutput;
  }

  function myFunction(arr) {
      let result = arr.map(
          function (str) {
              return str.toUpperCase()
          }
      );
      return result;
  }
  let result = abracaFunction(myFunction);
  console.log(result);