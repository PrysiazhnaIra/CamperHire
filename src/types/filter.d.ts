export interface FilterState {
  location: string;
  equipment: string[];
  type: string;
}

export interface CamperFilters {
  location?: string;
  form?: string;
  AC?: boolean;
  automatic?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  bathroom?: boolean;
  gas?: boolean;
  microwave?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  water?: boolean;
}
