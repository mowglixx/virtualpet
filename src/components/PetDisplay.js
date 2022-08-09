// import { useEffect, useState } from "react"


export const PetDisplay = ({ pet }) => {

    const petMoodCalc = () => {
        let petMood = pet.health - pet.hunger
        switch(petMood){
            case(petMood < 70 && petMood > 0):
                return <span title={`Not Great (${petMood})`}>😞</span>
            case(petMood < 0):
                return <span title={`Dying (${petMood})`}>😖</span>
            case(petMood === -100):
                return <span title={`Dead`}>💀</span>
            default:
                return <span title={`OK (${petMood})`}>😃</span>
        }
    }

    return (
        <div className="petElement">
            <p>Name: {pet.name}</p>
            <p>Age: {pet.age}</p>                                            {/* checks for pet health and if its 0 show dead or dying if below 50 */}
            <p>
                Health:
                <span
                    className="healthReadout">
                    {pet.health}%
                </span>
                {pet.health < 50 ? !pet.health ? ' Dead!' : ' Unwell' : ' OK'}
            </p>
            <p>
                Hunger:
                <span
                    className="hungerReadout">
                    {pet.hunger}%
                </span>
                {pet.hunger > 50 ? pet.hunger > 80 ? ' Starving!' : ' Hungry' : ' OK'}</p>
            <p>Mood: {petMoodCalc()}</p>
        </div>
    )
}
