import { useQuery, useQueryClient, UseQueryOptions } from "react-query";
import { addArticleToCart, getCart, removeArticleFromCart } from "../service";
import { Cart } from "../types";

export type ReactQueryOptions = Omit<
    UseQueryOptions<any, any, any, any>,
    "queryKey" | "queryFn"
>;

export const useCart = <T = Cart>(select?: (c: Cart) => T) =>
    useQuery("cart", getCart, {
        select,
    });

export const useCartArticleCount = () => useCart((cart) => cart.entries.length);

export const useCartActions = () => {
    const queryClient = useQueryClient();

    const addToCart = (id: string) =>
        addArticleToCart(id).then((newCart) => {
            queryClient.setQueryData("cart", newCart);
        });
    const removeFromCart = (id: string) =>
        removeArticleFromCart(id).then((newCart) => {
            queryClient.setQueryData("cart", newCart);
        });
    return {
        addToCart,
        removeFromCart,
    };
};
