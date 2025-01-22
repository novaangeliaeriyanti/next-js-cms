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

export function convertFileToBase64 (file: File): Promise<string>{
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        if (reader.result) {
          resolve(reader.result as string);
        }
      };
  
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file); 
    });
  };