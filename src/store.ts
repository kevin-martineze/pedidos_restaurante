import { create } from "zustand";
import { OrderItem } from "./types";
import { Product } from "@prisma/client";

interface Store {
  order: OrderItem[];
  addToCart: (product: Product) => void;
}

export const useStore = create<Store>(() => ({
  order: [],
  addToCart: (product) => {
    console.log('Agregando', product)
  }
}));
