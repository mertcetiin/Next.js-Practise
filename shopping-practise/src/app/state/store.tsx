import { create } from "zustand";
import { ProductsType, Products } from "../data/data";

interface ProductStateType {
    productState: ProductsType[];
    deleteBtn: (id: number) => void;
}

export const useProductStore = create<ProductStateType>()((set) => ({
    productState: Products,

    deleteBtn: (id: number) => set((state) => ({
        productState: state.productState.filter((item) => item.id !== id)
    }))
}));