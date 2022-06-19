import { getColors } from "./getColors"

export const setNewColor = (newColor) => {

    const colors = getColors();
    if(!colors?.includes(newColor)){
        let newData = [];
        
        if(colors){
            if(colors.length > 7){
                colors.pop();
            }

            newData = [newColor,...colors];
        }else{
            newData = [newColor];
        }

        localStorage.setItem('colors',JSON.stringify(newData));
    }
}
