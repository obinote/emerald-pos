import {Q} from '@nozbe/watermelondb';
import {
  UseMutationOptions,
  useInfiniteQuery,
  useMutation,
} from '@tanstack/react-query';
// import ProductImagesModel from 'models/ProductImages';
import ProductsModel from 'models/Products';
import {database} from 'services/watermelon';
import {TProducts, TProductsPage, TProductsParams} from 'types/ProductType';
import max from 'lodash.max';

const ProductsDB = database.get<ProductsModel>('products');
// const ProductImagesDB = database.get<ProductImagesModel>('product_images');

export const useInfiniteProducts = (params: TProductsParams, options = {}) => {
  return useInfiniteQuery({
    queryKey: ['accounts', params],
    queryFn: async ({pageParam = 1}): Promise<TProductsPage> => {
      const perPage = params?.per_page || 5000;
      const indexOfLastProduct = pageParam * perPage;
      const indexOfFirstPage = indexOfLastProduct - perPage;
      const countData = await ProductsDB.query().fetchCount();
      const pages = [];
      for (let i = 1; i <= Math.ceil(countData / perPage); i++) {
        pages.push(i);
      }
      const lastPage = max(pages) || 1;
      const data: ProductsModel[] = await ProductsDB.query(
        Q.where(
          'name',
          Q.like(`%${Q.sanitizeLikeString(params.search || '')}%`),
        ),
        Q.where('id', Q.like(`${Q.sanitizeLikeString(params.id || '')}%`)),
        Q.sortBy('name', Q.asc),
        Q.skip(indexOfFirstPage),
        Q.take(perPage),
      ).fetch();

      return {data, last_page: lastPage, current_page: pageParam};
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage: TProductsPage) => {
      if (!lastPage) {
        return undefined;
      }
      return lastPage.current_page < lastPage.last_page
        ? lastPage.current_page + 1
        : undefined;
    },
    ...options,
  });
};

export const addProduct = async (payload: TProducts) => {
  const result = await database.write(async () => {
    const row = await ProductsDB.create(entry => {
      entry.name = payload.name;
      entry.code = payload.code;
      entry.price = payload.price;
    });
    return row;
  });

  return result;
};

export const useAddProducts = () => {
  const mutationOptions: UseMutationOptions<any, Error, TProducts> = {
    mutationFn: addProduct,
  };
  return useMutation(mutationOptions);
};
