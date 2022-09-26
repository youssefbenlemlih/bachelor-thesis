import { makeAutoObservable } from "mobx";
import { Cart } from "../types";
import { addArticleToCart, getCart, removeArticleFromCart } from "../service";

class CartStore {
    cart?: Cart;

    constructor() {
        makeAutoObservable(this);
    }

    load = async () => {
        this.cart = await getCart();
    };

    addToCart = async (id: string) => {
        this.cart = await addArticleToCart(id);
    };

    removeFromCart = async (id: string) => {
        this.cart = await removeArticleFromCart(id);
    };
}

export const cartStore = new CartStore();
