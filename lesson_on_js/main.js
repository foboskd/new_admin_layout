

// const smallestDivisor = (num) => {
//     const iter = (counter, acc) => {
//         if (counter === 1) {
//             return acc;
//         }
//         console.log(counter);
//         return iter(counter - 1, counter * acc);
//     };
//
//     return iter(num, 1);
// }
//
// smallestDivisor(15)


// const showArgs = (a, b) => console.log(`Arg 'a' equals ${a} & arg 'b' equals ${b}`);
// showArgs(null);


const incrementA = (n) => {
    let widthLine = String(n);
    let result = 0;

    for(let i = 0; i < widthLine.length; i++){
        result += Number(widthLine[i]);
    }

    return result;
};

const addDigits = (num) => {
    let test = num;

    while (test >= 10) {

        test = incrementA(test);
        //console.log(test);
    }

    return test;
};

addDigits(828);