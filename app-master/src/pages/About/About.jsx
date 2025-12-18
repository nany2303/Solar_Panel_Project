const About = () => {
    return (
        <>
                {/* Header */}
                <div className="header-v4">
                    {/* Header desktop */}
                    <div className="container-menu-desktop">
                        {/* Topbar */}
                        <div className="top-bar">
                            <div className="content-topbar flex-sb-m h-full container">
                                <div className="left-top-bar">
                                    Free shipping for standard order over $100 </div>
                                <div className="right-top-bar flex-w h-full">
                                    <a href="#" className="flex-c-m trans-04 p-lr-25">
                                        Help & FAQs </a>
                                    <a href="#" className="flex-c-m trans-04 p-lr-25">
                                        My Account </a>
                                    <a href="#" className="flex-c-m trans-04 p-lr-25">
                                        EN </a>
                                    <a href="#" className="flex-c-m trans-04 p-lr-25">
                                        USD </a>
                                </div>
                            </div>
                        </div>

                        <div className="wrap-menu-desktop how-shadow1">
                            <div className="limiter-menu-desktop container">
                                {/* Logo desktop */}
                                <a href="#" className="logo">
                                    <img src="/images/icons/img-logo.png" alt="IMG-LOGO" />
                                </a>

                                {/* Menu desktop */}
                                <div className="menu-desktop">
                                    <ul className="main-menu">
                                        <li>
                                            <a href="/index">Home</a>
                                        </li>
                                        <li className="active-menu">
                                            <a href="/about">About</a>
                                        </li>
                                        <li>
                                            <a href="/product">Products</a>
                                            <ul className="sub-menu">
                                                <li><a href="/home">Solar Panels</a></li>
                                                <li><a href="home-02.html">Mounting Structure</a></li>
                                                <li><a href="home-03.html">Inverters</a></li>
                                                <li><a href="/home">DC cables and connectors</a></li>
                                                <li><a href="home-02.html">AC cables and connectors</a></li>
                                                <li><a href="home-03.html">Junction Boxes</a></li>
                                                <li><a href="/home">Combiner Box</a></li>
                                                <li><a href="home-02.html">Surge protector or lightning arrestor</a></li>
                                                <li><a href="home-03.html">Monitoring System</a></li>
                                                <li><a href="home-03.html">Circuit breakers and Disconnect Swiches</a></li>
                                                <li><a href="home-03.html">Grounding Equipment</a></li>
                                                <li><a href="home-03.html">Tools for Installation</a></li>
                                                <li><a href="home-03.html">Permitting and inspection fees</a></li>
                                                <li><a href="home-03.html">Installation labor</a></li>
                                            </ul>
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
                                    <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                                        <i className="zmdi zmdi-search"></i>
                                    </div>
                                    <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify="2">
                                        <i className="zmdi zmdi-shopping-cart"></i>
                                    </div>
                                    <a href="#" className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="0">
                                        <i className="zmdi zmdi-favorite-outline"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            {/* Header Mobile */}
            <div className="wrap-header-mobile">
                {/* Logo moblie */}
                <div className="logo-mobile">
                    <a href="/home"><img src="/images/icons/img-logo.png" alt="IMG-LOGO" /></a>
                </div>

                {/* Icon header */}
                <div className="wrap-icon-header flex-w flex-r-m m-r-15">
                    <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
                        <i className="zmdi zmdi-search"></i>
                    </div>
                    <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify="2">
                        <i className="zmdi zmdi-shopping-cart"></i>
                    </div>
                    <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify="0">
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
                        <div className="left-top-bar">
                            Free shipping for standard order over $100 </div>
                    </li>
                    <li>
                        <div className="right-top-bar flex-w h-full">
                            <a href="#" className="flex-c-m p-lr-10 trans-04">
                                Help & FAQs </a>
                            <a href="#" className="flex-c-m p-lr-10 trans-04">
                                My Account </a>
                            <a href="#" className="flex-c-m p-lr-10 trans-04">
                                EN </a>
                            <a href="#" className="flex-c-m p-lr-10 trans-04">
                                USD </a>
                        </div>
                    </li>
                </ul>
                <ul className="main-menu-m">
                    <li>
                        <a href="/home">Home</a>
                        <ul className="sub-menu-m">
                            <li><a href="/home">Homepage1</a></li>
                            <li><a href="home-02.html">Homepage2</a></li>
                            <li><a href="home-03.html">Homepage3</a></li>
                        </ul>
                        <span className="arrow-main-menu-m">
                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                            </span>
                    </li>
                    <li>
                        <a href="/product">Shop</a>
                    </li>
                    <li>
                        <a href="shoping-cart.html" className="label1 rs1" data-label1="hot">Features</a>
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

                {/* Cart */}
                <div className="wrap-header-cart js-panel-cart">
                    <div className="s-full js-hide-cart"></div>
                    <div className="header-cart flex-col-l p-l-65 p-r-25">
                        <div className="header-cart-title flex-w flex-sb-m p-b-8">
 <span className="mtext-103 cl2">
 Your Cart </span>
                            <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
                                <i className="zmdi zmdi-close"></i>
                            </div>
                        </div>
                        <div className="header-cart-content flex-w js-pscroll">
                            <ul className="header-cart-wrapitem w-full">
                                <li className="header-cart-item flex-w flex-t m-b-12">
                                    <div className="header-cart-item-img">
                                        <img src="/images/item-cart-01.jpg" alt="IMG" />
                                    </div>
                                    <div className="header-cart-item-txt p-t-8">
                                        <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                            White Shirt Pleat </a>
                                        <span className="header-cart-item-info">
1 x $19.00 </span>
                                    </div>
                                </li>
                                <li className="header-cart-item flex-w flex-t m-b-12">
                                    <div className="header-cart-item-img">
                                        <img src="/images/item-cart-02.jpg" alt="IMG" />
                                    </div>
                                    <div className="header-cart-item-txt p-t-8">
                                        <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                            Converse All Star </a>
                                        <span className="header-cart-item-info">
1 x $39.00 </span>
                                    </div>
                                </li>
                                <li className="header-cart-item flex-w flex-t m-b-12">
                                    <div className="header-cart-item-img">
                                        <img src="/images/item-cart-03.jpg" alt="IMG" />
                                    </div>
                                    <div className="header-cart-item-txt p-t-8">
                                        <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                            Nixon Porter Leather </a>
                                        <span className="header-cart-item-info">
1 x $17.00 </span>
                                    </div>
                                </li>
                            </ul>
                            <div className="w-full">
                                <div className="header-cart-total w-full p-tb-40">
                                    Total: $75.00 </div>
                                <div className="header-cart-buttons flex-w w-full">
                                    <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                                        View Cart </a>
                                    <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                                        Check Out </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Title page */}
                <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: "url('images/solar-banner-06.jpg')" }}>
                    <h2 className="ltext-105 cl0 txt-center">
                        About </h2>
                </section>

                {/* Content page */}
                <section className="bg0 p-t-75 p-b-120">
                    <div className="container">
                        <div className="row p-b-148">
                            <div className="col-md-7 col-lg-8">
                                <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                                    <h3 className="mtext-111 cl2 p-b-16">
                                        Our Story </h3>
                                    <p className="stext-113 cl6 p-b-26">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.
                                    </p>
                                    <p className="stext-113 cl6 p-b-26">
                                        Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.
                                    </p>
                                    <p className="stext-113 cl6 p-b-26">
                                        Any questions? Let us know in store at8th floor,379 Hudson St, New York, NY10018 or call us on (+1)967166879 </p>
                                </div>
                            </div>
                            <div className="col-11 col-md-5 col-lg-4 m-lr-auto">
                                <div className="how-bor1 ">
                                    <div className="hov-img0">
                                        <img src="/images/about-01.jpg" alt="IMG" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="order-md-2 col-md-7 col-lg-8 p-b-30">
                                <div className="p-t-7 p-l-85 p-l-15-lg p-l-0-md">
                                    <h3 className="mtext-111 cl2 p-b-16">
                                        Our Mission </h3>
                                    <p className="stext-113 cl6 p-b-26">
                                        Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.
                                    </p>
                                    <div className="bor16 p-l-29 p-b-9 m-t-22">
                                        <p className="stext-114 cl6 p-r-40 p-b-11">
                                            Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
                                        </p>
                                        <span className="stext-111 cl8">
 - Steve Job’s </span>
                                    </div>
                                </div>
                            </div>
                            <div className="order-md-1 col-11 col-md-5 col-lg-4 m-lr-auto p-b-30">
                                <div className="how-bor2">
                                    <div className="hov-img0">
                                        <img src="/images/about-02.jpg" alt="IMG" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg3 p-t-75 p-b-32">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3 p-b-50">
                                <h4 className="stext-301 cl0 p-b-30">
                                    Categories </h4>
                                <ul>
                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            Women </a>
                                    </li>
                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            Men </a>
                                    </li>
                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            Shoes </a>
                                    </li>
                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            Watches </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-lg-3 p-b-50">
                                <h4 className="stext-301 cl0 p-b-30">
                                    Help </h4>
                                <ul>
                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            Track Order </a>
                                    </li>
                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            Returns </a>
                                    </li>
                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            Shipping </a>
                                    </li>
                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            FAQs </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-lg-3 p-b-50">
                                <h4 className="stext-301 cl0 p-b-30">
                                    GET IN TOUCH </h4>
                                <p className="stext-107 cl7 size-201">
                                    Any questions? Let us know in store at8th floor,379 Hudson St, New York, NY10018 or call us on (+1)967166879 </p>
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
                                <h4 className="stext-301 cl0 p-b-30">
                                    Newsletter </h4>
                                <form>
                                    <div className="wrap-input1 w-full p-b-4">
                                        <input className="input1 bg-none plh1 stext-107 cl7" type="text" name="email" placeholder="email@example.com" />
                                        <div className="focus-input1 trans-04"></div>
                                    </div>
                                    <div className="p-t-18">
                                        <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                                            Subscribe </button>
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
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY3.0. */}
                                Copyright &copy;{new Date().getFullYear()} All rights reserved | Made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com/" target="_blank">Colorlib</a> &amp; distributed by <a href="https://themewagon.com/" target="_blank">ThemeWagon</a>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY3.0. */}
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


            </>
    );
}
export default About;