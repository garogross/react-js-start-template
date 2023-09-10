export const onClickOutSide = (ref, onCloseState, state) => {
    const checkIfClickedOutside = (e) => {
        const isRef = ref.every(value => value.current
            && !value.current.contains(e.target)
            && !e.target.classList.contains('react-calendar__tile')
            && e.target.tagName !== 'ABBR'
        )
        if (state && isRef) {
            onCloseState()
        }
    }
    document.addEventListener('click', checkIfClickedOutside)

    return () => {
        document.removeEventListener('click', checkIfClickedOutside)
    }
}