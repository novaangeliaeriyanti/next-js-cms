import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export function formatDate(value: any) {
  const date = new Date(value?.date);
  return format(date, (value?.format || 'dd MMMM yyyy'), { locale: id });
}

export function isEmpty(data:any) {
    return data === null || data === '' || data === undefined;
}
