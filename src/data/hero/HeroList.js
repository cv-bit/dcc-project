import HeroClass from "./HeroClass";

const HeroOne = new HeroClass()

HeroOne.name = 'hero 1'
HeroOne.focus = 'combat'
HeroOne.stats= {
    hp: 1,
    power: 1,
    magic: 0,
    speed: 0,
    stamina: 5,
    luck: 0,
    xp: 0,
}

const HeroTwo = new HeroClass()

HeroTwo.name = 'hero 2'
HeroTwo.focus = 'combat'
HeroTwo.stats= {
    hp: 0,
    power: 1,
    magic: 0,
    speed: 1,
    stamina: 5,
    luck: 0,
    xp: 0,
}

const HeroThree = new HeroClass()

HeroThree.name = 'hero 3'
HeroThree.focus = 'combat'
HeroThree.stats= {
    hp: 0,
    power: 0,
    magic: 2,
    speed: 0,
    stamina: 5,
    luck: 0,
    xp: 0,
}

const HeroFour = new HeroClass()

HeroFour.name = 'hero 4'
HeroFour.focus = 'support'
HeroFour.stats= {
    hp: 0,
    power: 0,
    magic: 0,
    speed: 1,
    stamina: 5,
    luck: 1,
    xp: 0,
}

const HeroFive = new HeroClass()

HeroFive.name = 'hero 5'
HeroFive.focus = 'support'
HeroFive.stats= {
    hp: 0,
    power: 0,
    magic: 1,
    speed: 1,
    stamina: 5,
    luck: 0,
    xp: 0,
}

const HeroSix = new HeroClass()

HeroSix.name = 'hero 6'
HeroSix.focus = 'support'
HeroSix.stats= {
    hp: 0,
    power: 1,
    magic: 0,
    speed: 1,
    stamina: 5,
    luck: 0,
    xp: 0,
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