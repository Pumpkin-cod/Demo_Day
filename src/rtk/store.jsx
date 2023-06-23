/* eslint-disable react-refresh/only-export-components */
import { configureStore } from '@reduxjs/toolkit'
import postSlice from './postSlice'


export default configureStore({
    reducer: {
        posts: postSlice
    }
})