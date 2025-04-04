

import { quizApi } from '@/features/api/quizApi'
import { quizSlice } from '@/features/quiz/quizSlicer'
import { configureStore } from '@reduxjs/toolkit'
// ...

export const store = configureStore({
  reducer: {
    quiz:quizSlice.reducer,
    [quizApi.reducerPath]: quizApi.reducer,
     
  },

    // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(quizApi.middleware),
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store