


export const PetButtons = ({ pet, setPet, achievements, updateAchievements }) => {
    const feedPet = () => {
        setPet({
            ...pet,
            hunger: pet.hunger - 10 < 0 ? 0 : pet.hunger - 10
        })
        // updateAchievements([...achievements, {icon: '🍽️', achievement: 'Made a pet hungry', message: `${pet.name} is hungry, great...`}])
        updateAchievements([...achievements, {icon: '🥫', achievement: 'Fed your pet', message: 'Well done I guess...'}])
    }
    const playPet = () => {
        setPet({
            ...pet,
            hunger: pet.hunger - 10 < 0 ? 0 : pet.hunger - 10
        })
        updateAchievements([...achievements, {icon: '🖐️', achievement: 'Played with your pet', message: 'This one is kinda good king.'}])
    }
    const healPet = () => {
        setPet({
            ...pet,
            health: pet.health + 10 > 100 ? 100 : pet.health + 10
        })
        updateAchievements([...achievements, {icon: '❤️', achievement: 'Healed your pet', message: 'This wouldn\'t have happened if you looked after it in the first place!'}])
    }

    return (
        <div className='petButtonContainer'>
            <button
                className='petButton'
                onClick={feedPet}
                disabled={pet.health > 0 ? pet.hunger < 1 ? true : '' : true}
            >Feed
            </button>
            <button
                className='petButton'
                onClick={playPet}
                disabled={pet.health > 0 ? '' : 'true'}
            >Play
            </button>
            <button 
            className='petButton' 
            onClick={healPet} 
            disabled={pet.health > 0 ? pet.health === 100 ? true : '' : true}>Heal</button>
        </div>
    )
}
