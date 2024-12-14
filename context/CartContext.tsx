"use client";
import { createContext, ReactNode, useReducer } from "react";

type customerInfo = {
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  foodDate: string;
  destination: string;
  pickUp: string;
  dropDown: string;
};
export interface CartContextInterface {
  customerInfo: customerInfo;
  foodItems: CartItem[];
  events: {
    updateCustomerInfo: ({ field, value }: { field: string; value: string }) => void;
    addItemsToCart: ({ catergory, items }: { catergory: keyof CartContextInterface; items: CartItem[] }) => void;
    removeItemsFromCart: ({
      removeItemPayload,
    }: {
      removeItemPayload: {
        itemType: keyof CartContextInterface;
        itemIds: string[];
      }[];
    }) => void;
  };
}

export type CartItem = {
  id: string;
  name: string;
  category: string;
} & {
  category: "food";
  itemCount: number;
};

type cartContextAction = { itemType: keyof CartContextInterface } & ({ items: CartItem[]; type: "ADD" } | { type: "REMOVE"; itemIds: string[] } | { type: "PHONE_UPDATE"; field: string; value: string } | { type: "UPDATE_COUNT"; itemId: string });

const initalCartContext: CartContextInterface = {
  customerInfo: {
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    foodDate: "",
    destination: "",
    pickUp: "",
    dropDown: "",
  },
  foodItems: [],
  events: {
    updateCustomerInfo: function ({ field, value }: { field: string; value: string }): void {
      throw new Error("Function not implemented.");
    },
    addItemsToCart: function ({ catergory, items }: { catergory: keyof CartContextInterface; items: CartItem[] }): void {
      throw new Error("Function not implemented.");
    },
    removeItemsFromCart: function ({
      removeItemPayload,
    }: {
      removeItemPayload: {
        itemType: keyof CartContextInterface;
        itemIds: string[];
      }[];
    }): void {
      throw new Error("Function not implemented.");
    },
  },
};

export const CartContext = createContext<CartContextInterface>(initalCartContext);

const getContextDataFrom = () => {
  if (typeof window !== "undefined" && typeof sessionStorage !== "undefined") {
    const seesionData = sessionStorage.getItem("CMS_CartItems");
    if (seesionData) {
      return JSON.parse(seesionData) as CartContextInterface;
    } else {
      setContextData(initalCartContext);
    }
  }
  return initalCartContext;
};

const setContextData = (cartData: CartContextInterface) => {
  if (typeof window !== "undefined") sessionStorage.setItem("CMS_CartItems", JSON.stringify(cartData));
};

export const CartContextProvider: React.FC<{ children?: ReactNode }> = (props) => {
  const cartReducer = (state: CartContextInterface, action: cartContextAction) => {
    if (action.itemType === "foodItems") {
      if (action.type === "ADD") {
        const cartData = { ...state, [action.itemType]: [...state[action.itemType], ...action.items] };
        setContextData(cartData);
        return cartData;
      } else if (action.type === "REMOVE") {
        const cartData = { ...state, [action.itemType]: [...state[action.itemType]].filter((item) => !action.itemIds.includes(item.id)) };
        setContextData(cartData);
        return cartData;
      }
    } else if (action.itemType === "customerInfo") {
      if (action.type === "PHONE_UPDATE") {
        const cartData = { ...state, [action.itemType]: { ...state[action.itemType], [action.field]: action.value } };
        setContextData(cartData);
        return cartData;
      } else(action.type === "UPDATE_COUNT"){
        const cartData = { ...state, ["foodItems"]: { ...state["foodItems"].filter((item)=>item.id !== action.itemId), [action.field]: action.value } };
      }
    }
    return state;
  };

  const [cartItems, dispatch] = useReducer(cartReducer, getContextDataFrom());
  const addItemsToCart = ({ catergory, items }: { catergory: keyof CartContextInterface; items: CartItem[] }) => {
    dispatch({ type: "ADD", items: items, itemType: catergory });
  };
  const updateCustomerInfo = ({ field, value }: { field: string; value: string }) => {
    dispatch({ type: "PHONE_UPDATE", field: field, value: value, itemType: "customerInfo" });
  };
  const updateCount = ({ itemId }: { itemId: string }) => {
    dispatch({ type: "UPDATE_COUNT", itemId: itemId, itemType: "customerInfo" });
  };
  const removeItemsFromCart = ({
    removeItemPayload,
  }: {
    removeItemPayload: {
      itemType: keyof CartContextInterface;
      itemIds: string[];
    }[];
  }) => {
    removeItemPayload.forEach((value) => {
      dispatch({ type: "REMOVE", itemIds: value.itemIds, itemType: value.itemType });
    });
  };
  const contextData = {
    ...cartItems,
    events: {
      addItemsToCart,
      removeItemsFromCart,
      updateCustomerInfo,
    },
  };

  return <CartContext.Provider value={contextData}>{props?.children}</CartContext.Provider>;
};
