import { PetDisplay } from './components/PetDisplay'
import { PetButtons } from './components/PetButtons'
import { useEffect, useState } from 'react'
import { Achievements } from './components/Achievements'

// custom debug screen
// import {Debug} from './components/Debug'


function App() {

    const tickSpeed = 1000

    const [pet, setPet] = useState({
        name: 'Poppy',
        age: 0,
        birthday: {
            day: 1,
            month: 1,
            year: 2000
        },
        health: 100,
        hunger: 0,
        happiness: 50,
    })
    const [achievements, updateAchievements] = useState([{
        icon: '🏆', 
        achievement: 'Here we go!', 
        message: 'You made a Virtual pet, in this economy?!'}
    ])

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

    useEffect(() => {
        const tick = setInterval(async () => {
            let rand = Math.round(Math.random() * 3)

            if (pet.hunger < 100 & pet.health > 0) {
                setPet({
                    ...pet,
                    hunger: pet.hunger + rand > 100
                        ? 100
                        : pet.hunger + rand
                })
                pet.hunger < 100
                    ? updateAchievements([...achievements, {icon: '🍽️', achievement: 'Made a pet hungry', message: `${pet.name} is hungry, great...`}])
                    : updateAchievements([...achievements, {icon: '🍞', achievement: 'Starve your pet', message: `${pet.name} is starving, well done, I hope You're happy!`}])
            }

            else {
                setPet({
                    ...pet,
                    health: pet.health - rand < 1
                        ? 0
                        : pet.health - rand
                })
                pet.health
                    ? updateAchievements([...achievements, {icon: '💀', achievement: 'Nearly kill a pet', message: `${pet.name} is dying, feed and heal them!`}])
                    : updateAchievements([...achievements, {icon: '☠️', achievement: 'Kill a pet', message: `${pet.name} is dead, it's too late`}])
            }
        }, tickSpeed);
        return () => clearInterval(tick)
    })


    return (
        <div className='toy'>
            <h1 className='petHeader'>Virtual Pet</h1>
            <div className='layout'>
                <div className='flexCol'>
            <PetDisplay pet={pet} />
            <PetButtons pet={pet} setPet={setPet} achievements={achievements} updateAchievements={updateAchievements} />
                </div>
                <div className='flexCol'>
            <Achievements achievements={achievements} updateAchievements={updateAchievements}/>
            
            {/* for debugging vars */}
            {/* <Debug achievements={achievements} other={{'key':'value'}}/> */}
                </div>
            </div>
        </div>
    );
}

export default App;
