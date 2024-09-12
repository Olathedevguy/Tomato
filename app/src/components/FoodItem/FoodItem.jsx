import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoredContext } from '../../context/StoredContext'
const FoodItem = ({id, name, price, desc, img}) => {

    const [itemCount, setItemCount] = useState(0)
    const {cartItems,
      setCartItems,
      addToCart,
      removeFromCart} = useContext(StoredContext)
  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-img' src={img} alt="" />
        {
            !cartItems[id]?
            <img src={assets.add_icon_white} className='add' onClick={()=>addToCart(id)} alt='' />
            :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>
      <div className='food-item-info'>
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-desc'>{desc}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
