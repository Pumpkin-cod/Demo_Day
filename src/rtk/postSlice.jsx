/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload);
        },
        updatePost: (state, action) => {
            const { id, title, content } = action.payload;
            const existingPost = state.find(post => post.id === id);
            if (existingPost) {
                existingPost.title = title;
                existingPost.content = content;
            }
        },
        deletePost: (state, action) => {
            const { id } = action.payload;
            const existingPostIndex = state.findIndex(post => post.id === id);

            if (existingPostIndex !== -1) {
                state.splice(existingPostIndex, 1);
            }
        }
    }
});

export const { addPost, updatePost, deletePost } = postSlice.actions;
export default postSlice.reducer;
