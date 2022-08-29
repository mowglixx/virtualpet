
// function to init achievemnts state for App when pet is created
export const ACHIEVEMENTS = () => {
    return ({
        start: {
            icon: '🏆',
            achievement: 'Here we go!',
            message: 'You made a Virtual pet, in this economy?!',
            complete: true,
        },
        hungry: {
            icon: '🍽️',
            achievement: 'Need the Noms!',
            message: `Your pet is hungry, great...`,
            complete: false,
        },
        starve: {
            icon: '🍞',
            achievement: 'StArViNg',
            message: `Your pet is starving, well done, I hope You're happy!`,
            complete: false,
        },
        nearlyDie: {
            icon: '💀',
            achievement: 'Nearly kill a pet',
            message: `Your pet is dying, feed and heal them!`,
            complete: false,
        },
        kill: {
            icon: '☠️',
            achievement: 'Kill a pet',
            message: `Your pet is dead, it's too late`,
            complete: false,
        },
        feedPet: {
            icon: '🥫',
            achievement: 'Fed your pet',
            message: 'Well done I guess...',
            complete: false,
        },
        playPet: {
            icon: '🖐️',
            achievement: `Played with your pet`,
            message: 'This one is kinda good king.',
            complete: false,
        },
        healPet: {
            icon: '❤️',
            achievement: 'Gracious Healer',
            message: 'This wouldn\'t have happened if you looked after it in the first place',
            complete: false,
        },
        playedToDeath: {
            icon: '🌄',
            achievement: 'Played to Death',
            message: 'They Died doing what they loved',
            complete: false,
        },
        birthday: {
            icon: 'B',
            achievement: 'Happy Birthday!',
            message: 'You didn\'t kill your pet, yay?',
            complete: false,
        },
    })
}

const Achievement = ({ icon, message, achievement }) => {



    return (
        <div className="achievementWrapper">
            <div className="achievement">
                <div className="achievementIcon">
                    {icon}
                </div>
                <div className="flexCol achievementMessageWrapper">
                    <div className="achievementHeader">
                        {achievement}
                    </div>
                    <div className="achievementMessage">
                        {message}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Achievements = ({ achievements }) => {

    const getDemCheeves = () => {
        let elements = [];
        let cheeves = [...Object.keys(achievements)].filter(item => achievements[item].complete === true)
        cheeves.forEach((key, i) => {
            elements.push(<Achievement key={i} {...achievements[key]} />)
        })
        return elements
    }

    return (
        <div className="achievementComponent">
            <h2 style={{ fontSize: '1.2em', color: 'var(--gameBoyBlue)' }}>Achievements</h2>
            <div className='achievementsList'>
                Currently Retired...
                {/* cleanAchievments™️ */}
                {/* {getDemCheeves().map(Item => <Item />)} */}
            </div>
        </div>
    )
}

