import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://run.mocky.io' }),
    endpoints: (builder) => ({
        getFeaturedItems: builder.query({
            query: () => 'v3/7f02819f-8254-410a-b8af-ab98572bd26b',
        }),
    }),
});