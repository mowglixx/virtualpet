

export const ProgressBar = ({max, value, color='green', title}) => {
    let step = max/100
    return(
        <div title={title} style={{flexDirection: 'row',minHeight: '1em', minWidth: '100%'}} className="progressBarWrapper">
            <div className="progressBar" style={{
                textAlign: 'center',
                minHeight: `100%`,
                width: `${(step*value)}%`,
                minWidth: `0`,
                maxWidth:"100%",
                backgroundColor: color,
                color: 'white',
                transition: 'width 0.3s'
            }}>{`${value}%`}</div>
        </div>
    )
}