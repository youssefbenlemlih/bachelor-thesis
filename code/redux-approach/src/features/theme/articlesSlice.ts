import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { getAllArticles } from "../../service";
import { Article } from "../../types";
import _ from "lodash";

export type ArticleState = { articles?: Article[] };

const initialState: ArticleState = {};

export const articlesSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadArticles.fulfilled, (state, action) => {
            state.articles = _.cloneDeep(action.payload);
        });
    },
});

export const loadArticles = createAsyncThunk("articles/loadArticles", getAllArticles);

export default articlesSlice.reducer;
export const useArticles = () =>
    useSelector((state: RootState) => state.articles.articles);
