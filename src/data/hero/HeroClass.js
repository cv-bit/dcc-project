

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

    powerLevel = 0

    rank = 'F'

    armor = 0

    damage = 1

    occupation= ""

    Token=[]

    image= ""

    focus= ""

    skills= [

    ]

    spells= [
        
    ]

    abilities= [

    ]

    equip = {
        belt: '',
        back: '',
        weapon: {
            rightArm: {},
            leftArm: {},
            TwoHand: {}
        },
        armor: {
            chest: {},
            legs: {},
            gloves: {},
            leftArm: {}
        }
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

    gold= 0

    trainingLevel = 1

    quests = []
}

export default HeroClass