import Enemy from "./Enemy";
import GoblinImg from '../../assets/images/goblin.jpg'
import WolfImg from '../../assets/images/Wolfie.webp'
import Bandit from '../../assets/images/bandit.png'
import Boar from '../../assets/images/boar.webp'
import Slime from '../../assets/images/slime.png'
import Skeleton from '../../assets/images/skeleton.webp'
import Drake from '../../assets/images/drake.png'

const EnemyOne = new Enemy()

EnemyOne.name = 'goblin'
EnemyOne.img = GoblinImg
EnemyOne.stats= {
    hp: 3,
    power: 1,
    magic: 0,
    speed: 1,
    stamina: 5,
}
EnemyOne.tempStats = {
    tempHp: EnemyOne.stats.hp,
    tempMagic: EnemyOne.stats.magic,
    tempPower: EnemyOne.stats.power,
    tempSpeed: EnemyOne.stats.speed,
    tempStamina: EnemyOne.stats.stamina
}
EnemyOne.description = 'a green monster full of trickery'

const EnemyTwo = new Enemy()

EnemyTwo.name = 'wolf'
EnemyTwo.img = WolfImg
EnemyTwo.stats= {
    hp: 3,
    power: 1,
    magic: 0,
    speed: 1,
    stamina: 5,
}
EnemyTwo.tempStats = {
    tempHp: EnemyTwo.stats.hp,
    tempMagic: EnemyTwo.stats.magic,
    tempPower: EnemyTwo.stats.power,
    tempSpeed: EnemyTwo.stats.speed,
    tempStamina: EnemyTwo.stats.stamina
}
EnemyTwo.description = 'hunters of the forest usually hunt in packs'

const EnemyThree = new Enemy()

EnemyThree.name = 'bandit'
EnemyThree.img = Bandit
EnemyThree.stats= {
    hp: 4,
    power: 1,
    magic: 0,
    speed: 1,
    stamina: 5,
}
EnemyThree.tempStats = {
    tempHp: EnemyThree.stats.hp,
    tempMagic: EnemyThree.stats.magic,
    tempPower: EnemyThree.stats.power,
    tempSpeed: EnemyThree.stats.speed,
    tempStamina: EnemyThree.stats.stamina
}
EnemyThree.description = 'low lifes trying to rob inoccent people they come accross'

const EnemyFour = new Enemy()

EnemyFour.name = 'boar'
EnemyFour.img = Boar
EnemyFour.stats= {
    hp: 4,
    power: 1,
    magic: 0,
    speed: 1,
    stamina: 5,
}
EnemyFour.tempStats = {
    tempHp: EnemyFour.stats.hp,
    tempMagic: EnemyFour.stats.magic,
    tempPower: EnemyFour.stats.power,
    tempSpeed: EnemyFour.stats.speed,
    tempStamina: EnemyFour.stats.stamina
}
EnemyFour.description = 'wild boars destroy farmers land and will charge at anyone they see'

const EnemyFive = new Enemy()

EnemyFive.name = 'slime'
EnemyFive.img = Slime
EnemyFive.stats= {
    hp: 1,
    power: 0,
    magic: 0,
    speed: 0,
    stamina: 5,
}
EnemyFive.tempStats = {
    tempHp: EnemyFive.stats.hp,
    tempMagic: EnemyFive.stats.magic,
    tempPower: EnemyFive.stats.power,
    tempSpeed: EnemyFive.stats.speed,
    tempStamina: EnemyFive.stats.stamina
}
EnemyFive.description = `slimes are immune to physical attacks and usually have items hidden inside their body`

const EnemySix = new Enemy()

EnemySix.name = 'skeleton'
EnemySix.img = Skeleton
EnemySix.stats= {
    hp: 5,
    power: 1,
    magic: 0,
    speed: 0,
    stamina: 5,
}
EnemySix.tempStats = {
    tempHp: EnemySix.stats.hp,
    tempMagic: EnemySix.stats.magic,
    tempPower: EnemySix.stats.power,
    tempSpeed: EnemySix.stats.speed,
    tempStamina: EnemySix.stats.stamina
}
EnemySix.description = 'raised from their sleep skeletons are magically created monsters with no soul and will attack all they see'

const EnemySeven = new Enemy()

EnemySeven.name = 'Drake'
EnemySeven.img = Drake
EnemySeven.stats = {
    hp: 10,
    power: 5,
    magic: 5,
    speed: 5,
    stamina: 5,
}
EnemySeven.tempStats = {
    tempHp: EnemySeven.stats.hp,
    tempMagic: EnemySeven.stats.magic,
    tempPower: EnemySeven.stats.power,
    tempSpeed: EnemySeven.stats.speed,
    tempStamina: EnemySeven.stats.stamina
}
EnemySeven.description = 'Drake a ferocious draconic creature quick to temper and attack'

const ArenaListOne = [
    EnemyOne,
    EnemyTwo,
    EnemyThree,
    EnemyFour,
    EnemyFive,
    EnemySix,
    EnemySeven
]

export default ArenaListOne