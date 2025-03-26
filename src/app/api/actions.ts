'use server';

import { CheckoutFormValues } from "@/shared/constants/checkout-form-schema";
import { prisma } from "../../../prisma/prisma-client";
import { OrderStatus, Prisma } from "@prisma/client";
import { cookies } from 'next/headers';
import { sendEmail } from "@/shared/lib/send-email";
import { PayOrderTemplate } from "@/shared/components/shared";
import { getUserSession } from "@/shared/lib/get-user-session";
import { hashSync } from "bcrypt";

const token = 'test'

export async function createOrder(data: CheckoutFormValues) {
    try {
      const cookieStore = cookies();
      const cartToken = (await cookieStore).get('cartToken')?.value;
  
      if (!cartToken) {
        throw new Error('Cart token not found');
      }
  
      /* Находим корзину по токену */
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
  
      /* Если корзина не найдена возращаем ошибку */
      if (!userCart) {
        throw new Error('Cart not found');
      }
  
      /* Если корзина пустая возращаем ошибку */
      if (userCart?.totalAmount === 0) {
        throw new Error('Cart is empty');
      }
  
      /* Создаем заказ */
      const order = await prisma.order.create({
        data: {
          token: cartToken,
          fullName: data.firstName + ' ' + data.lastName,
          email: data.email,
          phone: data.phone,
          address: data.address,
          comment: data.comment,
          totalAmount: userCart.totalAmount,
          status: OrderStatus.PENDING,
          items: JSON.stringify(userCart.items),
        },
      });
  
      /* Очищаем корзину */
      await prisma.cart.update({
        where: {
          id: userCart.id,
        },
        data: {
          totalAmount: 0,
        },
      });
  
      await prisma.cartItem.deleteMany({
        where: {
          cartId: userCart.id,
        },
      });

      await sendEmail(
        data.email,
        'Next Pizza / Pay order #' + order.id,
        await PayOrderTemplate({
          orderId: order.id,
          totalAmount: order.totalAmount,
          paymentUrl: 'https://resend.com/'
        }),
      );
  

    } catch(error) {
      console.log(error)
    }


    return 'http://localhost:3000/'
}

export async function updateUserInfo(body: Prisma.UserUpdateInput) {
  try {
    const currentUser = await getUserSession();

    if (!currentUser) {
      throw new Error('Пользователь не найден');
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(currentUser.id),
      },
    });

    await prisma.user.update({
      where: {
        id: Number(currentUser.id),
      },
      data: {
        fullName: body.fullName,
        email: body.email,
        password: body.password ? hashSync(body.password as string, 10) : findUser?.password,
      },
    });
  } catch (err) {
    console.log('Error [UPDATE_USER]', err);
    throw err;
  }
}