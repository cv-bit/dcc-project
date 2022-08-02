import RandomEnemies from "../../enemies/RandomEnemies"

const introQuestNodes = [
    {
    id: 1,
    text: 'Greetings Young Traveler. you see an old man from the corner of your eye...',
    options: [
        {
        text: 'Say hi...',
        setState: {},
        nextText: 2
        },
        {
        text: 'Ignore the old man...',
        setState: {},
        nextText: 2
        }
    ]
    },
    {
    id: 2,
    text: 'as you continue down the road, the old man follows you... What brings you to Beginning town?',
    options: [
        {
        text: 'Gold...',
        setState: {},
        // requiredState: (currentState) => currentState.blueGoo,
        // setState: { blueGoo: false, sword: true },
        nextText: 3
        },
        {
        text: 'Adventure...',
        setState: {},
        // requiredState: (currentState) => currentState.blueGoo,
        // setState: { blueGoo: false, shield: true },
        nextText: 3
        },
        {
        text: 'Fame...',
        setState: {},
        nextText: 3
        },
        {
            text: 'say nothing...',
            setState: {},
            // requiredState: (currentState) => currentState.blueGoo,
            // setState: { blueGoo: false, sword: true },
            nextText: 3
            },
    ]
    },
    {
    id: 3,
    text: "The old man nods looks up and says, we don't see many new faces round here, mmm not many at all. My names Cecil recon I'll be seeing you around",
    options: [
        {
        text: "Check your belongings...",
        setState: {},
        nextText: 4
        },
        {
        text: 'Turn to look at the old man',
        setState: {},
        nextText: 5
        },
        {
        text: 'Continue down the path to beginning town',
        setState: {},
        nextText: 6
        }
    ]
    },
    {
    id: 4,
    text: 'You pat your self quickly to make sure you have everything. Not like you had much to begin with but you need all you have. Nothing seems to be missing..',
    options: [
        {
        text: 'Continue',
        setState: {},
        nextText: 6
        }
    ]
    },
    {
    id: 5,
    text: "you turn to watch the old man walk off... and like that he's nowhere in sight",
    options: [
        {
        text: 'Continue',
        setState: {},
        nextText: 6
        }
    ]
    },
    {
    id: 6,
    text: 'As you continue down the road you hear a scream from a nearby farm... sounds like trouble',
    options: [
        {
        text: 'Go Investigate',
        setState: {},
        nextText: 7
        },
        {
        text: 'Look around to see if anyone else is around',
        setState: {},
        nextText: 7
        }
    ]
    },
    {
    id: 7,
    text: 'You see a small girl in the fields, you also notice something with her as she screams again... Help!!!',
    options: [
        {
        // text: 'Run to help',
        setState: { enemy: RandomEnemies[0], storyState: 8 },
        nextText: 8
        }
    ]
    },
    {
    id: 8,
    text: 'Your attempts to run are in vain and the monster easily catches.',
    options: [
        {
        text: 'Restart',
        nextText: -1
        }
    ]
    },
    {
    id: 9,
    text: 'You foolishly thought this monster could be slain with a single sword.',
    options: [
        {
        text: 'Restart',
        nextText: -1
        }
    ]
    },
    {
    id: 10,
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
        {
        text: 'Restart',
        nextText: -1
        }
    ]
    },
    {
    id: 11,
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
        {
        text: 'Congratulations. Play Again.',
        nextText: -1
        }
    ]
    }
]

export default introQuestNodes