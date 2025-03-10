'use client';

import { Dialog, } from '@/shared/components/ui';
import { DialogContent } from '@/shared/components/ui/dialog';
import { cn } from '@/shared/lib/utils';
import { useRouter } from 'next/navigation';
import { ChooseProductForm } from '../choose-product-form';
import { ProductWithRelations } from '@/app/types/prisma';
import { ChoosePizzaForm } from '../choose-pizza-form';
import { useCartStore } from '@/shared/store/cart';
import { useShallow } from 'zustand/shallow';
import toast from 'react-hot-toast';
import React from 'react';


interface Props {
  className?: string;
  product: ProductWithRelations;
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(product.items[0].pizzaType);
  const [addCartItem, loading] = useCartStore(useShallow(state => [
          state.addCartItem,
          state.loading
      ],));

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await addCartItem({
        productItemId: itemId,
        ingredients
      })

      toast.success('Product add successfully');
      router.back();
    } catch(error){
        console.error(error)
        toast.error('Cant add product to cart')
      }
    }

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}>
          {
            isPizzaForm ? 
            <ChoosePizzaForm 
              imageUrl={product.imageUrl} 
              name={product.name} 
              ingredients={product.ingredients}
              items={product.items}
              onSubmit={onSubmit}
              loading={loading}
            /> :
            <ChooseProductForm 
              imageUrl={product.imageUrl} 
              name={product.name}
              onSubmit={onSubmit} 
              price={firstItem.price}
              loading={loading}
            />
          }
      </DialogContent>
    </Dialog>
  );
};