import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://elad-test-1.s3.amazonaws.com' }),
	tagTypes: ['Products'],
	endpoints: builder => ({
		getProducts: builder.query({
			query: () => '/items.json',
			transformResponse: responseData => {
				const loadedProducts = responseData.map(product => {
					if (!product?.productInfo)
						product.productInfo = {
							ordered: 0,
							addedToCart: 0,
							isAllQuantityAddedToCart: false,
						};

					return product;
				});
				return loadedProducts;
			},
		}),
	}),
});

export const { useGetProductsQuery } = apiSlice;
