import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function populateMenu(user: any) {

  const features = user.features;
  if (!features) return [];
  const menu= features.filter((item: any) => !item.parent_feature).map((item: any) => {
    item.children = features.filter((child: any) => child.parent_feature === item.feature);
    return item
  } );
  
  return menu;
}