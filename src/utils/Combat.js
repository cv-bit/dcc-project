import { diceRoller } from "./DiceRoller"

const Combat = (player, enemy, input) => {
    let playerAttack = diceRoller(20)
    let enemyAttack = diceRoller(20)

    player.hp -= enemyAttack

    if(player.hp < 1) {
        return alert('player is dead')
    }

    enemy.hp -= playerAttack

    if(enemy.hp < 1) {
        return alert('enemy died player has won')
    }
}

export {
    Combat
}