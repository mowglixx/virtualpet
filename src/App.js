import { PetDisplay } from './components/PetDisplay'
import { PetButtons } from './components/PetButtons'
import { useEffect, useState } from 'react'
import { Achievements, ACHIEVEMENTS } from './components/Achievements'

// custom debug screen
// import {Debug} from './components/Debug'


function App() {

    const TICKSPEED = 1000

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
        maxHunger: 100,
        maxHealth: 100

    })
    const [achievements, updateAchievements] = useState(ACHIEVEMENTS(pet))

    const getAchievement = (key) => {
        let current = achievements
        current[key] = {
            ...current[key],
            complete: true
        }
        updateAchievements(current)
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
                getAchievement('hunger')
                // add achievement
            }

            else {
                setPet({
                    ...pet,
                    health: pet.health - rand < 1
                        ? 0
                        : pet.health - rand
                })
                // add achievement
                getAchievement('healPet')
            }
        }, TICKSPEED);
        return () => clearInterval(tick)
    })


    return (
        <div className='toy'>
            <h1 className='petHeader'>Virtual Pet</h1>
            <div className='layout'>
                <div className='flexCol'>
                    <PetDisplay pet={pet} />
                    <PetButtons
                        pet={pet}
                        setPet={setPet}
                        achievements={achievements}
                        updateAchievements={updateAchievements} />
                </div>
                <div className='flexCol'>
                    <Achievements
                        achievements={achievements}
                        updateAchievements={updateAchievements} 
                        pet={pet}
                        getAchievement={getAchievement}  />

                    {/* for debugging vars */}
                    {/* <Debug achievements={achievements} other={{'key':'value'}}/> */}
                </div>
            </div>
        </div>
    );
}

export default App;
