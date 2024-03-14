import { MdOutlineLocalGroceryStore } from "react-icons/md";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./navbar.css"
import Cartmodal from "./cartmodal";

function Navbar({ cartCount, cart, removeCart, increase_CartQuantity, decrease_CartQuantity }) {

  // State for total cart price
  const [total_price, setTotal_Price] = useState(0)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true)

    // Find total Cart price when add item to cart
    if (cart.length != 0) {
      let tot = cart.reduce((acc, product) => acc + product.product_price, 0)
      setTotal_Price(tot)
    }
  };

  // Find total Cart Price when remove item from cart
  let lessTotal_Cart = (id) => {
    let filter = cart.filter((product) => product.id != id)
    let tot = filter.reduce((acc, product) => acc + product.product_price, 0)
    setTotal_Price(tot)
  }




  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Amazon</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">All Products</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                </ul>
              </li>
            </ul>

            <Button variant="primary" onClick={handleShow} className='addCart_button me-5'>
              <MdOutlineLocalGroceryStore className="cart_icon" />Cart <span className="cart_count">{cartCount}</span>
            </Button>

            <Cartmodal handleClose={handleClose} show={show} cart={cart} removeCart={removeCart} total_price={total_price} lessTotal_Cart={lessTotal_Cart} increase_CartQuantity={increase_CartQuantity} decrease_CartQuantity={decrease_CartQuantity} />

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar


