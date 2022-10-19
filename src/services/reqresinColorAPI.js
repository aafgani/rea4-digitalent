import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reqresinColorApi = createApi({
  reducerPath: "reqresinColorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api",
  }),
  endpoints: (builder) => ({
    colors: builder.query({
      query: () => "/colors",
    }),
    colorById: builder.query({
      query: (id) => `colors/${id}`,
    }),
    addColor: builder.mutation({
      query: (color) => ({
        url: "/colors",
        method: "POST",
        body: color,
      }),
    }),
    updateColorById: builder.mutation({
      query: ({ id, ...color }) => ({
        url: `colors/${id}`,
        method: "PUT",
        body: color,
      }),
    }),
    deleteById: builder.mutation({
      query: (id) => ({
        url: `colors/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  //namingnya use+name ednpoint + query/mutation
  useColorsQuery,
  useColorByIdQuery,
  useAddColorMutation,
  useUpdateColorByIdMutation,
  useDeleteColorByIdMutation,
} = reqresinColorApi;
