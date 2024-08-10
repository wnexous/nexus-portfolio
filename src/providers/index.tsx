"use client"

import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import States from "./states";
import { ProviderControllerI } from "@/interfaces/Providers.interfaces";

type ProviderInterface = typeof States

const provider = createContext<ProviderInterface>({} as any)

export default function Providers({ children }: PropsWithChildren) {
    const [get, set] = useState({})

    Object.keys(States).forEach((p) => {
        const instance = (States as any)[p] as ProviderControllerI<any>
        const getter = get[p as keyof typeof get]
        const setter = (value: any) => set((val: any) => ({ ...val, [p]: { ...val[p], ...value } }))
        instance.injectDispatchs(getter, setter)
    })

    useEffect(() => {
        Object.keys(States).forEach((p, index) => {
            const instance = (States as any)[p] as ProviderControllerI<any>
            instance.init()
        })
    }, [])

    // @ts-ignore
    return <provider.Provider value={{ ...States, _: get }}>{children}</provider.Provider>
}

export const useProviders = () => useContext(provider) as ProviderInterface

