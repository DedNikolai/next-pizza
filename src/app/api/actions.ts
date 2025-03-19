'use server';

import { CheckoutFormValues } from "@/shared/constants/checkout-form-schema";
import { prisma } from "../../../prisma/prisma-client";
import { OrderStatus } from "@prisma/client";
import { cookies } from 'next/headers';

const token = 'test'

export async function createOrder(data: CheckoutFormValues) {
    try {
        const cookieStore = await cookies();

        const cartToken = cookieStore.get('cartToken')?.value;

        if (!cartToken) {
        throw new Error('Cart token not found');
        }
        const userCart = await prisma.cart.findFirst({
            include: {
              user: true,
              items: {
                include: {
                  ingredients: true,
                  productItem: {
                    include: {
                      product: true,
                    },
                  },
                },
              },
            },
            where: {
              token: cartToken,
            },
          });

    } catch {

    }
    await prisma.order.create({
        data: {
            token,
            totalAmount: 100,
            status: OrderStatus.PENDING,
            fullName: data.firstName + ' ' + data.lastName,
            email: data.email,
            address: data.address,
            comment: data.comment,
            items: [],
            phone: data.phone

        }
    })

    return 'https://nextjs.org/'
}