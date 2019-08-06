import styled, { css } from 'styled-components';

// StyledHeader
export const Header = styled.header`
  background: #F3F3F3;
  min-height: 54px;
  width: 100%;

  nav {
    display: flex;
  }
`;

// NavLink
export const NavLink = styled.a`
  background: transparent;
  border: none;
  color: #5D5D5D;
  font-size: 1rem;
  padding: 1rem 2rem;
  text-decoration: none;
  transition: background 0.5s;

  :hover {
    background: #F8F8F8;
  }

  ${ props => props.active && css`
    background: #F8F8F8;
    border-bottom: 3px solid #7BAF18;
  `}
`;