import { apiSlice } from '../../app/api/apiSlice';

const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<any, void>({
      query: () => ({
        url: '/api/users',
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      providesTags: ['User'],
    }),
    getUser: builder.query<any, void>({
      query: (id) => ({
        url: `/api/users/${id}`,
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
    }),
    deleteUser: builder.mutation<any, any>({
      query: ({ id }) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useDeleteUserMutation, useGetUserQuery, useGetUsersQuery } =
  usersApiSlice;
