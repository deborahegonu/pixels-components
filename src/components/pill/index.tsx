import { cn } from "../../lib/utils";
import { blue } from "../../lib/constants/ colors";
interface Props {
    label: string;
    active: boolean;
}

export const Pill = ({label, active}: Props) => {
    return(
        <button className={active ? `bg-black text-[#46CAFF]`: "bg-white text-black"}>{label}</button>
    )
}