import { Handbag } from "phosphor-react";
import { ButtonContainer } from "./styles";


export function CartButton(){
  return(
    <ButtonContainer>
      <Handbag size={25} />
      <strong>COMPRAR</strong> 
    </ButtonContainer>
  )
}