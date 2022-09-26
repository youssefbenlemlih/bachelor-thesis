import { selector, useRecoilValue } from "recoil";
import _ from "lodash";
import { getAllArticles } from "../service";

const articlesState = selector({
    key: "articlesState",
    get: async () => _.clone(await getAllArticles()),
});
export const useArticles = () => useRecoilValue(articlesState);