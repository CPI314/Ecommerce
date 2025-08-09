"use client";

import { productTable, productVariantTable } from "@/db/schema";
import ProductItem from "./product-item";

interface ProductListProps{
  title: string;
  product: (typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  })[]
};

const ProductList = async ({title, product}: ProductListProps) => {
  return(
    <div className="space-y-6">
      <h3 className="font-semibold">{title}</h3>
      <div className="flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        {product.map(product => <ProductItem key={product.id} product={product}/>)}
      </div>
    </div>
  )
};

export default ProductList;