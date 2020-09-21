let num = parseInt(window.prompt("What number would you like to convert"))

// while(isNaN(num)){
//     num = window.prompt("I asked for a number, not gibberish!")
// }

let numRM = ""

const romanNumerals = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
  };

for (const k in romanNumerals){
    
    while(num>=romanNumerals[k] && romanNumerals[k].length==num.length){
        num = num - romanNumerals[k]
        numRM = numRM + k
        
    }
}

console.log(numRM);
