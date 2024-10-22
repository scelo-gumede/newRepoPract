import clsx from "clsx"

interface ButtonProps{
    text:string,
    bg: "white" | "grey",
    color?:boolean

}


export default function Button(props:ButtonProps){

    const{text,bg}=props

    return (
        <button style={{"background":props.color ?"#6dbbaa" : "white","color":props.color ?"black" : ""}} className={clsx("px-4 py-2 font-medium text-textColor2 rounded-2xl",{
            "bg-grey text-white":bg == "grey",
            "bg-white":bg == "white",
        })}>
            {text}
        </button>
    )
}