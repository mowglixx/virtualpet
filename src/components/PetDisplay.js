import { ProgressBar } from './ProgressBar'
import petImg from '../images/pet.jpg'


export const PetDisplay = ({ pet }) => {

    // const petMoodCalc = () => {
    //     let petMood = pet.health - pet.hunger
    //     switch(petMood){
    //         case(petMood < 70 && petMood > 0):
    //             return <span title={`Not Great (${petMood})`}>😞</span>
    //         case(petMood < 0 && petMood):
    //             return <span title={`Dying (${petMood})`}>😖</span>
    //         case(petMood === -100):
    //             return <span title={`Dead`}>💀</span>
    //         default:
    //             return <span title={`OK (${petMood})`}>😃</span>
    //     }
    // }

    return (
        <div className="petElement">
            <h2>{pet.name}, {pet.age}</h2>
            <div className="flexRow">

            <p>
                <div className='flexCol ProgressBarWrapper'>
                <p>Health:</p>
                <ProgressBar
                  title={`Pet Health ${pet.health}`}
                  value={pet.health}
                  max='100'
                  color='black' />
                  </div>
            </p>
            <p>
                <div className='flexCol ProgressBarWrapper'>
                <p>Hunger:</p>
                <ProgressBar
                  title={`Pet Hunger ${pet.hunger}`}
                  value={pet.hunger}
                  max='100'
                  color='black' />
                  </div>
                </p>
            </div>
            <img className={pet.health?`petImg livePet`:`petImg`} src={petImg} alt={`Your Pet, ${pet.name}`} title={`Your Pet, ${pet.name}`}/>
        </div>
    )
}
