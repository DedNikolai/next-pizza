import { notFound } from "next/navigation"
import { prisma } from "../../../../../prisma/prisma-client"
import { Container, GroupVariants, ProductImage, Title } from "@/components/shared";

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
    const product = await prisma.product.findFirst({where: {
        id: Number(id)
    }})

    if (!product) {
        return notFound();
    }

    return (
        <Container className="flex my-10">
            <div className="flex flex-1">
                <ProductImage imageUrl={product.imageUrl} size={40}/>
            </div>
            <div className="w-[490px bg-[#FCFCFC] p-7">
                <Title text={product.name} size='md' className="font-extrabold md-1"/>
                <p className="text-grey-400">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <GroupVariants
                     
                    items={[
                        {
                            name: 'Small',
                            value: '1',
                        },
                        {
                            name: 'Medium',
                            value: '2'
                        },
                        {
                            name: 'Big',
                            value: '3',
                            disabled: true
                        }
                    ]}/>
            </div>
        </Container>
    )
}