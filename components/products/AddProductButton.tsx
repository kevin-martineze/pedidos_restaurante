"use client"
import { Product } from "@prisma/client";

type AddProductButtonProps = {
    product: Product
}
export default function AddProductButton({ product} : AddProductButtonProps) {
  return (
    <div>
      <button
        type="button"
        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
      >
        Agregar
      </button>
    </div>
  );
}
