export const replaceDateFormat = (date) => {
    if (date) {
        return date.split('-').reverse().join('/')
    }
}