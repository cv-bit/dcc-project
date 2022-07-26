
const attackEnemy = (enemy) => {
    enemy.tempStats.tempHp -= 1
    return enemy
}

const attackHero = (hero) => {
    hero.tempStats.tempHp -= 1
    // localStorage.setItem('hero', JSON.stringify(hero))
    return hero

}

export {
    attackEnemy,
    attackHero
}