

export const PetImg = ({ age }) => {
    
    const lumps = age+1
    
    const petBodyLumps = () => {
        let rangeOfLumps = []
        for (let i = 0; i < lumps; i++) {
            rangeOfLumps.push(i)
        }
        return rangeOfLumps
    }
    const canvasSize = lumps * 100
    const lumpSize = canvasSize / (lumps)
    const lumpLocation = (index) => {
        let x = canvasSize / 2 - (lumpSize/2)
        let y = (lumpSize) * (index)
        return { x, y }
    }
    const eyeLocation = { // needs doing
        left: {
            x: lumpLocation(1).x, // needs doing
            y: canvasSize / (lumpSize * lumps),
        },
        leftPupil: {
            x: lumpLocation(1).x, // needs doing
            y: canvasSize / (lumpSize * lumps),
        } // needs doing
        ,
        right: {
            x: lumpLocation(1).x+(lumpSize/3), // needs doing
            y: canvasSize / (lumpSize * lumps), // needs doing
            
        },
        rightPupil: {
            x: lumpLocation(1).x+(lumpSize/3), // needs doing
            y: canvasSize / (lumpSize * lumps), // needs doing
            } // needs doing
        }

    // stage 1 pet
    return (
        <svg
            className={`petImg`}
            viewBox={`0 0 ${canvasSize} ${canvasSize}`}>
            {/* commented out for lumpy maths (see above) */}
            <g id="petBody">
                {petBodyLumps().map( ( _ , index) => {
                    return <rect className="torsoRect" x={lumpLocation(index).x} y={lumpLocation(index).y} width={lumpSize} height={lumpSize} />
                })}
                {/* add lumps here */}
            </g>
            <g id="petHead">
                    {/* <rect className="mouthRect" x={age>0?(age*25)+10: 35} y="60" width="20" height="10" /> */}
                    <g id="petEyes">
                        <g id="leftEye">
                            <rect className="petEye leftEyeRect" x={eyeLocation.left.x} y={eyeLocation.left.y} width={lumpSize/3} height={lumpSize/3} />
                            <rect className="leftEyePupilRect" x={eyeLocation.leftPupil.x} y={eyeLocation.leftPupil.y} width={lumpSize/5} height={lumpSize/5} />
                        </g>
                        <g id="rightEye">
                            <rect className="petEye rightEyeRect" x={eyeLocation.right.x} y={eyeLocation.right.y} width={lumpSize/3} height={lumpSize/3} />
                            <rect className="rightPupilEyeRect" x={eyeLocation.rightPupil.x} y={eyeLocation.rightPupil.y} width={lumpSize/5} height={lumpSize/5} />
                        </g>
                    </g>
                </g>
        </svg>
    )
    // // stage 2 pet
    // else if (Math.round(age) < 4) {
    //     return (
    //         <svg className={`petImg`} viewBox="0 0 500 500">
    //             <g className="petHead" transform="matrix(2.551806, 0, 0, 2.551806, -253.397171, -279.519653)">
    //                 <rect className="petHeadRect" x="135.382" y="210.78" width="55.124" height="45.643" />
    //                 <rect className="mouthRect" x="190.132" y="235.914" width="12.724" height="9.746" />
    //                 <rect className="petEye leftEyeRect" x="179.888" y="220.544" width="10.561" height="10.561" />
    //                 <rect className="petEye rightEyeRect" x="195.404" y="220.145" width="10.959" height="10.959" />
    //             </g>
    //             <g className="petBody" transform="matrix(2.551806, 0, 0, 2.551806, -215.400681, -268.466125)">
    //                 <rect className="torsoRect" x="155.083" y="248.162" width="50" height="50" />
    //             </g>
    //         </svg>
    //     )
    // }
    // // stage 3 pet
    // else if (Math.round(age) < 6) {
    //     return (
    //         <svg className={`petImg`} viewBox="0 0 500 500">
    //             <g className="petHead" transform="matrix(2.551806, 0, 0, 2.551806, -253.397171, -279.519653)">
    //                 <rect className="petHeadRect" x="135.382" y="171.78" width="55.124" height="45.643" />
    //                 <rect className="mouthRect" x="190.132" y="191.914" width="12.724" height="9.746" />
    //                 <rect className="petEye leftEyeRect" x="176.888" y="171.544" width="10.561" height="10.561" />
    //                 <rect className="petEye rightEyeRect" x="199.404" y="171.145" width="10.959" height="10.959" />
    //             </g>
    //             <g className="petBody" transform="matrix(2.551806, 0, 0, 2.551806, -215.400681, -268.466125)">
    //                 <rect className="torsoRect" x="155.083" y="210.162" width="50" height="50" />
    //                 <rect className="legsRect" x="150.415" y="248.062" width="50" height="50" />
    //             </g>
    //         </svg>
    //     )
    // }
    // // stage 4 pet
    // else if (Math.round(age) < 6) {
    //     return (
    //         <svg className={`petImg`} viewBox="0 0 500 500">
    //             <g className="petHead" transform="matrix(2.551806, 0, 0, 2.551806, -253.397171, -279.519653)">
    //                 <rect className="petHeadRect" x="135.382" y="132.78" width="55.124" height="45.643" />
    //                 <rect className="mouthRect" x="190.132" y="158.914" width="12.724" height="9.746" />
    //                 <rect className="petEye leftEyeRect" x="176.888" y="125.544" width="10.561" height="10.561" />
    //                 <rect className="petEye rightEyeRect" x="199.404" y="125.145" width="10.959" height="10.959" />
    //             </g>
    //             <g className="petBody" transform="matrix(2.551806, 0, 0, 2.551806, -215.400681, -268.466125)">
    //                 <rect className="torsoRect" x="155.083" y="150" width="50" height="50" />
    //                 <rect className="legsRect" x="150.415" y="200" width="50" height="50" />
    //                 <rect className="feetRect" x="155.083" y="250" width="50" height="50" />
    //             </g>
    //         </svg>
    //     )
    // }
    // // stage 5 pet
    // else {
    //     return (
    //         <svg className={`petImg`} viewBox="0 0 250 250">
    //                 <rect className="petHeadRect" x="100" y="0" width="55.124" height="45.643" />
    //                 <rect className="mouthRect" x="100" y="158.914" width="12.724" height="9.746" />
    //                 <rect className="leftEyeRect" x="176.888" y="125.544" width="10.561" height="10.561" />
    //                 <rect className="rightEyeRect" x="199.404" y="125.145" width="10.959" height="10.959" />
    //                 <rect className="torsoRect" x="155.083" y="150" width="50" height="50" />
    //                 <rect className="leftArm" x="115.083" y="150" width="100" height="50" />
    //                 <rect className="rightArm" x="155.083" y="150" width="100" height="50" />
    //                 <rect className="legsRect" x="150.415" y="200" width="50" height="50" />
    //                 <rect className="feetRect" x="100.083" y="250" width="50" height="50" />
    //         </svg>
    //     )
    // }
}
