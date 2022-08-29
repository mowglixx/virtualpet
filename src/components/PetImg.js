
export const PetImg = ({ pet }) => {
    // stage 1 pet
    if (Math.round(pet.age) < 2) {
        return (
                <svg className={`petImg`} viewBox="0 0 500 500">
                    <g className="petHead" transform="matrix(2.551806, 0, 0, 2.551806, -253.397171, -279.519653)">
                        <rect className="petHeadRect" x="135.382" y="246.78" width="55.124" height="45.643" />
                        <rect className="mouthRect" x="190.132" y="275.914" width="12.724" height="9.746" />
                        <rect className="petEye leftEyeRect" x="176.888" y="240" width="10.561" height="10.561" />
                        <rect className="petEye rightEyeRect" x="199.404" y="240" width="10.959" height="10.959" />
                    </g>
                </svg>
        )
    }
    // stage 2 pet
    else if (Math.round(pet.age) < 4) {
        return (
            <svg className={`petImg`} viewBox="0 0 500 500">
                <g className="petHead" transform="matrix(2.551806, 0, 0, 2.551806, -253.397171, -279.519653)">
                    <rect className="petHeadRect" x="135.382" y="132.78" width="55.124" height="45.643" />
                    <rect className="mouthRect" x="190.132" y="158.914" width="12.724" height="9.746" />
                    <rect className="petEye leftEyeRect" x="176.888" y="125.544" width="10.561" height="10.561" />
                    <rect className="petEye rightEyeRect" x="199.404" y="125.145" width="10.959" height="10.959" />
                </g>
                <g className="petBody" transform="matrix(2.551806, 0, 0, 2.551806, -215.400681, -268.466125)">
                    <rect className="torsoRect" x="155.083" y="171.162" width="46.68" height="46.68" />
                    <rect className="legsRect" x="150.415" y="210.062" width="47.199" height="47.199" />
                    <rect className="feetRect" x="155.083" y="248.963" width="48.755" height="48.755" />
                </g>
            </svg>
        )
    }
    // stage 3 pet
    else {
        return (
            <svg className={`petImg`} viewBox="0 0 500 500">
                <g className="petHead" transform="matrix(2.551806, 0, 0, 2.551806, -253.397171, -279.519653)">
                    <rect className="petHeadRect" x="135.382" y="132.78" width="55.124" height="45.643" />
                    <rect className="mouthRect" x="190.132" y="158.914" width="12.724" height="9.746" />
                    <rect className="petEye leftEyeRect" x="176.888" y="125.544" width="10.561" height="10.561" />
                    <rect className="petEye rightEyeRect" x="199.404" y="125.145" width="10.959" height="10.959" />
                </g>
                <g className="petBody" transform="matrix(2.551806, 0, 0, 2.551806, -215.400681, -268.466125)">
                    <rect className="torsoRect" x="155.083" y="171.162" width="46.68" height="46.68" />
                    {/*<rect className="legsRect" x="150.415" y="210.062" width="47.199" height="47.199" />*/}
                    {/*<rect className="feetRect" x="155.083" y="248.963" width="48.755" height="48.755" />*/}
                </g>
            </svg>
        )
    }
}
