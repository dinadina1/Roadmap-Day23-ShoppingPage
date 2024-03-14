import React from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdDelete } from "react-icons/md";
import "./cardmodal.css"

function Cartmodal({ handleClose, show, cart, removeCart, total_price, lessTotal_Cart, increase_CartQuantity, decrease_CartQuantity }) {


    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                {
                    cart.length == 0 ?
                        <p className='text-center'>Your Cart is Empty</p>
                        : <>
                            <ul className="list-group list-group-numbered cart-list">
                                {cart.map((item, index) => {
                                    return <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">{item.product_name}</div>
                                            <img src={item.product_img} alt="" />
                                        </div>

                                        <span className="badge text-bg-primary rounded-pill me-3 mt-4 fw-bold" onClick={() => { decrease_CartQuantity() }}>-</span>
                                        <p className='me-3 mt-4 fw-bold'>{item.quantity}</p>
                                        <span className="badge text-bg-primary rounded-pill me-3 mt-4" onClick={() => { increase_CartQuantity(`${item.id},${item.quantity + 1},${(item.quantity + 1) * item.product_price}`) }}>+</span>

                                        <p className='me-3 mt-4 fw-bold'>&#8377;{item.product_price}</p>
                                        <MdDelete className='delete_button mt-4 fw-bold' onClick={() => {
                                            removeCart(`${item.id}`)
                                            lessTotal_Cart(`${item.id}`)
                                        }} />
                                    </li>
                                })}
                            </ul>
                            <h6 className='text-end me-4'>{`Quantity : ${cart.length}`}</h6>
                            <h5 className='text-end me-4'>{`Total Price : ${total_price}`}</h5>
                        </>
                }

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal >
    )
}

export default Cartmodal