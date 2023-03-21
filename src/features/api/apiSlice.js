import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://run.mocky.io/v3/' }),
    endpoints: (builder) => ({
        getFeaturedItems: builder.query({
            query: () => '7f02819f-8254-410a-b8af-ab98572bd26b',
        }),
    }),
});

export const { useGetFeaturedItemsQuery } = apiSlice