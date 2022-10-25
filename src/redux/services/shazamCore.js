import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-core.p.rapidapi.com/v1",
        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", "423cddd674msh276ed776ce013c5p1fda04jsn63f66039c2f2");
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => "/charts/world" }),
        getSongDetails: builder.query({
            query: ({ songid }) => `/tracks/details?track_id=${songid}`,
        }),
        getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
        getArtistDetails: builder.query({
            query: ({ artistId }) => {
                console.log("HERE", artistId);

                return `/artists/details?artist_id=${artistId}`;
            },
        }),
    }),
});

export const { useGetTopChartsQuery, useGetSongDetailsQuery, useGetSongRelatedQuery, useGetArtistDetailsQuery } =
    shazamCoreApi;
