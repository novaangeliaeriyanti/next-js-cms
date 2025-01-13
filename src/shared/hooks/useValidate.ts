import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export function isEmpty(data:any) {
    return data === null || data === '' || data === undefined;
}

export function formatDate(dateValue: string, formatDate?: string) {
  const date = new Date(dateValue);
  return format(date, (formatDate || 'dd MMMM yyyy'), { locale: id });
}
