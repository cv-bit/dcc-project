import ItemClass from "./ItemClass";

const ItemOne = new ItemClass()

ItemOne.name = 'short sword'
ItemOne.type = 'weapon'
ItemOne.value = 6
ItemOne.useFunction = () => {
    alert(ItemOne.name + ' is ' + ItemOne.value + ' gold ')
}

const ItemTwo = new ItemClass()

ItemTwo.name = 'bow'
ItemTwo.type = 'weapon'
ItemTwo.value = 8
ItemTwo.useFunction = () => {
    alert(ItemTwo.name + ' is ' + ItemTwo.value + ' gold ')
}

const ItemThree = new ItemClass()

ItemThree.name = 'basic armor'
ItemThree.type = 'armor'
ItemThree.value = 12
ItemThree.useFunction = () => {
    alert(ItemThree.name + ' is ' + ItemThree.value + ' gold ')
}

const ItemFour = new ItemClass()

ItemFour.name = 'fish on a stick'
ItemFour.type = 'food'
ItemFour.value = 1
ItemFour.useFunction = () => {
    alert(ItemFour.name + ' is ' + ItemFour.value + ' gold ')
}

const ItemFive = new ItemClass()

ItemFive.name = 'small shield'
ItemFive.type = 'armor'
ItemFive.value = 5
ItemFive.useFunction = () => {
    alert(ItemFive.name + ' is ' + ItemFive.value + ' gold ')
}

const ItemSix = new ItemClass()

ItemSix.name = 'spear'
ItemSix.type = 'weapon'
ItemSix.value = 6
ItemSix.useFunction = () => {
    alert(ItemSix.name + ' is ' + ItemSix.value + ' gold ')
}

const ItemSeven = new ItemClass()

ItemSeven.name = 'sling shot'
ItemSeven.type = 'weapon'
ItemSeven.value = 4
ItemSeven.useFunction = () => {
    alert(ItemSeven.name + ' is ' + ItemSeven.value + ' gold ')
}

const ItemEight = new ItemClass()

ItemEight.name = 'backpack'
ItemEight.type = 'inventory'
ItemEight.value = 5
ItemEight.useFunction = () => {
    alert(ItemEight.name + ' is ' + ItemEight.value + ' gold ')
}

const ItemNine = new ItemClass()

ItemNine.name = 'small belt pouch'
ItemNine.type = 'inventory'
ItemNine.value = 2
ItemNine.useFunction = () => {
    alert(ItemNine.name + ' is ' + ItemNine.value + ' gold ')
}

const ItemTen = new ItemClass()

ItemTen.name = 'potion'
ItemTen.type = 'food'
ItemTen.value = 2
ItemTen.useFunction = () => {
    alert(ItemTen.name + ' is ' + ItemTen.value + ' gold ')
}

const ItemEleven = new ItemClass()

ItemEleven.name = 'dagger'
ItemEleven.type = 'weapon'
ItemEleven.value = 2
ItemEleven.useFunction = () => {
    alert(ItemEleven.name + ' is ' + ItemEleven.value + ' gold ')
}

const ItemTwelve = new ItemClass()

ItemTwelve.name = 'small axe'
ItemTwelve.type = 'weapon'
ItemTwelve.value = 4
ItemTwelve.useFunction = () => {
    alert(ItemTwelve.name + ' is ' + ItemTwelve.value + ' gold ')
}

const ItemThirteen = new ItemClass()

ItemThirteen.name = 'small tent'
ItemThirteen.type = 'camping'
ItemThirteen.value = 15
ItemThirteen.useFunction = () => {
    alert(ItemThirteen.name + ' is ' + ItemThirteen.value + ' gold ')
}

const ItemList = [
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
    
]

export default ItemList