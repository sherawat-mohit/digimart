import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../store/reducer';

// CartPage component
const CartPage = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    //remove from cart button functionality in cart page
    const removeFromCart = (id) => {
        dispatch(deleteFromCart(id));
    }
    return (
        <div style={{ margin: "30px" }}>
            {cartItems.length === 0 ? (
                <p style={{ fontWeight: "600", fontSize: 40, textAlign:"center"}}>Your Cart is Empty</p>
            ) : <>
                <h2 style={{ fontWeight: "400", fontSize: 31 }}>Cart Items</h2>
                <ul>
                    {cartItems.map((item) => (
                        <li
                            style={{ display: "flex", gap: 30, marginTop: 20 }}
                            key={item.id}>
                            <img style={{ height: 100, width: 80, borderRadius:10 }} src={item.imageUrl} />
                            <div className='cart-product'>
                                <p>Title : {item.name}</p>
                                <p>Price : ${item.price}</p>
                                <button
                                    onClick={() => { removeFromCart(item?.id) }}
                                    className="remove-btn">Remove from Cart</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </>}
        </div>
    );
};

export default CartPage;
