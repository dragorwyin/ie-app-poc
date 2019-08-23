import React from 'react';
import Style, { NavLink } from './Header.styled';

const Header = ({ active = 0 }) => {
  return (
    <Style>
      <nav>
        <NavLink href="/item1" active={active === 0}>Item1</NavLink>
        <NavLink href="/item2" active={active === 1}>Item2</NavLink>
        <NavLink href="/item3" active={active === 2}>Item3</NavLink>
      </nav>
    </Style>
  );
};

export default Header;