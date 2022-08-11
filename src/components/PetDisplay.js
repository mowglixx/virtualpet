import { ProgressBar } from './ProgressBar'
import petImg from '../images/pet.jpg'


export const PetDisplay = ({ pet }) => {

    let petMood = (pet.health+pet.hunger)/2

    return (
        <div className="petElement">
            <h2>{pet.name}, {pet.age}</h2>
            <div className="flexRow">
                <div className='flexCol padding'>
                    <p>Health:</p>
                    <ProgressBar
                        title={`Pet Health ${pet.health}`}
                        value={pet.health}
                        max='100'
                        color='black' />
                </div>
                <div className='flexCol padding'>
                    <p>Hunger:</p>
                    <ProgressBar
                        title={`Pet Hunger ${pet.hunger}`}
                        value={pet.hunger}
                        max='100'
                        color='black' />
                </div>
                <div className='flexCol padding'>
                    <p>Mood:</p>
                    <ProgressBar
                        title={`Pet Mood ${petMood}`}
                        value={petMood}
                        max='100'
                        color='black' />
                </div>
            </div>
            <img className={pet.health ? `petImg livePet` : `petImg`} src={petImg} alt={`Your Pet, ${pet.name}`} title={`Your Pet, ${pet.name}`} />
        </div>
    )
}
