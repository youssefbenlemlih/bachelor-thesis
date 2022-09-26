import { Article, Cart, CartEntry, Price, Profile } from "../types";

const currency = "€";
const dummyArticles: Article[] = [
    {
        id: "1",
        name: "Article 1",
        img: "/image-storage/image-1.png",
        price: { value: 5, currency },
    },
    {
        id: "2",
        name: "Article 2",
        img: "/image-storage/image-2.png",
        price: { value: 10, currency },
    },
    {
        id: "3",
        name: "Article 3",
        img: "/image-storage/image-3.png",
        price: { value: 7.5, currency },
    },
];
type DB = {
    session: {
        auth: {
            profile?: Profile;
        };
        cart: {
            entries: CartEntry[];
        };
    };
    articles: Article[];
};

const db: DB = {
    session: {
        auth: {},
        cart: {
            entries: [],
        },
    },
    articles: dummyArticles,
};

export const getAllArticles = async (): Promise<Article[]> => {
    await _delay();
    return db.articles;
};

export const logIn = async () => {
    await _delay();
    if (db.session.auth.profile) throw Error("Already logged in");
    db.session.auth.profile = {
        firstName: "John",
        lastName: "Doe",
        email: "example@mail.com",
    };
    return db.session.auth.profile;
};

export const logOut = async () => {
    await _delay();
    if (!db.session.auth.profile) throw Error("Already logged out");
    db.session.auth.profile = undefined;
};

export const getCart = async (): Promise<Cart> => {
    await _delay();
    return _getCart();
};

export const addArticleToCart = async (articleId: string): Promise<Cart> => {
    await _delay();
    const article = db.articles.find(({ id }) => id === articleId);
    if (!article) throw new Error(`Article with id=${articleId} not found`);

    const cartEntry = db.session.cart.entries.find(
        ({ article: a }) => a.id === articleId
    );
    if (cartEntry) {
        cartEntry.count++;
    } else {
        db.session.cart.entries.push({ article, count: 1 });
    }
    return _getCart();
};

export const removeArticleFromCart = async (
    articleId: string
): Promise<Cart> => {
    await _delay();
    const article = db.articles.find(({ id }) => id === articleId);
    if (!article) throw new Error(`Article with id=${articleId} not found`);

    const cartEntry = db.session.cart.entries.find(
        ({ article: a }) => a.id === articleId
    );
    if (!cartEntry)
        throw new Error(`Article with id=${articleId} is not in cart`);

    if (cartEntry.count === 1) {
        db.session.cart.entries = db.session.cart.entries.filter(
            ({ article: a }) => a.id !== articleId
        );
    } else {
        cartEntry.count--;
    }
    return _getCart();
};

const _getCart = () => {
    const { entries } = db.session.cart;
    const total = _calculateTotal(entries);
    const shippingCosts = _calculateShippingCosts(total);
    return {
        entries,
        shippingCosts,
        total: { currency, value: total.value + shippingCosts.value },
    };
};

const _calculateTotal = (entries: CartEntry[]): Price =>
    entries
        .map(({ article, count }) => ({
            currency: article.price.currency,
            value: article.price.value * count,
        }))
        .reduce(
            (result, item) => ({
                currency: item.currency,
                value: result.value + item.value,
            }),
            { currency, value: 0 }
        );

const _calculateShippingCosts = (total: Price): Price => ({
    value: total.value >= 15 ? 0 : 5,
    currency,
});

function _delay() {
    return new Promise((resolve) => setTimeout(resolve, 500));
}
