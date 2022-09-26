import { useQuery } from "react-query";
import { getAllArticles } from "../service";

export const useArticles = () => useQuery("articles", getAllArticles);