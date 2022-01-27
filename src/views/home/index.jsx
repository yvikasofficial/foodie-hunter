import React from "react";
import useHome from "./useHome";

const Home = () => {
  useHome();

  return (
    <div>
      <div className="container" id="container">
        <div id="menu">
          <div className="title">
            <img src="/images/foodie hunter.png" alt="" />
          </div>
          <div className="menu-item">
            <a href="/">About</a>
            <a href="/">Services</a>
            <a href="/">Your Orders</a>
            <a href="/">Wishlists</a>
            <a href="/">Cart</a>
            <a href="/">Contact</a>
            <a href="/">Checkout</a>
          </div>
        </div>

        <div id="food-container">
          <div id="header">
            <div className="add-box">
              <i className="fa fa-map-marker your-address" id="add-address">
                Your Address
              </i>
            </div>
            <div className="util">
              <i className="fa fa-search"> Search</i>
              <i className="fa fa-tags"> Offers</i>
              <i className="fa fa-cart-plus" id="cart-plus">
                {" "}
                0 Items
              </i>
            </div>
          </div>
          <div id="food-items" className="d-food-items">
            <div id="biryani" className="d-biryani">
              <p id="category-name">Biryani</p>
            </div>

            <div id="chicken" className="d-chicken">
              <p id="category-name">Chicken Delicious</p>
            </div>

            <div id="paneer" className="d-paneer">
              <p id="category-name">Paneer Mania</p>
            </div>

            <div id="vegetable" className="d-vegetable">
              <p id="category-name">Pure Veg Dishes</p>
            </div>

            <div id="chinese" className="d-chinese">
              <p id="category-name">Chinese Corner</p>
            </div>

            <div id="south-indian" className="d-south-indian">
              <p id="category-name">South Indian</p>
            </div>
          </div>

          <div id="cart-page" className="cart-toggle">
            <p id="cart-title">Cart Items</p>
            <p id="m-total-amount">Total Amout : 100</p>
            <table>
              <thead>
                <td>Item</td>
                <td>Name</td>
                <td>Quantity</td>
                <td>Price</td>
              </thead>
              <tbody id="table-body"></tbody>
            </table>
            <div className="btn-box">
              <button className="cart-btn">Checkout</button>
            </div>
          </div>
        </div>

        <div id="cart">
          <div className="taste-header">
            <div className="user">
              <i className="fa fa-user-circle" id="circle">
                {" "}
                Account
              </i>
            </div>
          </div>
          <div id="category-list">
            <p className="item-menu">Go For Hunt</p>
            <div className="border"></div>
          </div>
          <div id="checkout" className="cart-toggle">
            <p id="total-item">Total Item : 5</p>
            <p id="total-price"></p>
            <p id="delievery">Free delievery on $ 40</p>
            <button className="cart-btn">Checkout</button>
          </div>
        </div>
      </div>

      <div id="mobile-view" className="mobile-view">
        <div className="mobile-top">
          <div className="logo-box">
            <img src="/images/foodielogo.png" alt="" id="logo" />
            <i className="fa fa-map-marker your-address" id="m-add-address">
              Your Address
            </i>
          </div>
          <div className="top-menu">
            <i className="fa fa-search"></i>
            <i className="fa fa-tag"></i>
            <i className="fa fa-heart-o"></i>
            <i className="fa fa-cart-plus" id="m-cart-plus">
              {" "}
              0
            </i>
          </div>
        </div>

        <div className="item-container">
          <div className="category-header" id="category-header"></div>

          <div id="food-items" className="food-items">
            <div id="biryani" className="m-biryani">
              <p id="category-name">Biryani</p>
            </div>
            <div id="chicken" className="m-chicken">
              <p id="category-name">Chicken Delicious</p>
            </div>
            <div id="paneer" className="m-paneer">
              <p id="category-name">Paneer Mania</p>
            </div>
            <div id="vegetable" className="m-vegetable">
              <p id="category-name">Pure Veg Dishes</p>
            </div>
            <div id="chinese" className="m-chinese">
              <p id="category-name">Chinese Corner</p>
            </div>
            <div id="south-indian" className="m-south-indian">
              <p id="category-name">South Indian</p>
            </div>
          </div>
        </div>

        <div className="mobile-footer">
          <p>Home</p>
          <p>Cart</p>
          <p>offers</p>
          <p>orders</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
