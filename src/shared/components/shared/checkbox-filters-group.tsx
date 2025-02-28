'use client'

import { cn } from "@/shared/lib/utils";
import { ChangeEvent, FC, useState } from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Skeleton, Input } from "../ui";

type Item = FilterChecboxProps;

interface Props {
    title: string;
    className?: string;
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onClickCheckbox?: (id: string) => void, 
    defaultValue?: string[];
    loading?: boolean
    selected: Set<string>;
    name?: string;
}

export const CheckboxFiltersGroup: FC<Props> = ({
    className, 
    title, 
    items, 
    defaultItems, 
    limit = 5, 
    searchInputPlaceholder = 'Search', 
    onClickCheckbox,
    defaultValue,
    loading,
    selected,
    name
}) => {
    const [showAll, setShowAll] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const onChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    }

    if (loading) {
        return (
            <div className={className}>
                <p className="font-bold mb-3">{title}</p>

                {...Array(limit)
                .fill(0)
                .map((_, index) => <Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />)}

                <Skeleton className="w-28 h-6 mb-4 rounded-[8px]" />
            </div>
        )
    }
    
    const list = showAll ? items.filter(item => item.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) : (defaultItems || items).slice(0, limit);
    return (
        <div className={cn('', className)}>
           <p className="font-bold mb-3">{title}</p>
           {
            showAll &&
            <div className="mb-5">
                <Input
                    placeholder={searchInputPlaceholder}
                    onChange={onChangeSearchInput}
                    value={searchValue}
                    className="bg-gray-50 border-none"
                />
           </div>
           }
           <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
            {list.map((item, index) => (
                <FilterCheckbox
                    key={index}
                    text={item.text}
                    value={item.value}
                    endAdornment={item.endAdornment}
                    checked={selected.has(item.value)}
                    onCheckedChange={() => onClickCheckbox?.(item.value)}
                    name={name}
                />
            ))}
           </div>
           {items.length > limit && (
                <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
                    {showAll ? 'Hide' : '+ Show All'}
                </button>
                </div>
            )}
        </div>
    )
}