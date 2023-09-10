import {useEffect, useRef, useState} from "react";

export const useLazy = (threshold, statement) => {
    const [isInView, setIsInView] = useState(false)
    const ref = useRef(null)
    const onLazyLoad = function (entries) {
        const [entry] = entries;
        if (entry.isIntersecting && typeof statement === 'boolean' && statement) {
            setIsInView(true)
        }
    };

    useEffect(() => {
            const menuObserver = new IntersectionObserver(onLazyLoad, {
                root: null,
                threshold: threshold ? threshold : 0,
            });
            if (ref.current) menuObserver.observe(ref.current);
// eslint-disable-next-line
    }, [statement])

    return {isInView, ref}
}