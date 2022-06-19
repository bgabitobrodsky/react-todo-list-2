
export const getItems = () => {
    const localStorageData = JSON.parse(localStorage.getItem('items'));
    if(localStorageData){
        return localStorageData;
    }else{
        return [];
    }
}
