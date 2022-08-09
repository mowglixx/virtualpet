// import { useState } from "react"

const Achievement = ({ icon, message, achievement, key }) => {

    // const [g,gg] = useState(0)

    return (
        <div className="achievementWrapper" key={key}>
            <div className="achievement">
                <div className="achievementIcon">
                    <h2>{icon}</h2>
                </div>
                <div style={{flexDirection: 'column'}}>
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

    const cleanAchievments = () => {
        const setList = new Set(achievements.map(a => a.achievement))
        let newList = [...setList]
        // console.log(newList)
        let cheeves =  achievements.filter(item => {
            if (item.achievement === newList[newList.indexOf(item.achievement)]) {
                newList = newList.filter(i => (i !== newList[newList.indexOf(item.achievement)]))
                return true
            }
            return false
        })
        // updateAchievements(cheeves)
        return cheeves
    }
    return (
        <div className="achievementComponent">
            <h2 style={{ fontSize: '1.2em' }}>Achievements</h2>
            <div className='achievementsList'>
                {/* {cleanAchievments()} */}
                {cleanAchievments().map(achievement => {
                    return (
                        <Achievement key={achievement.achievement} {...achievement} />
                    )
                })}
            </div>
        </div>
    )
}

