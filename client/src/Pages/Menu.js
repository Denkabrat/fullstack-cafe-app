import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToUserCart } from '../redux/reducers/cartSlice';

const Menu = () => {
  const dispatch = useDispatch();

  const goods = useSelector((state) => state.goods.goods.rows);

  const onAddToUserCart = (goodId) => {
    dispatch(addToUserCart(goodId))
  };

const renderGoodsByType = (typeId) => {
    if (!goods) return [];

    return goods
      .filter((good) => good?.typeId === typeId)
      .map((good, index) => (
        <div style={{height:'100%'}} key={index} className='item'>
          <img src={`${process.env.REACT_APP_PUBLIC_API_URL}` + good?.img} alt='product' />
          <h5>{good?.description}</h5>
          <b>{good?.price}₽</b>
          <div className='add-to-cart' onClick={() => onAddToUserCart(good?.id)}>
            +
          </div>
        </div>
      ));
  };

    return(
        <div>
            <div style={{textAlign: 'center', fontSize: '44px', fontFamily: 'Playfair Display'}}>Десерты</div>
                <div className="cards" style={{marginTop:100,height:600,display:"flex",justifyContent:"center",alignItems:'center',flexDirection:'row'}}>
                     {renderGoodsByType(3)}
                </div>
            <div style={{textAlign: 'center', fontSize: '44px', fontFamily: 'Playfair Display'}}>Кофе</div>
            <div className="cards" style={{marginTop:60,height:550,display:"flex",justifyContent:"center",alignItems:'center',flexDirection:'row'}}>
                     {renderGoodsByType(2)}
                </div>
        </div>
    )

    
}

export default Menu;
