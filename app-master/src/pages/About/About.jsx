const About = () => {
    return (
        <>

        {/* CSS */}
              <style jsx global>{`
                .about-page {
                  background: #f6f8fc;
                }

                .about-content {
                  padding-right: 40px;
                }

                .about-page h3 {
                  font-size: 34px;
                  font-weight: 700;
                }

                .about-page .stext-113 {
                  font-size: 17px;
                  line-height: 1.8;
                  color: #555;
                }

                .about-page .stext-114 {
                  font-size: 18px;
                  font-style: italic;
                  line-height: 1.7;
                }

                .about-image {
                  border-radius: 18px;
                  overflow: hidden;
                  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.15);
                }

                .about-image img {
                  width: 100%;
                  height: 380px;
                  object-fit: cover;
                  transition: transform 0.4s ease;
                }

                .about-image:hover img {
                  transform: scale(1.06);
                }

                .about-quote {
                  border-left: 4px solid #ff9800;
                  padding-left: 20px;
                  margin-top: 30px;
                }

                .about-quote span {
                  display: block;
                  margin-top: 10px;
                  font-weight: 600;
                  color: #ff9800;
                }

                @media (max-width: 991px) {
                  .about-content {
                    padding-right: 0;
                    margin-bottom: 30px;
                  }

                  .about-page h3 {
                    font-size: 26px;
                  }

                  .about-image img {
                    height: 300px;
                  }
                }
              `}</style>

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
                                    <img src="/images/icons/Images23.jpg" alt="IMG-LOGO" />
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
{/*                                             <ul className="sub-menu"> */}
{/*                                                 <li><a href="/home">Solar Panels</a></li> */}
{/*                                                 <li><a href="home-02.html">Mounting Structure</a></li> */}
{/*                                                 <li><a href="home-03.html">Inverters</a></li> */}
{/*                                                 <li><a href="/home">DC cables and connectors</a></li> */}
{/*                                                 <li><a href="home-02.html">AC cables and connectors</a></li> */}
{/*                                                 <li><a href="home-03.html">Junction Boxes</a></li> */}
{/*                                                 <li><a href="/home">Combiner Box</a></li> */}
{/*                                                 <li><a href="home-02.html">Surge protector or lightning arrestor</a></li> */}
{/*                                                 <li><a href="home-03.html">Monitoring System</a></li> */}
{/*                                                 <li><a href="home-03.html">Circuit breakers and Disconnect Swiches</a></li> */}
{/*                                                 <li><a href="home-03.html">Grounding Equipment</a></li> */}
{/*                                                 <li><a href="home-03.html">Tools for Installation</a></li> */}
{/*                                                 <li><a href="home-03.html">Permitting and inspection fees</a></li> */}
{/*                                                 <li><a href="home-03.html">Installation labor</a></li> */}
{/*                                             </ul> */}
                                        </li>
                                        <li>
                                            <a href="services.html">Services</a>
{/*                                             <ul className="sub-menu"> */}
{/*                                                 <li><a href="/home">Solar Power Plant Installations</a></li> */}
{/*                                                 <li><a href="home-02.html">Solar Water Heater Installations</a></li> */}
{/*                                                 <li><a href="home-03.html">Solar Street Light Installations</a></li> */}
{/*                                                 <li><a href="home-03.html">Solar CCTV Installations</a></li> */}
{/*                                             </ul> */}
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

                  {/* ABOUT PAGE */}
                      <section className="bg0 p-t-75 p-b-120 about-page">
                        <div className="container">

                          {/* OUR STORY */}
                          <div className="row p-b-120 align-items-center">
                            <div className="col-md-7 col-lg-8">
                              <div className="about-content">
                                <h3 className="mtext-111 cl2 p-b-20">
                                  Our Story
                                </h3>

                                <p className="stext-113 cl6 p-b-20">
                                  Founded with a vision to promote clean and sustainable energy,
                                  we deliver reliable solar power solutions for residential,
                                  commercial, and industrial clients. Solar energy is not just
                                  an alternative—it is the future of responsible living.
                                </p>

                                <p className="stext-113 cl6 p-b-20">
                                  Over the years, we have designed and installed high-quality
                                  solar systems tailored to individual energy needs. Our
                                  expertise includes rooftop solar panels, large solar plants,
                                  solar water heaters, and energy storage solutions.
                                </p>

                                <p className="stext-113 cl6">
                                  Need a consultation? Visit us at 8th Floor, 379 Hudson Street,
                                  New York, NY 10018 or call (+1) 967-166-879.
                                </p>
                              </div>
                            </div>

                            <div className="col-md-5 col-lg-4">
                              <div className="about-image">
                                <img
                                  src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg"
                                  alt="Solar Installation"
                                />
                              </div>
                            </div>
                          </div>

                          {/* OUR MISSION */}
                          <div className="row align-items-center">
                            <div className="order-md-2 col-md-7 col-lg-8">
                              <div className="about-content">
                                <h3 className="mtext-111 cl2 p-b-20">
                                  Our Mission
                                </h3>

                                <p className="stext-113 cl6 p-b-25">
                                  Our mission is to accelerate the adoption of solar energy by
                                  providing efficient, affordable, and innovative solutions.
                                  We help customers reduce electricity costs, lower carbon
                                  footprints, and achieve energy independence.
                                </p>

                                <div className="about-quote">
                                  <p className="stext-114 cl6">
                                    Sustainability is not just a goal — it is our
                                    responsibility. Every solar installation brings us closer
                                    to a cleaner and greener planet.
                                  </p>
                                  <span>– Our Commitment to Clean Energy</span>
                                </div>
                              </div>
                            </div>

                            <div className="order-md-1 col-md-5 col-lg-4">
                              <div className="about-image">
                                <img
                                  src="https://www.bgr.com/img/gallery/thinking-about-installing-solar-panels-for-your-home-heres-what-you-should-know-first/l-intro-1759821742.jpg"
                                  alt="Solar Panels"
                                />
                              </div>
                            </div>
                          </div>

                        </div>
                      </section>

            </>
    );
}
export default About;