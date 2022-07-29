
class Enemy {

    name = ''

    type = ''

    difficulty = ''

    description = ''

    img = ''

    damage = 0

    stats = {
        hp: 0,
        power: 0,
        magic: 0,
        speed: 0,
        stamina: 5,
    }

    tempStats = {
        temphp: this.stats.hp,
        tempPower: this.stats.power,
        tempMagic: this.stats.magic,
        tempSpeed: this.stats.speed,
        tempStamina: this.stats.stamina
    }

    skills = [

    ]

    abilities = [

    ]

    loot = [

    ]

    xp = 0

    gold = 0
    
}

export default Enemy