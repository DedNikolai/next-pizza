import { cn } from "@/lib/utils";
import { FC } from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
    className?: string
}

export const Filters: FC<Props> = ({className}) => {
    return (
        <div className={cn('', className)}>
            <Title text="Filters" size="sm" className="mb-5 font-bold"/>
            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Make yuorself" value="1"/>
                <FilterCheckbox text="Something New" value="2"/>
            </div>
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Price from to</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0}/>
                    <Input type="number" placeholder="1000" min={100} max={1000} />
                </div>
                <RangeSlider
                    min={0}
                    max={1000}
                    step={10}
                    value={[0, 1000]}
                />
            </div>
            <CheckboxFiltersGroup
                title="Components"
                className="mt-5"
                limit={6}
                defaultItems={[
                    {
                        text: 'Item 1',
                        value: '1'
                    },
                    {
                        text: 'Item 2',
                        value: '2'
                    },
                    {
                        text: 'Item 3',
                        value: '3'
                    },
                    {
                        text: 'Item 4',
                        value: '4'
                    },
                    {
                        text: 'Item 5',
                        value: '5'
                    },
                    {
                        text: 'Item 6',
                        value: '6'
                    },
                    {
                        text: 'Item 7',
                        value: '7'
                    },
                    {
                        text: 'Item 8',
                        value: '8'
                    },
                
                ]} 
                items={[
                    {
                        text: 'Item 1',
                        value: '1'
                    },
                    {
                        text: 'Item 2',
                        value: '2'
                    },
                    {
                        text: 'Item 3',
                        value: '3'
                    },
                    {
                        text: 'Item 4',
                        value: '4'
                    },
                    {
                        text: 'Item 5',
                        value: '5'
                    },
                    {
                        text: 'Item 6',
                        value: '6'
                    },
                    {
                        text: 'Item 7',
                        value: '7'
                    },
                    {
                        text: 'Item 8',
                        value: '8'
                    },
                
                ]}   
            />
        </div>
    )
}