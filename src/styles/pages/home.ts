import styled from "styled-components";

export const HomeContainer = styled.main`
width: 75%;
margin: 100px auto;
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 1rem;

@media (max-width: 1100px){
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 580px){
  grid-template-columns: 1fr;
}
`

export const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.35rem;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);

  img{
    width: 100%;
    height: 200px;
    object-fit: contain;
    padding: 0 1rem;
  }

  span{
    font-size: 0.85rem;
    color: ${(props) => props.theme.colors.gray100};
    padding: 0 1rem;
  }

  button{
    width: 100%;
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 1rem;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border: 0;
    min-height: 60px;

    svg{
      color: ${props => props.theme.colors.white};
    }
  }
`

export const DescriptionContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: 65% 35%;
gap: 0.35rem;
padding: 0 1rem;

strong{
  font-size: 1rem;
  color: ${(props) => props.theme.colors.gray100};
  font-weight: 550;
}

span{
    width: 100%;
    background-color: ${props => props.theme.colors.gray200};
    border-radius: 8px;
    padding: 0.25rem;
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.white};
    height: fit-content;
    text-align: center;
    font-weight: 700;
  }
`