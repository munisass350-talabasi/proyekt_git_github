function calculateAB (a, b, type) {
    if(typeof a !== "number" || typeof b !== "number") {
        throw new Error('a or b parameter is not a number')
    }
    
    switch (type) {
        case "plus":
            return a + b
        case "minus":
            return a - b
        case "multiply":
            return a * b
        case "division":
            return a * b
    
        default:
            throw new Error(`Unknown parameter type: ${type}`)
    }
}