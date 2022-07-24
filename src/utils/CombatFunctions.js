
const attackEnemy = (enemy) => {
    enemy.tempStats.tempHp = enemy.tempStats.tempHp - 1
    console.log(enemy)
    return enemy
}

const attackHero = (hero) => {
    hero.tempStats.tempHp = hero.tempStats.tempHp - 1
    // localStorage.setItem('hero', JSON.stringify(hero))
    console.log(hero)
    return hero

}

export {
    attackEnemy,
    attackHero
}