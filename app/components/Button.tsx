import clsx from "clsx"

interface ButtonProps{
    text:string,
    bg: "white" | "grey"
}


export default function(props:ButtonProps){

    const{text,bg}=props

    return (
        <button className={clsx("px-3 py-1 font-medium text-textColor2 rounded-lg",{
            "bg-grey-200":bg == "grey",
            "bg-white":bg == "white"
        })}>
            {text}
        </button>
    )
}