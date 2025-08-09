"use client";

import Image from "next/image";

interface ProductListProps{
  title: string;
};

const BrandsList = ({title}: ProductListProps) => {
  const brands = [
    { name: "Nike", src: "/brand-01.png" },
    { name: "Adidas", src: "/brand-02.png" },
    { name: "Puma", src: "/brand-03.png" },
    { name: "New Balance", src: "/brand-04.png" },
    { name: "Converse", src: "/brand-05.png" },
    { name: "Polo", src: "/brand-06.png" },
    { name: "Zara", src: "/brand-07.png" },
  ];

  return (
    <>
      <h3 className="px-5 font-semibold">{title}</h3>
      <div className="overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-12 px-6 rounded-3xl">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex-shrink-0 flex flex-col gap-1 max-w-[100px] items-center"
            >
              <div className="w-[80px] h-[80px] flex items-center justify-center overflow-hidden bg-white">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <p className="truncate text-sm font-medium text-center">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandsList;
