import { cn } from "@/lib/utils";
import { FC } from "react";
import { Categories } from "./categories";
import { SortPopUp } from "./sort-popup";
import { Container } from "./container";
import { Category } from "@prisma/client";

interface Props {
    categories: Category [];
    className?: string
}

export const TopBar: FC<Props> = ({className, categories}) => {
    return (
        <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
            <Container className="flex items-center justify-between">
                <Categories items={categories}/>
                <SortPopUp />
            </Container>
        </div>
    )
}