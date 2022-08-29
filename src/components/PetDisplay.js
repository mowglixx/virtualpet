import { PetImg } from './PetImg'
import { ProgressBar } from './ProgressBar'


export const PetDisplay = ({ pet }) => {

    let petMood = Math.round((pet.health + pet.hunger + pet.moodDelta) / 3)

    return (
        <div className="petElement flexCol">
            <div className='flexRow'>
                <h3>{pet.name}, {Math.round(pet.age)}</h3>
            </div>
            <div className='flexRow'>
                <ProgressBar
                    title={`Pet Health ${pet.health}`}
                    value={pet.health}
                    max='100'
                    color='#132613'
                    stat={'Health'} />
            </div>
            <div className="flexRow">
                <ProgressBar
                    title={`Pet Hunger ${pet.hunger}`}
                    value={pet.hunger}
                    max='100'
                    color='#132613'
                    stat={'Hunger'} />
            </div>
            <div className="flexRow">
                <ProgressBar
                    title={`Pet Mood ${petMood}`}
                    value={petMood}
                    max='100'
                    color='#132613'
                    stat={'Mood'} />
            </div>
            <div className='flexRow justifyContentCenter'>
                {/* <img className={pet.health ? `petImg livePet` : `petImg`} src={petImg} alt={`Your Pet, ${pet.name}`} title={`Your Pet, ${pet.name}`} /> */}
                <PetImg age={pet.age}/>
            </div>
            <div className='flexRow justifyContentSpaceEvenly paddingLgY'>
                <div className='flexCol'>
                    Feed
                </div>
                <div className='flexCol'>
                    Play
                </div>
                <div className='flexCol'>
                    Heal
                </div>
            </div>
        </div>
    )
}
