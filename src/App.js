import { PetDisplay } from './components/PetDisplay'
import { PetButtons } from './components/PetButtons'
import { useEffect, useRef, useState, useCallback } from 'react'
import { Achievements, ACHIEVEMENTS } from './components/Achievements'


const loadPet = () => {
  let petSave = JSON.parse(localStorage.getItem('pet.save'))
  try {
    if (!petSave.health) {
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
    return petSave
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

  const PETAGEINCREMENT = 0.01
  const GAMETICKSPEED = 2500

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


  // standard game tick event loop
  useEffect(() => {
    // const ageTick = setInterval(() => {
    //   try {
  

    //   } catch {
    //     return () => clearInterval(ageTick)
    //   }
    // }, PETAGEINTERVAL);
    const gameTick = setInterval(() => {
      console.log('tick')
      try {

        if (pet.hasOwnProperty('name')) {
          let rand = Math.round(Math.random() * 3)
          if (pet.name !== '') {
            if (pet.hunger > 0 & pet.health > 0) {
              setPet({
                ...pet,
                // hunger: pet.hunger - rand < 1 ? 0 : pet.hunger - rand,
                age: pet.age + PETAGEINCREMENT
              })
            }

            if (pet.hunger === 0) {
              setPet({
                ...pet,
                health: pet.health - rand < 1 ? 0 : pet.health - rand,
                age: pet.age + PETAGEINCREMENT
              })
            }
            // if (pet.hasOwnProperty('age')) {
            //   if (pet.name !== '') {
            //     if (pet.health > 0) {
            //       setPet({
            //         ...pet,
            //         age: pet.age + 0.1
            //       })
            //     }
            //   }
            // }
          }
        }
      } catch {
        return () => clearInterval(gameTick)
      }
    }, GAMETICKSPEED);
    savePet(pet)
    return () => {
      clearInterval(gameTick)
      // clearInterval(ageTick)
    }
  }, [setPet, pet, getAchievement]);


  // add achievements
  if (pet !== undefined) {
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
    if(pet.age > 0.2) {
      getAchievement('birthday')
    }

    if (pet.name === '') {

      const changeName = () => {
        setPet({
          ...pet,
          name: nameInputField.current.value.trim()
        })
      }
      return (
        <div className='toy flexCol justifyContentCenter'>
          <div className='toyInnerShine'>

            <div className={'flexCol'}>

              <h2 className='petHeader' style={{ textAlign: 'center' }}>PetBoi 98</h2>
              <div className='flexCol'>
                <div className='flexCol paddingMd justifyContentCenter'>
                  <h2 style={{ textAlign: 'center' }}>Please choose your pet's name</h2>
                </div>
                <div className='flexCol padding'>
                  <input
                    ref={nameInputField}
                    style={{ textAlign: 'center' }}
                    className='paddingMd marginY' />
                  <button className='paddingMd marginY' onClick={changeName}>Set Name</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className='layout'>
          <div className='toy'>
            <div className='toyInnerShine flexCol'>
              <h2 className='petHeader' style={{ textAlign: 'center' }}>PetBoi 98</h2>
              <div className='flexCol'>
                <div className='flexCol'>
                  <PetDisplay pet={pet} />
                  <PetButtons
                    pet={pet}
                    setPet={setPet}
                    achievements={achievements}
                    getAchievement={getAchievement} />
                </div>
              </div>
            </div>
          </div>
          <div className='flexCol'>
            <Achievements
              achievements={achievements}
              updateAchievements={updateAchievements}
              pet={pet}
              getAchievement={getAchievement} />
          </div>
        </div>
      );

    }
  }
}

export default App;
