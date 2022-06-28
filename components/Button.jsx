


export default function Button({text, cname, ...rootDOMAttributes }){
    return(
        <button {...rootDOMAttributes } className={cname}>{text}</button>
    )
}