import { useEffect, useState } from "react";

export const useObserver = (ref:any, options:any) => {
    const { rootMargin,threshold } = options;
    const [observerEntry, setObserverEntry] = useState<IntersectionObserverEntry>();

    useEffect(() => {
        if (!ref?.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setObserverEntry(entry);
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                }
            },
            { rootMargin, threshold }
        );

        observer.observe(ref.current);
    }, [ref, rootMargin,threshold]);

    return observerEntry;
};