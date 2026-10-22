function calculateAB (a, b, type) {
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
            throw new Error("Unknown parameter type")
    }
}