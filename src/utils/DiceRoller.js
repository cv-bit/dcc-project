const diceRoller = (die) => {
    let results = Math.floor(Math.random() * die) + 1;
    let message = ''
    if (results === 1) {
        message = 'critical fail'
    }
    else if(results <= die/2) {
        message = 'fail'
    } else if (results >= die/2 && results !== die) {
        message = 'success'
    } else if (results === die) {
        message = 'critical success'
    }

    console.log(results, die)

    return alert(results + " " + message)
}

export {
    diceRoller
}