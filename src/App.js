import React, { useEffect, useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);

    setTimeout(() => {
      setShow2(false);
      setTimeout(() => {
        setShow2(false);
      }, 3000);
    }, 3000);

    // let element = window.document.getElementById("testingbre");
    // element.innerHTML = "test";
    // element.remove();
    // console.log("element", element);
  }, []);
  return (
    <>
      <div id="preloader">
        <div className="preloader-wrap">
          <img
            src="/asset/icon.png"
            alt="logo"
            className="img-fluid preloader-icon"
          />
          <div className="loading-bar" />
        </div>
      </div>
      {/*preloader end*/}
      {/*main content wrapper start*/}
      <div className="main-wrapper">
        <header
          className="main-header position-absolute w-100"
          style={{ zIndex: 999 }}
        >
          <nav className="navbar navbar-expand-xl navbar-dark sticky-header">
            <div className="container d-flex align-items-center justify-content-lg-between position-relative">
              <a
                href="/"
                className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none"
              >
                <img
                  src="/asset/Logo_SP-removebg-preview-white.png"
                  alt="Logo_SP-removebg-preview"
                  className="img-fluid logo-white"
                  style={{ maxWidth: 150 }}
                />
                <img
                  src="/asset/Logo_SP-removebg-preview.png"
                  alt="Logo_SP-removebg-preview"
                  className="img-fluid logo-color"
                  style={{ maxWidth: 150 }}
                />
              </a>
              <a
                className="navbar-toggler position-absolute right-0 border-0"
                href="#offcanvasWithBackdrop"
                role="button"
              >
                <span
                  className="far fa-bars"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBackdrop"
                  aria-controls="offcanvasWithBackdrop"
                />
              </a>
              <div className="clearfix" />
              <div className="collapse navbar-collapse justify-content-center">
                {/* <ul class="nav col-12 col-md-auto justify-content-center main-menu">
              <li><a href="/" class="nav-link text-primary active">BERANDA</a></li>
              <li class="nav-item dropdown">
                  <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">LAYANAN</a>
                  <div class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white" style="display: none;">
                      <div class="dropdown-grid rounded-custom width-half" style="width: 326px;">
                          <div class="dropdown-grid-item">
                              
                              <a href="/product/aplikasi-erp-bisnis-custom" class="dropdown-link">
                                  <div class="dropdown-info">
                                      <div class="drop-title ">Jasa Pembuatan Aplikasi ERP Bisnis</div>
                                  </div>
                              </a>
                              <a href="/product/aplikasi-erp-medis-custom" class="dropdown-link">
                                  <div class="dropdown-info">
                                      <div class="drop-title ">Jasa Pembuatan Aplikasi Medis</div>
                                  </div>
                              </a>
                              <a href="/product/aplikasi-erp-akademik-custom" class="dropdown-link">
                                  <div class="dropdown-info">
                                      <div class="drop-title ">Jasa Pembuatan Aplikasi Akademik</div>
                                  </div>
                              </a>
                              <a href="/product/aplikasi-pemasaran-wisata-custom" class="dropdown-link">
                                  <div class="dropdown-info">
                                      <div class="drop-title ">Jasa Pembuatan Aplikasi Pariwisata</div>
                                  </div>
                              </a>
                              
                          </div>
                      </div>
                  </div>
              </li>
              <li><a href="//company" class="nav-link ">PERUSAHAAN</a></li>
              <li><a href="//contact" class="nav-link ">KONTAK</a></li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">LAINNYA</a>
                  <div class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white" style="display: none;">
                      <div class="dropdown-grid rounded-custom width-half">
                          <div class="dropdown-grid-item">
                              <a href="/jobs" class="dropdown-link">
                                  <div class="drop-title ">KARIR</div>
                              </a>
                              
                              
                          </div>
                      </div>
                  </div>
              </li>
          </ul> */}
              </div>
              <div className="action-btns text-end me-5 me-lg-0 d-none d-xl-block d-md-none d-lg-none">
                <a
                  href="https://wa.me/6285974543498?text=Halo%2C%20bisa%20tanya%20estimasi%20biaya%20untuk%20rencana%20aplikasi%20yang%20akan%20saya%20buat?"
                  className="btn btn-primary"
                  style={{ fontSize: 14 }}
                  rel="noreferrer"
                >
                  klik untuk konsultasi dengan kami
                  <i className="fa-brands fa-whatsapp fa-fw ms-1" />
                </a>
              </div>
              <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="offcanvasWithBackdrop"
              >
                <div className="offcanvas-header d-flex align-items-center mt-4">
                  <a
                    href="/"
                    className="d-flex align-items-center mb-md-0 text-decoration-none"
                  >
                    <img
                      src="/asset/Logo_SP-removebg-preview.png"
                      alt="logo"
                      className="img-fluid w-50 ps-2"
                    />
                  </a>
                  <button
                    type="button"
                    className="close-btn text-danger"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <i className="far fa-close" />
                  </button>
                </div>
                <div className="offcanvas-body">
                  <ul className="nav col-12 col-md-auto justify-content-center main-menu">
                    <li>
                      <a href="/" className="nav-link text-primary active">
                        BERANDA
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        LAYANAN
                      </a>
                      <div
                        className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white"
                        data-bs-popper="none"
                      >
                        <div className="dropdown-grid rounded-custom width-half">
                          <div className="dropdown-grid-item">
                            <a
                              href="/product/aplikasi-erp-bisnis-custom"
                              className="dropdown-link"
                            >
                              <div className="dropdown-info">
                                <div className="drop-title">
                                  Jasa Pembuatan Aplikasi ERP Bisnis
                                </div>
                              </div>
                            </a>
                            <a
                              href="/product/aplikasi-erp-medis-custom"
                              className="dropdown-link"
                            >
                              <div className="dropdown-info">
                                <div className="drop-title">
                                  Jasa Pembuatan Aplikasi Medis
                                </div>
                              </div>
                            </a>
                            <a
                              href="/product/aplikasi-erp-akademik-custom"
                              className="dropdown-link"
                            >
                              <div className="dropdown-info">
                                <div className="drop-title">
                                  Jasa Pembuatan Aplikasi Akademik
                                </div>
                              </div>
                            </a>
                            <a
                              href="/product/aplikasi-pemasaran-wisata-custom"
                              className="dropdown-link"
                            >
                              <div className="dropdown-info">
                                <div className="drop-title">
                                  Jasa Pembuatan Aplikasi Pariwisata
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="//company" className="nav-link">
                        PERUSAHAAN
                      </a>
                    </li>
                    <li>
                      <a href="//contact" className="nav-link">
                        KONTAK
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        LAINNYA
                      </a>
                      <div
                        className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white"
                        data-bs-popper="none"
                      >
                        <div className="dropdown-grid rounded-custom width-half">
                          <div className="dropdown-grid-item">
                            <a href="/jobs" className="dropdown-link">
                              <div className="dropdown-info">
                                <div className="drop-title">Karir</div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="action-btns mt-4 ps-3">
                    <a
                      href="https://wa.me/6285974543498?text=Halo%2C%20bisa%20tanya%20estimasi%20biaya%20untuk%20rencana%20aplikasi%20yang%20akan%20saya%20buat?"
                      className="btn btn-primary"
                      style={{ fontSize: 14 }}
                      rel="noreferrer"
                    >
                      Tanya Estimasi&nbsp;Biaya
                      <i className="fa-brands fa-whatsapp fa-fw ms-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div>
          {show ? (
            <section
              className="hero-section text-white bg-gradient"
              style={{
                background:
                  'url("/assets/main/img/hero-dot-bg.png") no-repeat center right',
              }}
            >
              <div className="container">
                <div className="row d-flex justify-content-center text-center text-lg-start align-items-center row-erp">
                  <div className="col-lg-6 col-md-10 col-12">
                    <div className="hero-content-wrap">
                      <h5 className="text-warning">-</h5>
                      <div id="testingbre"></div>
                      <h1 className="fw-bold display-5" data-aos="fade-up">
                        About Company
                      </h1>
                      <p
                        className="lead"
                        data-aos="fade-up"
                        style={{ fontSize: 18 }}
                      >
                        SoftPro.One Solutions is an IT software house company
                        that provides services, solutions, and innovative
                        information technology products for small to large-scale
                        applications and systems. By mastering many development
                        tools such as web, mobile-based and desktop-based. We
                        can provide an appropriate and integrated system and
                        application solutions.
                      </p>
                      <div
                        className="action-btns mt-4"
                        data-aos="fade-up"
                        data-aos-delay={50}
                      >
                        <a
                          href="https://wa.me/6285974543498?text=Halo%2C%20bisa%20tanya%20estimasi%20biaya%20untuk%20rencana%20aplikasi%20yang%20akan%20saya%20buat?"
                          className="btn btn-primary me-lg-3 me-sm-3"
                          rel="noreferrer"
                        >
                          klik untuk konsultasi dengan kami
                          <i className="fa-brands fa-whatsapp fa-fw ms-1" />
                        </a>
                      </div>
                      <ul className="nav subscribe-feature-list text-center mt-3">
                        <li className="nav-item">
                          <span className="konsul">
                            <i className="far fa-check-circle text-primary me-2" />
                            Konsultasi Gratis
                          </span>
                        </li>
                        <li className="nav-item">
                          <span>
                            <i className="far fa-check-circle text-primary me-2" />
                            Layanan 24 Jam
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-8 col-12">
                    <div
                      className="hero-img-wrap position-relative app-screen-bg"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <ul
                        className="position-absolute animate-element parallax-element circle-shape-list"
                        style={{
                          transform: "translate3d(0px, 0px, 0px)",
                          transformStyle: "preserve-3d",
                          backfaceVisibility: "hidden",
                        }}
                      >
                        <li
                          className="layer"
                          data-depth="0.02"
                          style={{
                            position: "absolute",
                            display: "block",
                            left: 0,
                            top: 0,
                            transform:
                              "translate3d(-7.05563px, -0.543302px, 0px)",
                            transformStyle: "preserve-3d",
                            backfaceVisibility: "hidden",
                          }}
                        >
                          <img
                            src="/assets/main/img/shape/circle-1.svg"
                            alt="shape"
                            className="circle-shape-item type-1 hero-1"
                          />
                        </li>
                        <li
                          className="layer"
                          data-depth="0.04"
                          style={{
                            position: "absolute",
                            display: "block",
                            left: 0,
                            top: 0,
                            transform:
                              "translate3d(-14.1113px, -1.0866px, 0px)",
                            transformStyle: "preserve-3d",
                            backfaceVisibility: "hidden",
                          }}
                        >
                          <img
                            src="/assets/main/img/shape/circle-1.svg"
                            alt="shape"
                            className="circle-shape-item type-2 hero-1"
                          />
                        </li>
                        <li
                          className="layer"
                          data-depth="0.04"
                          style={{
                            position: "absolute",
                            display: "block",
                            left: 0,
                            top: 0,
                            transform:
                              "translate3d(-14.1113px, -1.0866px, 0px)",
                            transformStyle: "preserve-3d",
                            backfaceVisibility: "hidden",
                          }}
                        >
                          <img
                            src="/assets/main/img/shape/circle-1.svg"
                            alt="shape"
                            className="circle-shape-item type-3 hero-1"
                          />
                        </li>
                        <li
                          className="layer"
                          data-depth="0.03"
                          style={{
                            position: "absolute",
                            display: "block",
                            left: 0,
                            top: 0,
                            transform:
                              "translate3d(-10.5834px, -0.814953px, 0px)",
                            transformStyle: "preserve-3d",
                            backfaceVisibility: "hidden",
                          }}
                        >
                          <img
                            src="/assets/main/img/shape/circle-1.svg"
                            alt="shape"
                            className="circle-shape-item type-4 hero-1"
                          />
                        </li>
                        <li
                          className="layer"
                          data-depth="0.03"
                          style={{
                            position: "absolute",
                            display: "block",
                            left: 0,
                            top: 0,
                            transform:
                              "translate3d(-10.5834px, -0.814953px, 0px)",
                            transformStyle: "preserve-3d",
                            backfaceVisibility: "hidden",
                          }}
                        >
                          <img
                            src="/assets/main/img/shape/circle-1.svg"
                            alt="shape"
                            className="circle-shape-item type-5 hero-1"
                          />
                        </li>
                      </ul>
                      <div className="text-center">
                        <img
                          src="/assets/files/beranda.png"
                          alt="beranda"
                          className="img-fluid position-relative z-5"
                          style={{ width: 500 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <h1>Loading . . . . </h1>
          )}

          <section className="feature-tab-section pt-5 pb-5">
            <div className="container">
              <div className="row justify-content-center align-content-center">
                <div className="col-md-10 col-lg-8">
                  <div className="section-heading text-center mb-3">
                    <h4 className="h5 text-primary">-</h4>
                    <h2>VISION AND MISSION</h2>
                  </div>
                </div>
              </div>
              <div className="row g-3 mt-3">
                <div className="col-6 text-left">
                  {/* <div class="text-left mb-3">
                <img src="/assets/files/services/bisnis.png" style="width: 110px;">
            </div> */}
                  <h5>VISION</h5>
                  <p className="mb-0 text-dark">
                    To become one of the best international scale companies in
                    the field of IT Solutions and advance the national IT
                    industry with international competitiveness.
                  </p>
                </div>
                <div className="col-6 text-left">
                  {/* <div class="text-center mb-3">
                <img src="/assets/files/services/medis.png" style="width: 110px;">
            </div> */}
                  <h5>Mission</h5>
                  <p className="mb-0 text-dark">
                    To achieve the company vision, SoftPro.One Solutions has the
                    following company mission:
                  </p>
                  <ul>
                    <li>Improve service and get client satisfaction.</li>
                    <li>
                      Expanding service types by increasing solution and service
                      variants.
                    </li>
                    <li>
                      Committed to continuing to provide education to the local
                      market about the importance of using IT services and
                      products in the future.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {show ? (
            <section
              className="integration-section pt-3 pb-5"
              style={{ backgroundColor: "#fafafa" }}
            >
              <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                  <div className="col-12">
                    <div
                      className="section-heading text-center mb-5"
                      data-aos="fade-up"
                    >
                      <h4 className="h5 text-primary pt-3">-</h4>
                      <h2 className="mb-4">Portfolio</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div
                      className="integration-wrapper position-relative w-100"
                      id="pancing"
                    >
                      <ul className="position-absolute animate-element parallax-element shape-service z-1 d-none d-lg-none d-xl-block">
                        <li className="layer" data-depth="0.02">
                          <img
                            src="assets/main/img/color-shape/feature-2.svg"
                            alt="shape"
                            className="img-fluid position-absolute color-shape-2 z-5"
                          />
                        </li>
                        <li className="layer" data-depth="0.03">
                          <img
                            src="assets/main/img/color-shape/feature-3.svg"
                            alt="shape"
                            className="img-fluid position-absolute color-shape-3"
                          />
                        </li>
                      </ul>
                      <ul className="integration-list list-unstyled mb-0">
                        <li data-aos="fade-up" data-aos-delay={50}>
                          <div className="single-integration">
                            <img
                              src="/asset/amantara1.png"
                              alt="amantara"
                              className="img-fluid"
                            />
                            <img
                              src="/asset/amantara2.png"
                              alt="amantara"
                              className="img-fluid"
                            />
                            <h6
                              className="mb-0 mt-2"
                              style={{ fontSize: "0.8rem" }}
                            >
                              Amantara
                            </h6>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={50}>
                          <div className="single-integration">
                            <img
                              src="/asset/bantubeli1.png"
                              alt="bantubeli1"
                              className="img-fluid"
                            />
                            <img
                              src="/asset/bantubeli2.png"
                              alt="bantubeli2"
                              className="img-fluid"
                            />
                            <h6
                              className="mb-0 mt-2"
                              style={{ fontSize: "0.8rem" }}
                            >
                              Bantubeli
                            </h6>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={50}>
                          <div className="single-integration">
                            <img
                              src="/asset/cashier1.png"
                              alt="cashier1"
                              className="img-fluid"
                            />
                            <img
                              src="/asset/cashier2.png"
                              alt="cashier2"
                              className="img-fluid"
                            />
                            <h6
                              className="mb-0 mt-2"
                              style={{ fontSize: "0.8rem" }}
                            >
                              BantuBeli Cashier
                            </h6>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={50}>
                          <div className="single-integration">
                            <img
                              src="/asset/driver1.png"
                              alt="driver1"
                              className="img-fluid"
                            />
                            <img
                              src="/asset/driver2.png"
                              alt="driver2"
                              className="img-fluid"
                            />
                            <h6
                              className="mb-0 mt-2"
                              style={{ fontSize: "0.8rem" }}
                            >
                              bantubeli driver
                            </h6>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={50}>
                          <div className="single-integration">
                            <img
                              src="/storage/upload/partners/7. Beejay Chef.jpg"
                              alt="CV. Beejay Food"
                              className="img-fluid"
                            />
                            <h6
                              className="mb-0 mt-2"
                              style={{ fontSize: "0.8rem" }}
                            >
                              CV. Beejay Food
                            </h6>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={50}>
                          <div className="single-integration">
                            <img
                              src="/storage/upload/partners/6. Universitas Merdeka.jpg"
                              alt="Universitas Merdeka Malang"
                              className="img-fluid"
                            />
                            <h6
                              className="mb-0 mt-2"
                              style={{ fontSize: "0.8rem" }}
                            >
                              Universitas Merdeka Malang
                            </h6>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={50}>
                          <div className="single-integration">
                            <img
                              src="/storage/upload/partners/2. PLTU Tanjung Jati.jpg"
                              alt="PLTU Tanjung Jati B"
                              className="img-fluid"
                            />
                            <h6
                              className="mb-0 mt-2"
                              style={{ fontSize: "0.8rem" }}
                            >
                              PLTU Tanjung Jati B
                            </h6>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={50}>
                          <div className="single-integration">
                            <img
                              src="/storage/upload/partners/2BK8fvEG4ALaqFg3wID2ZPthBMyN9YgBpZ8zDNZA.png"
                              alt="Starlife Medical Clinic"
                              className="img-fluid"
                            />
                            <h6
                              className="mb-0 mt-2"
                              style={{ fontSize: "0.8rem" }}
                            >
                              Starlife Medical Clinic
                            </h6>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={50}>
                          <div className="single-integration">
                            <img
                              src="/storage/upload/partners/4. Yayasan Kemala Bhayangkari.jpg"
                              alt="Yayasan Kemala Bhayangkari"
                              className="img-fluid"
                            />
                            <h6
                              className="mb-0 mt-2"
                              style={{ fontSize: "0.8rem" }}
                            >
                              Yayasan Kemala Bhayangkari
                            </h6>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={50}>
                          <div className="single-integration">
                            <img
                              src="/storage/upload/partners/3. AIM Biscuits.jpg"
                              alt="AIM Biscuits"
                              className="img-fluid"
                            />
                            <h6
                              className="mb-0 mt-2"
                              style={{ fontSize: "0.8rem" }}
                            >
                              AIM Biscuits
                            </h6>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={50}>
                          <div className="single-integration">
                            <img
                              src="/storage/upload/partners/8. X Trans Logistik.jpg"
                              alt="X Trans Logistik"
                              className="img-fluid"
                            />
                            <h6
                              className="mb-0 mt-2"
                              style={{ fontSize: "0.8rem" }}
                            >
                              X Trans Logistik
                            </h6>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={50}>
                          <div className="single-integration">
                            <img
                              src="/storage/upload/partners/9. DPRD Kab.Gresik.jpg"
                              alt="DPRD Kab.Gresik"
                              className="img-fluid"
                            />
                            <h6
                              className="mb-0 mt-2"
                              style={{ fontSize: "0.8rem" }}
                            >
                              DPRD Kab.Gresik
                            </h6>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={50}>
                          <div className="single-integration">
                            <img
                              src="/storage/upload/partners/10. DPRD Kab.Tulungagung.jpg"
                              alt="DPRD Kab.Tulungagung"
                              className="img-fluid"
                            />
                            <h6
                              className="mb-0 mt-2"
                              style={{ fontSize: "0.8rem" }}
                            >
                              DPRD Kab.Tulungagung
                            </h6>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={50}>
                          <div className="single-integration">
                            <img
                              src="/storage/upload/partners/11. DPRD Kota Batu.jpg"
                              alt="DPRD Kota Batu"
                              className="img-fluid"
                            />
                            <h6
                              className="mb-0 mt-2"
                              style={{ fontSize: "0.8rem" }}
                            >
                              DPRD Kota Batu
                            </h6>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={50}>
                          <div className="single-integration">
                            <img
                              src="/storage/upload/partners/12. Pemda Kab.Gresik.jpg"
                              alt="Pemda Kab.Gresik"
                              className="img-fluid"
                            />
                            <h6
                              className="mb-0 mt-2"
                              style={{ fontSize: "0.8rem" }}
                            >
                              Pemda Kab.Gresik
                            </h6>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={50}>
                          <div className="single-integration">
                            <img
                              src="/storage/upload/partners/13. Pemda Kab.Sidoarjo.jpg"
                              alt="Pemda Kab.Sidoarjo"
                              className="img-fluid"
                            />
                            <h6
                              className="mb-0 mt-2"
                              style={{ fontSize: "0.8rem" }}
                            >
                              Pemda Kab.Sidoarjo
                            </h6>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={50}>
                          <div className="single-integration">
                            <img
                              src="/storage/upload/partners/14. Pemda Kab.Tulungagung.jpg"
                              alt="Pemda Kab.Tulungagung"
                              className="img-fluid"
                            />
                            <h6
                              className="mb-0 mt-2"
                              style={{ fontSize: "0.8rem" }}
                            >
                              Pemda Kab.Tulungagung
                            </h6>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={50}>
                          <div className="single-integration">
                            <img
                              src="/storage/upload/partners/15. Pemda Kab.Kediri.jpg"
                              alt="Pemda Kab.Kediri"
                              className="img-fluid"
                            />
                            <h6
                              className="mb-0 mt-2"
                              style={{ fontSize: "0.8rem" }}
                            >
                              Pemda Kab.Kediri
                            </h6>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={50}>
                          <div className="single-integration">
                            <img
                              src="/storage/upload/partners/16. Pemda Kab.Pasuruan.jpg"
                              alt="Pemda Kab.Pasuruan"
                              className="img-fluid"
                            />
                            <h6
                              className="mb-0 mt-2"
                              style={{ fontSize: "0.8rem" }}
                            >
                              Pemda Kab.Pasuruan
                            </h6>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={50}>
                          <div className="single-integration">
                            <img
                              src="/storage/upload/partners/17. Pemda Kab.Lamongan.jpg"
                              alt="Pemda Kab.Lamongan"
                              className="img-fluid"
                            />
                            <h6
                              className="mb-0 mt-2"
                              style={{ fontSize: "0.8rem" }}
                            >
                              Pemda Kab.Lamongan
                            </h6>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={50}>
                          <div className="single-integration">
                            <img
                              src="/storage/upload/partners/18. Pemda Kab.Sumenep.jpg"
                              alt="Pemda Kab.Sumenep"
                              className="img-fluid"
                            />
                            <h6
                              className="mb-0 mt-2"
                              style={{ fontSize: "0.8rem" }}
                            >
                              Pemda Kab.Sumenep
                            </h6>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <h1>Loading . . . . </h1>
          )}
        </div>
        {/* Livewire Component wire-end:bKR9BJ4fMZ25fD9mLqFQ */}
        {/*footer section start*/}
        <footer className="footer-section">
          {/*footer top start*/}
          {/*for light footer add .footer-light class and for dark footer add .bg-dark .text-white class*/}
          <div
            className="footer-top bg-dark text-white ptb-60"
            style={{
              background:
                "url(/assets/main/img/page-header-bg.svg) no-repeat bottom right",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
                  <div className="footer-single-col">
                    <div className="footer-single-col mb-4">
                      <img
                        src="/asset/Logo_SP-removebg-preview-white.png"
                        alt="logo"
                        className="img-fluid logo-white"
                      />
                      <img
                        src="/asset/Logo_SP-removebg-preview-white.png"
                        alt="logo"
                        className="img-fluid logo-color"
                      />
                    </div>
                    <p>-</p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0 offset-0 offset-md-1">
                  {/* <iframe class="h-100 w-100 rounded-custom shadow" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4759610874175!2d112.76379097610459!3d-7.300300371767804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa539bffda91%3A0x8c06a1ed3c8b8288!2sBurningroom%20Technology!5e0!3m2!1sid!2sid!4v1675155655687!5m2!1sid!2sid" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy"></iframe> */}
                </div>
              </div>
            </div>
          </div>
          {/*footer top end*/}
          {/*footer bottom start*/}
          <div className="footer-bottom bg-dark text-white py-4">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-12">
                  <div className="copyright-text text-center">
                    <p className="mb-lg-0 mb-md-0">-</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*footer bottom end*/}
        </footer>
        {/*footer section end*/}
      </div>
      {/* Livewire Scripts */}
    </>
  );
}

export default App;
