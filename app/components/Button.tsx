import clsx from "clsx"

interface ButtonProps{
    text:string,
    bg: "white" | "grey"
}


export default function(props:ButtonProps){

    const{text,bg}=props

    return (
        <button className={clsx("px-4 py-2 font-medium text-textColor2 rounded-2xl",{
            "bg-grey text-white":bg == "grey",
            "bg-white":bg == "white"
        })}>
            {text}
        </button>
    )
}