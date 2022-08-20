import { useState } from "react"

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
        
        const [visable,setVisable] = useState(false)
        


    return (
        <div className="achievementWrapper">
            <div className="achievement" onClick={() => {setVisable(!visable)}}>
                <div className="achievementIcon">
                    <h2>{icon}</h2>
                </div>
                <div className="flexCol">
                    <p className="achievementHeader">
                        {achievement}
                    </p>
                    {visable
                        ?(<p className="achievementMessage">
                            {message}
                        </p>)
                        :(null)}
                </div>
            </div>
        </div>
    )
}

export const Achievements = ({ achievements }) => {

    const getDemCheeves = () => {
        let elements = [];
        const cheeves = [...Object.keys(achievements)]
            .filter(item => achievements[item].complete === true)
            
            cheeves.map((key, i) => {
                return elements.push(<Achievement key={i} {...achievements[key]} />)
            })
        return elements
    }

    return (
        <div className="achievementComponent">
            <h2 style={{ fontSize: '1.2em' }}>Achievements</h2>
            <div className='achievementsList'>
                {/* cleanAchievments™️ */}
                {getDemCheeves()}
            </div>
        </div>
    )
}

