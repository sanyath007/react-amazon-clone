import React from 'react';
import { useStateValue } from '../../stateProvider';
import './Checkout.css';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click "Add to Basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket.map((item, index) => (
              <CheckoutProduct
                id={item._id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                key={index}
              />
            ))}
          </div>
        )}
      </div>

      <div className="checkout__right">
        <h1>Subtotal</h1>
      </div>
    </div>
  )
}

export default Checkout;
