import React, { useContext, useEffect, useRef, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../../context/authContext";
import { Badge, Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper} from "@mui/material";

import { cartContext } from "../../context/cartContext";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const { getCart, cartLength } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  const location = useLocation();

  const {
    handleLogout,
    user: { email },
  } = useAuth();

  const NAV_ITEMS = [
    {
      title: "BRANDS",
      link: "/brands",
      id: 1,
    },
    {
      title: "STORES",
      link: "/stores",
      id: 3,
    },
    {
      title: "NEWS",
      link: "/news",
      id: 4,
    },
  ];
  return (
    <div className="navbar">
      <Link to="/">
        <img
          width="100px"
          src="https://www.svgimages.com/svg-image/s5/floral-letter-p.svg"
          alt="logo"
        />
      </Link>


      <div className="burger"> 
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          variant="contained"
          color="secondary"
        >
          <MenuIcon/>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <Link to="/products?_limit=4&_page=1&q="><MenuItem onClick={handleClose}>Perfumes</MenuItem></Link>
                    <Link to="/brands"><MenuItem onClick={handleClose}>Brands</MenuItem></Link>
                    <Link to="/stores"><MenuItem onClick={handleClose}>Stores</MenuItem></Link>
                    <Link to="/news"><MenuItem onClick={handleClose}>News</MenuItem></Link>
                    {email === "tarieltairov1@gmail.com" ?(<Link to="/admin"><MenuItem onClick={handleClose}>Admin</MenuItem></Link>): null}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>



      <div className="links cont">
      <Link className={
            location.pathname === "/products"
              ? "navbar__item-active"
              : "navbar__item"
          } to="/products?_limit=4&_page=1&q=">PERFUMES</Link>
      {NAV_ITEMS.map((item, index) => (
        <Link
          key={index}
          to={item.link + ''}
          style={{ textDecoration: "none" }}
          className={
            location.pathname === item.link
              ? "navbar__item-active"
              : "navbar__item"
          }
        >
          {item.title}
        </Link>
      ))}
      </div>

      <div className="links">{email === "tarieltairov1@gmail.com" ? (
        <Link
          className={
            location.pathname === "/admin"
              ? "navbar__item-active"
              : "navbar__item"
          }
          to="/admin"
          style={{ textDecoration: "none" }}
        >
          ADMIN
        </Link>
      ) : null}</div>

      <Link to="/cart">
        <Badge badgeContent={+cartLength} color="warning">
          <ShoppingCartIcon className="cart" fontSize="large" />
        </Badge>
      </Link>
      <div>
        {email ? (
          <Link to="/auth">
            <button className="sign-btn" onClick={handleLogout}>
              Logout
            </button>
          </Link>
        ) : null}

        {email ? null : (
          <Link to="/auth">
            <button className="sign-btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
