const checkNum = (num) => {
    let allNumbers = []
    for(z = 1; z <= num; z++) {
        allNumbers.push(z)
    }
    allNumbers.forEach((num, index) => {
        if(num % 2 === 0 && num % 3 === 0  && num % 5 === 0) {
            allNumbers[index] = 'yu-gi-oh';
        } else if(num % 2 === 0 && num % 3 === 0) {
            allNumbers[index] = 'yu-gi'
        } else if(num % 3 === 0 && num % 5 === 0) {
            allNumbers[index] = 'gi-oh'
        } else if(num % 2 === 0 && num % 5 === 0) {
            allNumbers[index] = 'yu-oh'
        } else if (num % 2) {
            allNumbers[index] = 'yu';
        } else if(num % 3 === 0) {
            allNumbers[index] = 'gi';
        } else if(num % 5 === 0) {
            allNumbers[index] = 'oh'
        } 
    })
    return allNumbers;
}

const view = checkNum(100)
console.log(view)