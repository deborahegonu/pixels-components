import rightArrowIcon from "../icons/right-arrow.svg"

interface Props {
    label: string;
    icon?: boolean;
}

export const Button = ({label, icon = true}: Props) => {
    return(
        <button className="bg-black text-white">
            <span>{label}</span> 
            {icon && <img src={rightArrowIcon} alt="blue right arrow icon" />}
        </button>
    )
}