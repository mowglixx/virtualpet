


export const PetButtons = ({ pet, setPet, getAchievement }) => {
    
    const feedPet = () => {
    
        // set newPet before set state
        const newPet = {
            ...pet,
            hunger: pet.hunger + 10 >= pet.maxHunger ? pet.maxHunger : pet.hunger + 10
        }
        
        // set pet state
        setPet(newPet)
        
        // save game
        localStorage.setItem('pet.save', JSON.stringify(newPet))
        
        // Achievements
        getAchievement('feedPet')
    }
    const playPet = () => {
        
        // set newPet before set state
        const newPet = {
            ...pet,
            hunger: pet.hunger - 5 < 1 ? 0 : pet.hunger - 5,
            health: pet.hunger < 1 ? pet.health -10: pet.health,
            moodDelta: pet.moodDelta + 10 >= 100 ? 100 : pet.moodDelta + 10
        }
        // set pet state
        setPet(newPet)
    
        // save game
        localStorage.setItem('pet.save', JSON.stringify(newPet))
        
        // Achievements
        getAchievement('playPet')        
        if(pet.health < 10){
            getAchievement('playedToDeath')
        }
    
    }
    
    const healPet = () => {
        
        // set newPet before set state
        const newPet = {
            ...pet,
            health: pet.health + 10 > 100 ? 100 : pet.health + 10
        }
        // set pet state
        setPet(newPet)
        
        // save game
        localStorage.setItem('pet.save', JSON.stringify(newPet))
        
        // Achievements
        getAchievement('healPet')
    }

    return (
        <div className='paddingMd flexRow justifyContentSpaceEvenly'>
            <button
                className='petButton'
                onClick={feedPet}
                // if the pet health is 0 or hunger is 
                disabled={pet.health > 50 ? pet.hunger === pet.maxHunger ? true : '' : true}
            >
            </button>
            <button
                className='petButton'
                onClick={playPet}
                disabled={pet.health > 0 ? '' : true}
            >
            </button>
            <button 
            className='petButton' 
            onClick={healPet} 
            disabled={pet.health > 0 ? pet.health === pet.maxHealth ? true : '' : true}></button>
        </div>
    )
}
