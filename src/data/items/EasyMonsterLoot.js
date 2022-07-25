import ItemClass from "./ItemClass";
import {diceRoller} from '../../utils/DiceRoller'

const itemOne = new ItemClass()

itemOne.name = 'gold'
itemOne.type = 'gold'
itemOne.rarity = 'common'
itemOne.value = diceRoller(4, true)
itemOne.useFunction = (hero) => {
    hero.gold += itemOne.value
    alert(' you search the monster and find ' + itemOne.value + ' gold ')
}

const EasyMonsterLoot = [
    itemOne,
]

export default EasyMonsterLoot