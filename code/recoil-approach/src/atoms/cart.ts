import { atom, selector, useRecoilCallback, useRecoilValue } from "recoil";
import { Cart } from "../types";
import _ from "lodash";
import { addArticleToCart, getCart, removeArticleFromCart } from "../service";

const cartInitialState = selector<Cart | undefined>({
    key: "cartInitialState",
    get: async () => {
        return _.cloneDeep(await getCart());
    },
});
const cartState = atom({
    key: "cartState",
    default: cartInitialState,
});
export const useCart = () => useRecoilValue(cartState);

const cartItemsCount = selector({
    key: "cartItemsCount",
    get: ({ get }) => {
        const cart = get(cartState);
        return cart?.entries.length ?? 0;
    },
});
export const useCartItemsCount = () => useRecoilValue(cartItemsCount);

export const useCartActions = () => {
    const addToCart = useRecoilCallback(({ set }) => async (id: string) => {
        const newCart = await addArticleToCart(id);
        set(cartState, _.cloneDeep(newCart));
    });
    const removeFromCart = useRecoilCallback(
        ({ set }) =>
            async (id: string) => {
                const newCart = await removeArticleFromCart(id);
                set(cartState, _.cloneDeep(newCart));
            }
    );
    return { addToCart, removeFromCart };
};