import Carousel from "react-bootstrap/Carousel";

function Carol() {
  return (
    <Carousel style={{transform: translateX(-200%);}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          //   src="holder.js/800x400?text=First slide&bg=373940"
          //   alt="First slide"
        />
        <Carousel.Caption>
          <h3>Limited Time: Earn $75 with a new Apple Card.</h3>
          <p>Learn More Terms apply</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          //   src="holder.js/800x400?text=Second slide&bg=282c34"
          //   alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Why Wait? Try Store Pickup</h3>
          <p>
            Buy online and find a store near you for pick up in less than 2
            hours. Shop now.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          //   src="holder.js/800x400?text=Third slide&bg=20232a"
          //   alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Free Shipping + Returns, Free Membership, Exclusive Products</h3>
          <p>Members: Log in and use code CAMPNIKE at checkout.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carol;
