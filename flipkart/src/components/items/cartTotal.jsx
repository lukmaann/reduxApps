/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
const CartTotal = () => {
    const product=useSelector((store)=>store.cart)
    let orgprice=0
    let totalPrice=0
    product.map((item)=>{
        orgprice+=item.orgprice,
        totalPrice+=item.price

    })

    if(totalPrice>0){
  return(
    <div>
        <h3 className="text-muted border m-0" >Price Details</h3>
        <div className="priceItems">
        <h6 className="pgridItems">Price({product.length})</h6>
        <h6 className="pgridItems text-end">{orgprice}</h6>
        <h6 className="pgridItems">Discount</h6>
        <h6 className="pgridItems text-end text-success">-{orgprice-totalPrice}</h6>
        <h6 className="pgridItems">Delivery</h6>
        <h6 className="pgridItems text-end text-success ">Free</h6>
        <h6 className="pgridItems">Coupons</h6>
        <h6 className="pgridItems text-end text-success">-0</h6>
        <h5 className="total">Total</h5>
        <h5 className="total text-end">{totalPrice}</h5>





        </div>
       
        

    </div>
  )
    }else{
        return(
            <h5>Your cart is Empty <Link to="/">clickHere</Link> to Shop</h5>
        )
    }
}

export default CartTotal