import { useEffect, useState } from "react";

const SolarPanel1 = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Header (same as index.jsx, Services active) */}
      <header>
        <div className="container-menu-desktop">
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
              <a href="/home" className="logo">
                <img src="/images/icons/img-logo.png" alt="IMG-LOGO" />
              </a>

              <div className="menu-desktop">
                <ul className="main-menu">
                  <li>
                    <a href="/home">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/product">Products</a>
{/*                     <ul className="sub-menu"> */}
{/*                       <li><a href="/home">Solar Panels</a></li> */}
{/*                       <li><a href="home-02.html">Mounting Structure</a></li> */}
{/*                       <li><a href="home-03.html">Inverters</a></li> */}
{/*                       <li><a href="/home">DC cables and connectors</a></li> */}
{/*                       <li><a href="home-02.html">AC cables and connectors</a></li> */}
{/*                       <li><a href="home-03.html">Junction Boxes</a></li> */}
{/*                       <li><a href="/home">Combiner Box</a></li> */}
{/*                       <li><a href="home-02.html">Surge protector or lightning arrestor</a></li> */}
{/*                       <li><a href="home-03.html">Monitoring System</a></li> */}
{/*                       <li><a href="home-03.html">Circuit breakers and Disconnect Swiches</a></li> */}
{/*                       <li><a href="home-03.html">Grounding Equipment</a></li> */}
{/*                       <li><a href="home-03.html">Tools for Installation</a></li> */}
{/*                       <li><a href="home-03.html">Permitting and inspection fees</a></li> */}
{/*                       <li><a href="home-03.html">Installation labor</a></li> */}
{/*                     </ul> */}
                  </li>
                  <li className="active-menu">
                    <a href="/services">Services</a>
{/*                     <ul className="sub-menu"> */}
{/*                       <li><a href="/services">Solar Power Plant Installations</a></li> */}
{/*                       <li><a href="/services">Solar Water Heater Installations</a></li> */}
{/*                       <li><a href="/services">Solar Street Light Installations</a></li> */}
{/*                       <li><a href="/services">Solar CCTV Installations</a></li> */}
{/*                     </ul> */}
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>

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

        <div className="wrap-header-mobile">
          <div className="logo-mobile">
            <a href="/home">
              <img src="/images/icons/img-logo.png" alt="IMG-LOGO" />
            </a>
          </div>

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
            <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </div>
          </div>

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
              </li>
              <li>
                <a href="/product">Products</a>
              </li>
              <li className="active-menu">
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

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

      {/* ===== SERVICES SECTION ===== */}
            <section className="services-section">
              <div className="container">
                <div className="services-header">
                  <h2>Our Solar Services</h2>
                  <p>
                    Complete solar solutions from planning and installation to
                    long-term monitoring and maintenance.
                  </p>
                </div>

                <div className="services-grid">
                  {/* Service Card */}
                  <div className="service-card">
                    <img src="/images/solar-panel-04.jpg" alt="" />
                    <h4>Solar Power Plant Installation</h4>
                    <p>
                      Rooftop and ground-mounted solar systems for homes, apartments,
                      industries, and commercial buildings.
                    </p>
                  </div>

                  <div className="service-card">
                    <img src="/images/solar-heater-02.jpg" alt="" />
                    <h4>Solar Water Heater Installation</h4>
                    <p>
                      Hot water systems for homes, hospitals, hostels, and industrial
                      use with reliable plumbing integration.
                    </p>
                  </div>

                  <div className="service-card">
                    <img src="/images/street-light-03.jpg" alt="" />
                    <h4>Solar Street Light Installation</h4>
                    <p>
                      Independent and centralized solar lighting for layouts,
                      factories, campuses, and public areas.
                    </p>
                  </div>

                  <div className="service-card">
                    <img src="/images/solar-panel-08.jpg" alt="" />
                    <h4>AMC & Remote Monitoring</h4>
                    <p>
                      Preventive maintenance, cleaning, system health checks, and
                      remote performance monitoring.
                    </p>
                  </div>

                  <div className="service-card">
                    <img src="/images/solar-panel-01.jpg" alt="" />
                    <h4>Solar CCTV Installation</h4>
                    <p>
                      Off-grid and hybrid CCTV surveillance systems for remote and
                      agriculture locations.
                    </p>
                  </div>

                  <div className="service-card">
                    <img src="/images/solar-structure-03.jpg" alt="" />
                    <h4>System Design & Consulting</h4>
                    <p>
                      Site survey, shadow analysis, feasibility study, and customized
                      solar system design.
                    </p>
                  </div>

                  <div className="service-card">
                    <img src="/images/solar-structure-01.jpg" alt="" />
                    <h4>Subsidy & Approval Support</h4>
                    <p>
                      DISCOM approvals, net-metering assistance, and government subsidy
                      documentation support.
                    </p>
                  </div>

                  <div className="service-card">
                                      <img src="/images/solar-panel-04.jpg" alt="" />
                                      <h4>Solar Power Plant Installation</h4>
                                      <p>
                                        Rooftop and ground-mounted solar systems for homes, apartments,
                                        industries, and commercial buildings.
                                      </p>
                                    </div>

                                    <div className="service-card">
                                      <img src="/images/solar-heater-02.jpg" alt="" />
                                      <h4>Solar Water Heater Installation</h4>
                                      <p>
                                        Hot water systems for homes, hospitals, hostels, and industrial
                                        use with reliable plumbing integration.
                                      </p>
                                    </div>

                                    <div className="service-card">
                                      <img src="/images/street-light-03.jpg" alt="" />
                                      <h4>Solar Street Light Installation</h4>
                                      <p>
                                        Independent and centralized solar lighting for layouts,
                                        factories, campuses, and public areas.
                                      </p>
                                    </div>

                                    <div className="service-card">
                                      <img src="/images/solar-panel-08.jpg" alt="" />
                                      <h4>AMC & Remote Monitoring</h4>
                                      <p>
                                        Preventive maintenance, cleaning, system health checks, and
                                        remote performance monitoring.
                                      </p>
                                    </div>

                                    <div className="service-card">
                                      <img src="/images/solar-panel-01.jpg" alt="" />
                                      <h4>Solar CCTV Installation</h4>
                                      <p>
                                        Off-grid and hybrid CCTV surveillance systems for remote and
                                        agriculture locations.
                                      </p>
                                    </div>

                                    <div className="service-card">
                                      <img src="/images/solar-structure-03.jpg" alt="" />
                                      <h4>System Design & Consulting</h4>
                                      <p>
                                        Site survey, shadow analysis, feasibility study, and customized
                                        solar system design.
                                      </p>
                                    </div>

                                    <div className="service-card">
                                      <img src="/images/solar-structure-01.jpg" alt="" />
                                      <h4>Subsidy & Approval Support</h4>
                                      <p>
                                        DISCOM approvals, net-metering assistance, and government subsidy
                                        documentation support.
                                      </p>
                                    </div>

                                    <div className="service-card">
                                                                          <img src="/images/solar-structure-03.jpg" alt="" />
                                                                          <h4>System Design & Consulting</h4>
                                                                          <p>
                                                                            Site survey, shadow analysis, feasibility study, and customized
                                                                            solar system design.
                                                                          </p>
                                                                        </div>

                                                                        <div className="service-card">
                                                                          <img src="/images/solar-structure-01.jpg" alt="" />
                                                                          <h4>Subsidy & Approval Support</h4>
                                                                          <p>
                                                                            DISCOM approvals, net-metering assistance, and government subsidy
                                                                            documentation support.
                                                                          </p>
                                                                        </div>


                </div>


                <div className="services-cta">
                  <a href="/contact">Request a Free Site Visit</a>
                </div>
              </div>
            </section>

            {/* ===== SERVICES CSS ===== */}
            <style jsx global>{`
              .services-section {
                background: #f6f8fc;
                padding: 80px 0;
              }

              .services-header {
                text-align: center;
                max-width: 700px;
                margin: 0 auto 50px;
              }

              .services-header h2 {
                font-size: 34px;
                font-weight: 700;
                color: #1f2937;
                margin-bottom: 10px;
              }

              .services-header p {
                font-size: 16px;
                color: #6b7280;
                line-height: 1.6;
              }

              /* GRID */
              .services-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
                gap: 30px;
              }

              /* CARD */
              .service-card {
                background: #ffffff;
                border-radius: 16px;
                padding: 22px;
                text-align: left;
                box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
                transition: transform 0.25s ease, box-shadow 0.25s ease;
                display: flex;
                flex-direction: column;
                height: 100%;
              }

              .service-card:hover {
                transform: translateY(-6px);
                box-shadow: 0 18px 45px rgba(0, 0, 0, 0.12);
              }

              .service-card img {
                width: 100%;
                height: 170px;
                object-fit: cover;
                border-radius: 12px;
                margin-bottom: 16px;
              }

              .service-card h4 {
                font-size: 18px;
                font-weight: 600;
                color: #111827;
                margin-bottom: 8px;
              }

              .service-card p {
                font-size: 14.5px;
                color: #6b7280;
                line-height: 1.6;
                flex-grow: 1;
              }

              /* CTA */
              .services-cta {
                margin-top: 50px;
                text-align: center;
              }

              .services-cta a {
                background: #ff6b35;
                color: #fff;
                padding: 14px 34px;
                border-radius: 30px;
                font-size: 15px;
                font-weight: 600;
                text-decoration: none;
                transition: background 0.25s ease;
              }

              .services-cta a:hover {
                background: #e65a27;
              }
            `}</style>
    </>
  );
};

export default SolarPanel1;
