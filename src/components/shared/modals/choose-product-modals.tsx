'use client';

import { Dialog, } from '@/components/ui';
import { DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Product } from '@prisma/client';


interface Props {
  className?: string;
  product: Product
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {

  return (
    <Dialog open={Boolean(product)}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}>
       <h1>{product.name}</h1>
      </DialogContent>
    </Dialog>
  );
};