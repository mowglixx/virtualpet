// import { useState } from "react"

// function to init achievemnts state for App when pet is created
export const ACHIEVEMENTS = pet => {
    return {
        start: {
            icon: '🏆',
            achievement: 'Here we go!',
            message: 'You made a Virtual pet, in this economy?!',
            complete: true,
        },
        feedPet: {
            icon: '🥫',
            achievement: 'Fed your pet',
            message: 'Well done I guess...',
            complete: false,
        },
        playPet: {
            icon: '🖐️',
            achievement: 'Played with your pet',
            message: 'This one is kinda good king.',
            complete: false,
        },
        healPet: {
            icon: '❤️',
            achievement: 'Healed your pet',
            message: 'This wouldn\'t have happened if you looked after it in the first place!',
            complete: false,
        },
        hungry: {
            icon: '🍽️',
            achievement: 'Made a pet hungry',
            message: `${pet.name} is hungry, great...`,
            complete: false,
        },
        starve: {
            icon: '🍞',
            achievement: 'Starve your pet',
            message: `${pet.name} is starving, well done, I hope You're happy!`,
            complete: false,
        },
        nearlyDie: {
            icon: '💀',
            achievement: 'Nearly kill a pet',
            message: `${pet.name} is dying, feed and heal them!`,
            complete: false,
        },
        kill: {
            icon: '☠️',
            achievement: 'Kill a pet',
            message: `${pet.name} is dead, it's too late`,
            complete: false,
        }
    }
}

const Achievement = ({ icon, message, achievement }) => {

    // const [g,gg] = useState(0)

    return (
        <div className="achievementWrapper">
            <div className="achievement">
                <div className="achievementIcon">
                    <h2>{icon}</h2>
                </div>
                <div style={{ flexDirection: 'column' }}>
                    <p className="achievementHeader">
                        {achievement}
                    </p>
                    <p className="achievementMessage">
                        {message}
                    </p>
                </div>
            </div>
        </div>
    )
}

export const Achievements = ({ achievements }) => {

    const d = () => {
        let elements = [];
        const cheeves = [...Object.keys(achievements)]
            .filter(item => achievements[item].complete === true)
            
            cheeves.map(key => {
                return elements.push(<Achievement {...achievements[key]} />)
            })
        return elements
    }

    return (
        <div className="achievementComponent">
            <h2 style={{ fontSize: '1.2em' }}>Achievements</h2>
            <div className='achievementsList'>
                {/* cleanAchievments™️ */}
                {d()}
            </div>
        </div>
    )
}

