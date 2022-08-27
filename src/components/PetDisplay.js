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
            <div className='flexRow justifyContentCenter'>
                {/* <img className={pet.health ? `petImg livePet` : `petImg`} src={petImg} alt={`Your Pet, ${pet.name}`} title={`Your Pet, ${pet.name}`} /> */}
                <svg className={pet.health ? `petImg livePet` : `petImg`} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                    <g transform="matrix(1, 0, 0, 1, 2.543932, -8.903762)">
                        <g className="petMainBody" transform="matrix(4.1319, 0, 0, 3.571103, -509.597504, -582.924622)">
                            <rect x="135.83" y="175.477" width="44.787" height="35.032" />
                            <rect x="168.904" y="184.57" width="44.787" height="35.032" />
                            <rect className="petBodyPartRect petEyelidRect"x="168.904" y="184.57" width="44.787" height="35.032"/>
                            <rect className='petBodyPartRect petNoseRect' x="191.672" y="213.529" width="44.787" height="35.032" />
                            <rect className='petBodyPartRect petRightLegRect' x="182.922" y="260.661" width="44.787" height="35.032" />
                            <rect className="petBodyPartRect petBellyRect" x="172.524" y="239.832" width="44.787" height="35.032" />
                            <rect className='petBodyPartRect petLeftLegRect' x="132.083" y="259.493" width="44.787" height="35.032" />
                        </g>
                        <rect className="petWingRect" x="32.335" y="117.529" width="205.259" height="246.12" />
                    </g>
                </svg>
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
