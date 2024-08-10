import Layout from "@/components/layout"
import { PropsWithChildren } from "react"

export default ({ children }: PropsWithChildren) => <>
    <Layout.Header />
    {children}
</>