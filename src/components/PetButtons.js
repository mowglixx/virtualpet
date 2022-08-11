


export const PetButtons = ({ pet, setPet, getAchievement }) => {
    
    const feedPet = () => {
    
        // set newPet before set state
        const newPet = {
            ...pet,
            hunger: pet.hunger + 10 > pet.maxHunger ? pet.maxHunger : pet.hunger + 10
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
            hunger: pet.hunger - 10 < 1 ? 0 : pet.hunger - 10,
            health: pet.hunger < 1 ? pet.health -10: pet.health,
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
        <div className='padding flexRow justifyContentSpaceEvenly'>
            <button
                className='padding'
                onClick={feedPet}
                // if the pet health is 0 or hunger is 
                disabled={pet.health > 0 ? pet.hunger === pet.maxHunger ? true : '' : true}
            >Feed
            </button>
            <button
                className='padding'
                onClick={playPet}
                disabled={pet.health > 0 ? '' : true}
            >Play
            </button>
            <button 
            className='padding' 
            onClick={healPet} 
            disabled={pet.health > 0 ? pet.health === pet.maxHealth ? true : '' : true}>Heal</button>
        </div>
    )
}
