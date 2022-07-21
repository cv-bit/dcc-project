import Enemy from "./Enemy";

const EnemyOne = new Enemy()

EnemyOne.name = 'goblin'

const EnemyTwo = new Enemy()

EnemyTwo.name = 'wolf'

const EnemyThree = new Enemy()

EnemyThree.name = 'bandit'

const EnemyFour = new Enemy()

EnemyFour.name = 'boar'

const EnemyFive = new Enemy()

EnemyFive.name = 'slime'

const EnemySix = new Enemy()

EnemySix.name = 'skeleton'

const EnemySeven = new Enemy()

EnemySeven.name = 'Lesser Dragon'
EnemySeven.stats = {
    hp: 10,
    power: 5,
    magic: 5,
    speed: 5,
    stamina: 5,
}

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