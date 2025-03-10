import { Container, Filters, ProductsGroupList, Title, TopBar } from "@/shared/components/shared";
import { prisma } from "../../../prisma/prisma-client";
import { Suspense } from "react";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          items: true,
          ingredients: true
        }
      }
    }
  })
  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizza" size="lg" className="font-extrabold"/>
      </Container>
      <TopBar categories={categories.filter(category => category.products.length > 0)}/>
      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Suspense>
              <Filters />
            </Suspense>
          </div>
          <div className="flex flex-col gap-16">
            {
              categories.map((category) => (
                category.products.length > 0 &&
                 <ProductsGroupList 
                   key={category.id}
                   title={category.name}
                   categoryId={category.id}
                   items={category.products} 
                 />
              ))
            }
          </div>
        </div>
      </Container>
    </>
  );
}
