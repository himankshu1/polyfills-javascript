const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (callback) {
        const resultArray = [];

        for (let i = 0; i < this.length; i++) {
            const result = callback(this[i]);
            if (result) {
                resultArray.push(this[i]);
            }
        }
        return resultArray;
    };
}

const result = numbers.myFilter((val) => val % 2 == 0);
console.log(result);
