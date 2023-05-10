import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

export const albumApi = createApi({
  reducerPath: 'album',
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3005/` }),
  endpoints: (builder) => ({
    fetchAlbums: builder.query({
      query: (artistId) => {
        return {
          url: `albums`,
          params: {
            artistId: artistId,
          },
          method: `GET`,
        };
      },
      providesTags: (result, error, artistId) => {
        const tags = result.map((album) => {
          return { type: 'Albums', id: album.id };
        });
        tags.push({ type: 'ArtistAlbum', id: artistId });
        return tags;
      },
    }),
    addAlbum: builder.mutation({
      query: (artistId) => {
        return {
          url: `/albums`,
          method: `POST`,
          body: {
            artistId: artistId,
            title: faker.commerce.productName(),
          },
        };
      },
      invalidatesTags: (result, error, artistId) => [
        { type: 'ArtistAlbum', id: artistId },
      ],
    }),
    deleteAlbum: builder.mutation({
      query: (albumId) => {
        return {
          url: `albums/${albumId}`,
          method: `DELETE`,
        };
      },
      invalidatesTags: (result, error, albumId) => [
        { type: 'Albums', id: albumId },
      ],
    }),
  }),
});

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useDeleteAlbumMutation,
} = albumApi;
