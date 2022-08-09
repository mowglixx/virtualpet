
const DebugBlock = (props) => {
    return(
        <div style={{marginTop: '1em',flexDirection: 'column', maxHeight: '8em'}}>
                <h2>{props.name}</h2>
                <pre style={{border: '0.001em solid black', overflowY: 'scroll', backgroundColor: '#222', color: '#fff', inlineSize: '100%', overflowWrap: 'break-word'}}>
                {JSON.stringify(props.item, null, 2)}
                </pre>
        </div>
    )
}

export const Debug = (props) => {
    return (
        <>
        <div style={{flexDirection: 'column'}}>
        <h2>Debugging</h2>
        {Object.keys(props).map(item => {
            return <DebugBlock key={item} item={props[item]} name={item}/>
        })}
        {/* <DebugBlock item={props.other} name="Other"/> */}
        </div>
        </>
    )
}
