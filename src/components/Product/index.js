import React from 'react';

import './style.scss';

const Product = ({ img, title, dollar }) => {
  return (
    <div className="product">
      <div className="product-image">
        <img src={img} alt='img-product' />
        <div className="add-to-cart">
          <div className="add-to-cart-button">
            <span>ADD TO CART</span>
          </div>
        </div>
      </div>
      <div className="product-footer">
        <h6 className="product-footer-title">{title}</h6>
        <h6 className="product-footer-dollar">{dollar}</h6>
      </div>
    </div>
  )
}

export default Product;