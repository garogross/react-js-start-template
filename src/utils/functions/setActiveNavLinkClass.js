export const setActiveNavLinkClass = (defaultClass,activeClass) => {
    return ({isActive}) => (isActive ? `${defaultClass} ${activeClass}` : defaultClass)
}