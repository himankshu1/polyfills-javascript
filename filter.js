const numbers = [10, 12, 83, 34, 55, 6, 17, 18, 39];

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (callback) {
        const resultArray = [];

        for (let i = 0; i < this.length; i++) {
            callback(this[i]) && resultArray.push(this[i]);
        }
        return resultArray;
    };
}

const result = numbers.myFilter((val) => val % 3 == 0);
console.log(result);
