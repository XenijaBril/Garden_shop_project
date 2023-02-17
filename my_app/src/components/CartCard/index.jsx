import React from 'react'
import { useDispatch } from 'react-redux';
import { incrementCount, decrementCount } from '../../store/reducers/cart';
import s from './index.module.css'

export default function CartCard({id, title, image, price, discont_price, count}) {

    const dispatch = useDispatch();
    
    const increment_count = () => dispatch(incrementCount(id));
    const decrement_count = () => dispatch(decrementCount(id));

  return (
    <div className={s.cart}>
        <img src={`http://localhost:3333${image}`} alt={title}/>
        <div>
            <p>{title}</p> 
            <div>
                <button onClick={ increment_count }>+</button>
                <p>{count}</p>
                <button onClick={decrement_count}>-</button>
            </div>
        </div>
        <div>
            {/* <p>{ discont_price } x { count } = { discont_price * count }</p> */}
            <p>{discont_price} $</p>
            <p>{price} $</p>
        </div>
    </div>
  )
}