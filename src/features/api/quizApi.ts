import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const quizApi = createApi({

    reducerPath:"quizApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5000/api"}),
    tagTypes:["quiz"],
    endpoints : (builder) =>({
        getAllQuiz : builder.query({
            query:()=>`/quizzes`,
            providesTags:["quiz"]
        }),

        //This is for addQuizApi
        addQuiZApi: builder.mutation({
            query: (body) => ({
                url: '/quizzes',
                method: 'POST',
                body
            }),
            invalidatesTags:["quiz"]
        }),
        // this is for delete
        deleteQuiZApi: builder.mutation({
            query: (id) => ({
              url: `/quizzes/${id}`,
              method: 'DELETE',
            }),
            invalidatesTags: ['quiz'],
          })
          
        


    })
    
    


});

 export const { useGetAllQuizQuery,useAddQuiZApiMutation,useDeleteQuiZApiMutation} = quizApi;