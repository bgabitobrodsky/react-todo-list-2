export const getItems = () => {
    return JSON.parse(localStorage.getItem('items')) || [];
}
