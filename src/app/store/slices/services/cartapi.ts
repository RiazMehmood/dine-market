import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Product {
  productName: string,
  productPrice: number,
  productQuantity: number
}

export const cartApi = createApi({
  reducerPath: "cartApi",
  tagTypes: ["delete", "post"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
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
    stripeCheckout: builder.mutation<Product, Product>({
      query: data => ({
        url: `/api/payments`,
        method: "POST",
        body: data,
      }),
      // invalidatesTags: [""],
      
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
  }),
});

export const {
  useGetCartDataQuery,
  usePostDataInCartMutation,
  useUpdataDataInCartMutation,
  useDeleteDataInCartMutation,
  useStripeCheckoutMutation,
} = cartApi;
