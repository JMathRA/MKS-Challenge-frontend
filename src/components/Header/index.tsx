import { Cart } from "../Cart";
import { HeaderContainer, NavBar } from "./styles";


export function Header(){
  return(
    <HeaderContainer>
      <NavBar>
        <strong>MKS<span>Sistemas</span></strong>
        <Cart />
      </NavBar>
    </HeaderContainer>
  )
}