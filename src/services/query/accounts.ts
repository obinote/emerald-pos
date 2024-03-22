// import {
//   UseMutationOptions,
//   useInfiniteQuery,
//   useMutation,
//   useQuery,
// } from '@tanstack/react-query';
// import {Q} from '@nozbe/watermelondb';
// import {database} from 'services/watermelon';
// import AccountModel from 'models/Account';
// import {TAccount, TAccountPage, TAccountParams} from 'types/Accounts';
// import max from 'lodash.max';

// const AccountDB = database.get<AccountModel>('accounts');

// export const createAccount = async (payload: TAccount) => {
//   const result = await database.write(async () => {
//     const row = await AccountDB.create(entry => {
//       entry.fullName = payload.fullName;
//       entry.phoneNumber = payload.phoneNumber;
//       entry.displayName = payload.displayName;
//     });
//     return row;
//   });

//   return result;
// };

// export const useAccounts = () => {
//   const queryKey = ['accounts'];

//   return useQuery({
//     queryKey,
//     queryFn: async () => {
//       const data: AccountModel[] = await database
//         .get<AccountModel>('accounts')
//         .query(Q.sortBy('fullName', Q.asc))
//         .unsafeFetchRaw();
//       return data;
//     },
//   });
// };

// export const useInfiniteAccounts = (params: TAccountParams, options = {}) => {
//   return useInfiniteQuery({
//     queryKey: ['accounts', params],
//     queryFn: async ({pageParam = 1}): Promise<TAccountPage> => {
//       const perPage = params?.per_page || 5000;
//       const indexOfLastProduct = pageParam * perPage;
//       const indexOfFirstPage = indexOfLastProduct - perPage;
//       const countData = await AccountDB.query().fetchCount();
//       const pages = [];
//       for (let i = 1; i <= Math.ceil(countData / perPage); i++) {
//         pages.push(i);
//       }
//       const lastPage = max(pages) || 1;
//       const data: AccountModel[] = await AccountDB.query(
//         Q.where(
//           'fullName',
//           Q.like(`%${Q.sanitizeLikeString(params.search || '')}%`),
//         ),
//         Q.where('id', Q.like(`${Q.sanitizeLikeString(params.id || '')}%`)),
//         Q.sortBy('fullName', Q.asc),
//         Q.skip(indexOfFirstPage),
//         Q.take(perPage),
//       ).fetch();

//       return {data, last_page: lastPage, current_page: pageParam};
//     },
//     initialPageParam: 0,
//     getNextPageParam: (lastPage: TAccountPage) => {
//       if (!lastPage) {
//         return undefined;
//       }
//       return lastPage.current_page < lastPage.last_page
//         ? lastPage.current_page + 1
//         : undefined;
//     },
//     ...options,
//   });
// };

// export const useCreateAccount = () => {
//   const mutationOptions: UseMutationOptions<any, Error, TAccount> = {
//     mutationFn: createAccount,
//   };
//   return useMutation(mutationOptions);
// };
