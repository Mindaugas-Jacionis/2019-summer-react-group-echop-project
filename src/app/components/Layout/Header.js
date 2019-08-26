import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../constants';

const StyledHeader = styled.header`
  padding: 0px 15px;
  background: #2e802e;

  .Header--navigation {
    max-width: 1020px;
    margin: 0 auto;

    &-item {
      color: #ffffff;
      font-size: 20px;
      line-height: 20px;
      padding: 15px 10px;
      display: inline-block;
      transition: all 0.3s;

      &:hover,
      &.active {
        background: #ffffff;
        color: #2e802e;
      }
    }
  }
`;

function Header() {
  return (
    <StyledHeader className="Header">
      <nav className="Header--navigation">
        <NavLink exact className="Header--navigation-item" to={ROUTES.defaultPage}>
          Home
        </NavLink>
        <NavLink exact className="Header--navigation-item" to={ROUTES.cart}>
          Cart
        </NavLink>
        <NavLink exact className="Header--navigation-item" to={ROUTES.favorites}>
          Favorites
        </NavLink>
      </nav>
    </StyledHeader>
  );
}

export default Header;
