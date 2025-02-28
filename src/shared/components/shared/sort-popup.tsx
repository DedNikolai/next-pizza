import { cn } from "@/shared/lib/utils";
import { ArrowUp, ArrowUpDown } from "lucide-react";
import { FC } from "react";

interface Props {
    className?: string
}

export const SortPopUp: FC<Props> = ({className}) => {
    return (
        <div className={cn(
            'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer', 
            className)}>
                <ArrowUpDown size={16} />
                <b>Sort</b>
                <b className="text-primary">Popular</b>
        </div>
    )
}