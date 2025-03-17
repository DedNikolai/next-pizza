'use client';

import { Container, Title } from '@/shared/components/shared';
import { CheckoutSidebar } from '@/shared/components/shared/checkout-sidebar';
import { useCart } from '@/shared/hooks';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckoutCart } from '@/shared/components/shared/checkout/checkout-cart';
import { CheckoutPersonalForm } from '@/shared/components/shared/checkout/checkout-personal-form';
import { CheckoutAddressForm } from '@/shared/components/shared/checkout/checkout-address-form';
import { checkoutFormSchema, CheckoutFormValues } from '@/shared/constants/checkout-form-schema';

export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } = useCart();
  const [submitting, setSubmitting] = React.useState(false);
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      comment: '',
    },
  });

  const onSubmit = async (data: CheckoutFormValues) => {
  }

  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className="mt-10">
        <Title text="Checkout" className="font-extrabold mb-8 text-[36px]" />
        <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            {/* Левая часть */}
            <div className="flex flex-col gap-10 flex-1 mb-20">
              <CheckoutCart
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
                items={items}
                loading={loading}
              />

              <CheckoutPersonalForm className={loading ? 'opacity-40 pointer-events-none' : ''} />

              <CheckoutAddressForm className={loading ? 'opacity-40 pointer-events-none' : ''} />
            </div>

            {/* Правая часть */}
            <div className="w-[450px]">
              <CheckoutSidebar totalAmount={totalAmount} loading={loading || submitting} />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}