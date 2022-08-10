import { PetDisplay } from './components/PetDisplay'
import { PetButtons } from './components/PetButtons'
import { useEffect, useRef, useState, useCallback } from 'react'
import { Achievements, ACHIEVEMENTS } from './components/Achievements'

// custom debug screen
// import {Debug} from './components/Debug'

const loadPet = () => {
    let petSave = JSON.parse(localStorage.getItem('pet.save'))
    try {
        if (petSave.health > 0) {
            return petSave
        }
    }
    catch {
        return {
            name: '',
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
    }
}

const savePet = (pet) => {
    localStorage.setItem('pet.save', JSON.stringify(pet))
}

function App() {

    const TICKSPEED = 250

    const nameInputField = useRef()
    const [pet, setPet] = useState(loadPet())


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



    useEffect(() => {
        const interval = setInterval(() => {
            try{

                if (pet.hasOwnProperty('name')) {
                    savePet(pet)
                    let rand = Math.round(Math.random() * 3)
                    
                    if (pet.hunger > 0 & pet.health > 0) {
                        setPet({
                            ...pet,
                            hunger: pet.hunger - rand < 1 ? 0 : pet.hunger - rand
                        })
                    }
                    
                    if (pet.hunger < 1) {
                        setPet({
                            ...pet,
                            health: pet.health - rand < 1 ? 0 : pet.health - rand
                        })
                    }
                }
            } catch {
                return () => clearInterval(interval)
            }
            }, TICKSPEED);
        return () => clearInterval(interval)
    }, [setPet, pet, getAchievement]);

    // add achievements
    if(pet !== undefined){
    if (pet.health < 1) {
        getAchievement('kill')
    }
    if (pet.health > 0 && pet.health <= 20) {
        getAchievement('nearlyDie')
    }
    if (pet.hunger < 80) {
        getAchievement('hungry')
    }
    if (pet.hunger < 20) {
        getAchievement('starve')
    }
    
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
}

export default App;
