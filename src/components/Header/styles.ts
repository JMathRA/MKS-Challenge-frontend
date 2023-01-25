import styled from "styled-components";


export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.colors.blue};
  padding: 2rem;
`

export const NavBar = styled.nav`
  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong{
    font-weight: 700;
    font-size: 2.5rem;
    color: white;
    span{
      font-size: 1.25rem;
      margin-left: 0.5rem;
      font-weight: 300;
      font-style: normal;
    }
  }
`