import styled from "styled-components";


export const ButtonContainer = styled.div`
 width: 100%;
 display: flex;
 font-weight: 600;
display: flex;
  justify-content: center;
align-items: center;
padding: 0.5rem;
gap: 1rem;
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;
border: 0;

strong{
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: 600;
}

svg{
  color: ${props => props.theme.colors.white};
}
`