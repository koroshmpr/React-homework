import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const POSTS_URL = 'https://api.jsonbin.io/v3/b/62b2f1d4449a1f382115026d';

const initialState = {
  loading: false,
  posts: [],
  error: ''
}

export const FetchPosts = createAsyncThunk(
  'posts/getPosts', async () => {
    const res = await fetch(POSTS_URL)
      .then((data) => data.json()
      )
    return res
  })

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postUpdated(state, action) {
      const { id, title } = action.payload
      const existingPost = state.find(post => post.id === id)
      if (existingPost) {
        existingPost.title = title
      }
    }
  },
  extraReducers: {
    [FetchPosts.pending]: (state) => {
      state.loading = true
    },
    [FetchPosts.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.posts = payload
    },
    [FetchPosts.rejected]: (state) => {
      state.loading = false
    },

  }
})

export const selectAllPosts = (state) => state.posts.posts;

export const { postAdded, reactionAdded } = postsSlice.actions

export default postsSlice.reducer