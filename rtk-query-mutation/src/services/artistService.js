import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

export const artistApi = createApi({
  reducerPath: 'artist',
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3005` }),
  endpoints: (builder) => ({
    fetchArtistList: builder.query({
      query: () => {
        return {
          url: `artists`,
          method: `GET`,
        };
      },
      providesTags: ['Artists'],
    }),
    addArtist: builder.mutation({
      query: () => {
        return {
          url: `artists`,
          method: `POST`,
          body: {
            username: faker.internet.userName(),
            firstname: faker.name.firstName(),
            image: faker.image.avatar(),
          },
        };
      },
      invalidatesTags: ['Artists'],
    }),
    deleteArtist: builder.mutation({
      query: (artistId) => {
        return {
          url: `artists/${artistId}`,
          method: `DELETE`,
        };
      },
      invalidatesTags: ['Artists'],
    }),
  }),
});

export const {
  useFetchArtistListQuery,
  useAddArtistMutation,
  useDeleteArtistMutation,
} = artistApi;
