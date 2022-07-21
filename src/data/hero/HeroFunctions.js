const editName = (hero, input) => {
    if(localStorage.getItem('hero')) {
        let myHero = JSON.parse(localStorage.getItem('hero'))
        myHero.name = input
        hero.name = input
        localStorage.setItem('hero', JSON.stringify(myHero))
    } else {
        hero.name = input
    }
}

const plusHp = (hero) => {
    if(localStorage.getItem('hero')) {
        let myHero = JSON.parse(localStorage.getItem('hero'))
        myHero.stats.hp++
        hero.stats.hp++
        localStorage.setItem('hero', JSON.stringify(myHero))
    } else {
        hero.stats.hp++
    }
}

const plusPower = (hero) => {
    if(localStorage.getItem('hero')) {
        let myHero = JSON.parse(localStorage.getItem('hero'))
        myHero.stats.power++
        hero.stats.power++
        localStorage.setItem('hero', JSON.stringify(myHero))
    } else {
        hero.stats.power++
    }
}

const plusMagic = (hero) => {
    if(localStorage.getItem('hero')) {
        let myHero = JSON.parse(localStorage.getItem('hero'))
        myHero.stats.magic++
        hero.stats.magic++
        localStorage.setItem('hero', JSON.stringify(myHero))
    } else {
        hero.stats.magic++
    }
}

const plusSpeed = (hero) => {
    if(localStorage.getItem('hero')) {
        let myHero = JSON.parse(localStorage.getItem('hero'))
        myHero.stats.speed++
        hero.stats.speed++
        localStorage.setItem('hero', JSON.stringify(myHero))
    } else {
        hero.stats.speed++
    }
}

const plusStamina = (hero) => {
    if(localStorage.getItem('hero')) {
        let myHero = JSON.parse(localStorage.getItem('hero'))
        myHero.stats.stamina++
        hero.stats.stamina++
        localStorage.setItem('hero', JSON.stringify(myHero))
    } else {
        hero.stats.stamina++
    }
}

const plusLuck = (hero) => {
    if(localStorage.getItem('hero')) {
        let myHero = JSON.parse(localStorage.getItem('hero'))
        myHero.stats.luck++
        hero.stats.luck++
        localStorage.setItem('hero', JSON.stringify(myHero))
    } else {
        hero.stats.luck++
    }
}

const plusXp = (hero) => {
    if(localStorage.getItem('hero')) {
        let myHero = JSON.parse(localStorage.getItem('hero'))
        myHero.stats.xp++
        hero.stats.xp++
        localStorage.setItem('hero', JSON.stringify(myHero))
    } else {
        hero.stats.xp++
    }
}

export {
    editName,
    plusHp,
    plusPower,
    plusMagic,
    plusSpeed,
    plusStamina,
    plusLuck,
    plusXp
}