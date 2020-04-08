const interestData = [
    {
        principal: 2000,
        time: 1
    },
    {
        principal: 1000,
        time: 5
    },
    {
        principal: 3000,
        time: 1
    },
    {
        principal: 2000,
        time: 3
    },
];
console.log('Enter the place')
const interestCalculator = ([dataArray]) => {
    let rate;
    if(dataArray.principal >= 2500 && dataArray.time > 1 &&dataArray.time < 3 ) {
        rate = 3
        console.log(rate, dataArray)
        for(z = 0; z < dataArray.length; z++) {
            console.log(z)
        }
        return;
    } else if(dataArray.principal >= 2500 &&dataArray.time >= 3) {
        rate = 4
        console.log(rate)
    } else if(dataArray.principal < 2500 ||dataArray.time <= 1) {
        rate = 2
        console.log(rate)
    } else {
        rate = 1
    }
    

};

interestCalculator(interestData);