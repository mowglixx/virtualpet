

export const ProgressBar = ({max, value, color='green', title}) => {
    let step = max/100
    return(
        <div title={title} style={{flexDirection: 'row',minHeight: '1em', minWidth: '100%'}} className="progressBarWrapper">
            <div className="progressBar" style={{
                content: `${value}`,
                textAlign: 'center',
                minHeight: `100%`,
                minWidth: `${(step*value)}%`,
                backgroundColor: color,
                color: 'white',
                transition: 'width 0.3s'
            }} />
        </div>
    )
}