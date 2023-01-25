import styled from "styled-components";


export const FooterContainer = styled.footer`
width: 100%;
padding: 0.5rem;
text-align: center;
background-color: ${(props) => props.theme.colors.gray};

span{
  font-size: ${props => props.theme.fontSize.lg};
  color: ${props => props.theme.colors.black};
}
`