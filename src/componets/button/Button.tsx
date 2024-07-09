
type GlobalButtonProps = {
    text?:string,
    style?:string,
    onClick?:Function,
    textStyle?:string,
    icon?:JSX.Element
}
function GlobalButton({ text, style, onClick, textStyle, icon }:GlobalButtonProps) {
    return (
        <button className='global-button'>
            {text}
            {icon}
        </button>
    )
}

export default GlobalButton
