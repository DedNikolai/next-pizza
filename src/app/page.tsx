import { Container, Filters, ProductsGroupList, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizza" size="lg" className="font-extrabold"/>
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex flex-col gap-16">
            <ProductsGroupList 
              title="Pizza" 
              items={[
                {
                  id: 11,
                  name: 'Mega Pizza',
                  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1-Uc7NTxbcyzX32ydBaXOB2b_pBLbqAGbQ&s',
                  price: 30,
                  items: [{price: 30}]
                },
                {
                  id: 12,
                  name: 'Mega Pizza',
                  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1-Uc7NTxbcyzX32ydBaXOB2b_pBLbqAGbQ&s',
                  price: 30,
                  items: [{price: 30}]
                },
                {
                  id: 13,
                  name: 'Mega Pizza',
                  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1-Uc7NTxbcyzX32ydBaXOB2b_pBLbqAGbQ&s',
                  price: 30,
                  items: [{price: 30}]
                },
                {
                  id: 14,
                  name: 'Mega Pizza',
                  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1-Uc7NTxbcyzX32ydBaXOB2b_pBLbqAGbQ&s',
                  price: 30,
                  items: [{price: 30}]
                }
              ]} 
              categoryId={0}/>
                          <ProductsGroupList 
              title="Combo" 
              items={[
                {
                  id: 1,
                  name: 'Mega Pizza',
                  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1-Uc7NTxbcyzX32ydBaXOB2b_pBLbqAGbQ&s',
                  price: 30,
                  items: [{price: 30}]
                },
                {
                  id: 2,
                  name: 'Mega Pizza',
                  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1-Uc7NTxbcyzX32ydBaXOB2b_pBLbqAGbQ&s',
                  price: 30,
                  items: [{price: 30}]
                },
                {
                  id: 3,
                  name: 'Mega Pizza',
                  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1-Uc7NTxbcyzX32ydBaXOB2b_pBLbqAGbQ&s',
                  price: 30,
                  items: [{price: 30}]
                },
                {
                  id: 4,
                  name: 'Mega Pizza',
                  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1-Uc7NTxbcyzX32ydBaXOB2b_pBLbqAGbQ&s',
                  price: 30,
                  items: [{price: 30}]
                }
              ]} 
              categoryId={1}/>
          </div>
        </div>
      </Container>
    </>
  );
}
