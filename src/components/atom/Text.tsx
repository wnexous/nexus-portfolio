import { PropsWithChildren } from "react";

interface Props {
    as?: "p" | "span"
}

export default ({ as = "p", ...props }: PropsWithChildren<Props>) => {
    const Element = as

    return <Element className="text-secundary">{props.children}</Element>
}