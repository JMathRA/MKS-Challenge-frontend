import * as Dialog from '@radix-ui/react-dialog';
import { CartClose, CartContent, CartFinalization, CartProduct, FinalizationDetails, CartButtonContainer, ContainerQuantity, ButtonsContainer } from "./styles";
import { Minus, Plus, ShoppingCart , X } from "phosphor-react";
import Image from "next/image";
import { useCart } from "../../hooks/useCart";
import Link from 'next/link';



export function Cart(){
  const { cartItems, cartTotal, removeProductFromCart, changeCartItemQuantity } = useCart();
  const cartItemsQuantity = cartItems.length;
  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return(
    <Dialog.Root>
       <Dialog.Trigger asChild>
          <CartButtonContainer>
            <ShoppingCart  />
            <span>{cartItemsQuantity}</span>
          </CartButtonContainer>
       </Dialog.Trigger>
       <Dialog.Portal>
          <CartContent>
            <CartClose>
              <X size="24" weight="bold" /> 
            </CartClose>
            <h2>Carrinho de Compras</h2>
            <section>
              { cartItemsQuantity <= 0 && <p className="texto">Carrinho está vazio :(</p>}
              {cartItems.map((cartItem) => (
                <CartProduct key={cartItem.id}>
                   <Image width={180} height={93} src={cartItem.photo} alt="" />
                   <span>{cartItem.brand} {cartItem.name}</span>
                   <ContainerQuantity>
                      <strong>QTD:</strong>
                      <ButtonsContainer>
                        <button onClick={() => changeCartItemQuantity(cartItem.id, "decrease")} disabled={cartItem.quantity <= 1}><Minus size={15} weight="fill" /></button>
                        <span>{cartItem.quantity}</span>
                        <button onClick={() => changeCartItemQuantity(cartItem.id, "increase")}><Plus size={15} weight="fill" /></button>
                      </ButtonsContainer>
                    </ContainerQuantity>
                    <strong>{formatCurrency(cartItem.price * cartItem.quantity)}</strong>
                    <button className='close' onClick={() => removeProductFromCart(cartItem.id)}><X size="20" weight="bold" /> </button>
                </CartProduct>
              ))}
            </section>
            <CartFinalization>
              <FinalizationDetails>
                  <span>Valor Total:</span>
                  <p>{formatCurrency(cartTotal)}</p>
              </FinalizationDetails>
              <button disabled={cartItemsQuantity <= 0}>
                <Link href="sucess">Finalizar Compra</Link>
              </button>
            </CartFinalization>
          </CartContent>
       </Dialog.Portal>
    </Dialog.Root>
  )
}