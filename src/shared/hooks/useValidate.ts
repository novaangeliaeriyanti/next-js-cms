import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export function isEmpty(data:any) {
    return data === null || data === '' || data === undefined;
}

export function formatDate(dateValue: string, formatDate?: string) {
  const date = new Date(dateValue);
  return format(date, (formatDate || 'dd MMMM yyyy'), { locale: id });
}

export function formatImage(file:string) {
  if (!file) {
      return false;
  }
  const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  const fileExtension = file?.toLowerCase().slice(file?.lastIndexOf('.'))?.toLowerCase();

  if (fileExtension === '.' || file?.indexOf('.') === 0) {
      return false;
  }

  return validExtensions.includes(fileExtension);
}