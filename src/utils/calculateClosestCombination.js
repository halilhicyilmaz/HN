const closestCombination = (arr, num, n) => {
    let closest = Infinity;
    let closestArr = [];

    function findClosestCombination(arr, data, start, end, index, n, num) {
        if (index === n) {
            let sum = data.reduce((a, b) => a + b, 0);
            let diff = Math.abs(num - sum);
            if (diff < closest) {
                closest = diff;
                closestArr = [...data];
            }
            return;
        }
        for (let i = start; i <= end && end - i + 1 >= n - index; i++) {
            data[index] = arr[i];
            findClosestCombination(arr, data, i + 1, end, index + 1, n, num);
        }
    }

    findClosestCombination(arr, [], 0, arr.length - 1, 0, n, num);
    const total = closestArr.reduce((partialSum, a) => partialSum + a, 0)
    return [closestArr, total]
}

const calculateClosestCombination = (array, target) => {
    let higherClosest = [[], Infinity]
    let lowerClosest = [[], -Infinity]

    for (let i = 1; i <= array.length; i++) {
        const result = closestCombination(array, target, i)
        if (result[1] >= target) {
            if (higherClosest[1] >= result[1]) {
                higherClosest = result
            }
        } else {
            lowerClosest = result
        }
    }

    if (higherClosest[1] < Infinity) {
        return higherClosest
    } else {
        return lowerClosest
    }
}

export {
    calculateClosestCombination
}