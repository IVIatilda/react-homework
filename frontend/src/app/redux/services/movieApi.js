import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPatch: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getMovies: builder.query({ query: (cinemaId) => `movies${cinemaId}` }),
    getMovie: builder.query({ query: (movieId) => `movie?movieId=${movieId}` }),
    getReviews: builder.query({ query: () => `reviews` }),
    getReviewsMovie: builder.query({
      query: (movieId) => `reviews?movieId=${movieId}`,
    }),
    getCinemas: builder.query({ query: () => `cinemas` }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetReviewsQuery,
  useGetReviewsMovieQuery,
  useGetCinemasQuery,
} = movieApi;
