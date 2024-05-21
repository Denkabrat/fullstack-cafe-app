//GLobal
import { ChangeCountAndDelete } from "../../services/basketAPI";
import { getUserCartFromBackEnd } from "../../redux/reducers/cartSlice";
//Styles
import "./basketCard.scss";
import { useDispatch } from "react-redux";


  const BasketCards = ({counter,id,name,price,img,goodId}) => {

    const dispatch = useDispatch()
  let numericPrice = parseFloat(price?.replace(/\s/g, ""));
  let resultPrice = (numericPrice * counter).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  const changeGoodCountAndDelete = ({goodId,action}) => {
    try {
      ChangeCountAndDelete({goodId,action})
      .then(() => dispatch(getUserCartFromBackEnd()))
      .catch(error => alert(error.response.data.message.message));
    } catch (error) {
        console.error(error);
    };
 };

 
 const incrementClick = () => changeGoodCountAndDelete({goodId,action: 'inc'});
 const decrementClick = () => changeGoodCountAndDelete({goodId,action: 'dec'});


 
  return (
    <div key={id} id={id} className="purchase-item">
        <img
          className="item-image"
          width={130}
          height={130}
          src={img}
          alt="clothes"
        />

      <div className="item-content">
        <p className="item-title">{name}</p>


        <div className="block-quantity">
          <p className="item-quantity">Количество:</p>
          <div className="block-counter">
            <button
            className="button-action"
              onClick={decrementClick}
            >
              -
            </button>
            <span>{counter}</span>
            <button
            className="button-action"
            onClick={incrementClick}
             >+</button>
          </div>
        </div>
        <div className="item-price">
          <p>
            <span>Цена: </span>
            {resultPrice}  ₽
          </p>
        </div>
      </div>
    </div>
  );
};

export { BasketCards };