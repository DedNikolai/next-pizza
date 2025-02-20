'use client'

import { useCategoryStore } from "@/app/store/category";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
    className?: string; 
}

const cats = ['Pizza', 'Combo', 'Snacks', 'Coktails', 'Coffe', 'Drinks', 'Sweets', ];

export const Categories: FC<Props> = ({className}) => {
    const activeIndex = useCategoryStore(state => state.activeId)
    return (
        <div className={cn('inline-flex gap-1 gb-grey-50 p-1 rounded-2xl', className)}>
            {
                cats.map((cat, index) => (
                    <a 
                        key={index} 
                        className={cn(
                            'flex items-center font-bold h-11 rounded-2xl px-5',
                            activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary',
                        )}
                        href={`/#${cat}`}
                    >
                        <button>{cat}</button>
                    </a>
                ))
            }
        </div>
    )
}