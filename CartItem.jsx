
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from './CartSlice';

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  // Calculate total number of plants
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate total cart amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Checkout message
  const handleCheckout = () => {
    alert('Thank you for shopping with Paradise Nursery! Checkout Coming Soon.');
  };

  return (
    <div className="cart-page">

      {/* Navigation Bar */}
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            Cart 🛒 ({totalItems})
          </Link>
        </div>
      </nav>

      {/* Shopping Cart Heading */}
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <p>Your selected plants are waiting for you!</p>
      </div>

      {/* Empty Cart Message */}
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your Cart is Empty!</h2>
          <p>Add some beautiful plants to your cart.</p>

          <Link to="/plants" className="continue-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (

        <div className="cart-container">

          {/* Cart Products */}
          <div className="cart-products">

            {cartItems.map((item) => (

              <div className="cart-card" key={item.id}>

                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-image"
                />

                <div className="cart-details">

                  <h3>{item.name}</h3>

                  <p>
                    Unit Price: ₹{item.price}
                  </p>

                  <p>
                    Total Price: ₹
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="quantity-controls">

                    <button
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                    >
                      +
                    </button>

                  </div>

                  {/* Delete Button */}
                  <button
                    className="delete-btn"
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                  >
                    Delete
                  </button>

                </div>
              </div>

            ))}

          </div>

          {/* Cart Summary */}
          <div className="cart-summary">

            <h2>Order Summary</h2>

            <p>
              Total Items: {totalItems}
            </p>

            <h3>
              Total Amount: ₹{totalAmount.toFixed(2)}
            </h3>

            <button
              className="checkout-btn"
              onClick={handleCheckout}
            >
              Checkout
            </button>

            <Link
              to="/plants"
              className="continue-btn"
            >
              Continue Shopping
            </Link>

          </div>

        </div>
      )}

    </div>
  );
}

export default CartItem;
