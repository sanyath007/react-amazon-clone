import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../../stateProvider';
import { auth } from '../../firebase';

function Header() {
  const [{ basket, user }] = useStateValue();
  
  const login = () => {
    if(user) {
      auth.signOut();
    }
  }
  
  return (
    <nav className="header">
      {/* logo on the left */}
      <Link to="/">
        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      </Link>

      {/* search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 links */}
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">{!user ? "Sign In" : "Sign Out"}</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* cart icon with number */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionCart">
            {/* shopping cart icon */}
            <ShoppingBasketIcon />

            {/* number of items in the cart */}
            <span className="header__optionLineTwo header__cartCount">{basket?.length}</span>
          </div>
        </Link>
      </div>

    </nav>
  )
}

export default Header;
