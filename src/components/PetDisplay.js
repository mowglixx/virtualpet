import { ProgressBar } from './ProgressBar'
import petImg from '../images/stage0.svg'


export const PetDisplay = ({ pet }) => {

    let petMood = Math.round((pet.health + pet.hunger) / 2)

    return (
        <div className="petElement flexCol">
            <div className='flexRow'>
                <h2>{pet.name}, {Math.round(pet.age)}</h2>
            </div>
            <div className='flexRow'>
                <ProgressBar
                    title={`Pet Health ${pet.health}`}
                    value={pet.health}
                    max='100'
                    color='black'
                    stat={'Health'} />
            </div>
            <div className="flexRow">
                <ProgressBar
                    title={`Pet Hunger ${pet.hunger}`}
                    value={pet.hunger}
                    max='100'
                    color='black'
                    stat={'Hunger'} />
            </div>
            <div className="flexRow">
                <ProgressBar
                    title={`Pet Mood ${petMood}`}
                    value={petMood}
                    max='100'
                    color='black'
                    stat={'Mood'} />
            </div>
            <div className='flexRow'>
                <img className={pet.health ? `petImg livePet` : `petImg`} src={petImg} alt={`Your Pet, ${pet.name}`} title={`Your Pet, ${pet.name}`} />
            </div>
            <div className='flexRow justifyContentSpaceEvenly paddingY marginY'>
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
