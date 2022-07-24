import Enemy from "./Enemy";

const EnemyOne = new Enemy()

EnemyOne.name = 'goblin'
EnemyOne.stats= {
    hp: 3,
    power: 1,
    magic: 0,
    speed: 1,
    stamina: 5,
}
EnemyOne.description = 'a green monster full of trickery'

const EnemyTwo = new Enemy()

EnemyTwo.name = 'wolf'
EnemyTwo.stats= {
    hp: 3,
    power: 1,
    magic: 0,
    speed: 1,
    stamina: 5,
}
EnemyTwo.description = 'hunters of the forest usually hunt in packs'

const EnemyThree = new Enemy()

EnemyThree.name = 'bandit'
EnemyThree.stats= {
    hp: 4,
    power: 1,
    magic: 0,
    speed: 1,
    stamina: 5,
}
EnemyThree.description = 'low lifes trying to rob inoccent people they come accross'

const EnemyFour = new Enemy()

EnemyFour.name = 'boar'
EnemyFour.stats= {
    hp: 4,
    power: 1,
    magic: 0,
    speed: 1,
    stamina: 5,
}
EnemyFour.description = 'wild boars destroy farmers land and will charge at anyone they see'

const EnemyFive = new Enemy()

EnemyFive.name = 'slime'
EnemyFive.stats= {
    hp: 1,
    power: 0,
    magic: 0,
    speed: 0,
    stamina: 5,
}
EnemyFive.description = `slimes are immune to physical attacks and usually have items hidden inside their body`

const EnemySix = new Enemy()

EnemySix.name = 'skeleton'
EnemySix.stats= {
    hp: 5,
    power: 1,
    magic: 0,
    speed: 0,
    stamina: 5,
}
EnemySix.description = 'raised from their sleep skeletons are magically created monsters with no soul and will attack all they see'

const EnemySeven = new Enemy()

EnemySeven.name = 'Lesser Dragon'
EnemySeven.stats = {
    hp: 10,
    power: 5,
    magic: 5,
    speed: 5,
    stamina: 5,
}
EnemySeven.description = 'lesser dragons are young and very dangerous they attack any who cross into their territory and usually have large hordes of treasure'

const EnemyList = [
    EnemyOne,
    EnemyTwo,
    EnemyThree,
    EnemyFour,
    EnemyFive,
    EnemySix,
    EnemySeven
]

export default EnemyList