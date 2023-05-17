// import { headerCourosel } from "../../models/homepage/header";
const Courasel = () => {
 
      return (

        <div key={0} className="couraseldiv">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="\homepage\imgheadercourosel\S1.png" className="d-block w-100" alt="..." />
                
              </div>
              <div className="carousel-item">
                <img src="\homepage\imgheadercourosel\S2.png"  className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="\homepage\imgheadercourosel\S3.png" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
             
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
            
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      );
    
  
};

export default Courasel;
