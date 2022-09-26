export type Price = { value: number; currency: string };
export type Article = {
    img: string;
    price: Price;
    name: string;
    id: string;
};
export type CartEntry = {
    article: Article;
    count: number;
};
export type Cart = {
    entries: CartEntry[];
    shippingCosts: Price;
    total: Price;
};
export type Profile = {
    firstName: string;
    lastName: string;
    email: string;
};
