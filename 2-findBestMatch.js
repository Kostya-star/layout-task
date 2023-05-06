const findBestMatch = (k, arr) => {
    
    let newArr = []
    // arr.forEach(num => {
        
        
    //     newArr.push(k > 0 ? k - num : k + num)
    // });
    
    // return newArr.sort((a, b) => a - b)[0]
    // return arr.reduce((acc, currVal) => {
    //     // console.log('acc', acc);
    //     // console.log('currVal', currVal);
    //     let newNum = acc - currVal < acc ? acc - currVal : acc
    //     return newNum
    // }, 0)

    arr.forEach(num => newArr.push(num-k))
    return newArr.sort((a, b) => b - a)
}

const arr = [10, 50, 200, 340, 1, ];

console.log(findBestMatch(60, arr));

// console.log(-96-100)