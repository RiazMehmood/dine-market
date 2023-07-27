import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  tagTypes: ["delete", "post"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://hackthon-1-riazmehmood.vercel.app/" }),
  endpoints: (builder) => ({
    getCartData: builder.query({
      query: () => `/api/cart`,
      providesTags: ["delete", "post"],
    }),
    postDataInCart: builder.mutation({
      query: (product_id) => ({
        url: `/api/cart`,
        method: "POST",
        body: product_id,
      }),
      invalidatesTags: ["post"],
    }),

    updataDataInCart: builder.mutation({
      query: ({ id, quantity }) => ({
        url: `/api/cart/?id=${id}&quantity=${quantity}`,
        method: "PUT",
      }),
    }),
    deleteDataInCart: builder.mutation({
      query: (id) => ({
        url: `/api/cart/?id=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["delete"],
    }),
    deleteAllData: builder.mutation({
      query: () => ({
        url: `/api/clearDB`,
        method: "DELETE",
      }),
      invalidatesTags: ["delete"],
    }),
  }),
});

export const {
  useGetCartDataQuery,
  usePostDataInCartMutation,
  useUpdataDataInCartMutation,
  useDeleteDataInCartMutation,
  useDeleteAllDataMutation,
} = cartApi;
