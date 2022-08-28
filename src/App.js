import { PetDisplay } from './components/PetDisplay'
import { PetButtons } from './components/PetButtons'
import { NameChanger } from './components/NameChanger'
import { useEffect, useState, useCallback } from 'react'
import { Achievements, ACHIEVEMENTS } from './components/Achievements'

const defaultPet = {
  name: '',
  age: 0,
  birthday: {
    day: 1,
    month: 1,
    year: 2000
  },
  health: 100,
  aliveStatus: true, // alive = true
  hunger: 100,
  moodDelta: 100,
  maxHunger: 100,
  maxHealth: 100
}

const loadPet = () => {
  let petSave =
    JSON.parse(localStorage.getItem('pet.save'))
      ? JSON.parse(localStorage.getItem('pet.save'))
      : defaultPet

  return petSave
}

const savePet = (pet) => {
  localStorage.setItem('pet.save', JSON.stringify(pet))
}

function App() {

  const PETAGEINCREMENT = 0.01 // 0.01 = 100 ticks per pet year of age
  const GAMETICKSPEED = 2500 // 2500 = 6.99 hours per year of pet age


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

  const tickEvents = () => {

    try {

      if (pet.hasOwnProperty('name')) {
        let rand = Math.round(Math.random() * 3)
        if (pet.name !== '') {
          if (pet.hunger > 0 & pet.health > 0) {
            setPet({
              ...pet,
              hunger: pet.hunger - rand < 1 ? 0 : pet.hunger - rand,
              moodDelta: pet.moodDelta - rand < 1 ? 0 : pet.moodDelta - rand,
              age: pet.age + PETAGEINCREMENT
            })
          }

          if (pet.hunger < 1) {
            setPet({
              ...pet,
              health: pet.health - rand < 1 ? 0 : pet.health - rand,
              age: pet.age + PETAGEINCREMENT
            })
          }
          
          
        }
      }
      savePet(pet)
    } catch {
      return () => console.log('pet tick fail')
    }
  }
  
  // standard game tick event loop
  useEffect(() => {
    if (pet !== defaultPet) {
      
      const gameTick = setInterval(tickEvents, GAMETICKSPEED);
      return () => {
        clearInterval(gameTick)
      }
    }
  });
  
  const HandleDeath = (pet) => {
    if (pet.aliveStatus === false || pet.health === 0) {
      if(pet.name !== ''){
        return(
          <div className='flexCol'>
          Your pet, {pet.name}, Died!
          <NameChanger pet={defaultPet} setPet={setPet} />
          </div>
          )

      } else {
        return(
          <div className='flexCol'>
          <NameChanger pet={defaultPet} setPet={setPet} />
          </div>)
      }
    }
    return (
      <div className='flexCol'>
      <PetDisplay pet={pet} />
      <PetButtons
          pet={pet}
          setPet={setPet}
          achievements={achievements}
          getAchievement={getAchievement} />
          </div>)
  }
  
  
  // add achievements
  if (pet !== undefined || pet !== defaultPet) {
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
    if (pet.age > 0.99) {
      getAchievement('birthday')
    }
    if (pet.health < 1 && pet.name !== '') {
      // dead
      setPet({...defaultPet, aliveStatus: false})
      updateAchievements(ACHIEVEMENTS())
    }
  }
  return (
    <div className='layout'>
      <div className='toy'>
      <div className='toyInnerShine flexCol'>
          <h2 className='petHeader' style={{ textAlign: 'center' }}><span className='Chimtembo'>Davetendo</span> PetBoy</h2>
          <div className='flexCol'>
            <HandleDeath {...pet} />
          </div>
        </div>
      </div>
      <Achievements
        achievements={achievements}
        updateAchievements={updateAchievements}
        pet={pet}
        getAchievement={getAchievement} />
      <a className={'paddingLg'} href="https://github.com/mowglixx/virtualpet" target={'_blank'} rel="noreferrer" style={{ color: 'white', textDecoration: 'none' }}>GitHub</a>
    </div>)
}


export default App;
