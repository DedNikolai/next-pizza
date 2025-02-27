'use client'

import { useCategoryStore } from "@/app/store/category";
import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";
import { FC } from "react";

interface Props {
    items: Category [];
    className?: string; 
}

export const Categories: FC<Props> = ({className, items}) => {
    const activeIndex = useCategoryStore(state => state.activeId)
    return (
        <div className={cn('inline-flex gap-1 gb-grey-50 p-1 rounded-2xl', className)}>
            {
                items.map((cat, index) => (
                    <a 
                        key={index} 
                        className={cn(
                            'flex items-center font-bold h-11 rounded-2xl px-5',
                            activeIndex === cat.id && 'bg-white shadow-md shadow-gray-200 text-primary',
                        )}
                        href={`/#${cat.name}`}
                    >
                        <button>{cat.name}</button>
                    </a>
                ))
            }
        </div>
    )
}