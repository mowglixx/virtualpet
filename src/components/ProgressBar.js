

export const ProgressBar = ({max, value, color='green', title, stat}) => {
    let step = max/100
    return(
        <div style={{width: '100%'}} className={'flexRow padding'}>
        <div title={title} style={{flexDirection: 'row',minHeight: '2em', maxHeight: '2em', minWidth: '100%'}} className="progressBarWrapper">
            <div className="progressBar" style={{
                position: 'relative',
                minHeight: `100%`,
                minWidth: `0`,
                maxWidth:"100%",
                width: `${(step*value)}%`,
                backgroundColor: color,
                color: 'white',
                transition: 'width 0.5s',
            }}><span style={{position: 'absolute', transform: 'translate(-50%, -50%)', top: '50%', left: '50%', minWidth: '100%'}}>{stat} {value}%</span></div>
        </div>
        </div>
    )
}