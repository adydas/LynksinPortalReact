import React from 'react';
import { Product } from '../../components';
import './style.scss';

const Shop = () => {
  const products = [
    {
      img: 'images/shop/shirt-1.png',
      title: 'Shirt (for men)',
      dollar: '$42.5',
    },
    {
      img: 'images/shop/shirt-2.png',
      title: 'Shirt (for men)',
      dollar: '$42.5',
    },
    {
      img: 'images/shop/shirt-3.png',
      title: 'Shirt (for men)',
      dollar: '$42.5',
    },
    {
      img: 'images/shop/cap-1.png',
      title: 'Shirt (for men)',
      dollar: '$42.5',
    },
    {
      img: 'images/shop/cap-2.png',
      title: 'Shirt (for men)',
      dollar: '$42.5',
    },
    {
      img: 'images/shop/cap-3.png',
      title: 'Shirt (for men)',
      dollar: '$42.5',
    },
  ]
  return (
    <div className='shop'>
      {
        products.map(({ img, title, dollar }, index) =>
          <Product img={img} title={title} dollar={dollar} key={index} />
        )
      }
    </div>
  )
}

export default Shop;