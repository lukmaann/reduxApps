/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Item = (props) => {
  return (
    <div id={props.id}>
      <img src={props.img} />
      <div className="itemDetails">
        <h6 className="p-0 m-0">{props.name}</h6>
        <small className="text-">{props.discription}</small>
        <div className="d-flex justify-content-center">
          <h5>₹{props.price}</h5>
          <h6 className="p-1 px-2 text-muted">
            <del> ₹{props.orgprice}</del>
          </h6>
        </div>
      </div>
    </div>
  );
};

export { Item };
