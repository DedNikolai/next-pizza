import { FC, useEffect } from "react";

import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from '../ui/sheet';
import Link from "next/link";
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";
import { CartDrawerItem } from "./cart-drawer-item";
import { getCartItemDetails } from "@/shared/lib";
import { useCartStore } from "@/shared/store/cart";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { useShallow } from "zustand/shallow";

export const CartDrawer: FC<React.PropsWithChildren> = ({children}) => {
    const [totalAmount, fetchCartItems, items, updateItemQuantity, removeCartItem] = useCartStore(useShallow(state => [
        state.totalAmount, 
        state.fetchCartItems,
        state.items,
        state.updateItemQuantity,
        state.removeCartItem
    ],));

    const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
        const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
        updateItemQuantity(id, newQuantity);
    };

    useEffect(() => {
        fetchCartItems();
    }, [])

    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
                <SheetHeader>
                <SheetTitle>
                    In Cart <span className="font-bold">{items.length} items</span>
                </SheetTitle>
                </SheetHeader>
                <div className="-mx-6 mt-5 overflow-auto flex-1">
                    {
                        items.map(item => (
                            <div key={item.id} className="mb-2">
                                <CartDrawerItem 
                                    id={item.id} 
                                    imageUrl={item.imageUrl} 
                                    details={getCartItemDetails(
                                        item.ingredients,
                                        item.pizzaType as PizzaType,
                                        item.pizzaSize as PizzaSize,
                                      )} 
                                    name={item.name} 
                                    price={item.price} 
                                    quantity={item.quantity} 
                                    onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)}
                                    onClickRemove={() => removeCartItem(item.id)}
                                />
                            </div>
                        ))
                    }
                </div>

                <SheetFooter className="-mx-6 bg-white p-8">
                    <div className="w-full">
                        <div className="flex mb-4">
                            <span className="flex flex-1 text-lg text-neutral-500">
                              Total
                            <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                            </span>

                            <span className="font-bold text-lg">{totalAmount} $</span>
                        </div>
                        <Link href="/checkout">
                            <Button
                                // onClick={() => setRedirecting(true)}
                                // loading={redirecting}
                                type="submit"
                                className="w-full h-12 text-base">
                                    Checkin
                                <ArrowRight className="w-5 ml-2" />
                            </Button>
                        </Link>
                </div>    
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}