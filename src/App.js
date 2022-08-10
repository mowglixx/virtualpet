import { PetDisplay } from './components/PetDisplay'
import { PetButtons } from './components/PetButtons'
import { useEffect, useRef, useState, useCallback } from 'react'
import { Achievements, ACHIEVEMENTS } from './components/Achievements'

// custom debug screen
// import {Debug} from './components/Debug'


function App() {

    const TICKSPEED = 500

    const nameInputField = useRef()
    const [pet, setPet] = useState({
        name: 'Test Pet',
        age: 0,
        birthday: {
            day: 1,
            month: 1,
            year: 2000
        },
        health: 100,
        hunger: 100,
        maxHunger: 100,
        maxHealth: 100
    }
    )

    const [achievements, updateAchievements] = useState(ACHIEVEMENTS(pet))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getAchievement = useCallback((key) => {
        if (achievements[key].complete === false) {
            let current = achievements
            current[key] = {
                ...current[key],
                complete: true
            }
            updateAchievements(current)
        }
    })



useEffect(() =>{
    const interval = setInterval(() => {
        let rand = Math.round(Math.random() * 3)

        if (pet.hunger > 0 & pet.health > 0) {
            setPet({
                ...pet,
                hunger: pet.hunger - rand < 1 ? 0 : pet.hunger - rand
            })
        }

        if (pet.health > 0 && pet.hunger < 1) {
            setPet({
                ...pet,
                health: pet.health - rand < 1 ? 0 : pet.health - rand
            })
        }
        // add achievements
        if (pet.health < 1) {
            getAchievement('kill')
        }
        if (pet.health - rand > 0 && pet.health <= 10) {
            getAchievement('nearlyDie')
        }
        if(pet.hunger < 80){
            getAchievement('hungry')
        }
        if(pet.hunger < 20){
            getAchievement('starve')
        }
    }, TICKSPEED);
    return () => clearInterval(interval)
}, [setPet, pet, getAchievement]);


    if (pet.name === '') {

        const changeName = () => {
            setPet({
                ...pet,
                name: nameInputField.current.value
            })
        }
        return (
            <div className='toy'>
                <h1 className='petHeader'>Virtual Pet</h1>
                <div className='layout'>
                    <div className='flexCol'>
                        <h2>Please choose your pet's name</h2>
                        <input
                            ref={nameInputField}
                            className='nameInputField' />
                        <button onClick={changeName}>Set Name</button>
                    </div>
                </div>
            </div>
        );
    }
    else {
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
                            getAchievement={getAchievement} />
                    </div>
                    <div className='flexCol'>
                        <Achievements
                            achievements={achievements}
                            updateAchievements={updateAchievements}
                            pet={pet}
                            getAchievement={getAchievement} />

                        {/* for debugging vars */}
                        {/* <Debug achievements={achievements} other={{'key':'value'}}/> */}
                    </div>
                </div>
            </div>
        );

    }
}

export default App;
