const fruits = ['Kiwi', 'Mango', 'Litchi', 'Guava'];

// fruits.forEach((fruit, fruitIndex) =>
//     console.log(`${fruit} is at index ${fruitIndex}`)
// );

if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (callback) {
        const calledOnArray = this;

        for (let i = 0; i < calledOnArray.length; i++) {
            callback(calledOnArray[i], i);
        }
    };
}

fruits.myForEach((fruit, fruitIndex) =>
    console.log(`Index ${fruitIndex} has ${fruit}`)
);
