

export const ProgressBar = ({max, value, color='green', title, stat}) => {
    let step = max/100
    return(
        <div style={{width: '100%'}} className={'flexRow padding'}>
        <div title={title} style={{flexDirection: 'row',minHeight: '1em', minWidth: '100%'}} className="progressBarWrapper">
            <div className="progressBar" style={{
                minHeight: `100%`,
                width: `${(step*value)}%`,
                minWidth: `0`,
                maxWidth:"100%",
                backgroundColor: color,
                color: 'white',
                transition: 'width 0.3s',
            }}><span style={{wordBreak: 'keep-all', minWidth: '25vw'}}>{`${stat}: ${value}%`}</span></div>
        </div>
        </div>
    )
}