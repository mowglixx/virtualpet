

export const ProgressBar = ({max, value, color='green', title, stat}) => {
    let step = max/100
    return(
        <>
        <span style={{fontSize: '1em',padding: '0.5em'}}>{stat}</span>
        <div style={{width: '100%'}} className={'flexRow padding'}>
        <div title={title} style={{flexDirection: 'row',minHeight: '2em', maxHeight: '2em', minWidth: '100%'}} className="progressBarWrapper">
            <div className="progressBar" style={{
                position: 'relative',
                display: 'flex',
                minHeight: `100%`,
                minWidth: `0`,
                maxWidth:"100%",
                width: `${(step*value)}%`,
                backgroundColor: color,
                color: 'white',
                transition: 'width 0.5s',
            }}><span style={{fontSize: '1em',padding: '0.5em', minWidth: '1000%'}}>{value}%</span></div>
        </div>
        </div>
        </>
    )
}