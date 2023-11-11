function sum(a,b) {
    if (Array.isArray(a)) {
        let sum = 0
        a.forEach((i) => (sum += i))
        return sum
    } else if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    }
    // if (Array.isArray(a)) {
    //     let total = 0
    //     for (let i = 0; i < a.length; i++) {
    //         total += a[i]
    //     }
    //     return total
    // } else if (typeof a === 'number' && typeof b === 'number'){
    //     return a + b
    // }
}

module.exports = {
    sum,
}