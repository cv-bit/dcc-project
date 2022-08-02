import Enemy from "./Enemy";
import MandragoraImg from '../../assets/images/mandragora.webp'

const Mandragora = new Enemy()

Mandragora.name = 'mandragora'
Mandragora.img = MandragoraImg
Mandragora.damage = 1
Mandragora.stats= {
    hp: 3,
    power: 1,
    magic: 0,
    speed: 1,
    stamina: 5,
}
Mandragora.tempStats = {
    tempHp: Mandragora.stats.hp,
    tempMagic: Mandragora.stats.magic,
    tempPower: Mandragora.stats.power,
    tempSpeed: Mandragora.stats.speed,
    tempStamina: Mandragora.stats.stamina
}
Mandragora.description = 'a green monster full of trickery'
Mandragora.xp = 1

const RandomEnemies = [
    Mandragora,

]

export default RandomEnemies