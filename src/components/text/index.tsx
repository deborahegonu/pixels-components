import { cn } from "../../lib/utils";

interface Props {
    content: string;
    url?: string;
    className?: React.ComponentProps<"div">
}

export const Text = {
    H1: ({content, className}: Props) => {
        return(
            <h1 className={cn('text-[80px]', className)}>{content}</h1>
        )
    },
    H2: ({content, className}: Props) => {
        return(
            <h2 className={cn('text-[60px]', className)}>{content}</h2>
        )
    },
    H3: ({content, className}: Props) => {
        return(
            <h3 className={cn('text-[45px]', className)}>{content}</h3>
        )
    },
    Body: ({content, className}: Props) => {
        return(
            <p className={cn('text-[25px]', className)}>{content}</p>
        )
    },
    Footer: ({content, className}: Props) => {
        return(
            <p className={cn('text-[40px]', className)}>{content}</p>
        )
    },
    Link: ({content, url, className}: Props) => {
        return(
            <a href={url} className={cn('text-[20px]', className)}>{content}</a>
        )
    },
}