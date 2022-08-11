


export const PetButtons = ({ pet, setPet, getAchievement }) => {
    const feedPet = () => {
        setPet({
            ...pet,
            hunger: pet.hunger + 10 > pet.maxHunger ? pet.maxHunger : pet.hunger + 10
        })
        getAchievement('feedPet')
    }
    const playPet = () => {
        setPet({
            ...pet,
            hunger: pet.hunger - 10 < 1 ? 0 : pet.hunger - 10,
            health: pet.hunger < 1 ? pet.health -10: pet.health,
        })
        getAchievement('playPet')
        if(pet.health < 10){
            getAchievement('playedToDeath')
        }
        // updateAchievements([...achievements, {icon: '🖐️', achievement: 'Played with your pet', message: 'This one is kinda good king.'}])
    }
    const healPet = () => {
        setPet({
            ...pet,
            health: pet.health + 10 > 100 ? 100 : pet.health + 10
        })
        getAchievement('healPet')
        // updateAchievements([...achievements, {icon: '❤️', achievement: 'Healed your pet', message: 'This wouldn\'t have happened if you looked after it in the first place!'}])
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
