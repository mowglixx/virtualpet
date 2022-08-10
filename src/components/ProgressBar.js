

export const ProgressBar = ({max, value, color='green', title}) => {
    let step = max/100
    return(
        <div title={title} style={{flexDirection: 'row',minHeight: '1em', minWidth: '100%'}} className="progressBarWrapper">
            {/* {console.log(`${title} step: ${step}`)}
            {console.log(`${title} value: ${value}`)}
            {console.log(`${title} value/step: ${value/step}`)}
            {console.log(`${title} step/value: ${step/value}`)}
            {console.log(`${title} step*value: ${step*value}`)} */}
            <div className="progressBar" style={{
                content: `${value}`,
                textAlign: 'center',
                minHeight: `100%`,
                minWidth: `${(step*value)}%`,
                backgroundColor: color,
                color: 'white',
            }} />
        </div>
    )
}