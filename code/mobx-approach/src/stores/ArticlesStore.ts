import { makeAutoObservable } from "mobx";
import { Article } from "../types";
import { getAllArticles } from "../service";

class ArticlesStore {
    articles?: Article[];

    constructor() {
        makeAutoObservable(this);
    }

    load = async () => {
        this.articles = await getAllArticles();
    };
}

export const articlesStore = new ArticlesStore();
