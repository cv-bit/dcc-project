import Quest from "./Quest";

const storyOne = new Quest()

storyOne.name = 'intro quest'
storyOne.id = 1

const storyTwo = new Quest()

storyTwo.name = 'dragons peak'
storyTwo.id = 2
storyTwo.value = 10
storyTwo.difficulty = 2

const storyThree = new Quest()

storyThree.name = 'lost and found'
storyThree.id = 3
storyThree.value = 5
storyThree.difficulty = 1

const storyFour = new Quest()

storyFour.name = 'the mage tower'
storyFour.id = 4
storyFour.value = 5
storyFour.difficulty = 2

const storyFive = new Quest()

storyFive.name = 'the night king'
storyFive.id = 5
storyFive.value = 15
storyFive.difficulty = 2

const storySix = new Quest()

storySix.name = 'trouble in toad village'
storySix.id = 6
storySix.value = 10
storySix.difficulty = 1

const storySeven = new Quest()

storySeven.name = 'the witch and the wardrobe'
storySeven.id = 7
storySeven.value = 10
storySeven.difficulty = 2

const QuestList = [
    storyOne,
    storyTwo,
    storyThree,
    storyFour,
    storyFive,
    storySix
]

export default QuestList