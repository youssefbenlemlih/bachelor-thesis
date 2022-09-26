import { createContext, useContext, useEffect, useState } from "react";
import { addArticleToCart, getCart, removeArticleFromCart } from "../service";
import { Cart } from "../types";

const useCart = () => {
    const [cart, setCart] = useState<Cart | undefined>();
    const loadCart = async () => {
        const loadedCart = await getCart();
        setCart(loadedCart);
    };
    useEffect(() => {
        loadCart();
    }, []);
    const addToCart = async (id: string) => {
        const newCart = await addArticleToCart(id);
        setCart(newCart);
    };
    const removeFromCart = async (id: string) => {
        const newCart = await removeArticleFromCart(id);
        setCart(newCart);
    };
    return {
        cart,
        addToCart,
        removeFromCart,
    };
};

type ContextType = {
    cart?: Cart;
    addToCart?: (id: string) => void;
    removeFromCart?: (id: string) => void;
};

const CartContext = createContext<ContextType>({});

export const CartContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const cart = useCart();
    return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};
export const useCartContext = () => useContext(CartContext);
