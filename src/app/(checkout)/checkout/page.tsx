'use client';

import { Container, Title } from '@/shared/components/shared';
import { CheckoutItemDetails } from '@/shared/components/shared/checkout-item-details';
import { WhiteBlock } from '@/shared/components/shared/white-block';
import { Button, Input, Skeleton, Textarea } from '@/shared/components/ui';
import { cn } from '@/shared/lib/utils';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import React from 'react';

export default function CheckoutPage() {


  return (
    <Container className="mt-10">
        <Title text="Checkout" className="font-extrabold mb-8 text-[36px]" />
        <div className="flex gap-10">
          <div className="flex flex-col gap-10 flex-1 mb-20">
            <WhiteBlock title='1. Cart'>
              11111
            </WhiteBlock>

            <WhiteBlock title="2. Персональные данные">
              <div className="grid grid-cols-2 gap-5">
                <Input name="firstName" className="text-base" placeholder="Имя" />
                <Input name="lastName" className="text-base" placeholder="Фамилия" />
                <Input name="email" className="text-base" placeholder="E-Mail" />
                <Input name="phone" className="text-base" placeholder="Телефон" />
              </div>
            </WhiteBlock>

            <WhiteBlock title="2. Персональные данные">
              <div className="grid grid-cols-2 gap-5">
                <Input name="firstName" className="text-base" placeholder="Adress" />
                <Textarea 
                  rows={5}
                  className='text-base'
                  placeholder='comments.....'
                />
              </div>
            </WhiteBlock>
        </div>
        <div className="w-[450px]">
        <WhiteBlock className={cn('p-6 sticky top-4')}>
            <div className="flex flex-col gap-1">
              <span className="text-xl">Total</span>
              <span className="h-11 text-[34px] font-extrabold">{100} $</span>
            </div>

            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Package size={18} className="mr-2 text-gray-400" />
                  Стоимость корзины:
                </div>
              }
              // value={loading ? <Skeleton className="h-6 w-16 rounded-[6px]" /> : `${totalAmount} ₽`}
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Percent size={18} className="mr-2 text-gray-400" />
                  Налоги:
                </div>
              }
              // value={loading ? <Skeleton className="h-6 w-16 rounded-[6px]" /> : `${vatPrice} ₽`}
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Truck size={18} className="mr-2 text-gray-400" />
                  Доставка:
                </div>
              }
              // value={loading ? <Skeleton className="h-6 w-16 rounded-[6px]" /> : `${DELIVERY_PRICE} ₽`}
            />

            <Button
              // loading={loading}
              type="submit"
              className="w-full h-14 rounded-2xl mt-6 text-base font-bold">
              Перейти к оплате
              <ArrowRight className="w-5 ml-2" />
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}