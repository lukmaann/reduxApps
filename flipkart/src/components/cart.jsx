import { useSelector } from "react-redux"

const Cart = () => {
  const product=useSelector((state)=>state.cart);
  
  return (
    <h1>{product.length}</h1>
  )
}

export default Cart