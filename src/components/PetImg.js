
export const PetImg = ({ pet }) => {
    if (Math.round(pet.age) >= 0 && Math.round(pet.age) <2) {
        return (
            <svg className={pet.health ? `petImg livePet` : `petImg`} viewBox="0 0 500 500">
                <g transform="matrix(1, 0, 0, 1, 2.543932, -8.903762)">
                    <g className="petMainBody" transform="matrix(4.1319, 0, 0, 3.571103, -509.597504, -582.924622)" style={{ filter: 'drop-shadow(var(--lcdTextColorShadow))' }}>
                        <rect className='lcdShadow' x="135.83" y="175.477" width="44.787" height="35.032" />
                        <rect className='lcdShadow' x="168.904" y="184.57" width="44.787" height="35.032" />
                        <rect className="lcdShadow petEyelidRect" x="168.904" y="184.57" width="44.787" height="35.032" />
                        <rect className='lcdShadow petNoseRect' x="191.672" y="213.529" width="44.787" height="35.032" />
                        <rect className='lcdShadow petRightLegRect' x="182.922" y="260.661" width="44.787" height="35.032" />
                        <rect className="lcdShadow petBellyRect" x="172.524" y="239.832" width="44.787" height="35.032" />
                        <rect className='lcdShadow petLeftLegRect' x="132.083" y="259.493" width="44.787" height="35.032" />
                    </g>
                    <rect className="lcdShadow petWingRect" x="32.335" y="117.529" width="205.259" height="246.12" />
                </g>
            </svg>
        )
    }
    else if (Math.round(pet.age) >= 2) {
        return (
            <svg className={pet.health ? `petImg livePet` : `petImg`} viewBox="0 0 500 500">
                <g className="petHead" transform="matrix(2.551806, 0, 0, 2.551806, -253.397171, -279.519653)">
                    <rect className="petHeadRect" x="163.382" y="132.78" width="45.124" height="45.643" />
                    <rect className="mouthRect" x="180.132" y="158.914" width="12.724" height="9.746" />
                    <rect className="petEye leftEyeRect" x="166.888" y="125.544" width="10.561" height="10.561" />
                    <rect className="petEye rightEyeRect" x="189.404" y="125.145" width="10.959" height="10.959" />
                </g>
                <g className="petBody" transform="matrix(2.551806, 0, 0, 2.551806, -215.400681, -268.466125)">
                    <rect className="torsoRect" x="155.083" y="171.162" width="46.68" height="46.68" />
                    <rect className="legsRect" x="150.415" y="210.062" width="47.199" height="47.199" />
                    <rect className="feetRect" x="155.083" y="248.963" width="48.755" height="48.755" />
                </g>
            </svg>
        )
    }
}
