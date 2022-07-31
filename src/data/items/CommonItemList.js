import ItemClass from "./ItemClass";

const ItemOne = new ItemClass()

ItemOne.name = 'short sword'
ItemOne.type = 'weapon'
ItemOne.rarity = 'common'
ItemOne.value = 6
ItemOne.stats = 2

const ItemTwo = new ItemClass()

ItemTwo.name = 'bow'
ItemTwo.type = 'weapon'
ItemTwo.rarity = 'common'
ItemTwo.value = 8
ItemTwo.stats = 2

const ItemThree = new ItemClass()

ItemThree.name = 'basic armor'
ItemThree.type = 'armor'
ItemThree.rarity = 'common'
ItemThree.value = 12
ItemThree.stats = 1

const ItemFour = new ItemClass()

ItemFour.name = 'fish on a stick'
ItemFour.type = 'food'
ItemFour.rarity = 'common'
ItemFour.value = 1
ItemFour.stats = 2

const ItemFive = new ItemClass()

ItemFive.name = 'small shield'
ItemFive.type = 'armor'
ItemFive.rarity = 'common'
ItemFive.value = 5
ItemFive.stats = 1

const ItemSix = new ItemClass()

ItemSix.name = 'spear'
ItemSix.type = 'weapon'
ItemSix.rarity = 'common'
ItemSix.value = 6
ItemSix.stats = 2

const ItemSeven = new ItemClass()

ItemSeven.name = 'sling shot'
ItemSeven.type = 'weapon'
ItemSeven.rarity = 'common'
ItemSeven.value = 2
ItemSeven.stats = 1

const ItemEight = new ItemClass()

ItemEight.name = 'backpack'
ItemEight.type = 'inventory'
ItemEight.rarity = 'common'
ItemEight.value = 5

const ItemNine = new ItemClass()

ItemNine.name = 'small belt pouch'
ItemNine.type = 'inventory'
ItemNine.rarity = 'common'
ItemNine.value = 2

const ItemTen = new ItemClass()

ItemTen.name = 'potion'
ItemTen.type = 'food'
ItemTen.rarity = 'common'
ItemTen.value = 2
ItemTen.stats = 4

const ItemEleven = new ItemClass()

ItemEleven.name = 'dagger'
ItemEleven.type = 'weapon'
ItemEleven.rarity = 'common'
ItemEleven.value = 2
ItemEleven.stats = 1

const ItemTwelve = new ItemClass()

ItemTwelve.name = 'small axe'
ItemTwelve.type = 'weapon'
ItemTwelve.rarity = 'common'
ItemTwelve.value = 4
ItemTwelve.stats = 1

const ItemThirteen = new ItemClass()

ItemThirteen.name = 'small tent'
ItemThirteen.type = 'camping'
ItemThirteen.rarity = 'common'
ItemThirteen.value = 15

const ItemFourteen = new ItemClass()

ItemFourteen.name = 'fishing pole'
ItemFourteen.type = 'tool'
ItemFourteen.rarity = 'common'
ItemFourteen.value = 2

const ItemFifteen = new ItemClass()

ItemFifteen.name = 'spell book'
ItemFifteen.type = ''
ItemFifteen.rarity = 'common'
ItemFifteen.value = 7
ItemFifteen.stats = 2

const ItemSixteen = new ItemClass()

ItemSixteen.name = 'blue cloak'
ItemSixteen.type = 'armor'
ItemSixteen.rarity = 'common'
ItemSixteen.value = 6
ItemSixteen.stats = 1

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
    ItemFifteen,
    ItemSixteen
]

export default CommonItemList