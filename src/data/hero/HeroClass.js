

class HeroClass {

    name= ""

    stats= {
        hp: 0,
        power: 0,
        magic: 0,
        speed: 0,
        stamina: 5,
        luck: 0,
        xp: 0,
    }

    tempStats = {
        tempHp: this.stats.hp,
        tempPower: this.stats.power,
        tempMagic: this.stats.magic,
        tempSpeed: this.stats.speed,
        tempStamina: this.stats.stamina,
    }

    armor = 0

    occupation= ""

    Token=""

    image= ""

    focus= ""

    skills= [

    ]

    abilities= [

    ]

    equip = {
        belt: '',
        back: '',
        weapon: '',
        armor: ''
    }

    inventory = [
        {
            bag: '',
            space: 0,
        },
    ]

    items= [

    ]

    log= [

    ]

    gold= 10
}

export default HeroClass