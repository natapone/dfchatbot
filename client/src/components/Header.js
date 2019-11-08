import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav>
      <div className="nav-wrapper">
        <Link to={'/'} class>IT courses</Link>
        <ul>
          <li><Link to={'/shop'}>Shop</Link></li>
          <li><Link to={'/about'}>About us</Link></li>
        </ul>
      </div>
    </nav>
  )

export default Header;
