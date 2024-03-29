import React, { useEffect } from "react";
import SmallHeader from "./SmallHeader";
import "../../src/DiscPage.css";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

function DiscPage({ addToCart, removeCartItem, cart, loggedInStatus }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isFound = cart.some((element) => {
    if (element.id === location.state.id) {
      return true;
    }
    return false;
  });

  return (
    <div id="scrollTop">
      <SmallHeader />
      <div
        id="discPage"
        className="container-fluid bg-trasparent mt-lg-0 mt-sm-5 mt-xs-5 p-xs-5 pt-sm-5"
        style={{
          position: "relative",
          marginLeft: "250px",
          width: "fit-content",
        }}
      >
        <div className="product mb-4">
          <div className="product-img">
            <img id="picture1" src={location.state.picture_url} alt="" />
          </div>
          <div className="product-listing">
            <div>
              <h1 className="name">{location.state.name}</h1>
              <h6>{location.state.brand}</h6>
              <p className="info">
                <img
                  style={{ width: "60%" }}
                  src={location.state.flight_path}
                  alt=""
                />
              </p>
              <p>
                Speed: {location.state.speed} | Glide:{" "}
                {location.state.glide} | Turn: {location.state.fade}{" "}
                | Fade: {location.state.fade}{" "}
              </p>
              <p className="mb-0">
                {location.state.stability} {location.state.category}
              </p>
              <p className="price">$ {location.state.price}</p>

              {isFound ? (
                <button
                  onClick={() => removeCartItem(location.state.id)}
                  className="btn btn-warning bold-btn"
                >
                  Remove From Cart
                </button>
              ) : (
                <button
                  // disabled={loggedInStatus === "LOGGED_IN" ? false : true}
                  onClick={() => addToCart(location.state.id)}
                  className="btn btn-warning bold-btn"
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default DiscPage;
