import React from 'react'
import image from '../../assets/cart/image.jpg'
const Cart =()=>{
    return(
        <div className='cart'>
            <img src={image} alt="image catalog" />
            <div className="block_title">
                <p className="title">Пиджак свежий из Африки</p>
                <p className="desc">Качество супер сделан из сена</p>
                <p className="price">Цена 19999999$</p>
            </div>
        </div>
    )
}

export default Cart