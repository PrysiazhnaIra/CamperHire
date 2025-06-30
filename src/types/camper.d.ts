interface CamperGalleryItem {
  thumb?: string;
  original?: string;
}

interface CamperReview {
  reviewer_name: string;
  reviewer_rating: number;
  content: string;
  comment: string;
  id?: string;
}

export interface CamperData {
  AC?: boolean;
  TV?: boolean;
  bathroom?: boolean;
  consumption?: number | string;
  description?: string;
  engine?: string;
  form?: string;
  gallery?: CamperGalleryItem[];
  gas?: boolean;
  height?: number | string;
  id: string | number;
  kitchen?: boolean;
  length?: number | string;
  location?: string;
  microwave?: boolean;
  name?: string;
  price?: number;
  radio?: boolean;
  rating?: number;
  refrigerator?: boolean;
  reviews?: CamperReview[];
  tank?: number | string;
  transmission?: string;
  water?: boolean;
  width?: number | string;
}

export interface CamperState {
  items: CamperData[];
  loading: boolean;
  error: string | null;
}
