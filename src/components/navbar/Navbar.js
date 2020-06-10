import React from "react";
//import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header id="header" className="header-v7">
      <div className="container-fluid clearfix">
        <div id="logo">
          <a href="index.html">
            <img
              src="/assets/images/logo3.png"
              alt="AutoMov"
              width="175"
              height="53"
              data-retina="/assets/images/logo3-2x.png"
              data-width="175"
              data-height="53"
            />
          </a>
        </div>

        <div className="mobile-button v2">
          <span></span>
        </div>

        <div className="nav-wrap text-center">
          <nav id="mainnav" className="mainnav header-v1">
            <ul className="menu">
              <li className="active">
                <a href="index.html">HOME</a>
                <ul className="submenu">
                  <li>
                    <a href="index.html">HOME 1</a>
                  </li>
                  <li>
                    <a href="index2.html">HOME 2</a>
                  </li>
                  <li>
                    <a href="index3.html">HOME 3</a>
                  </li>
                  <li>
                    <a href="index4.html">HOME 4</a>
                  </li>
                  <li className="active">
                    <a href="index5.html">HOME 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">SERVICES</a>
                <ul className="submenu">
                  <li>
                    <a href="our-services.html"> OUR SERVICES</a>
                  </li>
                  <li>
                    <a href="our-services-fullwidth.html">
                      {" "}
                      OUR SERVICES FULLWIDTH
                    </a>
                  </li>
                  <li>
                    <a href="services-single.html"> SINGLE SERVICES</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">GALLERY</a>
                <ul className="submenu">
                  <li>
                    <a href="gallery-single.html">GALLERY SINGLE</a>
                  </li>
                  <li>
                    <a href="our-gallery.html">OUR GALLERY</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">PAGE</a>
                <ul className="submenu">
                  <li className="item-has-child">
                    <a href="#">Header</a>
                    <ul className="submenu">
                      <li>
                        <a href="head-search.html">Header Search</a>
                      </li>
                      <li>
                        <a href="flyout-menu.html">Flyout Menu</a>
                      </li>
                      <li>
                        <a href="mega-menu.html">Mega Menu</a>
                      </li>
                      <li>
                        <a href="home-canvas-menu.html">Canvas Menu</a>
                      </li>
                    </ul>
                  </li>
                  <li className="item-has-child">
                    <a href="#">Company</a>
                    <ul className="submenu">
                      <li>
                        <a href="about-company.html">About Company</a>
                      </li>
                      <li>
                        <a href="company-history.html">Company History</a>
                      </li>
                    </ul>
                  </li>
                  <li className="item-has-child">
                    {" "}
                    <a href="#">Project</a>
                    <ul className="submenu">
                      <li>
                        <a href="project-single.html">Project Single</a>
                      </li>
                      <li>
                        <a href="our-project-v1.html">Project v1</a>
                      </li>
                      <li>
                        <a href="our-project-v2.html">Project v2</a>
                      </li>
                      <li>
                        <a href="our-project-v3.html">Project v3</a>
                      </li>
                    </ul>
                  </li>
                  <li className="item-has-child">
                    <a href="#">Services</a>
                    <ul className="submenu">
                      <li>
                        <a href="our-services.html"> Our Services</a>
                      </li>
                      <li>
                        <a href="our-services-fullwidth.html">
                          {" "}
                          Our Services Fullwidth
                        </a>
                      </li>
                      <li>
                        <a href="services-single.html"> Single services</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="our-team.html">Our Team</a>
                  </li>
                  <li>
                    <a href="FAQs.html">FAQs</a>
                  </li>
                  <li>
                    <a href="404.html">Error 404</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">BLOG</a>
                <ul className="submenu">
                  <li>
                    <a href="blog-grid-3-columns-v1.html">
                      BLOG GRID 3 COLUMNS V1
                    </a>
                  </li>
                  <li>
                    <a href="blog-grid-3-columns-v2.html">
                      BLOG GRID 3 COLUMNS V2
                    </a>
                  </li>
                  <li>
                    <a href="blog-grid-sidebar.html">BLOG GRID WITH SIDEBAR</a>
                  </li>
                  <li>
                    <a href="blog-list-v1.html">BLOG LIST V1</a>
                  </li>
                  <li>
                    <a href="blog-list-v2.html">BLOG LIST V2</a>
                  </li>
                  <li>
                    <a href="blog-single.html">BLOG SINGLE</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">APPOINTMENT</a>
              </li>
              <li>
                <a href="#">SHOP</a>
                <ul className="submenu">
                  <li>
                    <a href="shop-grid-sidebar-v1.html">SHOP GRID SIDEBAR V1</a>
                  </li>
                  <li>
                    <a href="shop-grid-sidebar-v2.html">Shop Grid Sidebar V2</a>
                  </li>
                  <li>
                    <a href="shop-detail.html">SHOP DETAIL</a>
                  </li>
                  <li>
                    <a href="shop-detail-sidebar.html">SHOP DETAIL SIDEBAR</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">CONTACT</a>
                <ul className="submenu">
                  <li>
                    <a href="contact-us-v1.html">CONTACT US V1</a>
                  </li>
                  <li>
                    <a href="contact-us-v2.html">CONTACT US V2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flat-menu-extra clearfix">
          <ul>
            <li className="cart nav-top-cart-wrapper">
              <a href="#">
                <span className="text">My cart is (0)</span>
              </a>{" "}
              <span className="total-product">3</span>
              <div className="nav-shop-cart">
                <div className="widget_shopping_cart_content">
                  <div className="woocommerce-min-cart-wrap">
                    <ul className="woocommerce-mini-cart cart_list product_list_widget ">
                      <li className="woocommerce-mini-cart-item mini_cart_item">
                        <a href="#" className="remove">
                          <span className="fa fa-close"></span>
                        </a>
                        <a href="#">
                          <img
                            width="150"
                            height="150"
                            src="/assets/images/shop/shop-grid-sidebar-v1/product-top-1.png"
                            alt="Image"
                          />
                          Advance Blue Oil Cans
                        </a>

                        <span className="quantity">
                          1 ×{" "}
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            65
                          </span>
                        </span>
                      </li>

                      <li className="woocommerce-mini-cart-item mini_cart_item">
                        <a href="#" className="remove">
                          <span className="fa fa-close"></span>
                        </a>
                        <a href="#">
                          <img
                            width="150"
                            height="150"
                            src="/assets/images/shop/shop-grid-sidebar-v1/product-top-2.png"
                            alt="Image"
                          />
                          Simple Blue Oil Cans
                        </a>

                        <span className="quantity">
                          1 ×{" "}
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            35
                          </span>
                        </span>
                      </li>

                      <li className="woocommerce-mini-cart-item mini_cart_item">
                        <a href="#" className="remove">
                          <span className="fa fa-close"></span>
                        </a>
                        <a href="#">
                          <img
                            width="150"
                            height="150"
                            src="/assets/images/shop/shop-grid-sidebar-v1/product-top-3.png"
                            alt="Image"
                          />
                          Premium Blue Oil Cans
                        </a>

                        <span className="quantity">
                          1 ×{" "}
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            45
                          </span>
                        </span>
                      </li>
                    </ul>

                    <p className="woocommerce-mini-cart__total total">
                      <strong>Subtotal:</strong>{" "}
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        145
                      </span>
                    </p>

                    <p className="woocommerce-mini-cart__buttons buttons">
                      <a href="#" className="button wc-forward">
                        View cart
                      </a>
                      <a href="#" className="button checkout wc-forward">
                        Checkout
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>

    // <div>
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <Link className="navbar-brand" to="/">
    //       Navbar
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav mr-auto">
    //         <li className="nav-item active">
    //           <Link className="nav-link" to="/App">
    //             Home <span class="sr-only">(current)</span>
    //           </Link>
    //         </li>
    //         <li className="nav-item active">
    //           <Link className="nav-link" to="/user">
    //             User <span class="sr-only">(current)</span>
    //           </Link>
    //         </li>
    //       </ul>
    //       {/* <form className="form-inline my-2 my-lg-0">
    //         <input
    //           className="form-control mr-sm-2"
    //           type="search"
    //           placeholder="Search"
    //           aria-label="Search"
    //         />
    //         <button
    //           className="btn btn-outline-success my-2 my-sm-0"
    //           type="submit"
    //         >
    //           Search
    //         </button>
    //       </form> */}
    //     </div>
    //   </nav>
    // </div>
  );
};

export default NavBar;
