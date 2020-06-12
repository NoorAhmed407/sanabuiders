import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
"mdbreact";
import './../styles/carousal.css';
import C1 from './../img/carousal1.jpg';
import C2 from './../img/carousal2.jpg';
import C3 from './../img/carousal3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

const Carousel = () => {

  const styles={
      car_cap:{
        backgroundColor: "black",
        borderRadius: "5px 20px",
        padding: "5px"
      }
  };

  return (
    <div>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={C1}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption 
         data-aos="fade-down"
          style={styles.car_cap}>
              <h4 className="h3-responsive">Design, Construction and Maintenance of physical and naturally built Environment</h4>
         </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={C2}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption 
          data-aos="fade-down"
          style={styles.car_cap}>
              <h4 className="h3-responsive">A Perfect Choice for Best Quality Living!</h4>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={C3}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption 
          data-aos="fade-down"
          style={styles.car_cap}>
              <h4 className="h3-responsive">Build your lives with us</h4> 
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </div>
  );
}

export default Carousel;