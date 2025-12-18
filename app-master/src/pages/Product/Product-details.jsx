const ProductDetails = () => {
    return (
        <>
            <div className="header-v4">
                {/* Header desktop */}
                <div className="container-menu-desktop">
                    {/* Topbar */}
                    <div className="top-bar">
                        <div className="content-topbar flex-sb-m h-full container">
                            <div className="left-top-bar">Free shipping for standard order over $100</div>

                            <div className="right-top-bar flex-w h-full">
                                <a href="#" className="flex-c-m trans-04 p-lr-25">
                                    Help & FAQs
                                </a>

                                <a href="#" className="flex-c-m trans-04 p-lr-25">
                                    My Account
                                </a>

                                <a href="#" className="flex-c-m trans-04 p-lr-25">EN</a>

                                <a href="#" className="flex-c-m trans-04 p-lr-25">USD</a>
                            </div>
                        </div>
                    </div>

                    <div className="wrap-menu-desktop how-shadow1">
                        <nav className="limiter-menu-desktop container">
                            {/* Logo desktop */}
                            <a href="#" className="logo">
                                <img src="/images/icons/img-logo.png" alt="IMG-LOGO"/>
                            </a>

                            {/* Menu desktop */}
                            <div className="menu-desktop">
                                <ul className="main-menu">
                                    <li>
                                        <a href="/index">Home</a>
                                        {/* <ul className="sub-menu">
                                <li><a href="index-2.html">Homepage 1</a></li>
                                <li><a href="home-02.html">Homepage 2</a></li>
                                <li><a href="home-03.html">Homepage 3</a></li>
                               </ul> */}
                                    </li>

                                    <li>
                                        <a href="/about">About</a>
                                    </li>

                                    <li>
                                        <a href="/product">Product</a>
                                    </li>

                                    <li>
                                        <a href="services.html">Services</a>
                                        <ul className="sub-menu">
                                            <li><a href="/home">Solar Power Plant Installations</a></li>
                                            <li><a href="home-02.html">Solar Water Heater Installations</a></li>
                                            <li><a href="home-03.html">Solar Street Light Installations</a></li>
                                            <li><a href="home-03.html">Solar CCTV Installations</a></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <a href="/contact">Contact</a>
                                    </li>
                                </ul>
                            </div>

                            {/* Icon header */}
                            <div className="wrap-icon-header flex-w flex-r-m">
                                <div
                                    className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
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
                                    className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                                    data-notify="0"
                                >
                                    <i className="zmdi zmdi-favorite-outline"></i>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>

                {/* Header Mobile */}
                <div className="wrap-header-mobile">
                    {/* Logo mobile */}
                    <div className="logo-mobile">
                        <a href="/home">
                            <img src="/images/icons/img-logo.png" alt="IMG-LOGO"/>
                        </a>
                    </div>

                    {/* Icon header */}
                    <div className="wrap-icon-header flex-w flex-r-m m-r-15">
                        <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
                            <i className="zmdi zmdi-search"></i>
                        </div>

                        <div
                            className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
                            data-notify="2"
                        >
                            <i className="zmdi zmdi-shopping-cart"></i>
                        </div>

                        <a
                            href="#"
                            className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
                            data-notify="0"
                        >
                            <i className="zmdi zmdi-favorite-outline"></i>
                        </a>
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
                            <div className="left-top-bar">Free shipping for standard order over $100</div>
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
                            {/* <ul className="sub-menu-m">
                          <li><a href="index-2.html">Homepage 1</a></li>
                          <li><a href="home-02.html">Homepage 2</a></li>
                          <li><a href="home-03.html">Homepage 3</a></li>
                         </ul> */}
                            <span className="arrow-main-menu-m">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </span>
                        </li>

                        <li>
                            <a href="/product">Shop</a>
                        </li>

                        <li>
                            <a href="shoping-cart.html" className="label1 rs1" data-label1="hot">
                                Features
                            </a>
                        </li>

                        <li>
                            <a href="/blog">Blog</a>
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
                        <button
                            className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search"
                            type="button"
                        >
                            <img src="/images/icons/icon-close2.png" alt="CLOSE"/>
                        </button>

                        <form className="wrap-search-header flex-w p-l-15">
                            <button className="flex-c-m trans-04" type="submit">
                                <i className="zmdi zmdi-search"></i>
                            </button>
                            <input className="plh3" type="text" name="search" placeholder="Search..."/>
                        </form>
                    </div>
                </div>
            </div>

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
                                    <img src="/images/solar-panel-04.jpg" alt="IMG"/>
                                </div>

                                <div className="header-cart-item-txt p-t-8">
                                    <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                        Solar Panel
                                    </a>

                                    <span className="header-cart-item-info">1 x $19.00</span>
                                </div>
                            </li>

                            <li className="header-cart-item flex-w flex-t m-b-12">
                                <div className="header-cart-item-img">
                                    <img src="/images/solar-panel-02.jpg" alt="IMG"/>
                                </div>

                                <div className="header-cart-item-txt p-t-8">
                                    <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                        Solar Panel
                                    </a>

                                    <span className="header-cart-item-info">1 x $39.00</span>
                                </div>
                            </li>

                            <li className="header-cart-item flex-w flex-t m-b-12">
                                <div className="header-cart-item-img">
                                    <img src="/images/solar-panel-06.jpg" alt="IMG"/>
                                </div>

                                <div className="header-cart-item-txt p-t-8">
                                    <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                        Solar Panel
                                    </a>

                                    <span className="header-cart-item-info">1 x $17.00</span>
                                </div>
                            </li>
                        </ul>

                        <div className="w-full">
                            <div className="header-cart-total w-full p-tb-40">Total: $75.00</div>

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

            {/* breadcrumb */}
            <div className="container">
                <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                    <a href="/home" className="stext-109 cl8 hov-cl1 trans-04">
                        Home
                        <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                    </a>

                    <a href="/product" className="stext-109 cl8 hov-cl1 trans-04">
                        Solar Water Heater
                        <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                    </a>

                    <span className="stext-109 cl4">Solar Energy</span>
                </div>
            </div>

            {/* Product Detail */}
            <section className="sec-product-detail bg0 p-t-65 p-b-60">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-7 p-b-30">
                            <div className="p-l-25 p-r-30 p-lr-0-lg">
                                <div className="wrap-slick3 flex-sb flex-w">
                                    <div className="wrap-slick3-dots"></div>
                                    <div className="wrap-slick3-arrows flex-sb-m flex-w"></div>

                                    <div className="slick3 gallery-lb">
                                        <div className="item-slick3" data-thumb="images/solar-panel-04.jpg">
                                            <div className="wrap-pic-w pos-relative">
                                                <img src="/images/solar-panel-04.jpg" alt="IMG-PRODUCT"/>

                                                <a
                                                    className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                                                    href="/images/solar-panel-01.jpg"
                                                >
                                                    <i className="fa fa-expand"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="item-slick3" data-thumb="images/solar-panel-02.jpg">
                                            <div className="wrap-pic-w pos-relative">
                                                <img src="/images/solar-panel-02.jpg" alt="IMG-PRODUCT"/>

                                                <a
                                                    className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                                                    href="/images/solar-panel-02.jpg"
                                                >
                                                    <i className="fa fa-expand"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="item-slick3" data-thumb="images/solar-panel-03.jpg">
                                            <div className="wrap-pic-w pos-relative">
                                                <img src="/images/solar-panel-03.jpg" alt="IMG-PRODUCT"/>

                                                <a
                                                    className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                                                    href="/images/solar-panel-03.jpg"
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
                                <h4 className="mtext-105 cl2 js-name-detail p-b-14">Solar Panel</h4>

                                <span className="mtext-106 cl2">$58.79</span>

                                <p className="stext-102 cl3 p-t-23">
                                    Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris
                                    consequat ornare feugiat.
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

                                            <button
                                                className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                                    <div className="flex-m bor9 p-r-10 m-r-11">
                                        <a
                                            href="#"
                                            className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                                            data-tooltip="Add to Wishlist"
                                        >
                                            <i className="zmdi zmdi-favorite"></i>
                                        </a>
                                    </div>

                                    <a href="#"
                                       className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                       data-tooltip="Facebook">
                                        <i className="fa fa-facebook"></i>
                                    </a>

                                    <a href="#"
                                       className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                       data-tooltip="Twitter">
                                        <i className="fa fa-twitter"></i>
                                    </a>

                                    <a href="#"
                                       className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                       data-tooltip="Google Plus">
                                        <i className="fa fa-google-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bor10 m-t-50 p-t-43 p-b-40">
                        {/* Tab01 */}
                        <div className="tab01">
                            {/* Nav tabs */}
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item p-b-10">
                                    <a className="nav-link active" data-toggle="tab" href="#description" role="tab">
                                        Description
                                    </a>
                                </li>

                                <li className="nav-item p-b-10">
                                    <a className="nav-link" data-toggle="tab" href="#information" role="tab">
                                        Additional information
                                    </a>
                                </li>

                                <li className="nav-item p-b-10">
                                    <a className="nav-link" data-toggle="tab" href="#reviews" role="tab">
                                        Reviews (1)
                                    </a>
                                </li>
                            </ul>
                            {/* Tab panes */}
                            <div className="tab-content p-t-43">
                                {/* Description Tab */}
                                <div className="tab-pane fade show active" id="description" role="tabpanel">
                                    <div className="how-pos2 p-lr-15-md">
                                        <p className="stext-102 cl6">
                                            Aenean sit amet gravida nisi. Nam fermentum est felis, quis feugiat nunc
                                            fringilla sit amet. Ut in blandit ipsum. Quisque luctus dui at ante aliquet,
                                            in hendrerit lectus interdum. Morbi elementum sapien rhoncus pretium
                                            maximus. Nulla lectus enim, cursus et elementum sed, sodales vitae eros. Ut
                                            ex quam, porta consequat interdum in, faucibus eu velit. Quisque rhoncus ex
                                            ac libero varius molestie. Aenean tempor sit amet orci nec iaculis. Cras sit
                                            amet nulla libero. Curabitur dignissim, nunc nec laoreet consequat, purus
                                            nunc porta lacus, vel efficitur tellus augue in ipsum. Cras in arcu sed
                                            metus rutrum iaculis. Nulla non tempor erat. Duis in egestas nunc.
                                        </p>
                                    </div>
                                </div>

                                {/* Information Tab */}
                                <div className="tab-pane fade" id="information" role="tabpanel">
                                    <div className="row">
                                        <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                                            <ul className="p-lr-28 p-lr-15-sm">
                                                <li className="flex-w flex-t p-b-7">
                                                    <span className="stext-102 cl3 size-205">Weight</span>
                                                    <span className="stext-102 cl6 size-206">0.79 kg</span>
                                                </li>
                                                <li className="flex-w flex-t p-b-7">
                                                    <span className="stext-102 cl3 size-205">Dimensions</span>
                                                    <span className="stext-102 cl6 size-206">110 x 33 x 100 cm</span>
                                                </li>
                                                <li className="flex-w flex-t p-b-7">
                                                    <span className="stext-102 cl3 size-205">Materials</span>
                                                    <span className="stext-102 cl6 size-206">60% cotton</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Reviews Tab */}
                                <div className="tab-pane fade" id="reviews" role="tabpanel">
                                    <div className="row">
                                        <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                                            <div className="p-b-30 m-lr-15-sm">
                                                {/* Single Review */}
                                                <div className="flex-w flex-t p-b-68">
                                                    <div className="wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6">
                                                        <img src="/images/avatar-01.jpg" alt="AVATAR"/>
                                                    </div>
                                                    <div className="size-207">
                                                        <div className="flex-w flex-sb-m p-b-17">
                                                            <span className="mtext-107 cl2 p-r-20">Ariana Grande</span>
                                                            <span className="fs-18 cl11">
                                <i className="zmdi zmdi-star"></i>
                                <i className="zmdi zmdi-star"></i>
                                <i className="zmdi zmdi-star"></i>
                                <i className="zmdi zmdi-star"></i>
                                <i className="zmdi zmdi-star-half"></i>
                              </span>
                                                        </div>
                                                        <p className="stext-102 cl6">
                                                            Quod autem in homine praestantissimum atque optimum est, id
                                                            deseruit. Apud ceteros autem philosophos
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Add Review Form */}
                                                <form className="w-full">
                                                    <h5 className="mtext-108 cl2 p-b-7">Add a review</h5>
                                                    <p className="stext-102 cl6">
                                                        Your email address will not be published. Required fields are
                                                        marked *
                                                    </p>

                                                    <div className="flex-w flex-m p-t-50 p-b-23">
                                                        <span className="stext-102 cl3 m-r-16">Your Rating</span>
                                                        <span className="wrap-rating fs-18 cl11 pointer">
                              <i className="item-rating pointer zmdi zmdi-star-outline"></i>
                              <i className="item-rating pointer zmdi zmdi-star-outline"></i>
                              <i className="item-rating pointer zmdi zmdi-star-outline"></i>
                              <i className="item-rating pointer zmdi zmdi-star-outline"></i>
                              <i className="item-rating pointer zmdi zmdi-star-outline"></i>
                              <input className="dis-none" type="number" name="rating"/>
                            </span>
                                                    </div>

                                                    <div className="row p-b-25">
                                                        <div className="col-12 p-b-5">
                                                            <label className="stext-102 cl3" htmlFor="review">
                                                                Your review
                                                            </label>
                                                            <textarea
                                                                className="size-110 bor8 stext-102 cl2 p-lr-20 p-tb-10"
                                                                id="review"
                                                                name="review"
                                                            ></textarea>
                                                        </div>

                                                        <div className="col-sm-6 p-b-5">
                                                            <label className="stext-102 cl3" htmlFor="name">
                                                                Name
                                                            </label>
                                                            <input
                                                                className="size-111 bor8 stext-102 cl2 p-lr-20"
                                                                id="name"
                                                                type="text"
                                                                name="name"
                                                            />
                                                        </div>

                                                        <div className="col-sm-6 p-b-5">
                                                            <label className="stext-102 cl3" htmlFor="email">
                                                                Email
                                                            </label>
                                                            <input
                                                                className="size-111 bor8 stext-102 cl2 p-lr-20"
                                                                id="email"
                                                                type="text"
                                                                name="email"
                                                            />
                                                        </div>
                                                    </div>

                                                    <button
                                                        className="flex-c-m stext-101 cl0 size-112 bg7 bor11 hov-btn3 p-lr-15 trans-04 m-b-10">
                                                        Submit
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg6 flex-c-m flex-w size-302 m-t-73 p-tb-15">
                                <span className="stext-107 cl6 p-lr-25">SKU: JAK-01</span>
                                <span className="stext-107 cl6 p-lr-25">Categories: Jacket, Men</span>
                            </div>

                            {/* Related Products */}
                            <section className="sec-relate-product bg0 p-t-45 p-b-105">
                                <div className="container">
                                    <div className="p-b-45">
                                        <h3 className="ltext-106 cl5 txt-center">Related Products</h3>
                                    </div>

                                    {/* Slide2 */}
                                    <div className="wrap-slick2">
                                        <div className="slick2">
                                            {/* Single Related Product Item */}
                                            {[
                                                {
                                                    imgSrc: "images/solar-panel-01.jpg",
                                                    title: "Solar Panel",
                                                    price: "$16.64",
                                                },
                                                {
                                                    imgSrc: "images/solar-panel-06.jpg",
                                                    title: "Solar Panel",
                                                    price: "$35.31",
                                                },
                                                {
                                                    imgSrc: "images/solar-panel-02.jpg",
                                                    title: "Solar Panel",
                                                    price: "$35.31",
                                                },
                                                {
                                                    imgSrc: "images/solar-panel-03.jpg",
                                                    title: "Solar Panel",
                                                    price: "$25.50",
                                                },
                                                {
                                                    imgSrc: "images/solar-panel-01.jpg",
                                                    title: "Solar Panel",
                                                    price: "$25.50",
                                                },
                                                {
                                                    imgSrc: "images/solar-panel-04.jpg",
                                                    title: "Solar Panel",
                                                    price: "$75.00",
                                                },
                                                {
                                                    imgSrc: "images/street-light-01.jpg",
                                                    title: "Solar Energy",
                                                    price: "$34.75",
                                                },
                                                {
                                                    imgSrc: "images/street-light-02.jpg",
                                                    title: "Solar Energy",
                                                    price: "$93.20",
                                                },
                                                {
                                                    imgSrc: "images/street-light-03.jpg",
                                                    title: "Solar Energy",
                                                    price: "$52.66",
                                                },
                                                {
                                                    imgSrc: "images/street-light-04.jpg",
                                                    title: "Solar Energy",
                                                    price: "$18.96",
                                                },
                                            ].map((product, index) => (
                                                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15" key={index}>
                                                    <div className="block2">
                                                        <div className="block2-pic hov-img0">
                                                            <img src={product.imgSrc} alt="IMG-PRODUCT"/>
                                                            <a
                                                                href="#"
                                                                className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                                                            >
                                                                Quick View
                                                            </a>
                                                        </div>
                                                        <div className="block2-txt flex-w flex-t p-t-14">
                                                            <div className="block2-txt-child1 flex-col-l">
                                                                <a
                                                                    href="/product-details"
                                                                    className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                                                                >
                                                                    {product.title}
                                                                </a>
                                                                <span className="stext-105 cl3">{product.price}</span>
                                                            </div>
                                                            <div className="block2-txt-child2 flex-r p-t-3">
                                                                <a href="#"
                                                                   className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
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
                                                        Solar Water Heater
                                                    </a>
                                                </li>
                                                <li className="p-b-10">
                                                    <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                                        Solar Panel Structure
                                                    </a>
                                                </li>
                                                <li className="p-b-10">
                                                    <a href="#" className="stext-107 cl7 hov-cl1 trans-04">Solar
                                                        Light</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-sm-6 col-lg-3 p-b-50">
                                            <h4 className="stext-301 cl0 p-b-30">Help</h4>
                                            <ul>
                                                <li className="p-b-10">
                                                    <a href="#" className="stext-107 cl7 hov-cl1 trans-04">Track
                                                        Order</a>
                                                </li>
                                                <li className="p-b-10">
                                                    <a href="#" className="stext-107 cl7 hov-cl1 trans-04">Returns</a>
                                                </li>
                                                <li className="p-b-10">
                                                    <a href="#" className="stext-107 cl7 hov-cl1 trans-04">Shipping</a>
                                                </li>
                                                <li className="p-b-10">
                                                    <a href="#" className="stext-107 cl7 hov-cl1 trans-04">FAQs</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-sm-6 col-lg-3 p-b-50">
                                            <h4 className="stext-301 cl0 p-b-30">GET IN TOUCH</h4>
                                            <p className="stext-107 cl7 size-201">
                                                Any questions? Let us know in store at 8th floor, 379 Hudson St, New
                                                York, NY 10018 or call us on (+1) 96 716 6879
                                            </p>

                                            <div className="p-t-27">
                                                <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                                <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                                    <i className="fa fa-instagram"></i>
                                                </a>
                                                <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
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
                                                    <button
                                                        type="submit"
                                                        className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04"
                                                    >
                                                        Subscribe
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="p-t-40">
                                        <div className="flex-c-m flex-w p-b-18">
                                            <a href="#" className="m-all-1">
                                                <img src="/images/icons/icon-pay-01.png" alt="ICON-PAY"/>
                                            </a>
                                            <a href="#" className="m-all-1">
                                                <img src="/images/icons/icon-pay-02.png" alt="ICON-PAY"/>
                                            </a>
                                            <a href="#" className="m-all-1">
                                                <img src="/images/icons/icon-pay-03.png" alt="ICON-PAY"/>
                                            </a>
                                            <a href="#" className="m-all-1">
                                                <img src="/images/icons/icon-pay-04.png" alt="ICON-PAY"/>
                                            </a>
                                            <a href="#" className="m-all-1">
                                                <img src="/images/icons/icon-pay-05.png" alt="ICON-PAY"/>
                                            </a>
                                        </div>

                                        <p className="stext-107 cl6 txt-center">
                                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                            Copyright &copy;{new Date().getFullYear()} All rights reserved | Made
                                            with{" "}
                                            <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                                            <a href="https://colorlib.com/" target="_blank" rel="noopener noreferrer">
                                                Colorlib
                                            </a>{" "}
                                            &amp; distributed by{" "}
                                            <a href="https://themewagon.com/" target="_blank" rel="noopener noreferrer">
                                                ThemeWagon
                                            </a>
                                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
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

                            {/* Modal1 */}
                            <div className="wrap-modal1 js-modal1 p-t-60 p-b-20">
                                <div className="overlay-modal1 js-hide-modal1"></div>

                                <div className="container">
                                    <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                                        <button type="button" className="how-pos3 hov3 trans-04 js-hide-modal1">
                                            <img src="/images/icons/icon-close.png" alt="CLOSE"/>
                                        </button>

                                        <div className="row">
                                            <div className="col-md-6 col-lg-7 p-b-30">
                                                <div className="p-l-25 p-r-30 p-lr-0-lg">
                                                    <div className="wrap-slick3 flex-sb flex-w">
                                                        <div className="wrap-slick3-dots"></div>
                                                        <div className="wrap-slick3-arrows flex-sb-m flex-w"></div>

                                                        <div className="slick3 gallery-lb">
                                                            <div className="item-slick3"
                                                                 data-thumb="images/solar-panel-01.jpg">
                                                                <div className="wrap-pic-w pos-relative">
                                                                    <img src="/images/solar-panel-01.jpg"
                                                                         alt="IMG-PRODUCT"/>

                                                                    <a
                                                                        className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                                                                        href="/images/product-detail-01.jpg"
                                                                    >
                                                                        <i className="fa fa-expand"></i>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div className="item-slick3"
                                                                 data-thumb="images/solar-panel-02.jpg">
                                                                <div className="wrap-pic-w pos-relative">
                                                                    <img src="/images/solar-panel-02.jpg"
                                                                         alt="IMG-PRODUCT"/>

                                                                    <a
                                                                        className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                                                                        href="/images/product-detail-02.jpg"
                                                                    >
                                                                        <i className="fa fa-expand"></i>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div className="item-slick3"
                                                                 data-thumb="images/solar-panel-03.jpg">
                                                                <div className="wrap-pic-w pos-relative">
                                                                    <img src="/images/solar-panel-03.jpg"
                                                                         alt="IMG-PRODUCT"/>

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
                                                    <h4 className="mtext-105 cl2 js-name-detail p-b-14">Solar
                                                        Energy</h4>

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
                                                            <div className="size-203 flex-c-m respon6">Color</div>

                                                            {/*
                              <div className="size-204 respon6-next">
                                <div className="rs1-select2 bor8 bg0">
                                  <select className="js-select2" name="time">
                                    <option>Choose an option</option>
                                    <option>Red</option>
                                    <option>Blue</option>
                                    <option>White</option>
                                    <option>Grey</option>
                                  </select>
                                  <div className="dropDownSelect2"></div>
                                </div>
                              </div>
                              */}
                                                        </div>

                                                        <div className="flex-w flex-r-m p-b-10">
                                                            <div className="size-204 flex-w flex-m respon6-next">
                                                                <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                                                                    <div
                                                                        className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                                        <i className="fs-16 zmdi zmdi-minus"></i>
                                                                    </div>

                                                                    <input
                                                                        className="mtext-104 cl3 txt-center num-product"
                                                                        type="number"
                                                                        name="num-product"
                                                                        defaultValue="1"
                                                                    />

                                                                    <div
                                                                        className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                                        <i className="fs-16 zmdi zmdi-plus"></i>
                                                                    </div>
                                                                </div>

                                                                <button
                                                                    className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                                                    Add to cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                                                        <div className="flex-m bor9 p-r-10 m-r-11">
                                                            <a
                                                                href="#"
                                                                className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                                                                data-tooltip="Add to Wishlist"
                                                            >
                                                                <i className="zmdi zmdi-favorite"></i>
                                                            </a>
                                                        </div>

                                                        <a href="#"
                                                           className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                                           data-tooltip="Facebook">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>

                                                        <a href="#"
                                                           className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                                           data-tooltip="Twitter">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>

                                                        <a href="#"
                                                           className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                                           data-tooltip="Google Plus">
                                                            <i className="fa fa-google-plus"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductDetails;
