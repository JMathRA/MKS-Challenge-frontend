import { CartButton } from "@/components/CartButton";
import { IProduct } from "@/context/CartContext";
import { useCart } from "@/hooks/useCart";
import { DescriptionContainer, HomeContainer, ProductContainer } from "@/styles/pages/home";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

interface HomeProps{
  products: IProduct[];
}

export default function Home({products}: HomeProps) {
  const { addProductToCart, checkIfProductAlreadyInCart } = useCart();
  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };
  return (
    <>
    <Head>
      <title>MKS Shop</title>
    </Head>
    <HomeContainer>
      {
        products.map((product: IProduct) => (
          <ProductContainer key={product.id}>
            <Image src={product.photo} width={180} height={93} alt="" />
            <DescriptionContainer> 
              <strong>{product.brand} {product.name}</strong> 
              <span>{formatCurrency(product.price)}</span>
            </DescriptionContainer>
            <span>{product.description}</span>
            <button disabled={checkIfProductAlreadyInCart(product.id)} onClick={() => addProductToCart(product)}>
              {checkIfProductAlreadyInCart(product.id) ? 'O produto já está no carrinho'  : <CartButton />}
            </button>
          </ProductContainer>
        ))
      }
    </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=ASC');
  const data = await response.json();
  const products = data.products.map((product: any) => {
     return {
      id: product.id,
      name: product.name,
      brand: product.brand,
      description: product.description,
      price: Number(product.price),
      photo: product.photo,
     }
    });
  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 1
  }
}