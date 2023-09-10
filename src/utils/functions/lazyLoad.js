export const lazyLoad = (setState,ref) => {
    const onLazyLoad = function (entries) {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setState()
        }
    };
    const menuObserver = new IntersectionObserver(onLazyLoad, {
        root: null,
        threshold: 0,
    });
    menuObserver.observe(ref.current);
}