import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';







const Navbar = () => {

  const products=useSelector((state)=>state.cart);
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <div className="container-fluid ">
        <a className="navbar-brand" href="/">
            <img className="mainLogo mx-4" src="/mainlogo.png" />
          
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="d-flex">
            <input
              className="form-control rounded-0 bg-light "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-light rounded-0 " type="submit">
              <SearchIcon/>
            </button>
          </form>
          <ul className="navbar-nav me-auto mb-4 px-5 ms-auto mb-lg-0">
          <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Lukmaan
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Become a seller
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                More
              </a>
            </li>
            
            

            
            
            <li className="nav-item d-flex align-items-center ">
            <ShoppingCartIcon style={{color:"white"}}  /><sup ><span className='bg-danger text-light fw-bold rounded px-1'>{products.length}</span></sup>
                

              <a className="nav-link active" aria-current="page" href="/cart">
                Cart
              </a>
            </li>
            
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
