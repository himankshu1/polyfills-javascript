const myNums = [1, 2, 3, 4, 5];

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback) {
        const resultArray = [];

        for (let i = 0; i < this.length; i++) {
            const result = callback(this[i], i);
            resultArray.push(result);
        }
        return resultArray;
    };
}

const resultArray = myNums.myMap((value, index) => value + 1);
console.log(resultArray);
