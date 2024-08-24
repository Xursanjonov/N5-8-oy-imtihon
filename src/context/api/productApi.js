import { api } from './index'

export const productApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query({
            query: (params) => ({
                url: '/products',
                params
            }),
            providesTags: ["Products"]
        }),
        getProductById: build.query({
            query: (id) => ({
                url: `/products/${id}`
            }),
            providesTags: ["Products"]
        }),
        createProduct: build.mutation({
            query: (body) => ({
                url: "/products",
                method: "POST",
                body
            }),
            invalidatesTags: ["Products"]
        }),
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Products"]
        }),
        updateProduct: build.mutation({
            query: ({ id, body }) => ({
                url: `/products/${id}`,
                method: "PUT", // or "PATCH"
                body
            }),
            invalidatesTags: ["Products"]
        })
    }),
})

export const {
    useGetProductsQuery,
    useCreateProductMutation,
    useDeleteProductMutation,
    useUpdateProductMutation
} = productApi