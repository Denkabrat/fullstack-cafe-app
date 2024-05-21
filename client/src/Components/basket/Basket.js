import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { setCartOpen } from '../../redux/reducers/modalSlice';
import { useDispatch } from 'react-redux';
import { getUserCartFromBackEnd } from '../../redux/reducers/cartSlice';
import { BasketCards } from '../basketCard/basketCard';
import './Basket.scss';

const Basket = () => {
  
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.modal.cartIsOpen),
      {userCart} = useSelector(state => state.cart);

    useEffect(() => {
      dispatch(getUserCartFromBackEnd());
    }, [dispatch]);

    console.log(userCart)
    
    const cartWrapperClassName = isOpen ? "cart-wrapper active" : "cart-wrapper";
    const cartContentClassName = isOpen ? "cart-content active" : "cart-content";
  
    const changeModalStatus = () => dispatch(setCartOpen(!isOpen));
    const stopPropagation = (e) => e.stopPropagation();

    const getAllCardsInBasket = useMemo(()=>{
      return () => (
        userCart?.userCart?.map(({id,count,img,name,price,goodId},index)=>(
            <BasketCards
              key={index}
              id={`${id}`}
              counter={count}
              img={`${process.env.REACT_APP_PUBLIC_API_URL}` + img}
              name={name}
              price={price}
              goodId={goodId}
              getUserCartFromBackEnd={getUserCartFromBackEnd}
          />
        ))
    )
    },[userCart.userCart])


    const checkGoodsInBasket = () => {

      if(userCart?.userCart?.length === 0){
        return(
          <div className="empty-cart-block">
             <p className="empty-cart-message">Корзина пуста</p>
             <p className="empty-cart-back-to-buy">Начните покупки прямо сейчас</p>
          </div>
        )
      }
  
        return (
          <div className="total-price-cart">
              <div className="price-block">
                <p>итого: {userCart?.totalPrice} ₽</p>
              </div>
    
              <button 
                className="order-button"
                type="submit"
                onClick={()=> alert('Здесь такого нет)')}>
                оформить заказ
              </button>
          </div>
        )
    }
    

  return (
    <div className={cartWrapperClassName} onClick={changeModalStatus}>
        <div className={cartContentClassName} onClick={stopPropagation}>

        <div className="cart-header">
            <button
                className="close"
                onClick={changeModalStatus}>
                <p className="purchases-title">Корзина</p>
            </button>
        </div>

        <div className="purchases-block">
            {getAllCardsInBasket()}
            {checkGoodsInBasket()}
        </div>
            
        </div>
  </div>
  )
}

export default Basket