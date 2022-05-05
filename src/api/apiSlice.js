import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl:"https://dummyapi.io/data/v1/"}),
    tagTypes: [],

    endpoints: (builder) => ({

        getUsers : builder.query({
            query: () => ({
                url: "user?limit=30",
                headers: {
                    'app-id': '62583dbf4929562cb9e6a8f3',
                },
            }),
        }),

        getUserById : builder.query({
            query: (userID)=>({
                url: "user/" + userID ,
                headers: {
                    'app-id': '62583dbf4929562cb9e6a8f3',
                },
            }),
        }),

        getPostsByUserId :builder.query({
            query: (userID)=>({
                url:"user/"+userID+"/post",
                headers: {
                    'app-id': '62583dbf4929562cb9e6a8f3',
                },
            })

        }),

        getCommentsByPostId : builder.query({
          query:(postId)=>({
              url:"/post/" +postId+"/comment",
              headers: {
                  'app-id': '62583dbf4929562cb9e6a8f3',
              },
          })
        }),



    })
})

export const { useGetUsersQuery , useGetUserByIdQuery ,useGetPostsByUserIdQuery , useGetCommentsByPostIdQuery} = apiSlice