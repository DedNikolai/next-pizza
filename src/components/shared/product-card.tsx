import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";


interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    // ingredients: Ingredient[];
    className?: string;
}

export const ProductCard: FC<Props> = ({
        id, name, price, imageUrl, className
    }) => {
    return (
        <div className={cn('', className)}>
            <Link href={`/product/${id}`}>
            <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
                <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
            </div>

            <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

            <p className="text-sm text-gray-400">
                Cheese, Onion, Meet, Tomato, Muchrooms, 
            </p>

            <div className="flex justify-between items-center mt-4">
                <span className="text-[20px]">
                    from <b>{price} $</b>
                </span>
                <Button variant="secondary" className="text-base font-bold">
                    <Plus size={20} className="mr-1" />
                    Add
                </Button>
        </div>
            </Link>
        </div>
    )
}