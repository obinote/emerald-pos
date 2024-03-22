export type TProducts = {
  id?: string;
  name: string;
  code: string;
  price: number;
  unitId?: string;
  categoryId?: string;
  description?: string;
  created_at?: number;
  updated_at?: number;
};

export type TFormProduct = {
  id?: string;
  name: string;
  code: string;
  price: string;
  images: string[];
  unitId?: string;
  categoryId?: string;
  description?: string;
};

export type TProductsParams = {
  search?: string;
  id?: string;
  per_page?: number;
};

export type TProductsPage = {
  current_page: number;
  last_page: number;
  data: TProducts[];
};
