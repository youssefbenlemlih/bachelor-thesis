import {  MutableRefObject, useEffect, useRef } from "react";

export function useOuterClick(callback: () => void) {
    const callbackRef = useRef<() => void>(); // initialize mutable ref, which stores callback
    const innerRef = useRef(); // returned to client, who marks "border" element

    // update cb on each render, so second useEffect has access to current value
    useEffect(() => {
        callbackRef.current = callback;
    });

    useEffect(() => {
        let handleClick = (e: MouseEvent) => {
            if (
                innerRef.current &&
                callbackRef.current &&
                // @ts-ignore
                !innerRef.current?.contains(e.target)
            ) {
                // @ts-ignore
                callbackRef?.current(e);
            }
        };
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []); // no dependencies -> stable click listener

    return innerRef as unknown as MutableRefObject<HTMLInputElement>;
}
