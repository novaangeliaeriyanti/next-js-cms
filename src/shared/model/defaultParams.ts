export type filterParams = {
  name?: string,
  label?: string,
  value?: string,
  column_data_type?: string,
  comparison?: string;
}

export type defaultListParams = {
  page_number?: number;
  page_size?: number;
  sort_by?: string;
  sort_direction?: 'ASC' | 'DESC';
  criteria?: {
    logical?: 'AND' | 'OR';
    conditions?: filterParams | filterParams[];
  };
};



export interface Meta {
  success: boolean;
  message: string;
  info: Info;
}

export interface Info {
  page: number;
  page_size: number;
  sort_by: string;
  sort: string;
  count: number;
  more_records: boolean;
  total: number;
  total_page: number;
}
