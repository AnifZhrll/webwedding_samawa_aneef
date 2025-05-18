"use client"

import { ReactNode, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";

export function PreventScrolling() {
    useLayoutEffect(() => {
        document.querySelector("body")!.classList.add("overflow-hidden");

        return () => {
            document.querySelector("body")!.classList.remove("overflow-hidden");
        };
    }, []);
    return null;
}   

export function RouterBack({ className, children }: { 
    className?: string;
    children?: ReactNode;
 }) {
    const router = useRouter();

    return (
        <div 
        className={[
            className ? className : "absolute inset-0 z-10 cursor-pointer",
        ].join(" ")} 
        onClick={router.back}
        >
            {children}
        </div>
    );
}    
