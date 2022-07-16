const diceRoller = (die) => {
    let results = Math.floor(Math.random() * die) + 1;
    return results
}

export {
    diceRoller
}