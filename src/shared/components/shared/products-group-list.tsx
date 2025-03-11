'use client'

import { cn } from "@/shared/lib/utils";
import { FC, useEffect, useRef } from "react";
import { Title } from "./title";
import { ProductCard } from "./product-card";
import { useIntersection } from 'react-use';
import { useCategoryStore } from "@/shared/store/category";


interface Props {
    title: string;
    items: any[]
    className?: string;
    listClassName?: string;
    categoryId: number;
    
  }

export const ProductsGroupList: FC<Props> = ({
        title, items, className, listClassName, categoryId
    }) => {
    const setActiveCategoryId = useCategoryStore(state => state.setActiveId);  
    const intersectionRef = useRef<HTMLElement>(null);
    // @ts-ignore
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
        root: null,
      });
      
    useEffect(() => {
        if (intersection?.isIntersecting) {
          setActiveCategoryId(categoryId);
        }
      }, [categoryId, intersection?.isIntersecting, title])  
    return (
        <div className={cn('', className)} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />
            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items.map((product, i) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    price={product.items[0].price}
                    ingredients={product.ingredients}
                />
                ))}
            </div>
        </div>
    )
}