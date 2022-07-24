import HeroClass from "./HeroClass";

const HeroOne = new HeroClass()

HeroOne.name = 'hero 1'
HeroOne.focus = 'combat'
HeroOne.stats= {
    hp: 5,
    power: 2,
    magic: 0,
    speed: 0,
    stamina: 5,
    luck: 0,
    xp: 0,
}
HeroOne.tempStats = {
    tempHp: HeroOne.stats.hp,
    tempMagic: HeroOne.stats.magic,
    tempPower: HeroOne.stats.power,
    tempSpeed: HeroOne.stats.speed,
    tempStamina: HeroOne.stats.stamina
}

const HeroTwo = new HeroClass()

HeroTwo.name = 'hero 2'
HeroTwo.focus = 'combat'
HeroTwo.stats= {
    hp: 4,
    power: 0,
    magic: 0,
    speed: 2,
    stamina: 5,
    luck: 0,
    xp: 0,
}
HeroTwo.tempStats = {
    tempHp: HeroTwo.stats.hp,
    tempMagic: HeroTwo.stats.magic,
    tempPower: HeroTwo.stats.power,
    tempSpeed: HeroTwo.stats.speed,
    tempStamina: HeroTwo.stats.stamina
}

const HeroThree = new HeroClass()

HeroThree.name = 'hero 3'
HeroThree.focus = 'combat'
HeroThree.stats= {
    hp: 3,
    power: 0,
    magic: 2,
    speed: 0,
    stamina: 5,
    luck: 0,
    xp: 0,
}
HeroThree.tempStats = {
    tempHp: HeroThree.stats.hp,
    tempMagic: HeroThree.stats.magic,
    tempPower: HeroThree.stats.power,
    tempSpeed: HeroThree.stats.speed,
    tempStamina: HeroThree.stats.stamina
}

const HeroFour = new HeroClass()

HeroFour.name = 'hero 4'
HeroFour.focus = 'support'
HeroFour.stats= {
    hp: 3,
    power: 0,
    magic: 0,
    speed: 1,
    stamina: 5,
    luck: 1,
    xp: 0,
}
HeroFour.tempStats = {
    tempHp: HeroFour.stats.hp,
    tempMagic: HeroFour.stats.magic,
    tempPower: HeroFour.stats.power,
    tempSpeed: HeroFour.stats.speed,
    tempStamina: HeroFour.stats.stamina
}

const HeroFive = new HeroClass()

HeroFive.name = 'hero 5'
HeroFive.focus = 'support'
HeroFive.stats= {
    hp: 4,
    power: 0,
    magic: 1,
    speed: 1,
    stamina: 5,
    luck: 0,
    xp: 0,
}
HeroFive.tempStats = {
    tempHp: HeroFive.stats.hp,
    tempMagic: HeroFive.stats.magic,
    tempPower: HeroFive.stats.power,
    tempSpeed: HeroFive.stats.speed,
    tempStamina: HeroFive.stats.stamina
}

const HeroSix = new HeroClass()

HeroSix.name = 'hero 6'
HeroSix.focus = 'support'
HeroSix.stats= {
    hp: 5,
    power: 1,
    magic: 0,
    speed: 1,
    stamina: 5,
    luck: 0,
    xp: 0,
}
HeroSix.tempStats = {
    tempHp: HeroSix.stats.hp,
    tempMagic: HeroSix.stats.magic,
    tempPower: HeroSix.stats.power,
    tempSpeed: HeroSix.stats.speed,
    tempStamina: HeroSix.stats.stamina
}

const HeroList = [
    HeroOne,
    HeroTwo,
    HeroThree,
    HeroFour,
    HeroFive,
    HeroSix
]

export default HeroList