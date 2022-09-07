

export const PetImg = ({ age }) => {
    age = Math.round(age)
    const lumps = age + 1

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
        let x = (canvasSize / 2) - (lumpSize / 2)
        let y = lumpSize * index
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
            x: lumpLocation(1).x + (lumpSize / 3), // needs doing
            y: canvasSize / (lumpSize * lumps), // needs doing

        },
        rightPupil: {
            x: lumpLocation(1).x + (lumpSize / 3), // needs doing
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
                {petBodyLumps().map((_, index) => {
                    return (
                        <g key={index}>
                        <rect className="torsoRect" x={lumpLocation(index).x} y={lumpLocation(index).y} width={lumpSize} height={lumpSize-5} rx={"5%"} style={{animationDelay: `${index*0.5}s`}} />
                        {index > 0 && <rect className="torsoRect" x={lumpLocation(index).x+lumpSize/3} y={lumpLocation(index).y-(lumpSize/5)} width={lumpSize/3} height={lumpSize/3} rx={"5%"} style={{ animationDelay: `${index*0.5}s`}} />}
                        </g>
                        )
                })}
                {/* add lumps here */}
            </g>
            <g id="petHead">
                {/* <rect className="mouthRect" x={age>0?(age*25)+10: 35} y="60" width="20" height="10" /> */}
                <g id="petEyes">
                    <g id="leftEye">
                        <rect className="petEye leftEyeRect" x={eyeLocation.left.x} y={eyeLocation.left.y} width={lumpSize / 3} height={lumpSize / 3} />
                        <rect className="leftEyePupilRect" x={eyeLocation.leftPupil.x} y={eyeLocation.leftPupil.y} width={lumpSize / 5} height={lumpSize / 5} />
                    </g>
                    <g id="rightEye">
                        <rect className="petEye rightEyeRect" x={eyeLocation.right.x} y={eyeLocation.right.y} width={lumpSize / 3} height={lumpSize / 3} />
                        <rect className="rightPupilEyeRect" x={eyeLocation.rightPupil.x} y={eyeLocation.rightPupil.y} width={lumpSize / 5} height={lumpSize / 5} />
                    </g>
                </g>
            </g>
        </svg>
    )}
