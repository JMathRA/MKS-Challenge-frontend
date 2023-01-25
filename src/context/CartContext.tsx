import produce from "immer";
import { createContext, ReactNode, useEffect, useState } from "react";

export interface IProduct{
  id: number;
  name: string;
  brand: string;
  photo: string;
  price: number;
  description: string;
  quantity: number;
}


interface CartContextProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cartItems:  IProduct[];
  cartTotal: number;
  addProductToCart: (product: IProduct) => void;
  changeCartItemQuantity: (cartItemId: number, type: "increase" | "decrease") => void;
  checkIfProductAlreadyInCart: (productId: number) => boolean;
  removeProductFromCart: (productId: number) => void;
  clearCart: () => void;
}
const PRODUCTS_STORAGE_KEY = "Products:likedItems";

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>(() => {
    if (typeof window !== 'undefined') {
      const storedProductsInCart = localStorage.getItem(PRODUCTS_STORAGE_KEY);
      if (storedProductsInCart) {
        return JSON.parse(storedProductsInCart);
      }
    }
    return []
  });
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const cartTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  function addProductToCart(product: IProduct) {
    const productToAdd = {
      ...product,
      quantity,
    };
    setCartItems((state) => [...state, productToAdd]);
  }

  function changeCartItemQuantity(cartItemId: number, type: "increase" | "decrease") {
    const newCart = produce(cartItems, (draft) => {
      const ProductAlreadyExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );
      if (ProductAlreadyExistsInCart >= 0) {
        const item = draft[ProductAlreadyExistsInCart];
        draft[ProductAlreadyExistsInCart].quantity = type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });
    setCartItems(newCart);
  }

  function removeProductFromCart(productId: number){
    setCartItems((state) => state.filter((product) => product.id!== productId));
  }

  function checkIfProductAlreadyInCart(productId: number){
    return cartItems.some((product) => product.id === productId);
  }

  function clearCart(){
    setCartItems([]);
  }

  return (
    <CartContext.Provider value={{ cartItems, cartTotal, addProductToCart, changeCartItemQuantity, checkIfProductAlreadyInCart, removeProductFromCart, clearCart }}>{children}</CartContext.Provider>
  );
}