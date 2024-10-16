import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          carfted with the finest ingredients and culinary expertise. Our chefs
          are passionate about creating mouth-watering dishes that will leave
          your taste buds in ecstasy.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
