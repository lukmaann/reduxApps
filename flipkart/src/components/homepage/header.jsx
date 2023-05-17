/* eslint-disable react/prop-types */


const Header = (props) => {
  return (
    <div className="headercomponents">
        <img src={props.src} />
        <h6>{props.name}</h6>
    </div>
  )
}

export default Header