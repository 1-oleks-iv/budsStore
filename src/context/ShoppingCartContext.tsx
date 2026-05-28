import { createContext, type ReactNode, useContext, useState } from "react";
import storeItems from "../data/items.json";
import { Cart } from "../components/Cart.tsx";
import { Search } from "../components/SearchComponent.tsx";

type ShoppingCartProviderProps = {
    children: ReactNode;
};

type CartItem = {
    id: number;
    quantity: number;
};
//todo
type StoreItem = {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
};

type ShoppingCartContextType = {
    //states
    cartItems: CartItem[];
    cartQuantity: number;

    isCartOpen: boolean;
    quantity: number;
    searchItemText: string;
    setSearchItemText: (text: string) => void;
    filteredItems: StoreItem[];
    setFilteredItems: (items: StoreItem[]) => void;
//functions

    isSearchOpen: boolean;
    openSearchComponent: () => void;
    closeSearchComponent: () => void;

    openCart: () => void;
    closeCart: () => void;

    getItemQuantity: (id: number) => number;
    increaseItemQuantity: (id: number) => void;
    decreaseItemQuantity: (id: number) => void;
    deleteCartItems: (id: number) => void;
    //types
    //
};

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [searchItemText, setSearchItemText] = useState("");
    const [filteredItems, setFilteredItems] = useState<StoreItem[]>(storeItems);
    const [isSearchOpen, setIsSearchOpen] = useState(false);


    const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    const openSearchComponent = () => setIsSearchOpen(true);
    const closeSearchComponent = () => setIsSearchOpen(false);

    const getItemQuantity = (id: number) => {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    };

    const increaseItemQuantity = (id: number) => {
        setCartItems(currItems => {
            const existing = currItems.find(item => item.id === id);

            if (existing == null) {
                return [...currItems, { id, quantity: 1 }];
            }

            return currItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
        });
    };

    const decreaseItemQuantity = (id: number) => {
        setCartItems(currItems => {
            const existing = currItems.find(item => item.id === id);

            if (existing?.quantity === 1) {
                return currItems.filter(item => item.id !== id);
            }

            return currItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            );
        });
    };

    const deleteCartItems = (id: number) => {
        setCartItems(currItems => currItems.filter(item => item.id !== id));
    };

    return (
        <ShoppingCartContext.Provider
            value={{
                cartItems,
                cartQuantity,
                searchItemText,
                setSearchItemText,
                filteredItems,
                setFilteredItems,
                openCart,
                closeCart,
                getItemQuantity,
                increaseItemQuantity,
                decreaseItemQuantity,
                deleteCartItems,
                isSearchOpen,
                openSearchComponent,
                closeSearchComponent,
            }}
        >
            {children}
            <Cart isCartOpen={isCartOpen} />
            <Search isSearchOpen={isSearchOpen} />
        </ShoppingCartContext.Provider>
    );
}