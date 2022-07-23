import ItemClass from "./ItemClass";

const ItemOne = new ItemClass()

ItemOne.name = 'short sword'
ItemOne.type = 'weapon'
ItemOne.value = 10
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

const ItemList = [
    ItemOne,
    ItemTwo,
    ItemThree,
    ItemFour,
    ItemFive,
    ItemSix,
    ItemSeven,
]

export default ItemList