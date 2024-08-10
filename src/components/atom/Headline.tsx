import { PropsWithChildren } from "react";

interface Props {
    as?: "h1" | "h2" | "h3" | "h4"
    size?: keyof typeof sizes
}

const sizes = {
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    lg: "text-lg",

}

export default (
    // Props
    {
        as = "h4",
        size = "2xl",
        ...props
    }: PropsWithChildren<Props>) => {


    const Element = as;
    return <Element className={`text-pimary font-semibold ${sizes[size]}`}>{props.children}</Element>
}