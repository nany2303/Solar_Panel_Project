import Slider from "react-slick";
import { useEffect, useState } from "react";

const Product = () => {
  const tags = ["solarpanel", "solarwaterheater"];

  const [products] = useState([
    { id: 1, name: "Solar Panel", price: 16.64, category: "solarpanel", color: "blue", date: "2025-12-01", img: "solar-panel-01.jpg" },
    { id: 2, name: "Solar Panel", price: 25.5, category: "solarpanel", color: "black", date: "2025-12-02", img: "solar-panel-02.jpg" },
    { id: 3, name: "Solar Panel", price: 75.0, category: "solarpanel", color: "grey", date: "2025-12-03", img: "solar-panel-03.jpg" },
    { id: 4, name: "Solar Panel", price: 75.0, category: "solarpanel", color: "green", date: "2025-12-04", img: "solar-panel-04.jpg" },
    { id: 5, name: "Solar Panel", price: 75.0, category: "solarpanel", color: "red", date: "2025-12-05", img: "solar-panel-05.jpg" },
    { id: 6, name: "Solar Panel", price: 75.0, category: "solarpanel", color: "white", date: "2025-12-06", img: "solar-panel-06.jpg" },
    { id: 7, name: "Solar Panel", price: 75.0, category: "solarpanel", color: "blue", date: "2025-12-07", img: "solar-panel-07.jpg" },
    { id: 8, name: "Solar Panel", price: 75.0, category: "solarpanel", color: "grey", date: "2025-12-08", img: "solar-panel-08.jpg" },
    { id: 9, name: "Solar Water Heater", price: 34.75, category: "solarwaterheater", color: "blue", date: "2025-12-09", img: "solar-heater-01.jpg" },
    { id: 10, name: "Solar Water Heater", price: 93.2, category: "solarwaterheater", color: "black", date: "2025-12-10", img: "solar-heater-02.jpg" },
    { id: 11, name: "Solar Water Heater", price: 52.66, category: "solarwaterheater", color: "grey", date: "2025-12-11", img: "solar-heater-03.jpg" },
    { id: 12, name: "Solar Water Heater", price: 18.96, category: "solarwaterheater", color: "green", date: "2025-12-12", img: "solar-heater-04.jpg" },
    { id: 13, name: "Solar Water Heater", price: 75.0, category: "solarwaterheater", color: "red", date: "2025-12-13", img: "solar-heater-05.jpg" },
    { id: 14, name: "Solar Water Heater", price: 60.0, category: "solarwaterheater", color: "white", date: "2025-12-14", img: "solar-heater-06.jpg" },
    { id: 15, name: "Solar Water Heater", price: 55.0, category: "solarwaterheater", color: "blue", date: "2025-12-15", img: "solar-heater-07.jpg" },
    { id: 16, name: "Solar Water Heater", price: 63.15, category: "solarwaterheater", color: "grey", date: "2025-12-16", img: "solar-heater-08.jpg" },
    { id: 17, name: "Solar Street Light", price: 18.49, category: "streetlight", color: "blue", date: "2025-12-17", img: "street-light-01.jpg" },
    { id: 18, name: "Circuit breakers & Disconnect Switches", price: 54.79, category: "streetlight", color: "black", date: "2025-12-18", img: "street-light-02.jpg" },
    { id: 19, name: "Solar Street Light", price: 86.85, category: "streetlight", color: "grey", date: "2025-12-19", img: "street-light-03.jpg" },
    { id: 20, name: "Tools for Installation", price: 86.85, category: "streetlight", color: "green", date: "2025-12-20", img: "street-light-04.jpg" },
    { id: 21, name: "Tools for Installation", price: 86.85, category: "solarpanelstructure", color: "blue", date: "2025-12-21", img: "solar-structure-01.jpg" },
    { id: 22, name: "Tools for Installation", price: 86.85, category: "solarpanelstructure", color: "black", date: "2025-12-22", img: "solar-structure-02.jpg" },
    { id: 23, name: "Tools for Installation", price: 86.85, category: "solarpanelstructure", color: "grey", date: "2025-12-23", img: "solar-structure-03.jpg" },
    { id: 24, name: "Tools for Installation", price: 86.85, category: "solarpanelstructure", color: "green", date: "2025-12-24", img: "solar-structure-04.jpg" },
    { id: 25, name: "Tools for Installation", price: 36.85, category: "solarpanelstructure", color: "red", date: "2025-12-25", img: "solar-structure-05.jpg" },
    { id: 26, name: "Solar Panel", price: 16.64, category: "solarpanel", color: "blue", date: "2025-12-01", img: "solar-panel-01.jpg" },
    { id: 27, name: "Solar Panel", price: 25.5, category: "solarpanel", color: "black", date: "2025-12-02", img: "solar-panel-02.jpg" },
    { id: 28, name: "Solar Panel", price: 75.0, category: "solarpanel", color: "grey", date: "2025-12-03", img: "solar-panel-03.jpg" },
    { id: 29, name: "Solar Panel", price: 75.0, category: "solarpanel", color: "green", date: "2025-12-04", img: "solar-panel-04.jpg" },
    { id: 30, name: "Solar Panel", price: 25.5, category: "solarpanel", color: "black", date: "2025-12-02", img: "solar-panel-02.jpg" },
    { id: 31, name: "Solar Panel", price: 75.0, category: "solarpanel", color: "grey", date: "2025-12-03", img: "solar-panel-03.jpg" },
    { id: 32, name: "Solar Panel", price: 75.0, category: "solarpanel", color: "green", date: "2025-12-04", popularity: 10, img: "solar-panel-04.jpg" },
    { id: 33, name: "Solar Panel", price: 75.0, category: "solarpanel", color: "green", date: "2025-12-04", popularity: 10, img: "solar-panel-04.jpg" },
    { id: 34, name: "Solar Panel", price: 75.0, category: "solarpanel", color: "green", date: "2025-12-04", rating: 4.5, img: "solar-panel-04.jpg" },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState("*");
  const [filters, setFilters] = useState({
    sort: "default",
    price: "all",
    color: "",
    search: "",
    tags: [],
  });
  const [showFilter, setShowFilter] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [mounted, setMounted] = useState(false);

  // updateFilter handler
  const updateFilter = (type, value) => {
    setFilters((prev) => {
      if (type === "tags") {
        return {
          ...prev,
          tags: prev.tags.includes(value)
            ? prev.tags.filter((tag) => tag !== value)
            : [...prev.tags, value],
        };
      }
      return {
        ...prev,
        [type]: value,
      };
    });
  };

  // filter logic
  useEffect(() => {
    let result = [...products];

    if (filters.tags.length === 0 && activeCategory !== "*") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (filters.tags.length > 0) {
      result = result.filter((p) => filters.tags.includes(p.category));
    }

    if (filters.price !== "all") {
      if (filters.price.includes("+")) {
        const min = parseFloat(filters.price);
        result = result.filter((p) => p.price >= min);
      } else {
        const [min, max] = filters.price.split("-").map(Number);
        result = result.filter((p) => p.price >= min && p.price <= max);
      }
    }

    if (filters.color) {
      result = result.filter((p) => p.color === filters.color);
    }

    if (filters.sort !== "default") {
      if (filters.sort === "price-low-high") {
        result = [...result].sort((a, b) => a.price - b.price);
      }
      if (filters.sort === "price-high-low") {
        result = [...result].sort((a, b) => b.price - a.price);
      }
      if (filters.sort === "newest") {
        result = [...result].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
      }
      if (filters.sort === "popularity") {
        result = [...result].sort(
          (a, b) => (b.popularity || 0) - (a.popularity || 0)
        );
      }
      if (filters.sort === "rating") {
        result = [...result].sort((a, b) => (b.rating || 0) - (a.rating || 0));
      }
    }

    if (filters.search && filters.search.length > 0) {
      const searchText = filters.search.toLowerCase();
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchText)
      );
    }

    setFilteredProducts(result);
  }, [filters, activeCategory, products]);

  // mount guard (for Next.js)
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: false,
  };

  return (
    <>
      {/* Header */}
      <header>
        {/* Header desktop */}
        <div className="container-menu-desktop">
          {/* Topbar */}
          <div className="top-bar">
            <div className="content-topbar flex-sb-m h-full container">
              <div className="left-top-bar">
                Free shipping for standard order over $100
              </div>

              <div className="right-top-bar flex-w h-full">
                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  Help & FAQs
                </a>

                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  My Account
                </a>

                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  EN
                </a>

                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  USD
                </a>
              </div>
            </div>
          </div>

          <div className="wrap-menu-desktop">
            <div className="limiter-menu-desktop container">
              {/* Logo desktop */}
              <a href="#" className="logo">
                <img src="/images/icons/img-logo.png" alt="IMG-LOGO" />
              </a>

              {/* Menu desktop */}
              <div className="menu-desktop">
                <ul className="main-menu">
                  <li className="active-menu">
                    <a href="/home">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/product">Products</a>
                   </li>
{/*                     <ul className="sub-menu"> */}
{/*                       <li> */}
{/*                         <a href="/home">Solar Panels</a> */}
{/*                       </li> */}
{/*                       <li> */}
{/*                         <a href="home-02.html">Mounting Structure</a> */}
{/*                       </li> */}
{/*                       <li> */}
{/*                         <a href="home-03.html">Inverters</a> */}
{/*                       </li> */}
{/*                       <li> */}
{/*                         <a href="/home">DC cables and connectors</a> */}
{/*                       </li> */}
{/*                       <li> */}
{/*                         <a href="home-02.html">AC cables and connectors</a> */}
{/*                       </li> */}
{/*                       <li> */}
{/*                         <a href="home-03.html">Junction Boxes</a> */}
{/*                       </li> */}
{/*                       <li> */}
{/*                         <a href="/home">Combiner Box</a> */}
{/*                       </li> */}
{/*                       <li> */}
{/*                         <a href="home-02.html"> */}
{/*                           Surge protector or lightning arrestor */}
{/*                         </a> */}
{/*                       </li> */}
{/*                       <li> */}
{/*                         <a href="home-03.html">Monitoring System</a> */}
{/*                       </li> */}
{/*                       <li> */}
{/*                         <a href="home-03.html"> */}
{/*                           Circuit breakers and Disconnect Swiches */}
{/*                         </a> */}
{/*                       </li> */}
{/*                       <li> */}
{/*                         <a href="home-03.html">Grounding Equipment</a> */}
{/*                       </li> */}
{/*                       <li> */}
{/*                         <a href="home-03.html">Tools for Installation</a> */}
{/*                       </li> */}
{/*                       <li> */}
{/*                         <a href="home-03.html"> */}
{/*                           Permitting and inspection fees */}
{/*                         </a> */}
{/*                       </li> */}
{/*                       <li> */}
{/*                         <a href="home-03.html">Installation labor</a> */}
{/*                       </li> */}
{/*                     </ul> */}
{/*                   </li> */}
{/*                   <li> */}
{/*                     <a href="services.html">Services</a> */}
{/*                     <ul className="sub-menu"> */}
{/*                       <li> */}
{/*                         <a href="/home">Solar Power Plant Installations</a> */}
{/*                       </li> */}
{/*                       <li> */}
{/*                         <a href="home-02.html"> */}
{/*                           Solar Water Heater Installations */}
{/*                         </a> */}
{/*                       </li> */}
{/*                       <li> */}
{/*                         <a href="home-03.html"> */}
{/*                           Solar Street Light Installations */}
{/*                         </a> */}
{/*                       </li> */}
{/*                       <li> */}
{/*                         <a href="home-03.html">Solar CCTV Installations</a> */}
{/*                       </li> */}
{/*                     </ul> */}
{/*                   </li> */}
                  <li>
                      <a href="services.html">Services</a>
                  </li>

                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>

              {/* Icon header */}
              <div className="wrap-icon-header flex-w flex-r-m">
                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                  <i className="zmdi zmdi-search"></i>
                </div>

                <div
                  className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                  data-notify="2"
                >
                  <i className="zmdi zmdi-shopping-cart"></i>
                </div>

                <a
                  href="#"
                  className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                  data-notify="0"
                >
                  <i className="zmdi zmdi-favorite-outline"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Header Mobile */}
        <div className="wrap-header-mobile">
          {/* Logo mobile */}
          <div className="logo-mobile">
            <a href="/home">
              <img src="/images/icons/img-logo.png" alt="IMG-LOGO" />
            </a>
          </div>

          {/* Icon header */}
          <div className="wrap-icon-header flex-w flex-r-m m-r-15">
            <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
              <i className="zmdi zmdi-search"></i>
            </div>

            <div
              className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
              data-notify="3"
            >
              <i className="zmdi zmdi-shopping-cart"></i>
            </div>

            <div
              className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
              data-notify="3"
            >
              <i className="zmdi zmdi-favorite-outline"></i>
            </div>

            {/* Button show menu */}
            <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </div>
          </div>

          {/* Menu Mobile */}
          <div className="menu-mobile">
            <ul className="topbar-mobile">
              <li>
                <div className="left-top-bar">
                  Free shipping for standard order over $100
                </div>
              </li>

              <li>
                <div className="right-top-bar flex-w h-full">
                  <a href="#" className="flex-c-m p-lr-10 trans-04">
                    Help & FAQs
                  </a>

                  <a href="#" className="flex-c-m p-lr-10 trans-04">
                    My Account
                  </a>

                  <a href="#" className="flex-c-m p-lr-10 trans-04">
                    EN
                  </a>

                  <a href="#" className="flex-c-m p-lr-10 trans-04">
                    USD
                  </a>
                </div>
              </li>
            </ul>

            <ul className="main-menu-m">
              <li>
                <a href="/home">Home</a>
                <span className="arrow-main-menu-m">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </span>
              </li>

              <li>
                <a href="/product">Products</a>
              </li>

              <li>
                <a href="/about">About</a>
              </li>

              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Modal Search */}
          <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
            <div className="container-search-header">
              <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
                <img src="/images/icons/icon-close2.png" alt="CLOSE" />
              </button>

              <form className="wrap-search-header flex-w p-l-15">
                <button className="flex-c-m trans-04">
                  <i className="zmdi zmdi-search"></i>
                </button>
                <input
                  className="plh3"
                  type="text"
                  name="search"
                  placeholder="Search..."
                />
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* Cart */}
      <div className="wrap-header-cart js-panel-cart">
        <div className="s-full js-hide-cart"></div>

        <div className="header-cart flex-col-l p-l-65 p-r-25">
          <div className="header-cart-title flex-w flex-sb-m p-b-8">
            <span className="mtext-103 cl2">Your Cart</span>

            <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
              <i className="zmdi zmdi-close"></i>
            </div>
          </div>

          <div className="header-cart-content flex-w js-pscroll">
            <ul className="header-cart-wrapitem w-full">
              <li className="header-cart-item flex-w flex-t m-b-12">
                <div className="header-cart-item-img">
                  <img src="/images/solar-panel-01.jpg" alt="IMG" />
                </div>

                <div className="header-cart-item-txt p-t-8">
                  <a
                    href="#"
                    className="header-cart-item-name m-b-18 hov-cl1 trans-04"
                  >
                    Solar panel
                  </a>

                  <span className="header-cart-item-info">1 x $19.00</span>
                </div>
              </li>

              <li className="header-cart-item flex-w flex-t m-b-12">
                <div className="header-cart-item-img">
                  <img src="/images/solar-panel-02.jpg" alt="IMG" />
                </div>

                <div className="header-cart-item-txt p-t-8">
                  <a
                    href="#"
                    className="header-cart-item-name m-b-18 hov-cl1 trans-04"
                  >
                    Solar Panel
                  </a>

                  <span className="header-cart-item-info">1 x $39.00</span>
                </div>
              </li>

              <li className="header-cart-item flex-w flex-t m-b-12">
                <div className="header-cart-item-img">
                  <img src="/images/solar-panel-03.jpg" alt="IMG" />
                </div>

                <div className="header-cart-item-txt p-t-8">
                  <a
                    href="#"
                    className="header-cart-item-name m-b-18 hov-cl1 trans-04"
                  >
                    Solar Panel
                  </a>

                  <span className="header-cart-item-info">1 x $17.00</span>
                </div>
              </li>
            </ul>

            <div className="w-full">
              <div className="header-cart-total w-full p-tb-40">
                Total: $75.00
              </div>

              <div className="header-cart-buttons flex-w w-full">
                <a
                  href="shoping-cart.html"
                  className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10"
                >
                  View Cart
                </a>

                <a
                  href="shoping-cart.html"
                  className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10"
                >
                  Check Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wishlist */}
      <div className="wrap-header-cart js-panel-cart">
        <div className="s-full js-hide-cart"></div>

        <div className="header-cart flex-col-l p-l-65 p-r-25">
          <div className="header-cart-title flex-w flex-sb-m p-b-8">
            <span className="mtext-103 cl2">Your Wishlist</span>

            <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
              <i className="zmdi zmdi-close"></i>
            </div>
          </div>

          <div className="header-cart-content flex-w js-pscroll">
            <ul className="header-cart-wrapitem w-full">
              <li className="header-cart-item flex-w flex-t m-b-12">
                <div className="header-cart-item-img">
                  <img src="/images/solar-panel-01.jpg" alt="IMG" />
                </div>

                <div className="header-cart-item-txt p-t-8">
                  <a
                    href="#"
                    className="header-cart-item-name m-b-18 hov-cl1 trans-04"
                  >
                    White Shirt Pleat
                  </a>

                  <span className="header-cart-item-info">1 x $19.00</span>
                </div>
              </li>

              <li className="header-cart-item flex-w flex-t m-b-12">
                <div className="header-cart-item-img">
                  <img src="/images/solar-panel-02.jpg" alt="IMG" />
                </div>

                <div className="header-cart-item-txt p-t-8">
                  <a
                    href="#"
                    className="header-cart-item-name m-b-18 hov-cl1 trans-04"
                  >
                    Converse All Star
                  </a>

                  <span className="header-cart-item-info">1 x $39.00</span>
                </div>
              </li>

              <li className="header-cart-item flex-w flex-t m-b-12">
                <div className="header-cart-item-img">
                  <img src="/images/solar-panel-03.jpg" alt="IMG" />
                </div>

                <div className="header-cart-item-txt p-t-8">
                  <a
                    href="#"
                    className="header-cart-item-name m-b-18 hov-cl1 trans-04"
                  >
                    Nixon Porter Leather
                  </a>

                  <span className="header-cart-item-info">1 x $17.00</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Category Filter Buttons */}
      <section className="bg0 p-t-75 p-b-120">
        <div className="container">
          <div className="flex-w flex-sb-m p-b-52">
            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
              <button
                className={`text-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                  activeCategory === "*" ? "how-active1" : ""
                }`}
                onClick={() => setActiveCategory("*")}
              >
                All Products
              </button>
              <button
                className={`text-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                  activeCategory === "solarpanel" ? "how-active1" : ""
                }`}
                onClick={() => setActiveCategory("solarpanel")}
              >
                Solar Panel
              </button>
              <button
                className={`text-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                  activeCategory === "solarwaterheater" ? "how-active1" : ""
                }`}
                onClick={() => setActiveCategory("solarwaterheater")}
              >
                Solar Water Heater
              </button>
              <button
                className={`text-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                  activeCategory === "solarpanelstructure"
                    ? "how-active1"
                    : ""
                }`}
                onClick={() => setActiveCategory("solarpanelstructure")}
              >
                Solar Panel Structure
              </button>
              <button
                className={`text-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                  activeCategory === "streetlight" ? "how-active1" : ""
                }`}
                onClick={() => setActiveCategory("streetlight")}
              >
                Street Light
              </button>
              <button
                className={`text-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                  activeCategory === "watches" ? "how-active1" : ""
                }`}
                onClick={() => setActiveCategory("watches")}
              >
                Watches
              </button>
            </div>

            {/* Filter & Search Toggle Buttons */}
            <div className="flex-w flex-c-m m-tb-10">
              <div
                className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter"
                onClick={() => setShowFilter(!showFilter)}
                style={{ cursor: "pointer" }}
              >
                <i
                  className={`icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list ${
                    showFilter ? "dis-none" : ""
                  }`}
                ></i>
                <i
                  className={`icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close ${
                    showFilter ? "" : "dis-none"
                  }`}
                ></i>
                Filter
              </div>
              <div
                className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search"
                onClick={() => setShowSearch(!showSearch)}
                style={{ cursor: "pointer" }}
              >
                <i
                  className={`icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search ${
                    showSearch ? "dis-none" : ""
                  }`}
                ></i>
                <i
                  className={`icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close ${
                    showSearch ? "" : "dis-none"
                  }`}
                ></i>
                Search
              </div>
            </div>
          </div>

          {/* Search Panel */}
          <div
            className={
              showSearch
                ? "panel-search w-full p-t-10 p-b-15 show-panel"
                : "panel-search w-full p-t-10 p-b-15 dis-none"
            }
          >
            <div className="bor8 dis-flex p-l-15">
              <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                <i className="zmdi zmdi-search"></i>
              </button>
              <input
                className="mtext-107 cl2 size-114 plh2 p-r-15"
                type="text"
                name="search-product"
                placeholder="Search..."
                value={filters.search}
                onChange={(e) => updateFilter("search", e.target.value)}
              />
            </div>
          </div>

          {/* Filter Panel */}
          <div
            className={
              showFilter
                ? "panel-filter w-full p-t-10 show-panel"
                : "panel-filter w-full p-t-10 dis-none"
            }
          >
            <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
              {/* Sort */}
              <div className="filter-col1 p-r-15 p-b-27">
                <div className="mtext-102 cl2 p-b-15">Sort By</div>
                <ul>
                  <li className="p-b-6">
                    <a
                      href="#"
                      className={`filter-link stext-106 trans-04 ${
                        filters.sort === "default" ? "filter-link-active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        updateFilter("sort", "default");
                      }}
                    >
                      Default
                    </a>
                  </li>
                  <li className="p-b-6">
                    <a
                      href="#"
                      className={`filter-link stext-106 trans-04 ${
                        filters.sort === "popularity"
                          ? "filter-link-active"
                          : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        updateFilter("sort", "popularity");
                      }}
                    >
                      Popularity
                    </a>
                  </li>
                  <li className="p-b-6">
                    <a
                      href="#"
                      className={`filter-link stext-106 trans-04 ${
                        filters.sort === "rating" ? "filter-link-active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        updateFilter("sort", "rating");
                      }}
                    >
                      Average rating
                    </a>
                  </li>
                  <li className="p-b-6">
                    <a
                      href="#"
                      className={`filter-link stext-106 trans-04 ${
                        filters.sort === "newest" ? "filter-link-active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        updateFilter("sort", "newest");
                      }}
                    >
                      Newness
                    </a>
                  </li>
                  <li className="p-b-6">
                    <a
                      href="#"
                      className={`filter-link stext-106 trans-04 ${
                        filters.sort === "price-low-high"
                          ? "filter-link-active"
                          : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        updateFilter("sort", "price-low-high");
                      }}
                    >
                      Price: Low to High
                    </a>
                  </li>
                  <li className="p-b-6">
                    <a
                      href="#"
                      className={`filter-link stext-106 trans-04 ${
                        filters.sort === "price-high-low"
                          ? "filter-link-active"
                          : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        updateFilter("sort", "price-high-low");
                      }}
                    >
                      Price: High to Low
                    </a>
                  </li>
                </ul>
              </div>

              {/* Price */}
              <div className="filter-col2 p-r-15 p-b-27">
                <div className="mtext-102 cl2 p-b-15">Price</div>
                <ul>
                  <li className="p-b-6">
                    <a
                      href="#"
                      className={`filter-link stext-106 trans-04 ${
                        filters.price === "all" ? "filter-link-active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        updateFilter("price", "all");
                      }}
                    >
                      All
                    </a>
                  </li>
                  <li className="p-b-6">
                    <a
                      href="#"
                      className={`filter-link stext-106 trans-04 ${
                        filters.price === "0.00-50.00"
                          ? "filter-link-active"
                          : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        updateFilter("price", "0.00-50.00");
                      }}
                    >
                      $0.00 - $50.00
                    </a>
                  </li>
                  <li className="p-b-6">
                    <a
                      href="#"
                      className={`filter-link stext-106 trans-04 ${
                        filters.price === "50.00-100.00"
                          ? "filter-link-active"
                          : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        updateFilter("price", "50.00-100.00");
                      }}
                    >
                      $50.00 - $100.00
                    </a>
                  </li>
                  <li className="p-b-6">
                    <a
                      href="#"
                      className={`filter-link stext-106 trans-04 ${
                        filters.price === "100.00-150.00"
                          ? "filter-link-active"
                          : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        updateFilter("price", "100.00-150.00");
                      }}
                    >
                      $100.00 - $150.00
                    </a>
                  </li>
                  <li className="p-b-6">
                    <a
                      href="#"
                      className={`filter-link stext-106 trans-04 ${
                        filters.price === "150.00-200.00"
                          ? "filter-link-active"
                          : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        updateFilter("price", "150.00-200.00");
                      }}
                    >
                      $150.00 - $200.00
                    </a>
                  </li>
                  <li className="p-b-6">
                    <a
                      href="#"
                      className={`filter-link stext-106 trans-04 ${
                        filters.price === "200.00+" ? "filter-link-active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        updateFilter("price", "200.00+");
                      }}
                    >
                      $200.00+
                    </a>
                  </li>
                </ul>
              </div>

              {/* Color */}
              <div className="filter-col3 p-r-15 p-b-27">
                <div className="mtext-102 cl2 p-b-15">Color</div>
                <ul>
                  <li className="p-b-6">
                    <span
                      className="fs-15 lh-12 m-r-6"
                      style={{ color: "#222" }}
                    >
                      <i className="zmdi zmdi-circle"></i>
                    </span>
                    <a
                      href="#"
                      className={`filter-link stext-106 trans-04 ${
                        filters.color === "black" ? "filter-link-active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        updateFilter("color", "black");
                      }}
                    >
                      Black
                    </a>
                  </li>
                  <li className="p-b-6">
                    <span
                      className="fs-15 lh-12 m-r-6"
                      style={{ color: "#4272d7" }}
                    >
                      <i className="zmdi zmdi-circle"></i>
                    </span>
                    <a
                      href="#"
                      className={`filter-link stext-106 trans-04 ${
                        filters.color === "blue" ? "filter-link-active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        updateFilter("color", "blue");
                      }}
                    >
                      Blue
                    </a>
                  </li>
                  <li className="p-b-6">
                    <span
                      className="fs-15 lh-12 m-r-6"
                      style={{ color: "#b3b3b3" }}
                    >
                      <i className="zmdi zmdi-circle"></i>
                    </span>
                    <a
                      href="#"
                      className={`filter-link stext-106 trans-04 ${
                        filters.color === "grey" ? "filter-link-active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        updateFilter("color", "grey");
                      }}
                    >
                      Grey
                    </a>
                  </li>
                  <li className="p-b-6">
                    <span
                      className="fs-15 lh-12 m-r-6"
                      style={{ color: "#00ad5f" }}
                    >
                      <i className="zmdi zmdi-circle"></i>
                    </span>
                    <a
                      href="#"
                      className={`filter-link stext-106 trans-04 ${
                        filters.color === "green" ? "filter-link-active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        updateFilter("color", "green");
                      }}
                    >
                      Green
                    </a>
                  </li>
                  <li className="p-b-6">
                    <span
                      className="fs-15 lh-12 m-r-6"
                      style={{ color: "#fa4251" }}
                    >
                      <i className="zmdi zmdi-circle"></i>
                    </span>
                    <a
                      href="#"
                      className={`filter-link stext-106 trans-04 ${
                        filters.color === "red" ? "filter-link-active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        updateFilter("color", "red");
                      }}
                    >
                      Red
                    </a>
                  </li>
                  <li className="p-b-6">
                    <span
                      className="fs-15 lh-12 m-r-6"
                      style={{ color: "#aaa" }}
                    >
                      <i className="zmdi zmdi-circle-o"></i>
                    </span>
                    <a
                      href="#"
                      className={`filter-link stext-106 trans-04 ${
                        filters.color === "white" ? "filter-link-active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        updateFilter("color", "white");
                      }}
                    >
                      White
                    </a>
                  </li>
                </ul>
              </div>

              {/* Tags */}
              <div className="filter-col4 p-b-27">
                <div className="mtext-102 cl2 p-b-15">Tags</div>
                <div className="flex-w p-t-4">
                  {tags.map((tag) => (
                    <div
                      key={tag}
                      className={`flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5 pointer ${
                        filters.tags.includes(tag) ? "hov-tag1-active" : ""
                      }`}
                      onClick={() => updateFilter("tags", tag)}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="row isotope-grid">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className={`col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${p.category}`}
              >
                <div className="block2">
                  <div className="block2-pic hov-img0">
                    <img src={`/images/${p.img}`} alt="IMG-PRODUCT" />
                    <a
                      href="#"
                      className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                    >
                      Quick View
                    </a>
                  </div>

                  <div className="block2-txt flex-w flex-t p-t-14">
                    <div className="block2-txt-child1 flex-col-l ">
                      <a
                        href="/product-details"
                        className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                      >
                        {p.name}
                      </a>

                      <span className="stext-105 cl3">
                        ${p.price.toFixed(2)}
                      </span>
                    </div>

                    <div className="block2-txt-child2 flex-r p-t-3">
                      <a
                        href="#"
                        className="btn-addfavorite-b2 dis-block pos-relative js-addfavorite-b2"
                      >
                        <img
                          className="icon-heart1 dis-block trans-04"
                          src="/images/icons/icon-heart-01.png"
                          alt="ICON"
                        />
                        <img
                          className="icon-heart2 dis-block trans-04 ab-t-l"
                          src="/images/icons/icon-heart-02.png"
                          alt="ICON"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load more */}
          <div className="flex-c-m flex-w w-full p-t-45">
            <a
              href="#"
              className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
            >
              Load More
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg3 p-t-75 p-b-32">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3 p-b-50">
              <h4 className="stext-301 cl0 p-b-30">Categories</h4>

              <ul>
                <li className="p-b-10">
                  <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                    Solar Panel
                  </a>
                </li>

                <li className="p-b-10">
                  <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                    Solar Water Heaters
                  </a>
                </li>

                <li className="p-b-10">
                  <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                    Solar Panel Mounting Structure
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-sm-6 col-lg-3 p-b-50">
              <h4 className="stext-301 cl0 p-b-30">Help</h4>

              <ul>
                <li className="p-b-10">
                  <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                    Track Order
                  </a>
                </li>

                <li className="p-b-10">
                  <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                    Returns
                  </a>
                </li>

                <li className="p-b-10">
                  <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                    Shipping
                  </a>
                </li>

                <li className="p-b-10">
                  <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-sm-6 col-lg-3 p-b-50">
              <h4 className="stext-301 cl0 p-b-30">GET IN TOUCH</h4>

              <p className="stext-107 cl7 size-201">
                Any questions? Let us know in store at 8th floor, 379 Hudson
                St, New York, NY 10018 or call us on (+1) 96 716 6879
              </p>

              <div className="p-t-27">
                <a
                  href="#"
                  className="fs-18 cl7 hov-cl1 trans-04 m-r-16"
                >
                  <i className="fa fa-facebook"></i>
                </a>

                <a
                  href="#"
                  className="fs-18 cl7 hov-cl1 trans-04 m-r-16"
                >
                  <i className="fa fa-instagram"></i>
                </a>

                <a
                  href="#"
                  className="fs-18 cl7 hov-cl1 trans-04 m-r-16"
                >
                  <i className="fa fa-pinterest-p"></i>
                </a>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3 p-b-50">
              <h4 className="stext-301 cl0 p-b-30">Newsletter</h4>

              <form>
                <div className="wrap-input1 w-full p-b-4">
                  <input
                    className="input1 bg-none plh1 stext-107 cl7"
                    type="text"
                    name="email"
                    placeholder="email@example.com"
                  />
                  <div className="focus-input1 trans-04"></div>
                </div>

                <div className="p-t-18">
                  <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="p-t-40">
            <div className="flex-c-m flex-w p-b-18">
              <a href="#" className="m-all-1">
                <img src="/images/icons/icon-pay-01.png" alt="ICON-PAY" />
              </a>

              <a href="#" className="m-all-1">
                <img src="/images/icons/icon-pay-02.png" alt="ICON-PAY" />
              </a>

              <a href="#" className="m-all-1">
                <img src="/images/icons/icon-pay-03.png" alt="ICON-PAY" />
              </a>

              <a href="#" className="m-all-1">
                <img src="/images/icons/icon-pay-04.png" alt="ICON-PAY" />
              </a>

              <a href="#" className="m-all-1">
                <img src="/images/icons/icon-pay-05.png" alt="ICON-PAY" />
              </a>
            </div>

            <p className="stext-107 cl6 txt-center">
              Copyright &copy;{" "}
              {new Date().getFullYear()} All rights reserved | Made with{" "}
              <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
              <a href="https://colorlib.com/" target="_blank" rel="noreferrer">
                Colorlib
              </a>{" "}
              &amp; distributed by{" "}
              <a href="https://themewagon.com/" target="_blank" rel="noreferrer">
                Jada Technologies
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <div className="btn-back-to-top" id="myBtn">
        <span className="symbol-btn-back-to-top">
          <i className="zmdi zmdi-chevron-up"></i>
        </span>
      </div>

      {/* Modal1 (static example product) */}
      <div className="wrap-modal1 js-modal1 p-t-60 p-b-20">
        <div className="overlay-modal1 js-hide-modal1"></div>

        <div className="container">
          <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button className="how-pos3 hov3 trans-04 js-hide-modal1">
              <img src="/images/icons/icon-close.png" alt="CLOSE" />
            </button>

            <div className="row">
              <div className="col-md-6 col-lg-7 p-b-30">
                <div className="p-l-25 p-r-30 p-lr-0-lg">
                  <div className="wrap-slick3 flex-sb flex-w">
                    <div className="wrap-slick3-dots"></div>
                    <div className="wrap-slick3-arrows flex-sb-m flex-w"></div>

                    <div className="slick3 gallery-lb">
                      <div
                        className="item-slick3"
                        data-thumb="images/solar-panel-05.jpg"
                      >
                        <div className="wrap-pic-w pos-relative">
                          <img
                            src="/images/solar-panel-05.jpg"
                            alt="IMG-PRODUCT"
                          />

                          <a
                            className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                            href="/images/product-detail-01.jpg"
                          >
                            <i className="fa fa-expand"></i>
                          </a>
                        </div>
                      </div>

                      <div
                        className="item-slick3"
                        data-thumb="images/solar-panel-08.jpg"
                      >
                        <div className="wrap-pic-w pos-relative">
                          <img
                            src="/images/solar-panel-08.jpg"
                            alt="IMG-PRODUCT"
                          />

                          <a
                            className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                            href="/images/product-detail-02.jpg"
                          >
                            <i className="fa fa-expand"></i>
                          </a>
                        </div>
                      </div>

                      <div
                        className="item-slick3"
                        data-thumb="images/solar-panel-02.jpg"
                      >
                        <div className="wrap-pic-w pos-relative">
                          <img
                            src="/images/solar-panel-02.jpg"
                            alt="IMG-PRODUCT"
                          />

                          <a
                            className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                            href="/images/product-detail-03.jpg"
                          >
                            <i className="fa fa-expand"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-5 p-b-30">
                <div className="p-r-50 p-t-5 p-lr-0-lg">
                  <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                    Monitoring System
                  </h4>

                  <span className="mtext-106 cl2">$58.79</span>

                  <p className="stext-102 cl3 p-t-23">
                    Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
                    ligula. Mauris consequat ornare feugiat.
                  </p>

                  <div className="p-t-33">
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">Size</div>

                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bor8 bg0">
                          <select className="js-select2" name="time">
                            <option>Choose an option</option>
                            <option>Size S</option>
                            <option>Size M</option>
                            <option>Size L</option>
                            <option>Size XL</option>
                          </select>
                          <div className="dropDownSelect2"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-204 flex-w flex-m respon6-next">
                        <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                          <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                            <i className="fs-16 zmdi zmdi-minus"></i>
                          </div>

                          <input
                            className="mtext-104 cl3 txt-center num-product"
                            type="number"
                            name="num-product"
                            defaultValue="1"
                          />

                          <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                            <i className="fs-16 zmdi zmdi-plus"></i>
                          </div>
                        </div>

                        <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                    <div className="flex-m bor9 p-r-10 m-r-11">
                      <a
                        href="#"
                        className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addfavorite-detail tooltip100"
                        data-tooltip="Add to favoritelist"
                      >
                        <i className="zmdi zmdi-favorite"></i>
                      </a>
                    </div>

                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Facebook"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>

                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Twitter"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>

                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Google Plus"
                    >
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Example slider usage (if needed) */}
      {/* <Slider {...sliderSettings}> ... </Slider> */}
    </>
  );
};

export default Product;
