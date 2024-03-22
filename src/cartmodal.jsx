import React from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdDelete } from "react-icons/md";
import "./cardmodal.css"

function Cartmodal({ handleClose, show, cart, removeCart,
    total_price, increase_CartQuantity, decrease_CartQuantity, cartQuantity, setCartQuantity }) {


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

                                        <a href="#"><span className="badge text-bg-primary rounded-pill me-3 mt-4 fw-bold" onClick={() => { decrease_CartQuantity(`${item.id},${item.quantity},${item.product_price}`) }}>-</span></a>
                                        <p className='me-3 mt-4 fw-bold'>{item.quantity}</p>
                                        <a href="#"><span className="badge text-bg-primary rounded-pill me-3 mt-4" onClick={() => { increase_CartQuantity(`${item.id},${item.quantity},${item.product_price}`) }}>+</span></a>

                                        <p className='me-3 mt-4 fw-bold'>&#8377;{item.product_price}</p>
                                        <MdDelete className='delete_button mt-4 fw-bold' onClick={() => {
                                            removeCart(`${item.id}`)
                                        }} />
                                    </li>
                                })}
                            </ul>
                            <h6 className='text-end me-4'>{`Quantity : ${cartQuantity}`}</h6>
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