
const attackEnemy = (enemy) => {
    enemy.stats.hp = enemy.stats.hp - 1
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