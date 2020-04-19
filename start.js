const checkNum = (num) => {
    let allNumbers = []
    for(z = 1; z <= num; z++) {
        allNumbers.push(z)
    }
    // console.log(allNumbers)
    allNumbers.forEach((num, index) => {
        // console.log(`Number ${num} :::: Index ${index}`);
        if(num % 2 === 0) {
            allNumbers[index] = 'yi';
            // console.log(`Number ${num} :::: Index ${index}`);            
        } else if(num % 3 === 0) {
            allNumbers[index] = 'gi';
        } else if(num % 5 === 0) {
            allNumbers[index] = 'oh'
        }
        
    })
    console.log(allNumbers)
}

checkNum(25)