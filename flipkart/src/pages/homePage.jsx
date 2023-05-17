/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import Courasel from "../components/homepage/courasel";
import Header from "../components/homepage/header";
import { Item } from "../components/items/item";
import { headerComponentsData } from "../models/homepage/header";
import { mobiles } from "../models/homepage/items";
import { addItem } from "../store/slices/cartSlice";

const Home = () => {

  const dispatch=useDispatch();
  const handleClick=(payload)=>{
    dispatch(addItem(payload))
  }





  return (
    <div className="homePageDiv">
      <div className="headercontainer d-flex ">
        {headerComponentsData.map((headers, index) => {
          return <Header key={index} name={headers.name} src={headers.img} />;
        })}
      </div>
      <Courasel />

     <div className="products">
     <div  className="itemComponent">
        

        {mobiles.map((item, index) => {
          return (
            <div key={index} className="products">
              <Item
                key={index}
                img={item.img}
                name={item.name}
                discription={item.description}
                price={item.price}
                orgprice={item.orgprice}
              />
              <button className="btn btn-primary" onClick={()=>{handleClick(item)}}>Add to cart</button>
            </div>
          );
        })}
      </div>
     </div>
    </div>
  );
};

export default Home;
