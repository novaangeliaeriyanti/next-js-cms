import { formatImage } from "./useValidate";

export function decode64 (data:any){
    try {
        const decodedString = atob(data);
        if(!formatImage(decodedString)){
            return ""
        }
        return decodedString;
    } catch (error) {
        return "";
    }
}