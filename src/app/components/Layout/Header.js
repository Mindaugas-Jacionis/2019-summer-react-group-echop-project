import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="Header">
      <nav className="Header--navigation">
        <NavLink exact className="Header--navigation-item" to="/">
          Home
        </NavLink>
        <NavLink exact className="Header--navigation-item" to="/cart">
          Cart
        </NavLink>
        <NavLink exact className="Header--navigation-item" to="/favorites">
          Favorites
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
