import CartItem from "../components/items/cartItem";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/slices/cartSlice";
import CartTotal from "../components/items/cartTotal";

const Cart = () => {
  const product = useSelector((state) => state.cart);
  const dispactch = useDispatch();
  const handleClick = (payload) => {
    dispactch(removeItem(payload));
  };

  return (
    <div className="cartDiv">

    <div className="cartItemDiv">
      {product.map((item, index) => {
        return (
          <div key={index} className="cartItems">
            <CartItem
              name={item.name}
              img={item.img}
              des={item.description}
              idx={index}
            />

            <div className="cartItemBottom">
              <button
                className="btn btn-dark me-3 ms-5"
                onClick={() => handleClick(index)}
              >
                Remove
              </button>
              <button className="btn btn-dark">Save for Later</button>
            </div>
          </div>
        );
      })}
    </div>
    <div className="cartTotal">
      <CartTotal/>
    </div>
      
    </div>
  );
};

export default Cart;
