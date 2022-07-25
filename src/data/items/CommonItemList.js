import ItemClass from "./ItemClass";

const ItemOne = new ItemClass()

ItemOne.name = 'short sword'
ItemOne.type = 'weapon'
ItemOne.rarity = 'common'
ItemOne.value = 6
ItemOne.useFunction = () => {
    alert(ItemOne.name + ' is ' + ItemOne.value + ' gold ')
}

const ItemTwo = new ItemClass()

ItemTwo.name = 'bow'
ItemTwo.type = 'weapon'
ItemTwo.rarity = 'common'
ItemTwo.value = 8
ItemTwo.useFunction = () => {
    alert(ItemTwo.name + ' is ' + ItemTwo.value + ' gold ')
}

const ItemThree = new ItemClass()

ItemThree.name = 'basic armor'
ItemThree.type = 'armor'
ItemThree.rarity = 'common'
ItemThree.value = 12
ItemThree.useFunction = () => {
    alert(ItemThree.name + ' is ' + ItemThree.value + ' gold ')
}

const ItemFour = new ItemClass()

ItemFour.name = 'fish on a stick'
ItemFour.type = 'food'
ItemFour.rarity = 'common'
ItemFour.value = 1
ItemFour.useFunction = () => {
    alert(ItemFour.name + ' is ' + ItemFour.value + ' gold ')
}

const ItemFive = new ItemClass()

ItemFive.name = 'small shield'
ItemFive.type = 'armor'
ItemFive.rarity = 'common'
ItemFive.value = 5
ItemFive.useFunction = () => {
    alert(ItemFive.name + ' is ' + ItemFive.value + ' gold ')
}

const ItemSix = new ItemClass()

ItemSix.name = 'spear'
ItemSix.type = 'weapon'
ItemSix.rarity = 'common'
ItemSix.value = 6
ItemSix.useFunction = () => {
    alert(ItemSix.name + ' is ' + ItemSix.value + ' gold ')
}

const ItemSeven = new ItemClass()

ItemSeven.name = 'sling shot'
ItemSeven.type = 'weapon'
ItemSeven.rarity = 'common'
ItemSeven.value = 2
ItemSeven.useFunction = () => {
    alert(ItemSeven.name + ' is ' + ItemSeven.value + ' gold ')
}

const ItemEight = new ItemClass()

ItemEight.name = 'backpack'
ItemEight.type = 'inventory'
ItemEight.rarity = 'common'
ItemEight.value = 5
ItemEight.useFunction = () => {
    alert(ItemEight.name + ' is ' + ItemEight.value + ' gold ')
}

const ItemNine = new ItemClass()

ItemNine.name = 'small belt pouch'
ItemNine.type = 'inventory'
ItemNine.rarity = 'common'
ItemNine.value = 2
ItemNine.useFunction = () => {
    alert(ItemNine.name + ' is ' + ItemNine.value + ' gold ')
}

const ItemTen = new ItemClass()

ItemTen.name = 'potion'
ItemTen.type = 'food'
ItemTen.rarity = 'common'
ItemTen.value = 2
ItemTen.useFunction = () => {
    alert(ItemTen.name + ' is ' + ItemTen.value + ' gold ')
}

const ItemEleven = new ItemClass()

ItemEleven.name = 'dagger'
ItemEleven.type = 'weapon'
ItemEleven.rarity = 'common'
ItemEleven.value = 2
ItemEleven.useFunction = () => {
    alert(ItemEleven.name + ' is ' + ItemEleven.value + ' gold ')
}

const ItemTwelve = new ItemClass()

ItemTwelve.name = 'small axe'
ItemTwelve.type = 'weapon'
ItemTwelve.rarity = 'common'
ItemTwelve.value = 4
ItemTwelve.useFunction = () => {
    alert(ItemTwelve.name + ' is ' + ItemTwelve.value + ' gold ')
}

const ItemThirteen = new ItemClass()

ItemThirteen.name = 'small tent'
ItemThirteen.type = 'camping'
ItemThirteen.rarity = 'common'
ItemThirteen.value = 15
ItemThirteen.useFunction = () => {
    alert(ItemThirteen.name + ' is ' + ItemThirteen.value + ' gold ')
}

const ItemFourteen = new ItemClass()

ItemFourteen.name = 'fishing pole'
ItemFourteen.type = 'tool'
ItemFourteen.rarity = 'common'
ItemFourteen.value = 2
ItemFourteen.useFunction = () => {
    alert(ItemFourteen.name + ' is ' + ItemFourteen.value + ' gold ')
}

const CommonItemList = [
    ItemOne,
    ItemTwo,
    ItemThree,
    ItemFour,
    ItemFive,
    ItemSix,
    ItemSeven,
    ItemEight,
    ItemNine,
    ItemTen,
    ItemEleven,
    ItemTwelve,
    ItemThirteen,
    ItemFourteen,

]

export default CommonItemList