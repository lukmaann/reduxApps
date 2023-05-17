const cartItem = (props) => {
  return (
    <div className="cartItemDetails" id={props.idx}>
        <img src={props.img}></img>
        <div className="cartItemDescription">
        <h6 className="">{props.name}<p className="text-muted">{props.des}</p></h6>
        <h3 >In Stock</h3>
        

        </div>
    </div>

  
  );
}

export default cartItem