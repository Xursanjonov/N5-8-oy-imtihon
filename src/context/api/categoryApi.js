import { api } from "./index"

export const categoryApi = api.injectEndpoints({
    endpoints: (build) => ({
        getCategories: build.query({
            query: (params) => ({
                url: '/categories',
                params
            }),
            providesTags: ["Categories"]
        }),
        getCategoryId: build.query({
            query: (id) => ({
                url: `/categories/${id}`,
                method: "GET",
            }),
            providesTags: ["Categories"]
        }),
        createCategory: build.mutation({
            query: ({ title }) => ({
                url: "/categories",
                method: "POST",
                title
            }),
            invalidatesTags: ["Categories"]
        }),
        deleteCategory: build.mutation({
            query: (id) => ({
                url: `/categories/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Categories"]
        }),
        updateCategory: build.mutation({
            query: ({ id, body }) => ({
                url: `/categories/${id}`,
                method: "PUT",
                body
            }),
            invalidatesTags: ["Categories"]
        }),
    }),
})

export const {
    useGetCategoriesQuery,
    useGetCategoryIdQuery,
    useCreateCategoryMutation,
    useDeleteCategoryMutation,
    useUpdateCategoryMutation
} = categoryApi