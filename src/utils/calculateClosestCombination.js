const findClosestSum = (arr, target, n) => {
    const combinations = getAllCombinations(arr, n);

    let closestSum = -Infinity;
    let closestCombo;

    for (let combo of combinations) {
        const sum = combo.reduce((a, b) => a + b);
        if (sum >= target && (sum < closestSum || closestSum === -Infinity)) {
            closestSum = sum;
            closestCombo = combo;
        }
        if (arr.length === n && sum < target) {
            closestSum = sum;
            closestCombo = combo;
        }
    }

    return [closestCombo, closestSum];
}

const getAllCombinations = (arr, n) => {
    const results = [];

    const helper = (start, combination) => {
        if (combination.length === n) {
            results.push(combination);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            helper(i + 1, combination.concat(arr[i]));
        }
    }

    helper(0, []);

    return results;
}

const calculateClosestCombination = (array, target) => {
    let closest = [[], Infinity]

    for (let i = 1; i <= array.length; i++) {
        const result = findClosestSum(array, target, i)

        if (closest[1] >= result[1] && result[1] !== -Infinity) {
            closest = result
        }
        if (closest[1] < target && i === array.length) {
            closest = result
        }
    }
    return closest
}

export {
    calculateClosestCombination
}