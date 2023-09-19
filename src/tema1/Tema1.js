import React, { useEffect } from "react";
import "./tema1.css";
import { Helmet } from "react-helmet";
// import './themes/assets/js/jquery.min.js'
function Tema1() {
  // useEffect(() => {
  //     const script = document.createElement("script");

  //     script.src = "./themes/assets/js/jquery.min.js";
  //     script.async = true;

  //     document.body.appendChild(script);
  // },[])
  return (
    <>
      <div>
        <Helmet>
          <script
            type="text/javascript"
            src="./themes/assets/js/jquery.min.js"
          ></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"></script>

          <script src="./themes/gradient_luxury/js/splide.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-grid@0.4.1/dist/js/splide-extension-grid.min.js"></script>

          <script
            src="./themes/gradient_luxury/js/api.js"
            type="text/javascript"
          ></script>

          <script src="./themes/gradient_luxury/js/custom.js"></script>

          <script src="admin-theme/dist/js/axios.min.js"></script>

          <script src="admin-theme/dist/js/vue.min.js"></script>

          <script src="admin-theme/plugins/toastr/toastr.min.js"></script>

          <script src="landing-theme/js/qrcode.min.js"></script>

          <script
            type="text/javascript"
            src="./themes/assets/js/2.2.1-howler.min.js"
          ></script>
          <script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.0.0-alpha.1/axios.min.js"></script>
          <script src="./custom-tema.js"></script>
        </Helmet>
        <link
          itemProp="thumbnailUrl"
          href="./themes/assets/demo/preview1/1.jpg"
        />
        <span
          itemProp="thumbnail"
          itemScope
          itemType="http://schema.org/ImageObject"
        >
          <link itemProp="url" href="./themes/assets/demo/preview1/1.jpg" />
        </span>
        <main id="app">
          <div
            id="modalOverlay"
            className="modal-backdrop fade"
            style={{ display: "none" }}
          />
          {/* Loader */}
          <div
            id="loader"
            className="loader-wrapper"
            style={{ display: "none" }}
          >
            <div className="wrapper">
              <span />
              <span />
              <span />
              <span className="shadow" />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="love">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation={10}
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                    result="love"
                  />
                  <feBlend in="SourceGraphic" in2="love" />
                </filter>
              </defs>
            </svg>
          </div>
          {/* music */}
          {/* end music */}
          {/* invitation */}
          <div
            id="ajakanMe"
            className="splide not-open splide--fade splide--ttb is-active is-initialized"
            data-guest
            data-group
            role="region"
            aria-roledescription="carousel"
          >
            <div
              className="splide__track invitation__track splide__track--fade splide__track--ttb"
              id="ajakanMe-track"
              style={{
                paddingTop: 0,
                paddingBottom: 0,
                height: "calc((100% - 0px) - 0px)",
              }}
              aria-live="polite"
              aria-atomic="true"
            >
              <ul
                className="splide__list invitation__list"
                id="ajakanMe-list"
                role="presentation"
              >
                <li
                  className="splide__slide invitation__slide is-active is-visible"
                  id="ajakanMe-slide01"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="1 of 19"
                  style={{
                    height: "calc(100%)",
                    transition:
                      "opacity 400ms cubic-bezier(0.25, 1, 0.5, 1) 0s",
                  }}
                >
                  <div
                    className="container-mobile"
                    style={{
                      backgroundImage: "url(themes/assets/demo/preview1/4.jpg)",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="frame">
                      <img
                        className="frame-tr animate__animated animate__zoomIn"
                        src="./themes/gradient_luxury/images/frame-tr-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-tl animate__animated animate__fadeInDown animate__slow"
                        src="./themes/gradient_luxury/images/frame-tl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-bl animate__animated animate__fadeIn animate__slower"
                        src="./themes/gradient_luxury/images/frame-bl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-br animate__animated animate__fadeInUp animate__slow"
                        src="./themes/gradient_luxury/images/frame-br-v2.png"
                        alt="frame"
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center flex-column"
                      style={{ height: "100%" }}
                    >
                      <div className="mt-5 mb-auto" style={{ width: "100%" }}>
                        <div className="text-center animate__animated animate__fadeInDown animate__slower">
                          <div
                            className="mb-2 editable cover-title"
                            style={{ color: "#6a5b54", fontSize: 20 }}
                          >
                            Undangan Pernikahan
                          </div>
                          <div
                            className="mb-3 editable font-latin color-accent cover-title"
                            style={{ fontSize: 40, color: "#6a5b54" }}
                          >
                            Jessi &amp; Maudy
                          </div>
                          <div
                            className="mb-2 editable cover-title"
                            style={{ color: "#6a5b54", fontSize: 15 }}
                          />
                        </div>
                      </div>
                      <div className="mb-5" style={{ width: "100%" }}>
                        <div className="text-center">
                          <div
                            className="mb-4"
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.14)",
                              borderRadius: "0.5rem",
                              padding: 10,
                              maxWidth: 290,
                              margin: "auto",
                              backdropFilter: "blur(10px)",
                            }}
                          >
                            <div
                              className="mb-3 editable animate__animated animate__fadeInUp animate__slower"
                              style={{
                                color: "rgb(255, 255, 255)",
                                fontSize: "14.4px",
                              }}
                            >
                              Kepada Yth.
                              <br />
                              Bapak/Ibu/Saudara/i:
                            </div>
                            <div
                              id="guestNameSlot"
                              className="mb-3 editable color-accent h5 font-weight-bold animate__animated animate__fadeInUp animate__slower"
                              style={{
                                color: "rgb(255, 255, 255)",
                                fontSize: 18,
                              }}
                            >
                              Nama Tamu
                            </div>
                            <div
                              className="mb-3 editable animate__animated animate__fadeInUp animate__slower"
                              style={{
                                color: "rgb(255, 255, 255)",
                                fontSize: "14.4px",
                              }}
                            >
                              Di Tempat
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn-open-invitation btn btn-primary rounded-pill animate__animated animate__fadeInUp animate__slow"
                            style={{ fontSize: "14.4px" }}
                          >
                            Buka Undangan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="splide__slide invitation__slide is-next"
                  id="ajakanMe-slide02"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="2 of 19"
                  style={{
                    height: "calc(100%)",
                    transition:
                      "opacity 400ms cubic-bezier(0.25, 1, 0.5, 1) 0s",
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="container-mobile"
                    style={{
                      backgroundImage:
                        "url(themes/gradient_luxury/images/bg-v2.png)",
                    }}
                  >
                    <div className="frame">
                      <img
                        className="frame-tr animate__animated animate__zoomIn"
                        src="./themes/gradient_luxury/images/frame-tr-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-tl animate__animated animate__fadeInDown animate__slow"
                        src="./themes/gradient_luxury/images/frame-tl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-bl animate__animated animate__fadeIn animate__slower"
                        src="./themes/gradient_luxury/images/frame-bl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-br animate__animated animate__fadeInUp animate__slow"
                        src="./themes/gradient_luxury/images/frame-br-v2.png"
                        alt="frame"
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100%" }}
                    >
                      <div style={{ width: "100%" }}>
                        <div
                          style={{
                            height: 230,
                            width: "100%",
                            margin: "auto",
                            overflow: "hidden",
                            marginBottom: 20,
                            border: "4px solid var(--inv-border)",
                            borderRadius: 10,
                          }}
                          className="image-editable animate__animated animate__fadeInDown animate__slower"
                        >
                          <img
                            className="mb-4"
                            src="./themes/assets/demo/preview1/5.jpg"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                            draggable="false"
                          />
                        </div>
                        <div className="text-center animate__animated animate__fadeInUp animate__slower bg-text">
                          <div
                            className="editable quotes"
                            style={{ fontSize: "14.4px" }}
                          >
                            Every love story is beautiful, but ours is the best
                            one. I loved her since the first time I saw her. My
                            mother told me to pick the very best one, and I did.
                            True love stories never have endings.
                          </div>
                        </div>
                        <div
                          className="countdown-wrapper d-flex flex-column animate__animated animate__fadeInUp animate__slower mt-4"
                          data-datetime="2024-07-01"
                        >
                          <div className="text-center countdown">
                            <div className="countdown-item day">
                              <div className="number">293</div>
                              <div className="text editable">Hari</div>
                            </div>
                            <div className="countdown-item hour">
                              <div className="number">22</div>
                              <div className="text editable">Jam</div>
                            </div>
                            <div className="countdown-item minute">
                              <div className="number">50</div>
                              <div className="text editable">Menit</div>
                            </div>
                            <div className="countdown-item second">
                              <div className="number">35</div>
                              <div className="text editable">Detik</div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <a
                            href="https://www.google.com/calendar/render?action=TEMPLATE&text=Reminder+Undangan+Pernikahan&details=Jangan+lupa+menghardiri+pernikahan+Jessi+dan+Maudy&dates=20240701T003000Z%2F20240701T083000Z"
                            target="_blank"
                            className="my-3 btn-reminder btn btn-primary rounded-pill animate__animated animate__fadeInUp animate__slow"
                            draggable="false"
                            tabIndex={-1}
                          >
                            Add to Calendar
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="splide__slide invitation__slide append-element-mempelai"
                  id="ajakanMe-slide03"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="3 of 19"
                  style={{
                    height: "calc(100%)",
                    transition:
                      "opacity 400ms cubic-bezier(0.25, 1, 0.5, 1) 0s",
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="container-mobile"
                    style={{
                      backgroundImage:
                        "url(themes/gradient_luxury/images/bg-v2.png)",
                    }}
                  >
                    <div className="frame">
                      <img
                        className="frame-tr animate__animated animate__zoomIn"
                        src="./themes/gradient_luxury/images/frame-tr-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-tl animate__animated animate__fadeInDown animate__slow"
                        src="./themes/gradient_luxury/images/frame-tl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-bl animate__animated animate__fadeIn animate__slower"
                        src="./themes/gradient_luxury/images/frame-bl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-br animate__animated animate__fadeInUp animate__slow"
                        src="./themes/gradient_luxury/images/frame-br-v2.png"
                        alt="frame"
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center flex-column"
                      style={{
                        height: "100%",
                        overflow: "hidden",
                        marginTop: "-30px",
                      }}
                    >
                      <div
                        className="mx-auto image-editable animate__animated animate__fadeInDown animate__slower"
                        style={{
                          height: "60%",
                          width: "90%",
                          overflow: "hidden",
                          marginTop: "-40px",
                          marginBottom: "auto",
                          border: "3px solid var(--inv-border)",
                          borderRadius: "0px 0px 250px 250px",
                          padding: 10,
                        }}
                      >
                        <img
                          src="./themes/assets/demo/preview1/6.jpg"
                          draggable="false"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "0px 0px 250px 250px",
                          }}
                        />
                      </div>
                      <div className="mb-auto" style={{ width: "100%" }}>
                        <div className="text-center animate__animated animate__fadeInUp animate__slower bg-text">
                          <div
                            className="mb-3 editable font-italic"
                            style={{ fontSize: "14.4px" }}
                          >
                            Selamat Datang <br />
                            Nama Tamu
                          </div>
                          <div
                            className="editable quotes"
                            style={{ fontSize: "14.4px" }}
                          >
                            Tanpa mengurangi rasa hormat, kami memberikan kabar
                            bahagia ini dan memohon restu dari rekan sekalian
                            untuk senantiasa mendoakan kelancaran acara
                            pernikahan kami.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="splide__slide invitation__slide"
                  id="ajakanMe-slide04"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="4 of 19"
                  style={{
                    height: "calc(100%)",
                    transition:
                      "opacity 400ms cubic-bezier(0.25, 1, 0.5, 1) 0s",
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="container-mobile"
                    style={{
                      backgroundImage:
                        "url(themes/gradient_luxury/images/bg-v2.png)",
                    }}
                  >
                    <div className="frame">
                      <img
                        className="frame-tr animate__animated animate__zoomIn"
                        src="./themes/gradient_luxury/images/frame-tr-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-tl animate__animated animate__fadeInDown animate__slow"
                        src="./themes/gradient_luxury/images/frame-tl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-bl animate__animated animate__fadeIn animate__slower"
                        src="./themes/gradient_luxury/images/frame-bl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-br animate__animated animate__fadeInUp animate__slow"
                        src="./themes/gradient_luxury/images/frame-br-v2.png"
                        alt="frame"
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center flex-column"
                      style={{
                        height: "calc(100% + 30px)",
                        overflow: "hidden",
                        marginBottom: "-30px",
                      }}
                    >
                      <div className="mt-auto" style={{ width: "100%" }}>
                        <div className="text-center mt-5 bg-pria animate__animated animate__fadeInDown animate__slower">
                          <div
                            className="mb-3 editable font-accent color-accent"
                            style={{ fontSize: 24 }}
                          >
                            Jessi Choi
                          </div>
                          <div
                            className="editable quotes bg-text"
                            style={{ fontSize: "14.4px" }}
                          >
                            Anak Pertama Dari Bapak Roni dan Ibu Ridha
                          </div>
                          <div className="d-flex justify-content-center mt-2">
                            <a
                              href="https://instagram.com/azuracreative"
                              className="color-accent"
                              tabIndex={-1}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-brand-instagram"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <rect
                                  x={4}
                                  y={4}
                                  width={16}
                                  height={16}
                                  rx={4}
                                />
                                <circle cx={12} cy={12} r={3} />
                                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                              </svg>
                            </a>
                            <a
                              href="https://instagram.com/azuracreative"
                              style={{ marginLeft: "0.25em" }}
                              className="color-accent"
                              tabIndex={-1}
                            >
                              azuracreative
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="mx-auto image-editable animate__animated animate__fadeInUp animate__slower"
                        style={{
                          height: "60%",
                          width: "90%",
                          overflow: "hidden",
                          marginBottom: "-40px",
                          marginTop: "auto",
                          border: "3px solid var(--inv-border)",
                          borderRadius: "250px 250px 0px 0px",
                          padding: 10,
                        }}
                      >
                        <img
                          src="./themes/assets/demo/preview1/2.jpg"
                          draggable="false"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "250px 250px 0px 0px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="splide__slide invitation__slide"
                  id="ajakanMe-slide05"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="5 of 19"
                  style={{
                    height: "calc(100%)",
                    transition:
                      "opacity 400ms cubic-bezier(0.25, 1, 0.5, 1) 0s",
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="container-mobile"
                    style={{
                      backgroundImage:
                        "url(themes/gradient_luxury/images/bg-v2.png)",
                    }}
                  >
                    <div className="frame">
                      <img
                        className="frame-tr animate__animated animate__zoomIn"
                        src="./themes/gradient_luxury/images/frame-tr-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-tl animate__animated animate__fadeInDown animate__slow"
                        src="./themes/gradient_luxury/images/frame-tl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-bl animate__animated animate__fadeIn animate__slower"
                        src="./themes/gradient_luxury/images/frame-bl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-br animate__animated animate__fadeInUp animate__slow"
                        src="./themes/gradient_luxury/images/frame-br-v2.png"
                        alt="frame"
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center flex-column"
                      style={{
                        height: "calc(100% + 30px)",
                        overflow: "hidden",
                        marginBottom: "-30px",
                      }}
                    >
                      <div className="mt-auto" style={{ width: "100%" }}>
                        <div className="text-center mt-5 bg-wanita animate__animated animate__fadeInDown animate__slower">
                          <div
                            className="mb-3 editable font-accent color-accent"
                            style={{ fontSize: 24 }}
                          >
                            Maudy Ayunda
                          </div>
                          <div
                            className="editable quotes bg-text"
                            style={{ fontSize: "14.4px" }}
                          >
                            Anak Ketiga Dari Bapak Hendra dan Ibu Yaselin
                          </div>
                          <div className="d-flex justify-content-center mt-2">
                            <a
                              href="https://instagram.com/azuracreative"
                              className="color-accent"
                              tabIndex={-1}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-brand-instagram"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <rect
                                  x={4}
                                  y={4}
                                  width={16}
                                  height={16}
                                  rx={4}
                                />
                                <circle cx={12} cy={12} r={3} />
                                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                              </svg>
                            </a>
                            <a
                              href="https://instagram.com/azuracreative"
                              style={{ marginLeft: "0.25em" }}
                              className="color-accent"
                              tabIndex={-1}
                            >
                              azuracreative
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="mx-auto image-editable animate__animated animate__fadeInUp animate__slower"
                        style={{
                          height: "60%",
                          width: "90%",
                          overflow: "hidden",
                          marginBottom: "-40px",
                          marginTop: "auto",
                          border: "3px solid var(--inv-border)",
                          borderRadius: "250px 250px 0px 0px",
                          padding: 10,
                        }}
                      >
                        <img
                          src="./themes/assets/demo/preview1/3.jpg"
                          draggable="false"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "250px 250px 0px 0px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="splide__slide invitation__slide"
                  id="ajakanMe-slide06"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="6 of 19"
                  style={{
                    height: "calc(100%)",
                    transition:
                      "opacity 400ms cubic-bezier(0.25, 1, 0.5, 1) 0s",
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="container-mobile"
                    style={{
                      backgroundImage:
                        "url(themes/gradient_luxury/images/bg-v2.png)",
                    }}
                  >
                    <div className="frame">
                      <img
                        className="frame-tr animate__animated animate__zoomIn"
                        src="./themes/gradient_luxury/images/frame-tr-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-tl animate__animated animate__fadeInDown animate__slow"
                        src="./themes/gradient_luxury/images/frame-tl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-bl animate__animated animate__fadeIn animate__slower"
                        src="./themes/gradient_luxury/images/frame-bl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-br animate__animated animate__fadeInUp animate__slow"
                        src="./themes/gradient_luxury/images/frame-br-v2.png"
                        alt="frame"
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100%" }}
                    >
                      <div style={{ width: "100%" }}>
                        <div className="mb-4 text-center animate__animated animate__fadeInRight animate__slower">
                          <div className="mb-2 editable font-latin color-accent h4">
                            Akad
                          </div>
                          <div
                            className="editable"
                            style={{ fontSize: "14.4px" }}
                          >
                            Senin, 27 Maret 2024
                          </div>
                          <div
                            className="editable"
                            style={{ fontSize: "14.4px" }}
                          >
                            13:00 - 17:00 WIB
                          </div>
                          <div
                            className="editable"
                            style={{ fontSize: "14.4px" }}
                          >
                            Gedung Muhammadiyah Mataram
                          </div>
                        </div>
                        <div
                          style={{
                            width: "100%",
                            margin: "auto",
                            borderRadius: 10,
                            overflow: "hidden",
                            marginBottom: 20,
                            paddingBottom: 200,
                            position: "relative",
                          }}
                          className="animate__animated animate__fadeInDown animate__slow"
                        >
                          <iframe
                            width="100%"
                            height={200}
                            style={{ border: 0, position: "absolute" }}
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB8yt5w4P6NitG8K6xSb_IJ5y2AKUwpDWA%0A%20%20%20%20&q=-6.1196465053716,106.84980869293&language=id"
                            className="maps-embed"
                            tabIndex={-1}
                          />
                        </div>
                        <div className="text-center animate__animated animate__fadeInUp animate__slow">
                          <a
                            href="https://maps.google.com/?q=-6.1196465053716,106.84980869293&amp;dir_action=navigate"
                            className="mb-4 btn-maps-link btn btn-primary rounded-pill animate__animated animate__fadeInUp animate__slow"
                            target="_blank"
                            draggable="false"
                            tabIndex={-1}
                          >
                            Arahkan ke Lokasi
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="splide__slide invitation__slide"
                  id="ajakanMe-slide07"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="7 of 19"
                  style={{
                    height: "calc(100%)",
                    transition:
                      "opacity 400ms cubic-bezier(0.25, 1, 0.5, 1) 0s",
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="container-mobile"
                    style={{
                      backgroundImage:
                        "url(themes/gradient_luxury/images/bg-v2.png)",
                    }}
                  >
                    <div className="frame">
                      <img
                        className="frame-tr animate__animated animate__zoomIn"
                        src="./themes/gradient_luxury/images/frame-tr-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-tl animate__animated animate__fadeInDown animate__slow"
                        src="./themes/gradient_luxury/images/frame-tl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-bl animate__animated animate__fadeIn animate__slower"
                        src="./themes/gradient_luxury/images/frame-bl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-br animate__animated animate__fadeInUp animate__slow"
                        src="./themes/gradient_luxury/images/frame-br-v2.png"
                        alt="frame"
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100%" }}
                    >
                      <div style={{ width: "100%" }}>
                        <div className="mb-4 text-center animate__animated animate__fadeInRight animate__slower">
                          <div className="mb-2 editable font-latin color-accent h4">
                            Resepsi Pernikahan 1
                          </div>
                          <div
                            className="editable"
                            style={{ fontSize: "14.4px" }}
                          >
                            Senin, 27 Maret 2024
                          </div>
                          <div
                            className="editable"
                            style={{ fontSize: "14.4px" }}
                          >
                            13:00 - 17:00 WIB
                          </div>
                          <div
                            className="editable"
                            style={{ fontSize: "14.4px" }}
                          >
                            Gedung Muhammadiyah Mataram
                          </div>
                        </div>
                        <div
                          style={{
                            width: "100%",
                            margin: "auto",
                            borderRadius: 10,
                            overflow: "hidden",
                            marginBottom: 20,
                            paddingBottom: 200,
                            position: "relative",
                          }}
                          className="animate__animated animate__fadeInDown animate__slow"
                        >
                          <iframe
                            width="100%"
                            height={200}
                            style={{ border: 0, position: "absolute" }}
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB8yt5w4P6NitG8K6xSb_IJ5y2AKUwpDWA%0A%20%20%20%20&q=-0.91562912849475,100.46129643917&language=id"
                            className="maps-embed"
                            tabIndex={-1}
                          />
                        </div>
                        <div className="text-center animate__animated animate__fadeInUp animate__slow">
                          <a
                            href="https://maps.google.com/?q=-0.91562912849475,100.46129643917&amp;dir_action=navigate"
                            className="mb-4 btn-maps-link btn btn-primary rounded-pill animate__animated animate__fadeInUp animate__slow"
                            target="_blank"
                            draggable="false"
                            tabIndex={-1}
                          >
                            Arahkan ke Lokasi
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="splide__slide invitation__slide"
                  id="ajakanMe-slide08"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="8 of 19"
                  style={{
                    height: "calc(100%)",
                    transition:
                      "opacity 400ms cubic-bezier(0.25, 1, 0.5, 1) 0s",
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="container-mobile"
                    style={{
                      backgroundImage:
                        "url(themes/gradient_luxury/images/bg-v2.png)",
                    }}
                  >
                    <div className="frame">
                      <img
                        className="frame-tr animate__animated animate__zoomIn"
                        src="./themes/gradient_luxury/images/frame-tr-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-tl animate__animated animate__fadeInDown animate__slow"
                        src="./themes/gradient_luxury/images/frame-tl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-bl animate__animated animate__fadeIn animate__slower"
                        src="./themes/gradient_luxury/images/frame-bl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-br animate__animated animate__fadeInUp animate__slow"
                        src="./themes/gradient_luxury/images/frame-br-v2.png"
                        alt="frame"
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100%" }}
                    >
                      <div style={{ width: "100%" }}>
                        <div className="mb-4 text-center animate__animated animate__fadeInRight animate__slower">
                          <div className="mb-2 editable font-latin color-accent h4">
                            Resepsi Pernikahan 2
                          </div>
                          <div
                            className="editable"
                            style={{ fontSize: "14.4px" }}
                          >
                            Senin, 27 Maret 2024
                          </div>
                          <div
                            className="editable"
                            style={{ fontSize: "14.4px" }}
                          >
                            13:00 - 17:00 WIB
                          </div>
                          <div
                            className="editable"
                            style={{ fontSize: "14.4px" }}
                          >
                            Gedung Muhammadiyah Mataram
                          </div>
                        </div>
                        <div
                          style={{
                            width: "100%",
                            margin: "auto",
                            borderRadius: 10,
                            overflow: "hidden",
                            marginBottom: 20,
                            paddingBottom: 200,
                            position: "relative",
                          }}
                          className="animate__animated animate__fadeInDown animate__slow"
                        >
                          <iframe
                            width="100%"
                            height={200}
                            style={{ border: 0, position: "absolute" }}
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB8yt5w4P6NitG8K6xSb_IJ5y2AKUwpDWA%0A%20%20%20%20&q=-6.1701257,106.821972&language=id"
                            className="maps-embed"
                            tabIndex={-1}
                          />
                        </div>
                        <div className="text-center animate__animated animate__fadeInUp animate__slow">
                          <a
                            href="https://maps.google.com/?q=-6.1701257,106.821972&amp;dir_action=navigate"
                            className="mb-4 btn-maps-link btn btn-primary rounded-pill animate__animated animate__fadeInUp animate__slow"
                            target="_blank"
                            draggable="false"
                            tabIndex={-1}
                          >
                            Arahkan ke Lokasi
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="splide__slide invitation__slide"
                  id="ajakanMe-slide09"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="9 of 19"
                  style={{
                    height: "calc(100%)",
                    transition:
                      "opacity 400ms cubic-bezier(0.25, 1, 0.5, 1) 0s",
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="container-mobile"
                    style={{
                      backgroundImage:
                        "url(themes/gradient_luxury/images/bg-v2.png)",
                    }}
                  >
                    <div className="frame">
                      <img
                        className="frame-tr animate__animated animate__zoomIn"
                        src="./themes/gradient_luxury/images/frame-tr-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-tl animate__animated animate__fadeInDown animate__slow"
                        src="./themes/gradient_luxury/images/frame-tl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-bl animate__animated animate__fadeIn animate__slower"
                        src="./themes/gradient_luxury/images/frame-bl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-br animate__animated animate__fadeInUp animate__slow"
                        src="./themes/gradient_luxury/images/frame-br-v2.png"
                        alt="frame"
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100%" }}
                    >
                      <div style={{ width: "100%" }}>
                        <div className="mb-4 text-center animate__animated animate__fadeInDown animate__slower">
                          <div className="mb-2 editable font-latin color-accent h4">
                            Special Guest
                          </div>
                          <div
                            className="editable"
                            style={{ fontSize: "14.4px" }}
                          >
                            ✔ Ir. H. Joko Widodo <br />✔ Prof. Dr. (H.C.) K. H.
                            Ma'ruf Amin
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="splide__slide invitation__slide"
                  id="ajakanMe-slide10"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="10 of 19"
                  style={{
                    height: "calc(100%)",
                    transition:
                      "opacity 400ms cubic-bezier(0.25, 1, 0.5, 1) 0s",
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="container-mobile"
                    style={{
                      backgroundImage:
                        "url(themes/gradient_luxury/images/bg-v2.png)",
                    }}
                  >
                    <div className="frame">
                      <img
                        className="frame-tr animate__animated animate__zoomIn"
                        src="./themes/gradient_luxury/images/frame-tr-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-tl animate__animated animate__fadeInDown animate__slow"
                        src="./themes/gradient_luxury/images/frame-tl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-bl animate__animated animate__fadeIn animate__slower"
                        src="./themes/gradient_luxury/images/frame-bl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-br animate__animated animate__fadeInUp animate__slow"
                        src="./themes/gradient_luxury/images/frame-br-v2.png"
                        alt="frame"
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100%" }}
                    >
                      <div style={{ width: "100%" }}>
                        <div>
                          <div className="text-center animate__animated animate__fadeInUp animate__slow">
                            <div className="mb-3 editable bg-text">
                              <span className="mb-3" style={{ fontSize: 16 }}>
                                Informasi Tambahan
                              </span>
                              <br />
                              <span style={{ fontSize: "14.4px" }}>
                                Tamu yang hadir diharapkan memakai masker dan
                                tidak membawa bayi
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="splide__slide invitation__slide"
                  id="ajakanMe-slide11"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="11 of 19"
                  style={{
                    height: "calc(100%)",
                    transition:
                      "opacity 400ms cubic-bezier(0.25, 1, 0.5, 1) 0s",
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="container-mobile"
                    style={{
                      backgroundImage:
                        "url(themes/gradient_luxury/images/bg-v2.png)",
                    }}
                  >
                    <div className="frame">
                      <img
                        className="frame-tr animate__animated animate__zoomIn"
                        src="./themes/gradient_luxury/images/frame-tr-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-tl animate__animated animate__fadeInDown animate__slow"
                        src="./themes/gradient_luxury/images/frame-tl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-bl animate__animated animate__fadeIn animate__slower"
                        src="./themes/gradient_luxury/images/frame-bl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-br animate__animated animate__fadeInUp animate__slow"
                        src="./themes/gradient_luxury/images/frame-br-v2.png"
                        alt="frame"
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100%" }}
                    >
                      <div style={{ width: "100%" }}>
                        <div>
                          <div className="mt-auto" style={{ width: "100%" }}>
                            <div className="text-center animate__animated animate__fadeInDown animate__slower">
                              <div className="mb-2 editable font-latin h4 color-accent">
                                Story
                              </div>
                            </div>
                          </div>
                          <div className="animate__animated animate__fadeInRight animate__slower">
                            <div
                              className="image-editable"
                              style={{
                                width: 248,
                                height: 195,
                                margin: "auto",
                                overflow: "hidden",
                                transform:
                                  "translate(15px, 24px) rotate(356deg)",
                                border: "4px solid var(--inv-border)",
                              }}
                            >
                              <img
                                src="./themes/assets/demo/preview1/3.jpg"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                                draggable="false"
                              />
                            </div>
                          </div>
                          <div className="animate__animated animate__fadeInLeft animate__slower">
                            <div
                              className="image-editable"
                              style={{
                                width: 248,
                                height: 195,
                                margin: "auto",
                                overflow: "hidden",
                                marginBottom: 20,
                                transform: "translate(-7px, 0px) rotate(2deg)",
                                border: "4px solid var(--inv-border)",
                              }}
                            >
                              <img
                                src="./themes/assets/demo/preview1/2.jpg"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                                draggable="false"
                              />
                            </div>
                          </div>
                          <div className="text-center">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#storyModal"
                              className="mb-4 btn btn-primary rounded-pill animate__animated animate__fadeInUp animate__slow"
                              tabIndex={-1}
                            >
                              Cerita Kami
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="splide__slide invitation__slide"
                  id="ajakanMe-slide12"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="12 of 19"
                  style={{
                    height: "calc(100%)",
                    transition:
                      "opacity 400ms cubic-bezier(0.25, 1, 0.5, 1) 0s",
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="container-mobile"
                    style={{
                      backgroundImage:
                        "url(themes/gradient_luxury/images/bg-v2.png)",
                    }}
                  >
                    <div className="frame">
                      <img
                        className="frame-tr animate__animated animate__zoomIn"
                        src="./themes/gradient_luxury/images/frame-tr-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-tl animate__animated animate__fadeInDown animate__slow"
                        src="./themes/gradient_luxury/images/frame-tl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-bl animate__animated animate__fadeIn animate__slower"
                        src="./themes/gradient_luxury/images/frame-bl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-br animate__animated animate__fadeInUp animate__slow"
                        src="./themes/gradient_luxury/images/frame-br-v2.png"
                        alt="frame"
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100%" }}
                    >
                      <div style={{ width: "100%" }}>
                        <div className="mb-4 text-center animate__animated animate__fadeInDown animate__slower">
                          <div className="mb-2 font-latin color-accent h4 editable">
                            Gallery
                          </div>
                        </div>
                        <div className="flex-wrap image-editable d-flex justify-content-center">
                          <div className="gallery gallery1 animate__animated animate__zoomIn animate__slower">
                            <div className="frame-gallery">
                              <img
                                src="./themes/assets/demo/preview1/9.jpg"
                                className="lightbox"
                                draggable="false"
                              />
                            </div>
                          </div>
                          <div className="gallery gallery2 animate__animated animate__zoomIn animate__slower">
                            <div className="frame-gallery">
                              <img
                                src="./themes/assets/demo/preview1/8.jpg"
                                className="lightbox"
                                draggable="false"
                              />
                            </div>
                          </div>
                          <div className="gallery gallery3 animate__animated animate__zoomIn animate__slower">
                            <div className="frame-gallery">
                              <img
                                src="./themes/assets/demo/preview1/7.jpg"
                                className="lightbox"
                                draggable="false"
                              />
                            </div>
                          </div>
                          <div className="gallery gallery4 animate__animated animate__zoomIn animate__slower">
                            <div className="frame-gallery">
                              <img
                                src="./themes/assets/demo/preview1/6.jpg"
                                className="lightbox"
                                draggable="false"
                              />
                            </div>
                          </div>
                          <div className="gallery gallery5 animate__animated animate__zoomIn animate__slower">
                            <div className="frame-gallery">
                              <img
                                src="./themes/assets/demo/preview1/5.jpg"
                                className="lightbox"
                                draggable="false"
                              />
                            </div>
                          </div>
                          <div className="gallery gallery6 animate__animated animate__zoomIn animate__slower">
                            <div className="frame-gallery">
                              <img
                                src="./themes/assets/demo/preview1/4.jpg"
                                className="lightbox"
                                draggable="false"
                              />
                            </div>
                          </div>
                          <div className="gallery gallery7 animate__animated animate__zoomIn animate__slower">
                            <div className="frame-gallery">
                              <img
                                src="./themes/assets/demo/preview1/3.jpg"
                                className="lightbox"
                                draggable="false"
                              />
                            </div>
                          </div>
                          <div className="gallery gallery8 animate__animated animate__zoomIn animate__slower">
                            <div className="frame-gallery">
                              <img
                                src="./themes/assets/demo/preview1/2.jpg"
                                className="lightbox"
                                draggable="false"
                              />
                            </div>
                          </div>
                          <div className="gallery gallery9 animate__animated animate__zoomIn animate__slower">
                            <div className="frame-gallery">
                              <img
                                src="./themes/assets/demo/preview1/1.jpg"
                                className="lightbox"
                                draggable="false"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="splide__slide invitation__slide"
                  id="ajakanMe-slide13"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="13 of 19"
                  style={{
                    height: "calc(100%)",
                    transition:
                      "opacity 400ms cubic-bezier(0.25, 1, 0.5, 1) 0s",
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="container-mobile"
                    style={{
                      backgroundImage:
                        "url(themes/gradient_luxury/images/bg-v2.png)",
                    }}
                  >
                    <div className="frame">
                      <img
                        className="frame-tr animate__animated animate__zoomIn"
                        src="./themes/gradient_luxury/images/frame-tr-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-tl animate__animated animate__fadeInDown animate__slow"
                        src="./themes/gradient_luxury/images/frame-tl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-bl animate__animated animate__fadeIn animate__slower"
                        src="./themes/gradient_luxury/images/frame-bl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-br animate__animated animate__fadeInUp animate__slow"
                        src="./themes/gradient_luxury/images/frame-br-v2.png"
                        alt="frame"
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100%" }}
                    >
                      <div style={{ width: "100%" }}>
                        <div>
                          <div
                            style={{
                              width: "100%",
                              margin: "auto",
                              overflow: "hidden",
                              marginBottom: 20,
                              paddingBottom: "57%",
                              position: "relative",
                            }}
                            className="embed-video animate__animated animate__fadeInDown animate__slower"
                          >
                            <iframe
                              width={560}
                              height={315}
                              src="https://www.youtube.com/embed/cKupsnh1CpA"
                              title="YouTube video player"
                              frameBorder={0}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              tabIndex={-1}
                            />
                          </div>
                          <div className="text-center animate__animated animate__fadeInUp animate__slower">
                            <img
                              width={50}
                              src="./themes/assets/images/logo/youtube-logo.png"
                              className="mb-3 attachment-large size-large animate__animated animate__fadeInUp animate__slow"
                            />
                            <br />
                            <a
                              href="https://www.youtube.com/watch?v=cKupsnh1CpA"
                              className="mb-4 btn-maps-link btn btn-primary rounded-pill animate__animated animate__fadeInUp animate__slow"
                              target="_blank"
                              draggable="false"
                              tabIndex={-1}
                            />
                          </div>
                          <div className="text-center animate__animated animate__fadeInUp animate__slower">
                            <img
                              width={50}
                              src="./themes/assets/images/logo/instagram-logo.png"
                              className="mb-3 attachment-large size-large animate__animated animate__fadeInUp animate__slow"
                            />
                            <br />
                            <a
                              href="azuracreative"
                              className="mb-4 btn-maps-link btn btn-primary rounded-pill animate__animated animate__fadeInUp animate__slow"
                              target="_blank"
                              draggable="false"
                              tabIndex={-1}
                            />
                          </div>
                          <div className="text-center animate__animated animate__fadeInUp animate__slower">
                            <img
                              width={50}
                              src="./themes/assets/images/logo/tiktok-logo.png"
                              className="mb-3 attachment-large size-large animate__animated animate__fadeInUp animate__slow"
                            />
                            <br />
                            <a
                              href="https://www.youtube.com/watch?v=cKupsnh1CpA"
                              className="mb-4 btn-maps-link btn btn-primary rounded-pill animate__animated animate__fadeInUp animate__slow"
                              target="_blank"
                              draggable="false"
                              tabIndex={-1}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="splide__slide invitation__slide"
                  id="ajakanMe-slide14"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="14 of 19"
                  style={{
                    height: "calc(100%)",
                    transition:
                      "opacity 400ms cubic-bezier(0.25, 1, 0.5, 1) 0s",
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="container-mobile"
                    style={{
                      backgroundImage:
                        "url(themes/gradient_luxury/images/bg-v2.png)",
                    }}
                  >
                    <div className="frame">
                      <img
                        className="frame-tr animate__animated animate__zoomIn"
                        src="./themes/gradient_luxury/images/frame-tr-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-tl animate__animated animate__fadeInDown animate__slow"
                        src="./themes/gradient_luxury/images/frame-tl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-bl animate__animated animate__fadeIn animate__slower"
                        src="./themes/gradient_luxury/images/frame-bl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-br animate__animated animate__fadeInUp animate__slow"
                        src="./themes/gradient_luxury/images/frame-br-v2.png"
                        alt="frame"
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100%" }}
                    >
                      <div style={{ width: "100%" }} className="text-center">
                        <div className="mb-3 font-latin color-accent h4 editable">
                          Wallet
                        </div>
                        <div className="editable animate__animated animate__fadeInUp animate__slower">
                          Jika berkenan memberikan hadiah, bisa dikirim melalui
                          rekening berikut
                        </div>
                        <div className="flex-wrap d-flex justify-content-center">
                          <div
                            id="inner-slider"
                            className="px-3 splide w-100 splide--grid splide--slide splide--ltr is-active is-initialized"
                            aria-labelledby="carousel-heading"
                            role="region"
                            aria-roledescription="carousel"
                          >
                            <div className="splide__arrows splide__arrows--ltr">
                              <button
                                className="splide__arrow splide__arrow--prev"
                                type="button"
                                disabled
                                aria-label="Previous slide"
                                aria-controls="inner-slider-track"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 40 40"
                                  width={40}
                                  height={40}
                                  focusable="false"
                                >
                                  <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" />
                                </svg>
                              </button>
                              <button
                                className="splide__arrow splide__arrow--next"
                                type="button"
                                aria-label="Next slide"
                                aria-controls="inner-slider-track"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 40 40"
                                  width={40}
                                  height={40}
                                  focusable="false"
                                >
                                  <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" />
                                </svg>
                              </button>
                            </div>
                            <div
                              className="splide__track splide__track--slide splide__track--ltr"
                              id="inner-slider-track"
                              aria-live="polite"
                              aria-atomic="true"
                              style={{ paddingLeft: 0, paddingRight: 0 }}
                            >
                              <ul
                                className="splide__list"
                                id="inner-slider-list"
                                role="presentation"
                                style={{ transform: "translateX(0px)" }}
                              >
                                <li
                                  className="splide__slide is-active is-visible"
                                  id="inner-slider-slide01"
                                  role="tabpanel"
                                  aria-roledescription="slide"
                                  aria-label="1 of 3"
                                  style={{
                                    width: "calc(100%)",
                                    height: "100%",
                                  }}
                                >
                                  <ul
                                    className="splide__slide__row"
                                    style={{
                                      height: "calc(50% - 0.5rem)",
                                      display: "flex",
                                      margin: "0px 0px 1rem",
                                      padding: 0,
                                    }}
                                  >
                                    <li
                                      className="splide__slide gift-1 position-relative splide__slide--col"
                                      id="inner-slider-slide01-col01"
                                      style={{
                                        width: "calc(50% - 0.75rem)",
                                        marginRight: "1.5rem",
                                      }}
                                    >
                                      <div className="mb-3">
                                        <div
                                          style={{
                                            maxWidth: 150,
                                            margin: "auto",
                                            overflow: "hidden",
                                            marginBottom: 20,
                                            borderRadius: 10,
                                            textAlign: "center",
                                            whiteSpace: "nowrap",
                                            height: 100,
                                          }}
                                          className="image-editable animate__animated animate__fadeInDown animate__slower"
                                        >
                                          <span
                                            className="helper"
                                            style={{
                                              display: "inline-block",
                                              height: "100%",
                                              verticalAlign: "middle",
                                            }}
                                          />
                                          <img
                                            src="./themes/assets/images/logo/bank/DKI.svg"
                                            style={{
                                              width: "95%",
                                              verticalAlign: "middle",
                                            }}
                                            draggable="false"
                                          />
                                        </div>
                                        <div className="text-center animate__animated animate__fadeInUp animate__slower" />
                                        <div
                                          className="mb-0 editable account-number font-weight-bold h3"
                                          style={{ fontSize: 13 }}
                                        >
                                          <span className="text-break">
                                            2139812398
                                          </span>
                                          <br />
                                          Farel Addison
                                        </div>
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-primary mt-2 mb-2 animate__animated animate__fadeInUp animate__slow delay-5"
                                          data-text={2139812398}
                                          onclick='copyBank(event,"
                                                            2139812398
                                                        ")'
                                          style={{
                                            fontFamily: "sans-serif",
                                            borderRadius: 4,
                                          }}
                                        >
                                          Copy Rekening
                                        </button>
                                        <button
                                          type="button"
                                          className="mt-2 mb-2 btn btn-sm btn-primary animate__animated animate__fadeInUp animate__slow delay-5"
                                          data-text={2139812398}
                                          onclick="copyText('2139812398')"
                                          style={{
                                            fontFamily: "sans-serif",
                                            borderRadius: 4,
                                          }}
                                        >
                                          Copy Rekening
                                        </button>
                                      </div>
                                    </li>
                                    <li
                                      className="splide__slide gift-1 position-relative splide__slide--col"
                                      id="inner-slider-slide01-col02"
                                      style={{
                                        width: "calc(50% - 0.75rem)",
                                        marginRight: "1.5rem",
                                      }}
                                    >
                                      <div className="mb-3">
                                        <div
                                          style={{
                                            maxWidth: 150,
                                            margin: "auto",
                                            overflow: "hidden",
                                            marginBottom: 20,
                                            borderRadius: 10,
                                            textAlign: "center",
                                            whiteSpace: "nowrap",
                                            height: 100,
                                          }}
                                          className="image-editable animate__animated animate__fadeInDown animate__slower"
                                        >
                                          <span
                                            className="helper"
                                            style={{
                                              display: "inline-block",
                                              height: "100%",
                                              verticalAlign: "middle",
                                            }}
                                          />
                                          <img
                                            src="./themes/assets/images/logo/bank/BCA syariah.svg"
                                            style={{
                                              width: "95%",
                                              verticalAlign: "middle",
                                            }}
                                            draggable="false"
                                          />
                                        </div>
                                        <div className="text-center animate__animated animate__fadeInUp animate__slower" />
                                        <div
                                          className="mb-0 editable account-number font-weight-bold h3"
                                          style={{ fontSize: 13 }}
                                        >
                                          <span className="text-break">
                                            0612839123
                                          </span>
                                          <br />
                                          Farel Addison
                                        </div>
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-primary mt-2 mb-2 animate__animated animate__fadeInUp animate__slow delay-5"
                                          //   data-text={0612839123}
                                          onclick='copyBank(event,"
                                                            0612839123
                                                        ")'
                                          style={{
                                            fontFamily: "sans-serif",
                                            borderRadius: 4,
                                          }}
                                        >
                                          Copy Rekening
                                        </button>
                                        <button
                                          type="button"
                                          className="mt-2 mb-2 btn btn-sm btn-primary animate__animated animate__fadeInUp animate__slow delay-5"
                                          //   data-text={0612839123}
                                          onclick="copyText('0612839123')"
                                          style={{
                                            fontFamily: "sans-serif",
                                            borderRadius: 4,
                                          }}
                                        >
                                          Copy Rekening
                                        </button>
                                      </div>
                                    </li>
                                  </ul>
                                  <ul
                                    className="splide__slide__row"
                                    style={{
                                      height: "calc(50% - 0.5rem)",
                                      display: "flex",
                                      margin: 0,
                                      padding: 0,
                                    }}
                                  >
                                    <li
                                      className="splide__slide gift-1 position-relative splide__slide--col"
                                      id="inner-slider-slide01-col03"
                                      style={{
                                        width: "calc(50% - 0.75rem)",
                                        marginRight: "1.5rem",
                                      }}
                                    >
                                      <div className="mb-3">
                                        <div
                                          style={{
                                            maxWidth: 150,
                                            margin: "auto",
                                            overflow: "hidden",
                                            marginBottom: 20,
                                            borderRadius: 10,
                                            textAlign: "center",
                                            whiteSpace: "nowrap",
                                            height: 100,
                                          }}
                                          className="image-editable animate__animated animate__fadeInDown animate__slower"
                                        >
                                          <span
                                            className="helper"
                                            style={{
                                              display: "inline-block",
                                              height: "100%",
                                              verticalAlign: "middle",
                                            }}
                                          />
                                          <img
                                            src="./themes/assets/images/logo/bank/Sinarmas.svg"
                                            style={{
                                              width: "95%",
                                              verticalAlign: "middle",
                                            }}
                                            draggable="false"
                                          />
                                        </div>
                                        <div className="text-center animate__animated animate__fadeInUp animate__slower" />
                                        <div
                                          className="mb-0 editable account-number font-weight-bold h3"
                                          style={{ fontSize: 13 }}
                                        >
                                          <span className="text-break">
                                            72183812381238
                                          </span>
                                          <br />
                                          Farel Addison
                                        </div>
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-primary mt-2 mb-2 animate__animated animate__fadeInUp animate__slow delay-5"
                                          data-text={72183812381238}
                                          onclick='copyBank(event,"
                                                            72183812381238
                                                        ")'
                                          style={{
                                            fontFamily: "sans-serif",
                                            borderRadius: 4,
                                          }}
                                        >
                                          Copy Rekening
                                        </button>
                                        <button
                                          type="button"
                                          className="mt-2 mb-2 btn btn-sm btn-primary animate__animated animate__fadeInUp animate__slow delay-5"
                                          data-text={72183812381238}
                                          onclick="copyText('72183812381238')"
                                          style={{
                                            fontFamily: "sans-serif",
                                            borderRadius: 4,
                                          }}
                                        >
                                          Copy Rekening
                                        </button>
                                      </div>
                                    </li>
                                    <li
                                      className="splide__slide gift-1 position-relative splide__slide--col"
                                      id="inner-slider-slide01-col04"
                                      style={{ width: "calc(50% - 0.75rem)" }}
                                    >
                                      <div className="mb-3">
                                        <div
                                          style={{
                                            maxWidth: 150,
                                            margin: "auto",
                                            overflow: "hidden",
                                            marginBottom: 20,
                                            borderRadius: 10,
                                            textAlign: "center",
                                            whiteSpace: "nowrap",
                                            height: 100,
                                          }}
                                          className="image-editable animate__animated animate__fadeInDown animate__slower"
                                        >
                                          <span
                                            className="helper"
                                            style={{
                                              display: "inline-block",
                                              height: "100%",
                                              verticalAlign: "middle",
                                            }}
                                          />
                                          <img
                                            src="./themes/assets/images/logo/bank/Permata.svg"
                                            style={{
                                              width: "95%",
                                              verticalAlign: "middle",
                                            }}
                                            draggable="false"
                                          />
                                        </div>
                                        <div className="text-center animate__animated animate__fadeInUp animate__slower" />
                                        <div
                                          className="mb-0 editable account-number font-weight-bold h3"
                                          style={{ fontSize: 13 }}
                                        >
                                          <span className="text-break">
                                            {" "}
                                            3231231{" "}
                                          </span>
                                          <br />
                                          Farel Addison
                                        </div>
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-primary mt-2 mb-2 animate__animated animate__fadeInUp animate__slow delay-5"
                                          data-text={3231231}
                                          onclick='copyBank(event,"
                                                            3231231
                                                        ")'
                                          style={{
                                            fontFamily: "sans-serif",
                                            borderRadius: 4,
                                          }}
                                        >
                                          Copy Rekening
                                        </button>
                                        <button
                                          type="button"
                                          className="mt-2 mb-2 btn btn-sm btn-primary animate__animated animate__fadeInUp animate__slow delay-5"
                                          data-text={3231231}
                                          onclick="copyText('3231231')"
                                          style={{
                                            fontFamily: "sans-serif",
                                            borderRadius: 4,
                                          }}
                                        >
                                          Copy Rekening
                                        </button>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="splide__slide is-visible is-next"
                                  id="inner-slider-slide02"
                                  role="tabpanel"
                                  aria-roledescription="slide"
                                  aria-label="2 of 3"
                                  style={{
                                    width: "calc(100%)",
                                    height: "100%",
                                  }}
                                >
                                  <ul
                                    className="splide__slide__row"
                                    style={{
                                      height: "calc(50% - 0.5rem)",
                                      display: "flex",
                                      margin: "0px 0px 1rem",
                                      padding: 0,
                                    }}
                                  >
                                    <li
                                      className="splide__slide gift-1 position-relative splide__slide--col"
                                      id="inner-slider-slide02-col01"
                                      style={{
                                        width: "calc(50% - 0.75rem)",
                                        marginRight: "1.5rem",
                                      }}
                                    >
                                      <div className="mb-3">
                                        <div
                                          style={{
                                            maxWidth: 150,
                                            margin: "auto",
                                            overflow: "hidden",
                                            marginBottom: 20,
                                            borderRadius: 10,
                                          }}
                                          className="image-editable animate__animated animate__fadeInDown animate__slower"
                                        >
                                          <img
                                            className="mt-2 mb-1"
                                            title="Dana.svg"
                                            src="./themes/assets/images/logo/dompet_digital/Dana.svg"
                                            style={{
                                              width: "100%",
                                              height: 100,
                                            }}
                                            draggable="false"
                                          />
                                        </div>
                                        <div className="text-center animate__animated animate__fadeInUp animate__slower" />
                                        <div
                                          className="mb-0 editable account-number-not-rek font-weight-bold h3"
                                          style={{ fontSize: 13 }}
                                        >
                                          <span className="text-break">
                                            6285155117574
                                          </span>
                                        </div>
                                        <button
                                          type="button"
                                          className="mt-2 mb-2 btn btn-sm btn-primary animate__animated animate__fadeInUp animate__slow delay-5"
                                          data-text={6285155117574}
                                          onclick="copyText('6285155117574')"
                                          style={{
                                            fontFamily: "sans-serif",
                                            borderRadius: 4,
                                          }}
                                        >
                                          Copy Dana
                                        </button>
                                      </div>
                                    </li>
                                    <li
                                      className="splide__slide gift-1 position-relative splide__slide--col"
                                      id="inner-slider-slide02-col02"
                                      style={{
                                        width: "calc(50% - 0.75rem)",
                                        marginRight: "1.5rem",
                                      }}
                                    >
                                      <div className="mb-3">
                                        <div
                                          style={{
                                            maxWidth: 150,
                                            margin: "auto",
                                            overflow: "hidden",
                                            marginBottom: 20,
                                            borderRadius: 10,
                                          }}
                                          className="image-editable animate__animated animate__fadeInDown animate__slower"
                                        >
                                          <img
                                            className="mt-2 mb-1"
                                            src="./themes/assets/images/logo/dompet_digital/Spay.svg"
                                            title="Spay.svg"
                                            style={{
                                              width: "100%",
                                              height: 100,
                                            }}
                                            draggable="false"
                                          />
                                        </div>
                                        <div className="text-center animate__animated animate__fadeInUp animate__slower" />
                                        <div
                                          className="mb-0 editable account-number-not-rek font-weight-bold h3"
                                          style={{ fontSize: 13 }}
                                        >
                                          <span className="text-break">
                                            6285155117574
                                          </span>
                                        </div>
                                        <button
                                          type="button"
                                          className="mt-2 mb-2 btn btn-sm btn-primary animate__animated animate__fadeInUp animate__slow delay-5"
                                          data-text={6285155117574}
                                          onclick="copyText('6285155117574')"
                                          style={{
                                            fontFamily: "sans-serif",
                                            borderRadius: 4,
                                          }}
                                        >
                                          Copy ShopeePay
                                        </button>
                                      </div>
                                    </li>
                                  </ul>
                                  <ul
                                    className="splide__slide__row"
                                    style={{
                                      height: "calc(50% - 0.5rem)",
                                      display: "flex",
                                      margin: 0,
                                      padding: 0,
                                    }}
                                  >
                                    <li
                                      className="splide__slide gift-1 position-relative splide__slide--col"
                                      id="inner-slider-slide02-col03"
                                      style={{
                                        width: "calc(50% - 0.75rem)",
                                        marginRight: "1.5rem",
                                      }}
                                    >
                                      <div className="mb-3">
                                        <div
                                          style={{
                                            maxWidth: 150,
                                            margin: "auto",
                                            overflow: "hidden",
                                            marginBottom: 20,
                                            borderRadius: 10,
                                          }}
                                          className="image-editable animate__animated animate__fadeInDown animate__slower"
                                        >
                                          <img
                                            className="mt-2 mb-1"
                                            src="./themes/assets/images/logo/dompet_digital/Ovo.svg"
                                            title="Ovo.svg"
                                            style={{
                                              width: "100%",
                                              height: 100,
                                            }}
                                            draggable="false"
                                          />
                                        </div>
                                        <div className="text-center animate__animated animate__fadeInUp animate__slower" />
                                        <div
                                          className="mb-0 editable account-number-not-rek font-weight-bold h3"
                                          style={{ fontSize: 13 }}
                                        >
                                          <span className="text-break">
                                            6285155117574
                                          </span>
                                        </div>
                                        <button
                                          type="button"
                                          className="mt-2 mb-2 btn btn-sm btn-primary animate__animated animate__fadeInUp animate__slow delay-5"
                                          data-text={6285155117574}
                                          onclick="copyText('6285155117574')"
                                          style={{
                                            fontFamily: "sans-serif",
                                            borderRadius: 4,
                                          }}
                                        >
                                          Copy OVO
                                        </button>
                                      </div>
                                    </li>
                                    <li
                                      className="splide__slide gift-1 position-relative splide__slide--col"
                                      id="inner-slider-slide02-col04"
                                      style={{ width: "calc(50% - 0.75rem)" }}
                                    >
                                      <div className="mb-3">
                                        <div
                                          style={{
                                            maxWidth: 150,
                                            margin: "auto",
                                            overflow: "hidden",
                                            marginBottom: 20,
                                            borderRadius: 10,
                                          }}
                                          className="image-editable animate__animated animate__fadeInDown animate__slower"
                                        >
                                          <img
                                            className="mt-2 mb-1"
                                            src="./themes/assets/images/logo/dompet_digital/Gopay.svg"
                                            title="Gopay.svg"
                                            style={{
                                              width: "100%",
                                              height: 100,
                                            }}
                                            draggable="false"
                                          />
                                        </div>
                                        <div className="text-center animate__animated animate__fadeInUp animate__slower" />
                                        <div
                                          className="mb-0 editable account-number-not-rek font-weight-bold h3"
                                          style={{ fontSize: 13 }}
                                        >
                                          <span className="text-break">
                                            6285155117574
                                          </span>
                                        </div>
                                        <button
                                          type="button"
                                          className="mt-2 mb-2 btn btn-sm btn-primary animate__animated animate__fadeInUp animate__slow delay-5"
                                          data-text={6285155117574}
                                          onclick="copyText('6285155117574')"
                                          style={{
                                            fontFamily: "sans-serif",
                                            borderRadius: 4,
                                          }}
                                        >
                                          Copy GOPAY
                                        </button>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                                <li
                                  className="splide__slide is-visible"
                                  id="inner-slider-slide03"
                                  role="tabpanel"
                                  aria-roledescription="slide"
                                  aria-label="3 of 3"
                                  style={{
                                    width: "calc(100%)",
                                    height: "100%",
                                  }}
                                >
                                  <ul
                                    className="splide__slide__row"
                                    style={{
                                      height: "calc(50% - 0.5rem)",
                                      display: "flex",
                                      margin: 0,
                                      padding: 0,
                                    }}
                                  >
                                    <li
                                      className="splide__slide gift-1 position-relative splide__slide--col"
                                      id="inner-slider-slide03-col01"
                                      style={{
                                        width: "calc(50% - 0.75rem)",
                                        marginRight: "1.5rem",
                                      }}
                                    >
                                      <div className="mb-3">
                                        <div
                                          style={{
                                            maxWidth: 150,
                                            margin: "auto",
                                            overflow: "hidden",
                                            marginBottom: 20,
                                            borderRadius: 10,
                                          }}
                                          className="image-editable animate__animated animate__fadeInDown animate__slower"
                                        >
                                          <img
                                            className="mt-2 mb-1"
                                            src="./themes/assets/images/logo/dompet_digital/Link Aja.svg"
                                            title="Link Aja.svg"
                                            style={{
                                              width: "100%",
                                              height: 100,
                                            }}
                                            draggable="false"
                                          />
                                        </div>
                                        <div className="text-center animate__animated animate__fadeInUp animate__slower" />
                                        <div
                                          className="mb-0 editable account-number-not-rek font-weight-bold h3"
                                          style={{ fontSize: 13 }}
                                        >
                                          <span className="text-break">
                                            6285155117574
                                          </span>
                                        </div>
                                        <button
                                          type="button"
                                          className="mt-2 mb-2 btn btn-sm btn-primary animate__animated animate__fadeInUp animate__slow delay-5"
                                          data-text={6285155117574}
                                          onclick="copyText('6285155117574')"
                                          style={{
                                            fontFamily: "sans-serif",
                                            borderRadius: 4,
                                          }}
                                        >
                                          Copy Link Aja
                                        </button>
                                      </div>
                                    </li>
                                    <li
                                      className="splide__slide gift-1 position-relative splide__slide--col"
                                      id="inner-slider-slide03-col02"
                                      style={{ width: "calc(50% - 0.75rem)" }}
                                    >
                                      <div className="mb-3">
                                        <div
                                          style={{
                                            maxWidth: 150,
                                            margin: "auto",
                                            overflow: "hidden",
                                            marginBottom: 20,
                                            borderRadius: 10,
                                          }}
                                          className="image-editable animate__animated animate__fadeInDown animate__slower"
                                        >
                                          <img
                                            className="mt-2 mb-1"
                                            src="./themes/assets/images/logo/whatsapp.svg"
                                            title="whatsapp.svg"
                                            style={{
                                              width: "100%",
                                              height: 100,
                                            }}
                                            draggable="false"
                                          />
                                        </div>
                                        <div className="text-center animate__animated animate__fadeInUp animate__slower" />
                                        <div
                                          className="mb-0 editable account-number-not-rek font-weight-bold h3"
                                          style={{ fontSize: 13 }}
                                        >
                                          <span className="text-break">
                                            6285155117574
                                          </span>
                                        </div>
                                        <a
                                          onclick="window.open('https://wa.me/6285155117574','_blank');"
                                          type="button"
                                          className="mt-2 mb-2 text-white btn btn-sm btn-primary animate__animated animate__fadeInUp animate__slow delay-5"
                                          data-text={6285155117574}
                                          style={{
                                            fontFamily: "sans-serif",
                                            borderRadius: 4,
                                          }}
                                        >
                                          Chat via Whatsapp
                                        </a>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                            <ul
                              className="splide__pagination splide__pagination--ltr"
                              role="tablist"
                              aria-label="Select a slide to show"
                            >
                              <li role="presentation">
                                <button
                                  className="splide__pagination__page is-active"
                                  type="button"
                                  role="tab"
                                  aria-controls="inner-slider-slide01"
                                  aria-label="Go to slide 1"
                                  aria-selected="true"
                                />
                              </li>
                              <li role="presentation">
                                <button
                                  className="splide__pagination__page"
                                  type="button"
                                  role="tab"
                                  aria-controls="inner-slider-slide02"
                                  aria-label="Go to slide 2"
                                  tabIndex={-1}
                                />
                              </li>
                              <li role="presentation">
                                <button
                                  className="splide__pagination__page"
                                  type="button"
                                  role="tab"
                                  aria-controls="inner-slider-slide03"
                                  aria-label="Go to slide 3"
                                  tabIndex={-1}
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="splide__slide invitation__slide"
                  id="ajakanMe-slide15"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="15 of 19"
                  style={{
                    height: "calc(100%)",
                    transition:
                      "opacity 400ms cubic-bezier(0.25, 1, 0.5, 1) 0s",
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="container-mobile"
                    style={{
                      backgroundImage:
                        "url(themes/gradient_luxury/images/bg-v2.png)",
                    }}
                  >
                    <div className="frame">
                      <img
                        className="frame-tr animate__animated animate__zoomIn"
                        src="./themes/gradient_luxury/images/frame-tr-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-tl animate__animated animate__fadeInDown animate__slow"
                        src="./themes/gradient_luxury/images/frame-tl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-bl animate__animated animate__fadeIn animate__slower"
                        src="./themes/gradient_luxury/images/frame-bl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-br animate__animated animate__fadeInUp animate__slow"
                        src="./themes/gradient_luxury/images/frame-br-v2.png"
                        alt="frame"
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100%" }}
                    >
                      <div style={{ width: "100%" }} className="text-center">
                        <div className="mb-2 font-latin color-accent h4 editable animate__animated animate__fadeInDown animate__slower">
                          Gift
                        </div>
                        <div className="mb-4 editable animate__animated animate__fadeInDown animate__slower">
                          Doa Restu Anda merupakan karunia yang sangat berarti
                          bagi kami. Namun jika Anda ingin memberi hadiah kami
                          sediakan fitur berikut
                        </div>
                        <div style={{ display: "flex" }}>
                          <button
                            type="button"
                            className="btn-catalog btn btn-block btn-primary rounded-pill animate__animated animate__fadeInUp animate__slow"
                            style={{ maxWidth: 150, margin: "auto" }}
                            tabIndex={-1}
                          >
                            🎁 Kirim Hadiah
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="splide__slide invitation__slide"
                  id="ajakanMe-slide16"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="16 of 19"
                  style={{
                    height: "calc(100%)",
                    transition:
                      "opacity 400ms cubic-bezier(0.25, 1, 0.5, 1) 0s",
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="container-mobile"
                    style={{
                      backgroundImage:
                        "url(themes/gradient_luxury/images/bg-v2.png)",
                    }}
                  >
                    <div className="frame">
                      <img
                        className="frame-tr animate__animated animate__zoomIn"
                        src="./themes/gradient_luxury/images/frame-tr-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-tl animate__animated animate__fadeInDown animate__slow"
                        src="./themes/gradient_luxury/images/frame-tl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-bl animate__animated animate__fadeIn animate__slower"
                        src="./themes/gradient_luxury/images/frame-bl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-br animate__animated animate__fadeInUp animate__slow"
                        src="./themes/gradient_luxury/images/frame-br-v2.png"
                        alt="frame"
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100%" }}
                    >
                      <div style={{ width: "100%" }}>
                        <div className="text-center">
                          <div className="mb-2 font-latin color-accent h4 editable animate__animated animate__fadeInDown animate__slow">
                            Health Protocol
                          </div>
                          <div className="mb-4 editable animate__animated animate__fadeInUp animate__slower">
                            Mengingat kondisi pandemi saat ini, kami menghimbau
                            Bapak/Ibu/Saudara/i tamu undangan agar tetap
                            memperhatikan protokol kesehatan dalam rangka upaya
                            pencegahan penyebaran virus Covid-19.
                          </div>
                        </div>
                        <div className="text-center d-flex justify-content-center">
                          <div
                            style={{ width: "50%" }}
                            className="p-4 animate__animated animate__fadeInLeft animate__slow delay-4"
                          >
                            <div className="color-accent">
                              <svg
                                width={80}
                                height={80}
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M12.5 30v1.25a8.75 8.75 0 0 0 0 17.5V50a27.504 27.504 0 0 0 54.502 5.237l-2.455-.474a24.9 24.9 0 0 1-3.297 8.405V48.982l3.75-9.75V47.5s-.038 4.096-.112 4.883l2.489.234c.082-.863.123-3.867.123-3.867a8.75 8.75 0 0 0 0-17.5V22.5a20.023 20.023 0 0 0-20-20H10a1.25 1.25 0 0 0-1.25 1.25v5h2.5V5H47.5A17.52 17.52 0 0 1 65 22.5v6.357l-6.513-8.375A1.249 1.249 0 0 0 57.5 20h-35a11.28 11.28 0 0 1-11.025-8.999l-2.45.498a13.678 13.678 0 0 0 4.051 7.249A12.476 12.476 0 0 0 12.5 22.5V30Zm0 16.25a6.25 6.25 0 0 1 0-12.5v12.5Zm55-12.5a6.25 6.25 0 0 1 0 12.5v-12.5ZM40 75a24.843 24.843 0 0 1-10.915-2.5h21.83A24.842 24.842 0 0 1 40 75Zm18.75-8.469A25.078 25.078 0 0 1 54.997 70H25.003a25.073 25.073 0 0 1-3.753-3.469V65h37.5v1.531Zm0-11.531h-25v2.5h25v5h-37.5v-5h10V55h-10v-5h37.5v5ZM25.518 22.5h31.37l7.942 10.21L59.14 47.5H37.775l.95-4.755-2.45-.49-1.05 5.245H20.86l-5.65-14.69L25.517 22.5ZM15 22.5c0-.704.075-1.406.222-2.095a13.708 13.708 0 0 0 6.771 2.084L15 29.482V22.5Zm0 16.732 3.75 9.75V63.17A25.017 25.017 0 0 1 15 50V39.232Zm4.357-7.804a13.373 13.373 0 0 1 13.786 0l-1.286 2.144a10.878 10.878 0 0 0-11.214 0l-1.286-2.144Zm28.786 2.144-1.286-2.144a13.373 13.373 0 0 1 13.786 0l-1.286 2.144a10.878 10.878 0 0 0-11.214 0ZM26.25 36.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm0 5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm27.5-5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm0 5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
                              </svg>
                            </div>
                            <div className="editable">Menggunakan masker</div>
                          </div>
                          <div
                            style={{ width: "50%" }}
                            className="p-4 animate__animated animate__fadeInRight animate__slow delay-4"
                          >
                            <div className="color-accent">
                              <svg
                                width={80}
                                height={80}
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M73.272 25h3.271v2.5H72.84c-.28 0-.552-.096-.771-.273l-.7-.566a51.79 51.79 0 0 0-11.6-7.102l-10.857-4.36-.039-.015a2.123 2.123 0 0 0-1.538-.071c-.504.17-.928.523-1.19.99a2.197 2.197 0 0 0-.229 1.542c.115.525.418.989.85 1.3l9.465 6.259a1.24 1.24 0 0 1 .534.799 16.127 16.127 0 0 0 2.61 5.667c2.589 3.512 6.247 5.055 10.872 4.587l.246 2.487c-.63.064-1.235.095-1.817.094-5.854 0-9.371-3.051-11.337-5.752a18.798 18.798 0 0 1-2.735-5.586H33.796V25h17.611l-6.01-3.974a4.65 4.65 0 0 1-1.299-1.372 4.71 4.71 0 0 1-.566-3.603 4.7 4.7 0 0 1 .788-1.681 4.611 4.611 0 0 1 2.505-1.713 4.56 4.56 0 0 1 3.016.226l10.858 4.36.04.016a54.243 54.243 0 0 1 12.173 7.449l.36.292Zm-45.88-7.5 5.197 25.255 2.417-.51-5.378-26.132a13.85 13.85 0 0 0-4.029-9.63 13.51 13.51 0 0 0-9.55-3.983H2.47V5h13.58a11.05 11.05 0 0 1 7.405 2.869A11.314 11.314 0 0 1 27.093 15h-7.496a5.014 5.014 0 0 0-1.76-2.701 4.908 4.908 0 0 0-3.022-1.049H2.469v2.5h12.346c.637.001 1.25.251 1.709.699.459.447.73 1.057.755 1.702l-6.144 31.104 2.421.49L19.531 17.5h7.861Zm35.643 27.208a54.273 54.273 0 0 0-12.172-7.448l-.028-.012L45.411 35h2.737v-2.5H36.163V35h1.042a4.699 4.699 0 0 0-1.013 1.955 4.73 4.73 0 0 0 .556 3.592c.324.53.751.99 1.254 1.351L42.022 45H19.753c-.94 0-1.861.271-2.654.783a4.978 4.978 0 0 0-1.823 2.105 5.053 5.053 0 0 0 .699 5.328 4.983 4.983 0 0 0-2.043 2.433 5.058 5.058 0 0 0-.172 3.188 5.002 5.002 0 0 0 1.77 2.643c.86.662 1.909 1.02 2.989 1.02h19.753V60H18.519a2.454 2.454 0 0 1-1.746-.732 2.516 2.516 0 0 1-.724-1.768c0-.663.26-1.299.724-1.768A2.454 2.454 0 0 1 18.519 55h19.753v-2.5H19.753a2.454 2.454 0 0 1-1.746-.732A2.516 2.516 0 0 1 17.284 50c0-.663.26-1.299.723-1.768a2.454 2.454 0 0 1 1.746-.732H45.68c.258 0 .51-.082.72-.234a1.264 1.264 0 0 0 .028-2.01l-6.947-5.36a2.175 2.175 0 0 1-.9-1.327 2.198 2.198 0 0 1 .222-1.547c.26-.47.684-.824 1.188-.996a2.122 2.122 0 0 1 1.542.068l.027.011 8.328 3.452a51.812 51.812 0 0 1 11.606 7.104c.437.353.868.839 1.47.839h13.58V45H63.396l-.36-.292Zm.61 25.424C60.755 71.596 53.371 75 47.275 75H24.692a2.454 2.454 0 0 1-1.747-.732 2.516 2.516 0 0 1-.723-1.768c0-.663.26-1.299.723-1.768A2.454 2.454 0 0 1 24.692 70h13.58v-2.5H20.988a2.457 2.457 0 0 1-1.745-.733A2.519 2.519 0 0 1 18.519 65h-2.47a5.042 5.042 0 0 0 1.258 3.33 4.925 4.925 0 0 0 3.127 1.639 5.046 5.046 0 0 0-.029 5.016 4.97 4.97 0 0 0 1.81 1.841 4.89 4.89 0 0 0 2.477.674h22.582c2.713 0 8.538-.654 17.214-5h12.055V70H64.198c-.192 0-.381.045-.552.132Zm-41.27-30.844.926-16.875-2.466-.138-.925 16.875 2.465.138Zm2.475-10.281 1.08 13.594 2.461-.2-1.08-13.595-2.461.201ZM11.11 52.5c0 .742-.217 1.467-.624 2.083a3.713 3.713 0 0 1-1.662 1.382 3.66 3.66 0 0 1-2.14.213 3.689 3.689 0 0 1-1.896-1.026 3.764 3.764 0 0 1-1.014-1.92 3.794 3.794 0 0 1 .21-2.167 3.74 3.74 0 0 1 1.365-1.683 3.67 3.67 0 0 1 2.058-.632 3.685 3.685 0 0 1 2.617 1.1 3.778 3.778 0 0 1 1.086 2.65Zm-2.469 0c0-.247-.072-.489-.208-.694a1.238 1.238 0 0 0-.554-.46 1.22 1.22 0 0 0-1.345.27 1.255 1.255 0 0 0-.268 1.362c.093.229.252.424.455.561a1.223 1.223 0 0 0 1.558-.156 1.26 1.26 0 0 0 .362-.883Zm27.16-30a3.67 3.67 0 0 1-2.057-.632 3.74 3.74 0 0 1-1.364-1.683 3.794 3.794 0 0 1-.211-2.167 3.765 3.765 0 0 1 1.014-1.92 3.689 3.689 0 0 1 1.896-1.026 3.66 3.66 0 0 1 2.14.214 3.714 3.714 0 0 1 1.662 1.38 3.783 3.783 0 0 1-.462 4.734 3.685 3.685 0 0 1-2.617 1.1Zm0-2.5c.245 0 .483-.073.687-.21a1.266 1.266 0 0 0 .187-1.923 1.23 1.23 0 0 0-1.346-.272 1.238 1.238 0 0 0-.554.46 1.261 1.261 0 0 0 .154 1.579c.231.234.545.366.873.366Zm12.346 45a3.67 3.67 0 0 1-2.057-.632 3.74 3.74 0 0 1-1.364-1.683 3.793 3.793 0 0 1-.211-2.167 3.765 3.765 0 0 1 1.013-1.92 3.689 3.689 0 0 1 1.897-1.026 3.66 3.66 0 0 1 2.14.213 3.714 3.714 0 0 1 1.662 1.382 3.784 3.784 0 0 1-.462 4.733 3.685 3.685 0 0 1-2.618 1.1Zm0-2.5c.244 0 .483-.073.686-.21a1.265 1.265 0 0 0 .187-1.923 1.23 1.23 0 0 0-1.345-.272 1.238 1.238 0 0 0-.554.46 1.262 1.262 0 0 0 .154 1.578c.231.235.545.367.872.367Z" />
                              </svg>
                            </div>
                            <div className="editable">Mencuci tangan</div>
                          </div>
                        </div>
                        <div className="text-center d-flex justify-content-center">
                          <div
                            style={{ width: "50%" }}
                            className="p-4 animate__animated animate__fadeInLeft animate__slow delay-8"
                          >
                            <div className="color-accent">
                              <svg
                                width={80}
                                height={80}
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M45.568 33.312a1.172 1.172 0 1 0-1.657 1.657l1.515 1.515H34.574l1.515-1.515a1.172 1.172 0 1 0-1.657-1.657l-3.516 3.516a1.172 1.172 0 0 0 0 1.657L34.432 42a1.17 1.17 0 0 0 1.657 0c.458-.458.458-1.2 0-1.658l-1.515-1.515h10.852l-1.515 1.515A1.172 1.172 0 1 0 45.57 42l3.515-3.515c.458-.458.458-1.2 0-1.657l-3.516-3.516ZM22.37 23.516H5.86A5.866 5.866 0 0 0 0 29.375a1.172 1.172 0 1 0 2.344 0 3.52 3.52 0 0 1 3.515-3.516h16.51a3.52 3.52 0 0 1 3.517 3.516v18.984c0 .624-.505 1.094-1.173 1.094s-1.171-.47-1.171-1.094V29.453a1.172 1.172 0 1 0-2.344 0v41.732c0 .924-.817 1.706-1.784 1.706-.984 0-1.784-.8-1.784-1.784V48.28c0-.647-.524-1.172-1.172-1.172h-4.687c-.648 0-1.172.525-1.172 1.172v22.826c0 .983-.8 1.784-1.784 1.784-.967 0-1.784-.782-1.784-1.706V29.453a1.172 1.172 0 1 0-2.343 0v18.828a1.173 1.173 0 0 1-2.344 0V34.063a1.172 1.172 0 1 0-2.344 0V48.28a3.52 3.52 0 0 0 4.688 3.314v19.59c0 2.233 1.851 4.05 4.127 4.05a4.132 4.132 0 0 0 4.128-4.128V49.453h2.343v21.654a4.132 4.132 0 0 0 4.128 4.127c2.276 0 4.128-1.816 4.128-4.05V51.608c.365.123.758.19 1.171.19 1.972 0 3.516-1.51 3.516-3.438V29.375c0-3.23-2.628-5.86-5.86-5.86ZM14.063 21.172c4.523 0 8.203-3.68 8.203-8.203 0-4.524-3.68-8.203-8.203-8.203S5.86 8.446 5.86 12.969s3.68 8.203 8.203 8.203Zm0-14.063a5.866 5.866 0 0 1 5.86 5.86c0 3.23-2.629 5.86-5.86 5.86a5.866 5.866 0 0 1-5.86-5.86 5.866 5.866 0 0 1 5.86-5.86ZM74.14 23.516H57.63a5.866 5.866 0 0 0-5.86 5.859v18.906a3.52 3.52 0 0 0 4.688 3.314v19.59c0 2.233 1.852 4.05 4.128 4.05a4.132 4.132 0 0 0 4.127-4.128V49.453h2.344v21.654a4.132 4.132 0 0 0 4.128 4.127c2.276 0 4.127-1.816 4.127-4.05V51.608c.366.123.76.19 1.172.19 1.972 0 3.516-1.51 3.516-3.438V29.375c0-3.23-2.629-5.86-5.86-5.86Zm3.516 24.843c0 .624-.504 1.094-1.172 1.094-.668 0-1.171-.47-1.171-1.094V29.453a1.172 1.172 0 1 0-2.344 0v41.732c0 .924-.817 1.706-1.784 1.706-.984 0-1.784-.8-1.784-1.784V48.28c0-.647-.525-1.172-1.172-1.172h-4.688a1.172 1.172 0 0 0-1.171 1.172v22.826c0 .983-.8 1.784-1.784 1.784-.967 0-1.784-.782-1.784-1.706V29.453a1.172 1.172 0 1 0-2.344 0V48.28a1.173 1.173 0 0 1-2.344.002V29.374a3.52 3.52 0 0 1 3.516-3.516h16.51a3.52 3.52 0 0 1 3.516 3.516v18.984ZM65.834 21.172c4.523 0 8.203-3.68 8.203-8.203 0-4.524-3.68-8.203-8.203-8.203s-8.203 3.68-8.203 8.203 3.68 8.203 8.203 8.203Zm0-14.063a5.866 5.866 0 0 1 5.86 5.86c0 3.23-2.629 5.86-5.86 5.86a5.866 5.866 0 0 1-5.86-5.86 5.866 5.866 0 0 1 5.86-5.86Z" />
                              </svg>
                            </div>
                            <div className="editable">Menjaga jarak</div>
                          </div>
                          <div
                            style={{ width: "50%" }}
                            className="p-4 animate__animated animate__fadeInRight animate__slow delay-8"
                          >
                            <div className="color-accent">
                              <svg
                                width={80}
                                height={80}
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="m49.42 37.347.214-.213a1.25 1.25 0 0 0-1.768-1.768l-.213.214a3.748 3.748 0 0 1-5.306 0l-.213-.214a1.25 1.25 0 0 0-1.768 1.768l.214.213a6.25 6.25 0 0 0 8.84 0ZM27.5 30H5a1.25 1.25 0 0 0-1.237 1.075l-1.25 8.75a1.257 1.257 0 0 0 .287 1 1.296 1.296 0 0 0 .95.425h2.063l-2.05 12.3c-.048.336.037.676.237.95l3.75 5a1.267 1.267 0 0 0 1 .5h5A1.25 1.25 0 0 0 15 58.75v-4.9l1.262-7.6H20A1.25 1.25 0 0 0 21.25 45v-5h6.25a1.25 1.25 0 0 0 1.25-1.25v-7.5A1.25 1.25 0 0 0 27.5 30ZM5.188 38.75l.9-6.25h1.187l-1.037 6.25h-1.05Zm13.562 5h-2.063l.625-3.75h1.438v3.75Zm2.5-6.25h-5a1.25 1.25 0 0 0-1.238 1.05l-2.5 15c-.01.066-.014.133-.012.2v3.75H9.375l-3.05-4.075L9.813 32.5H21.25v5Zm5 0h-2.5v-5h2.5v5Z" />
                                <path d="M77.5 13.75a11.25 11.25 0 0 0-22.425-1.25H31.25A1.25 1.25 0 0 0 30 13.75v2.5a11.269 11.269 0 0 0 7.025 10.425A6.201 6.201 0 0 0 35 31.25v4.7l-3.95 7.8h-2.3a1.276 1.276 0 0 0-.938.413 1.21 1.21 0 0 0-.3.975l2.5 22.5a1.236 1.236 0 0 0 1.238 1.112h7.5a13.779 13.779 0 0 0 2.5-.237v7.737a1.25 1.25 0 0 0 1.25 1.25H65a1.25 1.25 0 0 0 1.25-1.25v-9.325l4.013-2.688A16.173 16.173 0 0 0 77.5 50.725V31.25c.006-3.538-1-7.003-2.9-9.988a11.186 11.186 0 0 0 2.9-7.512ZM66.25 5a8.75 8.75 0 1 1-8.75 8.75A8.76 8.76 0 0 1 66.25 5ZM37.362 36.813a1.25 1.25 0 0 0 .138-.563v-5a3.761 3.761 0 0 1 3.75-3.75H55a6.25 6.25 0 0 1 6.25 6.25v6.462l-18.975 3.563v.025c-.337-.025-.675-.05-1.025-.05h-7.4l3.512-6.938ZM38.75 66.25h-6.375l-2.225-20h11.1A8.76 8.76 0 0 1 50 55a11.267 11.267 0 0 1-11.25 11.25Zm25 8.75h-20v-7.2a14.47 14.47 0 0 0 3.138-1.737v.012L63.75 55.962V75ZM65 52.5c-.22.026-.435.084-.638.175l-13.012 7.8A13.547 13.547 0 0 0 52.5 55a11.216 11.216 0 0 0-5.4-9.587L62.612 42.5h6.138A1.25 1.25 0 0 1 70 43.75v5a3.762 3.762 0 0 1-3.75 3.75H65Zm10-21.25v19.475a13.715 13.715 0 0 1-6.112 11.438l-2.638 1.75V55a6.25 6.25 0 0 0 6.25-6.25v-5A3.761 3.761 0 0 0 68.75 40h-5v-6.25A8.76 8.76 0 0 0 55 25H41.25a8.76 8.76 0 0 1-8.75-8.75V15h22.575A11.27 11.27 0 0 0 66.25 25a11.117 11.117 0 0 0 6.463-2.063A16.151 16.151 0 0 1 75 31.25ZM14.734 27.32c.496.12 1.005.18 1.516.18A6.25 6.25 0 0 0 20 16.25v-10a3.75 3.75 0 0 0-7.5 0v10a6.261 6.261 0 0 0-2.311 6.554 6.182 6.182 0 0 0 4.545 4.516Zm-.359-9.311A1.25 1.25 0 0 0 15 16.925V6.25a1.25 1.25 0 0 1 2.5 0h-1.25v2.5h1.25V10h-1.25v2.5h1.25v1.25h-1.25v2.5h1.25v.675a1.25 1.25 0 0 0 .625 1.084 3.75 3.75 0 1 1-3.75 0Z" />
                                <path d="M16.25 23.75a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM63.965 18.535a1.25 1.25 0 0 0 1.767 0l7.072-7.071a1.25 1.25 0 1 0-1.768-1.768l-6.187 6.188-2.653-2.651A1.25 1.25 0 1 0 60.43 15l3.536 3.535Z" />
                              </svg>
                            </div>
                            <div className="editable">Cek suhu tubuh</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="splide__slide invitation__slide"
                  id="ajakanMe-slide17"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="17 of 19"
                  style={{
                    height: "calc(100%)",
                    transition:
                      "opacity 400ms cubic-bezier(0.25, 1, 0.5, 1) 0s",
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="container-mobile"
                    style={{
                      backgroundImage:
                        "url(themes/gradient_luxury/images/bg-v2.png)",
                    }}
                  >
                    <div className="frame">
                      <img
                        className="frame-tr animate__animated animate__zoomIn"
                        src="./themes/gradient_luxury/images/frame-tr-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-tl animate__animated animate__fadeInDown animate__slow"
                        src="./themes/gradient_luxury/images/frame-tl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-bl animate__animated animate__fadeIn animate__slower"
                        src="./themes/gradient_luxury/images/frame-bl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-br animate__animated animate__fadeInUp animate__slow"
                        src="./themes/gradient_luxury/images/frame-br-v2.png"
                        alt="frame"
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100%" }}
                    >
                      <div style={{ width: "100%" }}>
                        <div className="text-center">
                          <div className="mb-2 font-latin color-accent h4 editable animate__animated animate__fadeInDown animate__slow">
                            Guest Book
                          </div>
                        </div>
                        <div
                          className="d-flex justify-content-center align-items-center"
                          style={{ height: "100%" }}
                        >
                          <div style={{ width: "100%" }}>
                            <div>
                              <div className="mb-5 animate__animated animate__fadeInRight animate__slower">
                                <div
                                  className="image-editable"
                                  style={{
                                    width: 248,
                                    height: 195,
                                    margin: "auto",
                                    overflow: "hidden",
                                    transform:
                                      "translate(15px, 24px) rotate(356deg)",
                                    border: "4px solid var(--inv-border)",
                                  }}
                                >
                                  <img
                                    src="./themes/assets/demo/preview1/7.jpg"
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "cover",
                                    }}
                                    draggable="false"
                                  />
                                </div>
                              </div>
                              <div className="text-center">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#rsvpModal"
                                  className="mb-4 btn-rsvp btn btn-primary rounded-pill animate__animated animate__fadeInUp animate__slow"
                                  tabIndex={-1}
                                >
                                  Kirimkan Ucapan
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="splide__slide invitation__slide"
                  id="ajakanMe-slide18"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="18 of 19"
                  style={{
                    height: "calc(100%)",
                    transition:
                      "opacity 400ms cubic-bezier(0.25, 1, 0.5, 1) 0s",
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="container-mobile"
                    style={{
                      backgroundImage:
                        "url(themes/gradient_luxury/images/bg-v2.png)",
                    }}
                  >
                    <div className="frame">
                      <img
                        className="frame-tr animate__animated animate__zoomIn"
                        src="./themes/gradient_luxury/images/frame-tr-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-tl animate__animated animate__fadeInDown animate__slow"
                        src="./themes/gradient_luxury/images/frame-tl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-bl animate__animated animate__fadeIn animate__slower"
                        src="./themes/gradient_luxury/images/frame-bl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-br animate__animated animate__fadeInUp animate__slow"
                        src="./themes/gradient_luxury/images/frame-br-v2.png"
                        alt="frame"
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "100%" }}
                    >
                      <div style={{ width: "100%" }}>
                        <div>
                          <div className="text-center">
                            <div className="mb-4 font-latin color-accent h4 editable animate__animated animate__fadeInDown animate__slow">
                              RSVP
                            </div>
                          </div>
                          <div
                            className="img-wrapper d-flex justify-content-center"
                            style={{ marginBottom: 50 }}
                          >
                            <div
                              id="qrcode"
                              className="d-flex justify-content-center animate__animated animate__fadeInDown"
                              style={{
                                width: "80%",
                                padding: 10,
                                backgroundColor: "white",
                              }}
                              title="https://invitema.com/theme/preview/7cbbc409ec990f19c78c75bd1e06f215/R3Vlc3Q="
                            >
                              <canvas
                                width={200}
                                height={200}
                                style={{ display: "none" }}
                              />
                              <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAFVpJREFUeF7tnduW2zoMQ9v//+g5K5dO3YTxBkjZSXvQV0m8gAApO5n0548fP75+nPjv62utu58/fz5Fv9rHo4PK5x6EnXiO9vFo343Rje+CD/mgmDo+p9S+sGstYyEiAslNKAK5IebiSmSkOnTISjFSTB2flAetRyCEULHuFoqIUYVwtA8iI8HixqeImGLq+KQ8aD0CIYQikBKhDlmpUfwVAqEkXD5R0tP7vRIP5TSN0bWvxPy459EHEXQaE/kj+5f4KUbCYUUM5GO7XsX7NEGUxCdOyf4U1Co21+fR+x38fu0lspCg3EZE/gijCESs8rQ7i252t1ExpzG69js5EWEjkA6qf57JBHmBYQTyDAwJkprC/2aCuFeeFcDu9QIlHqV4Tr8hn6v9KeRyfbpNwL2SKXgSN2gKUg5UJ9f+tQ6Pn4O4SbhO3cJ2CjX14fpc7S8CuVWAuEjrJFrlfARCKApvYyIQAUSB8NNmmwkikLXqPFr5Xu8i4CMQDWGlY28t0X5ap6iU8x83QYiM1GUIlGrdvdu6gnDtK9cLN0+K2cVd8e/6nO53c4hAlCoWU4mAo0LSMwzZj0DqwnUazR4FlDpkgkQgVw653VfpPdRIiPArGk0EsuDr81QoWiey0PmKnEp3I79793kin2P71d4IpECGCuuuUyGpCEp3VGw4hDmiGzv+z7iidXKc4txpNH/9BKGkIxBXGrf91IhcqyvsRSBCYQhoAtEVVCbITQqdjr93RevYo9qSaKn2bkzExStu7/4knZLOBCHa1OtK8R3LK+z9kwJxQKz2ugJYIQg3ZorR7Uzkv0MUipFwWx3TCkxcHFwMKGcFM5wgrhNy+mmgVNePFd3SeThUMHbJ4RJ4Whclh8c9U5/ueYqxwiwCaXwOQkDTeqewEcjzc1QHx73aRCAv0CHyud04AiEEbusuwalOmtfXuySBTJ3Qebq+TNcr4AnYT1tPDrWAVjcq4ur1+v3u38VaTc6QSyPXtBHR+TPqoBB8uicCaTyDEDmm62eQaxojnT8jhyn5lfMRSARy5cnfOMkVgk/3/Pxyn5SmHh/Ou/dKJVzX5mNK5ONo+xXE5NONmSYA2evQYJpDx+f0TARSIEjkoEJTUch+BEIInrcegUQg0hVrBSWpsXQax4q49mxEIBFIBLKjEBTIVPV0/oz7/7QzuQ+wR3e1yv40x0eblLOS49QGceeM56gIRKg0FZoKKbgYb4lA+E1cB+QIREAtAvG/FnKBlXAj6KnxZIIUCBJoR1w/qNCdmIgc7nomyFyQ5dtD93MQlyxu4VyyufYV4rkxkM1OjIQz+aRnCnr2I/8djKYd3/VJuFOO1ykYgTxTzS0EkZUKVXauh/+ctGNja5dycslL9pRJrhDUyYFET02jwjgCWXSN2xNJh9wueUikROgIpH7OikAikCsCEUhTINR5aKzReequnfPuGdr/jhxdXIjglANdP2hCUbwrrpE0Vd06KpjgBHGdnl2o8t74cH8nID4xRyLclCyu/QjkBQKfSJ5tqBHIDY2zGxM1HRLU9Q2R+SKC9rtcVXLIBGn8qNoZZHQ7/BkxvftFxEcIhIJQOsPeHlI5FZqIU3Umilmx6eTk2iNMKt+EE+WsdM/tnk6M5IO45q5P/ZXPSY+fg1BQLvDuwx8VXiGfW0zFZgRy+ePT2T+3tsRFqrPrLwJ5Ud8IhL9rRWRUpOMSNgIpUHVBLFUPb7FoFCvF3rt+uILrkI9wcnOgmDsxEs6uANycaT/lfL2ur/7xaioMBTUFrXoGWQHUyvs4YaDkQDgToZUYyAdhQj7cGN39dL0nXkQgdwSpkAS0Q6TLXsUfNQryOSUT2VcwoTzdGN39FGME8kIAR5OPyEXEyQS5IagQeIs14Up1rwSYK5bY0ek6QaJwChmBRCAv+eSqvOoaK2zsEZ5GPYmFOl0E8g8JhMYgkeEIspFAiMDT83T3fVxXRK6ccUR9Rt1W+yAuEe50/pAr1moQiLwKUaYEn56nQnVyUM5EIH8i4NYxAhHV5wJLZmlKZoLUCE7r4J6PQIjJ93UXWDIbgdwQcnF199Pk/ogrFgVJZOokMbVJMdM1kvwfsb46JrJHdVFydAnfaSxKHL/2KPGMX/MScJSke7d27V3sU4wRCH/m4GJYEVUh5PYc1XoakxJPBFJUkoCjwjldrLuXOr5rl+xNybjiiuU2U8KA6nyNefpdLALOJdNqe5kgRJPbegQi/miDoqq9Mbia4FS4qvyrYyCKHeGPbLrXQsqB6k7rypWKYqAJQTHQOvkv32JN/2DKDWo6UZTzRC7FBoG5XT/CH9mMQNZPvQjkzqoI5Fn+1OhoPRPkRUt1gXPJmSuWNsvcOrgTqGPfrfVHXrHo/0kngtK6Vt7Xuzr26Yy7Ps2ByFURyb1inR3j2fFVb8EoZ6ozCbJ8i0WHOsWmRPbW3SQ7b2Qop0n8VWGVnM4mIGFA61OMlPPuRFJwpmdJ/H/SyQmtK4lHIM+/GBKB8HMSccvlZoV5BNL4jhAVZnq/r6ag69PdTxOC1l1/nf1vmSD0mte9ctH+DjB7Z1bc36n4tE45Tc8r9+9ptyTykX1l4hEO0xim3Gu95iWnblJEJnc9ArkhRgReXUcie1VHOuNyyd1P3IpAXiDkFk7plltXZJ8KlwmypgkQzhFIBPKNwOqJozQNahTuRHD3LxEIPWBOR7V7XgGeYiYbLtC0n3KkeJUrk5uTKwg3ByJfZ93FmXx0MBj/9wcdp9tE6DwRoXPXVQjqxOgWRvE/xWXarSOQGwIRiPD/gxBZIxBCoLeeCSK8fckEuXeyN/9vTJ069GTx+9RHCIS+i+Um6QK5+ipQxTudAISBa1/BiHChmKbr5L9DXhcnuua5MSq4P11/I5ApleafQax4jppn8acFl3yK/wjkQ38gYVoYKr5rX+lkRFCKabpO/jNBmggrxd+aPqIQ7mhupvp9LALREHRxcutI9l1uXt9iuT/aQEEQVJ0g9wRF/i7rR8fsirwTD+FGMSg4OXs6/mjqUI5OfFdyw4sNWo9ARMSpcAS0u668aHh6mDTfcompv9xGOSnPVTQhjo5RySETRKhCBPIMkkIuEnEEUpCPyEZ8pTGtdF/XBsVMZHHXlRyIfBQz4UzrlNM/O0FI1UQuKgwBS/YpPipsdTdVzmz3UI4ryEs4uM8xFDPVZUVOrg0XA6qjm2P5DEIEnAZNQZJ9io9AikBqhKguLrk7dVgt+hUxj//k1iUsFSICuSFKOKwmE9VlBdlcGy4GJEo3x0wQQvTFOl1XXCKsuK9PyeSSx92v5Lha9EvqsPqrJk3OvTxGZKyIQWfcGIkM7rrrX9lPOVOM5GMqQEUgFMN0nTAqY4xAGHYil7vOHv0dVHyKkTxGIITQm9bdwl/CpDNuKkQud931r+ynnClG8hGBEEJvWncLH4HUhYpAeo0T/6KQHnQe14nQrr2O/SkZqBe43XRFPK5Pwpnq5MasPAuSTVqf1qXFpccfjpsGQcBT4ci/Yn8KNMXgknVFPK5PwplwdGOOQO6ITwtFhSNyUmEv593ikk83ZnpdqeQw9UnnKQYXwwgkAvnmnNskXLJVgnV9RiDc9qhJXJst/TYvdUO61xE5qPCUZpUk2Tw6J5ecne5LuNC6Qo49G4Qx+b+sUx2m60oM2z0llyKQ+dc6iGydJkHkcItPjcy1F4HcEXMLRftp3S1UJoiL2G0/iZqsRiARyDdHSNREtkyQWm4urh0cSei5YhUIUWHoOkKFyjOIRkuqw3Rdi+L3LukZhIzSaKVu6pJnur/KZ3UOFCMJjjC/rK+OmexRzEqTIB+uAAgnJSay8VTLT/ugkAS2AgS3cDaoDz+gQGRT7K+OmexRzEodyEcEIlReAXprxt2fCVIXgcgbgdwQ+LjvYmWC9AhNuLnXwAhEFAh1bLcT0VBxC33EhDg7Z8KkWiec3BzIHsX4jg87KSbKiTCSJggZiUCoTMesT4tPdXWjjkDuiNGDlQssjfKOPRLtanJ1YpyeWZ0D2aN4I5AI5JsjJEAi04p1IjRNCFp3Y/xnBUI/Xk1ATYGm87RO8V3vkeaPGNNUc+25ZL7475zZxr160lM8n/As6MZIdbxyJwLxP4QjYGn9kUxK91XORCBfSr98eRMoP0mPQCIQhVVud64mN01magI0Fd0YlUaWCdL4GgcBS+tEhFyxbggRjrROwlfO2wJRjG4Do/20Tkkq6/RQTZ1nep5iVK5YhNO715VnkNU4U85KI9q7lraeQaZBrR6TRL4jRr17VaAYI5B6YhDOUy6S/QjkjtDqzkaCUDqb20iILEevZ4LcESCgqfhu4V2yKYVSOsfeNdE9TzlkgvzFE4QEQeurBUPPAxd/q0VIObrrJBglB8XGmXvKV6Tm/5uo1HYvJ7oJEBfL5kqved3iU5BTewqIEciZ0rj5ikBe3NeJ8KRal8wRyPnkVzxGIBHIN0+OEDU91yiNQSHyUXsikKZAqLBENiKO8lBOPlavEwndqXtEjm6MK+pANogrFDPZp/OVf/ygkIrprlMSBBI941zsuzFFIM/UOaIO09oTwck+nY9A7ggdLSC3EIroVz/LuTF2yOeKjPZTzJ0Yt2cikAhE5hiRVRG1a4P2y8G/eByg80sEQk5IxQTC9LpTxUfFpJjcnN6RgzthaP805+qq63KH9hPOlIOCgf0MQkFTUERGSprWI5AbAnSNVMix3UO4K2+xXO7QfoqJuKhgEIEIX3cnoImM7npH5FTs6RQlMkYgJOcX6wTsavJ1yEVTbXWMLiYX/0TwCMT/wzfC7DqJ6f8HIV1Q4dzuSeShdYr3CLJNc1Ripj2rRe42BYqv07gUAu/5JW4qMUcgAkpTAdB5IQTcEoE8QxSBNJ4fMkFuRHInsbsfFb3g2kg+IpAI5JsjmSAnTZB33/vcQq+421InonWKmToZne/k6F7rKAbKgTCq1smna9ONUcEIf93dTcINcirIDnlc4Gk/YUSY0PlOjkrxt3YpBsqBMIpA7ghMgaRCKYWYxqD4WEmuTs6UYwTCVVQwygRhHHEHEdwlMzoUHnCV4q8UuRLzEbeFrU3CmfyXH3bSf8FGxXeBOSKJTuJO3ISBmxPFe1l3bboxkoCm9jrXQqcmyl43xwhEQbXY45LFdVPZj0BcFJ/3RyAvMCRgXOgjkGfEOp+LuKJ360STmWLOBGkiHoH8jwXy+LM/xKHVXcDt9kTW6v5OZ47O6RFT6mQr7u/TnOk88UR5jlpdexdXpe5PX3enxBWjZGO7vhqkCOSGLhGc6kjnlRq7Ptz908ZD/q44ZoL4b4yIHEQut9Mp3Zju30Qm9zxhoMS8ujm6uEYg9yq6hFWKv7fH9Uf7FbK5BCdyKDERTq4Pdz+JnnIgf+UEmaqQgnKTcuOhonXWpzHQealQ5u/crhYM4aa8qp5yoxMDnaH18Z/cUvEpADpP62R/xfo0BjofgdRVUnDZnnQFqHAjAhFQIoKTCTqvEMG9r2eCUFW09QhEwIkITibofASSCfKSQy55jhijU4JPz0cgHywQ+rIijWqluESgyboimGmMdL1RYtjmSE3hspf20Pr0ZQjVxM2Z7FXrVLdpDAqG+HX3CIR/hM0tlFIY2kPrEQhLUsEwAmEc8VcKIxABxMaWTJAGaDTROqOawsgV6xkhtykQxp26TWNoTRAiAyVKQStBufd1isldp87l2qP9yodsncawhyPZIwwUnhAX6BpIuLnrFE+VM/5wHAFFQBMIbtC03wWt07lW+NjaiEBuaLhcc+tA3IlARESPLpTSVCgGKjY1JorB9V+S6+HrMQQ/+aTztE6YRSCE4H396EIROZVuSsWOQJ6LTZi1BEKccslEd9dOEhQjEZJycGOm5yxad/Pp7HdjoP2EYSfGKe7kk+xfzuMzCDlxgaGgIhBCfM06EZ4mENVxRZTkg9YpBuV8BCI8HBKQq9epsCvWIxD+ADgTRHzmWC0Al5wrBOFOBHe/e5NQcpriTj7I/lUgR//JrXtloqDJXvWAq5zZA5OKvyJmKuaUsKsxoJyv5IK3WEc3CrJP6xGIyMoIxP/yZAQikmvaRRSVu91VDP17WwQSgcicIbI8GopA+Kohg7/ZSI2D1l2fZK/zQSHZdGN0G6Xi3/427zRoEtBqAVbxTn0QsO66gqly59+z4zYqqhORsbpiES6KzUmOZL/CKAIR2EnknK4LIeBX7slGBPKMkCLYCISYVbyNIWDddSGECEQAiZpAJogA4mVLrljcTXPFuiFgfw4icvDlNuqurspdsit3Y5cc05irznc2TnRNpLor3ZtqRTG4625dqhwjEGGiKMXfgkvkpvVqylEMZHNKzgiEEFi0ToV0VU+FL7uC+TOeRM5pzJkg9+sM1CUTpGAzCSoCuYE2xYnIR/1RaSJUK4rBXXcbl3TFoiQIKLq/r7b/jgkxBb6DARGQbB59XuGFGyPtJ665dSo/7Hz8sqIbFAFDqqfznXXXJ5GHYqDuTYUi+5d1ipHqdvR5JQc3RtofgSioF3sikGdQIpDeNRR/vLrJ0e9jLlmn/qpuS52IyEMxZYIQQvVzEk0Aqhudp8mtcBMF4pKHyOImTdB33gBRjOSTgHcL5/o7Yv8UE6WuREiXay4OlGPrGcQNuhOEm+h2fwQyQe/3WaobeYlACKH7OgGtACm6um6LQBy0Xu+lupEXpa6ZIAvex1MhlOsLFZvW3RiIHO4Udv2v2D/FhDBQng2Pxoly/Mgr1tGgVOShYroxkT0isDIFlcZAfpx1yommgSIIyokI7eRz2evmdM2BPgeZkoWAdO27oEQgPcRcMpXdd/iVnghE+ACsV979U27xKQayR+czQW4IHd1MqU5VHTJBCva6U42Aj0BuCBBOEYjwEP9IJhqzymh3bRKh3UKTPWWdfCo29vac3RSm8VYTh2x2MPz4CRKBaN2XyEHrEUiNUATSeA6iTuSSjcirXE8UG5kgXzZMEUgEUj4gE5OoSdD5FetuI+rEjAKZJkIPXo/2VyRNPt11eoahHFZcE6m4lBPF6NaZclKm3opaO3G7GF2fc+hzECeAaq8b1ArQyKe7HoE8VzYCmSrjfp7IOO1sylssKiatRyARyDcCNMpd3UQgzT/UWfwp9LQRUZM448POKTddLpZXLFcA7v5pkkqhaSLQ+jSnM66JFGOHDGRzu67kSLWexkjnlRgp57f/LhYFSOtK5zoayKngOtdEFxciK9lTGhNNGbLhxnh0XTNBXjwnuWSJQGrEiPBEcKoDnc8E+dA/mHILkwlykwIJyp1Abh0qQeaK1figkK4SbmEikM8VyH9TXCdt65MoJwAAAABJRU5ErkJggg=="
                                style={{ display: "block" }}
                              />
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="mb-4 editable animate__animated animate__fadeInUp animate__slower">
                              Konfirmasi Kehadiran
                            </div>
                            <a
                              href="https://invitema.com/theme/preview/7cbbc409ec990f19c78c75bd1e06f215/R3Vlc3Q="
                              className="mb-4 btn btn-primary rounded-pill animate__animated animate__fadeInUp animate__slow"
                              tabIndex={-1}
                            >
                              Kirim RSVP
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="splide__slide invitation__slide"
                  id="ajakanMe-slide19"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="19 of 19"
                  style={{
                    height: "calc(100%)",
                    transition:
                      "opacity 400ms cubic-bezier(0.25, 1, 0.5, 1) 0s",
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="container-mobile"
                    style={{
                      backgroundImage:
                        "url(themes/gradient_luxury/images/bg-v2.png)",
                    }}
                  >
                    <div className="frame">
                      <img
                        className="frame-tr animate__animated animate__zoomIn"
                        src="./themes/gradient_luxury/images/frame-tr-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-tl animate__animated animate__fadeInDown animate__slow"
                        src="./themes/gradient_luxury/images/frame-tl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-bl animate__animated animate__fadeIn animate__slower"
                        src="./themes/gradient_luxury/images/frame-bl-v2.png"
                        alt="frame"
                      />
                      <img
                        className="frame-br animate__animated animate__fadeInUp animate__slow"
                        src="./themes/gradient_luxury/images/frame-br-v2.png"
                        alt="frame"
                      />
                    </div>
                    <div
                      className="watermark d-flex justify-content-center align-items-center"
                      style={{ height: "100%" }}
                    >
                      <div swtyle="width: 100%">
                        <div className="text-center">
                          <div className="mb-3 editable quotes animate__animated animate__fadeInDown animate__slower">
                            Merupakan suatu kebahagiaan dan kehormatan bagi
                            kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir
                            dan memberikan do'a restu kepada kedua mempelai.
                          </div>
                          <div className="editable font-italic animate__animated animate__fadeInDown animate__slow">
                            Hormat Kami Yang Mengundang
                          </div>
                          <div
                            className="mt-2 editable font-accent h4 color-accent animate__animated animate__fadeInDown animate__slow"
                            style={{ fontSize: "21.6px" }}
                          />
                          <div className="mt-5 watermark-placeholder" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div id="menuSlider" className="splide">
            <div className="splide__track menu-track">
              <ul className="splide__list menu-list">
                <li className="splide__slide menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    xmlSpace="preserve"
                    width="10mm"
                    height="10mm"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 1000 1000"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        fill="currentColor"
                        d="M180 562c2,61 1,124 1,186 -1,44 -1,88 -1,132l0 3c1,27 1,53 40,53 27,0 54,0 81,0 16,0 33,0 49,0 0,-14 0,-29 0,-43 0,-53 0,-105 0,-158 0,-6 0,-13 0,-20 -1,-37 -2,-73 26,-101 29,-30 61,-29 99,-28 8,0 15,0 22,0 6,0 13,0 20,0 38,-1 73,-3 103,26 30,28 29,65 28,104 -1,6 -1,12 -1,17 0,53 0,107 0,160 0,14 0,29 0,43 16,0 32,0 48,0 27,0 54,0 80,0 23,0 33,-3 36,-9 6,-9 6,-27 6,-47 0,-44 0,-88 -1,-132 0,-63 -1,-127 1,-189 1,-17 15,-31 32,-31 7,0 14,0 21,0 25,1 49,1 57,-7 20,-23 -16,-56 -46,-85 -6,-6 -11,-11 -17,-17 -8,-8 -14,-14 -19,-19 -13,-12 -19,-18 -24,-29 -5,-11 -5,-19 -4,-35 0,-6 0,-14 0,-23 0,-20 0,-40 0,-60 0,-20 0,-39 0,-59 0,-4 0,-8 0,-11 0,-28 0,-46 -13,-54 -5,-3 -21,-4 -38,-5 -19,-1 -37,0 -44,3 -15,6 -16,23 -17,53l0 3c0,18 -15,32 -32,31 -7,0 -12,-2 -17,-5l0 0c-9,-6 -43,-40 -76,-73 -26,-26 -52,-52 -63,-62 -24,-22 -60,18 -93,53 -7,8 -14,15 -22,23l0 1 0 0 -269 268c-5,5 -11,10 -17,16 -22,22 -51,49 -52,63 -2,22 16,28 35,30 12,1 25,1 35,0 7,0 14,0 14,0 18,0 32,14 32,32 0,1 0,1 0,2zm-63 186c1,-52 1,-104 0,-156 -8,0 -16,0 -24,0 -50,-5 -99,-24 -93,-99 4,-38 42,-75 72,-104 6,-6 12,-11 16,-15l0 0 0 0 269 -268 0 0c6,-6 13,-14 20,-22 53,-58 112,-121 183,-57 11,10 38,37 65,64 8,8 16,16 24,23 7,-19 20,-34 49,-46 15,-6 43,-9 70,-8 27,1 54,6 68,14 45,26 45,59 45,109 0,4 -1,7 -1,11 0,20 0,39 0,59 0,20 0,40 1,59 0,12 -1,20 -1,26 0,6 -2,6 -1,7 0,1 3,3 10,9 5,5 11,11 20,20 5,5 11,10 16,16 51,48 111,105 49,174 -25,26 -59,28 -94,28 -1,52 0,104 0,156 1,44 1,88 1,133 -1,28 -1,54 -14,78 -15,25 -42,41 -92,41 -26,0 -53,0 -80,0 -26,0 -53,0 -80,0 -17,0 -31,-14 -31,-32 0,-25 -1,-50 -1,-75 0,-53 0,-107 0,-160 1,-7 1,-13 1,-19 1,-24 1,-47 -8,-56 -11,-10 -33,-9 -57,-8 -7,0 -13,0 -21,0 -9,0 -17,0 -24,0 -23,-1 -43,-2 -53,9 -9,9 -8,31 -8,55 1,7 1,14 1,22 -1,52 0,105 0,157 0,25 0,50 0,75 0,18 -14,32 -32,32 -27,0 -54,0 -81,0 -27,0 -54,0 -81,0 -102,0 -103,-57 -103,-117l0 -2c-1,-45 0,-89 0,-133z"
                      />
                    </g>
                  </svg>
                  <span>Opening</span>
                </li>
                <li className="splide__slide menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    xmlSpace="preserve"
                    width="8.86mm"
                    height="10mm"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 886 1000"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <g id="_680943552">
                        <path
                          fill="currentColor"
                          d="M654 915c1,-6 5,-19 8,-29 5,-22 -4,-93 73,-108 11,-2 23,-1 35,-2 12,-2 16,-5 30,-7 -9,46 -99,134 -146,146zm-598 -763c0,-37 2,-50 24,-72 18,-18 37,-25 69,-25l588 0c32,0 53,7 71,26 21,22 22,35 22,71l0 475c0,32 -1,42 -17,63 -10,14 -25,26 -47,31 -37,7 -71,-2 -116,42 -46,46 -34,86 -43,118 -10,39 -42,64 -91,64l-367 0c-31,0 -53,-7 -71,-26 -21,-22 -22,-35 -22,-71l0 -696zm-56 -6l0 708c0,83 59,146 142,146l384 0c200,0 360,-162 360,-367l0 -487c0,-82 -58,-146 -142,-146l-600 0c-86,0 -144,63 -144,146z"
                        />
                        <path
                          fill="currentColor"
                          d="M256 499l374 0c47,0 46,-54 -3,-54l-368 0c-49,0 -50,54 -3,54z"
                        />
                        <path
                          fill="currentColor"
                          d="M256 332l374 0c22,0 36,-7 33,-30 -2,-21 -17,-24 -40,-24l-360 0c-23,0 -38,3 -40,24 -3,23 11,30 33,30z"
                        />
                        <path
                          fill="currentColor"
                          d="M256 664l263 0c51,0 43,-53 -3,-53l-253 0c-53,0 -56,53 -7,53z"
                        />
                      </g>
                    </g>
                  </svg>
                  <span>Quotes</span>
                </li>
                <li
                  className="splide__slide menu-item"
                  id="append-nav-mempelai"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    xmlSpace="preserve"
                    width="9.94mm"
                    height="10mm"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 994 1000"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <g id="_680963040">
                        <path
                          fill="currentColor"
                          d="M214 933c0,-36 2,-78 0,-112 -1,-18 -10,-28 -20,-36 -243,-212 -144,-627 188,-713 239,-61 481,69 545,321 33,129 -18,267 -80,344 -36,43 -66,72 -119,105 -104,62 -246,79 -364,41 -74,-25 -64,9 -150,50zm246 -932c-268,16 -493,253 -456,548 13,102 63,186 125,255 33,37 27,5 27,99 -1,42 -4,83 32,95 32,10 66,-20 88,-33 59,-37 43,-35 84,-22 30,9 75,16 109,17 89,4 139,-5 216,-32 86,-30 167,-99 215,-165 18,-24 34,-49 48,-78 32,-68 46,-123 46,-208 0,-212 -141,-378 -314,-445 -67,-26 -140,-36 -220,-31z"
                        />
                        <path
                          fill="currentColor"
                          d="M277 472c-17,6 -30,21 -19,42 9,18 30,15 54,15 48,0 392,3 408,-1 17,-5 29,-26 17,-44 -11,-16 -33,-14 -55,-14 -63,0 -390,-3 -405,2z"
                        />
                        <path
                          fill="currentColor"
                          d="M274 343c-16,7 -28,24 -15,43 11,17 32,13 56,13 45,0 90,0 136,0 35,1 256,4 271,-1 16,-6 26,-29 14,-45 -12,-16 -33,-13 -56,-13 -61,1 -394,-2 -406,3z"
                        />
                        <path
                          fill="currentColor"
                          d="M491 602c-22,9 -25,39 -7,51 14,10 57,6 76,6 26,0 146,3 161,-2 22,-6 27,-37 10,-50 -14,-11 -58,-7 -78,-7 -25,0 -149,-2 -162,2z"
                        />
                      </g>
                    </g>
                  </svg>
                  <span>Guest</span>
                </li>
                <li className="splide__slide menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    xmlSpace="preserve"
                    width="11.66mm"
                    height="10mm"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 1166 1000"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        fill="currentColor"
                        d="M583 1000c78,-30 289,-208 342,-261 138,-137 337,-400 189,-616 -124,-181 -423,-166 -513,68 -8,20 -10,45 -18,61 -10,-21 -8,-57 -41,-111 -171,-277 -610,-117 -533,228 50,227 297,452 482,574 22,14 70,48 92,57zm-257 -880c53,0 102,25 136,66 -29,-20 -62,-32 -99,-32 -106,0 -192,100 -192,222 0,61 21,116 56,157 -56,-39 -94,-110 -94,-191 0,-122 87,-222 193,-222z"
                      />
                    </g>
                  </svg>
                  <span>Groom</span>
                </li>
                <li className="splide__slide menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    xmlSpace="preserve"
                    width="11.66mm"
                    height="10mm"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 1166 1000"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                  .fil1 {\n                    fill-rule: nonzero;\n                  }\n                ",
                      }}
                    />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <g id="_609464168">
                        <path
                          fill="currentColor"
                          d="M326 120c53,0 102,25 136,66 -29,-20 -62,-32 -99,-32 -106,0 -192,100 -192,222 0,61 21,116 56,157 -56,-39 -94,-110 -94,-191 0,-122 87,-222 193,-222z"
                        />
                        <path
                          className="fil1"
                          fill="currentColor"
                          d="M584 931c27,-14 68,-43 112,-76 75,-57 154,-126 183,-155 73,-72 165,-183 200,-300 24,-78 23,-159 -28,-233 -27,-40 -65,-68 -107,-84 -36,-14 -76,-20 -115,-15 -38,4 -76,17 -109,40 -38,26 -70,64 -90,115 -2,7 -4,15 -6,23 -3,13 -6,26 -11,37 -9,17 -29,23 -45,15 -7,-4 -12,-10 -15,-17 -5,-10 -7,-19 -10,-31 -4,-17 -9,-40 -26,-68 -45,-71 -110,-108 -178,-115 -40,-4 -81,2 -119,17 -37,15 -71,39 -97,71 -43,52 -64,126 -44,215 19,88 72,175 140,256 89,105 201,197 296,260 8,5 13,8 17,11 16,11 37,25 52,34zm152 -24c-54,41 -107,77 -140,90 -7,4 -16,4 -24,1 -21,-8 -53,-30 -77,-46 -8,-6 -15,-11 -16,-11 -99,-65 -217,-162 -310,-273 -74,-88 -133,-185 -155,-284 -24,-111 3,-204 58,-271 33,-40 76,-71 124,-90 47,-19 99,-27 150,-21 86,9 171,55 227,146 4,6 7,13 10,18 25,-48 60,-86 99,-113 43,-29 91,-46 140,-51 50,-5 100,1 146,19 54,21 103,57 138,109 64,93 66,193 37,289 -40,130 -139,250 -217,328 -31,30 -113,101 -190,160z"
                        />
                      </g>
                    </g>
                  </svg>
                  <span>Bride</span>
                </li>
                <li className="splide__slide menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    xmlSpace="preserve"
                    width="10.87mm"
                    height="10mm"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 1087 1000"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <g id="_680965752">
                        <path
                          fill="currentColor"
                          d="M58 357l972 0c0,178 -1,355 0,533 0,64 -25,55 -82,55l-805 0c-55,0 -86,12 -86,-51 1,-179 1,-358 1,-537zm109 -196c2,75 32,95 106,95 75,0 103,-22 106,-96l329 -1c3,76 32,97 106,97 75,0 104,-21 106,-96 127,-16 117,18 109,142l-971 0c-1,-21 -3,-108 2,-124 10,-27 74,-23 107,-17zm597 -72c0,-27 6,-34 33,-34 68,0 67,-4 67,55 0,61 9,91 -33,91 -78,0 -67,10 -67,-112zm-541 0c0,-28 6,-34 34,-34 37,0 22,-3 59,4 4,10 8,18 8,34 0,79 10,108 -34,108 -47,0 -67,6 -67,-32l0 -80zm-56 12c-70,11 -117,-13 -152,44 -22,36 -13,136 -13,187 0,56 -4,571 2,601 15,64 62,67 135,67l805 0c171,0 141,-49 141,-261 0,-134 0,-268 0,-403 0,-48 8,-154 -11,-188 -32,-58 -84,-38 -154,-47 0,-78 -28,-101 -106,-101 -77,0 -105,23 -105,102l-331 1c0,-78 -28,-103 -105,-103 -78,0 -106,22 -106,101z"
                        />
                        <path
                          fill="currentColor"
                          d="M714 828c-16,-9 -102,-81 -110,-97 -14,-31 2,-60 27,-67 38,-10 56,20 83,21 24,0 43,-29 78,-22 28,6 46,38 31,68 -7,16 -96,90 -109,97zm-95 -218c-99,29 -93,138 -20,198 30,25 62,44 86,73 37,46 66,-12 94,-35 45,-37 150,-98 87,-196 -19,-29 -65,-55 -116,-39 -32,10 -23,23 -57,7 -25,-12 -48,-15 -74,-8z"
                        />
                        <path
                          fill="currentColor"
                          d="M117 450c0,148 -19,127 131,127 48,0 36,-36 36,-127 0,-52 -29,-40 -124,-40 -33,0 -43,6 -43,40z"
                        />
                        <path
                          fill="currentColor"
                          d="M736 450c0,149 -22,127 133,127 46,0 34,-45 34,-127 0,-52 -36,-40 -127,-40 -31,0 -40,7 -40,40z"
                        />
                        <path
                          fill="currentColor"
                          d="M530 450c0,149 -21,127 133,127 46,0 33,-51 33,-127 0,-52 -35,-40 -125,-40 -32,0 -41,7 -41,40z"
                        />
                        <path
                          fill="currentColor"
                          d="M324 651c0,35 -5,93 6,124 28,10 87,6 124,6 49,0 36,-40 36,-130 0,-49 -40,-37 -129,-37 -30,0 -37,6 -37,37z"
                        />
                        <path
                          fill="currentColor"
                          d="M338 574l143 2c15,-28 9,-81 9,-118 0,-62 -23,-48 -83,-48 -55,0 -84,-14 -84,48 0,35 -10,95 15,116z"
                        />
                        <path
                          fill="currentColor"
                          d="M134 778l135 2c24,-23 15,-84 15,-121 0,-58 -33,-45 -86,-45 -56,0 -81,-14 -81,49 0,38 -10,97 17,115z"
                        />
                      </g>
                    </g>
                  </svg>
                  <span>Event 1</span>
                </li>
                <li className="splide__slide menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    xmlSpace="preserve"
                    width="10.87mm"
                    height="10mm"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 1087 1000"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <g id="_680965752">
                        <path
                          fill="currentColor"
                          d="M58 357l972 0c0,178 -1,355 0,533 0,64 -25,55 -82,55l-805 0c-55,0 -86,12 -86,-51 1,-179 1,-358 1,-537zm109 -196c2,75 32,95 106,95 75,0 103,-22 106,-96l329 -1c3,76 32,97 106,97 75,0 104,-21 106,-96 127,-16 117,18 109,142l-971 0c-1,-21 -3,-108 2,-124 10,-27 74,-23 107,-17zm597 -72c0,-27 6,-34 33,-34 68,0 67,-4 67,55 0,61 9,91 -33,91 -78,0 -67,10 -67,-112zm-541 0c0,-28 6,-34 34,-34 37,0 22,-3 59,4 4,10 8,18 8,34 0,79 10,108 -34,108 -47,0 -67,6 -67,-32l0 -80zm-56 12c-70,11 -117,-13 -152,44 -22,36 -13,136 -13,187 0,56 -4,571 2,601 15,64 62,67 135,67l805 0c171,0 141,-49 141,-261 0,-134 0,-268 0,-403 0,-48 8,-154 -11,-188 -32,-58 -84,-38 -154,-47 0,-78 -28,-101 -106,-101 -77,0 -105,23 -105,102l-331 1c0,-78 -28,-103 -105,-103 -78,0 -106,22 -106,101z"
                        />
                        <path
                          fill="currentColor"
                          d="M714 828c-16,-9 -102,-81 -110,-97 -14,-31 2,-60 27,-67 38,-10 56,20 83,21 24,0 43,-29 78,-22 28,6 46,38 31,68 -7,16 -96,90 -109,97zm-95 -218c-99,29 -93,138 -20,198 30,25 62,44 86,73 37,46 66,-12 94,-35 45,-37 150,-98 87,-196 -19,-29 -65,-55 -116,-39 -32,10 -23,23 -57,7 -25,-12 -48,-15 -74,-8z"
                        />
                        <path
                          fill="currentColor"
                          d="M117 450c0,148 -19,127 131,127 48,0 36,-36 36,-127 0,-52 -29,-40 -124,-40 -33,0 -43,6 -43,40z"
                        />
                        <path
                          fill="currentColor"
                          d="M736 450c0,149 -22,127 133,127 46,0 34,-45 34,-127 0,-52 -36,-40 -127,-40 -31,0 -40,7 -40,40z"
                        />
                        <path
                          fill="currentColor"
                          d="M530 450c0,149 -21,127 133,127 46,0 33,-51 33,-127 0,-52 -35,-40 -125,-40 -32,0 -41,7 -41,40z"
                        />
                        <path
                          fill="currentColor"
                          d="M324 651c0,35 -5,93 6,124 28,10 87,6 124,6 49,0 36,-40 36,-130 0,-49 -40,-37 -129,-37 -30,0 -37,6 -37,37z"
                        />
                        <path
                          fill="currentColor"
                          d="M338 574l143 2c15,-28 9,-81 9,-118 0,-62 -23,-48 -83,-48 -55,0 -84,-14 -84,48 0,35 -10,95 15,116z"
                        />
                        <path
                          fill="currentColor"
                          d="M134 778l135 2c24,-23 15,-84 15,-121 0,-58 -33,-45 -86,-45 -56,0 -81,-14 -81,49 0,38 -10,97 17,115z"
                        />
                      </g>
                    </g>
                  </svg>
                  <span>Event 2</span>
                </li>
                <li className="splide__slide menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    xmlSpace="preserve"
                    width="10.87mm"
                    height="10mm"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 1087 1000"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <g id="_680965752">
                        <path
                          fill="currentColor"
                          d="M58 357l972 0c0,178 -1,355 0,533 0,64 -25,55 -82,55l-805 0c-55,0 -86,12 -86,-51 1,-179 1,-358 1,-537zm109 -196c2,75 32,95 106,95 75,0 103,-22 106,-96l329 -1c3,76 32,97 106,97 75,0 104,-21 106,-96 127,-16 117,18 109,142l-971 0c-1,-21 -3,-108 2,-124 10,-27 74,-23 107,-17zm597 -72c0,-27 6,-34 33,-34 68,0 67,-4 67,55 0,61 9,91 -33,91 -78,0 -67,10 -67,-112zm-541 0c0,-28 6,-34 34,-34 37,0 22,-3 59,4 4,10 8,18 8,34 0,79 10,108 -34,108 -47,0 -67,6 -67,-32l0 -80zm-56 12c-70,11 -117,-13 -152,44 -22,36 -13,136 -13,187 0,56 -4,571 2,601 15,64 62,67 135,67l805 0c171,0 141,-49 141,-261 0,-134 0,-268 0,-403 0,-48 8,-154 -11,-188 -32,-58 -84,-38 -154,-47 0,-78 -28,-101 -106,-101 -77,0 -105,23 -105,102l-331 1c0,-78 -28,-103 -105,-103 -78,0 -106,22 -106,101z"
                        />
                        <path
                          fill="currentColor"
                          d="M714 828c-16,-9 -102,-81 -110,-97 -14,-31 2,-60 27,-67 38,-10 56,20 83,21 24,0 43,-29 78,-22 28,6 46,38 31,68 -7,16 -96,90 -109,97zm-95 -218c-99,29 -93,138 -20,198 30,25 62,44 86,73 37,46 66,-12 94,-35 45,-37 150,-98 87,-196 -19,-29 -65,-55 -116,-39 -32,10 -23,23 -57,7 -25,-12 -48,-15 -74,-8z"
                        />
                        <path
                          fill="currentColor"
                          d="M117 450c0,148 -19,127 131,127 48,0 36,-36 36,-127 0,-52 -29,-40 -124,-40 -33,0 -43,6 -43,40z"
                        />
                        <path
                          fill="currentColor"
                          d="M736 450c0,149 -22,127 133,127 46,0 34,-45 34,-127 0,-52 -36,-40 -127,-40 -31,0 -40,7 -40,40z"
                        />
                        <path
                          fill="currentColor"
                          d="M530 450c0,149 -21,127 133,127 46,0 33,-51 33,-127 0,-52 -35,-40 -125,-40 -32,0 -41,7 -41,40z"
                        />
                        <path
                          fill="currentColor"
                          d="M324 651c0,35 -5,93 6,124 28,10 87,6 124,6 49,0 36,-40 36,-130 0,-49 -40,-37 -129,-37 -30,0 -37,6 -37,37z"
                        />
                        <path
                          fill="currentColor"
                          d="M338 574l143 2c15,-28 9,-81 9,-118 0,-62 -23,-48 -83,-48 -55,0 -84,-14 -84,48 0,35 -10,95 15,116z"
                        />
                        <path
                          fill="currentColor"
                          d="M134 778l135 2c24,-23 15,-84 15,-121 0,-58 -33,-45 -86,-45 -56,0 -81,-14 -81,49 0,38 -10,97 17,115z"
                        />
                      </g>
                    </g>
                  </svg>
                  <span>Event 3</span>
                </li>
                <li className="splide__slide menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    xmlSpace="preserve"
                    width="12.33mm"
                    height="10mm"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 1233 1000"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        fill="currentColor"
                        d="M623 577c36,-51 115,-100 185,-107 99,-9 171,2 235,51 51,39 97,88 118,173 10,38 17,88 -3,122 -31,53 -89,44 -154,44l-264 0c-5,-72 -6,-106 -34,-166 -11,-25 -22,-44 -36,-64 -15,-20 -39,-43 -47,-53zm87 -341c-9,-89 60,-160 138,-167 89,-8 163,61 168,140 7,88 -58,159 -138,166 -90,8 -161,-59 -168,-139zm56 178c-31,19 -91,13 -190,124 -9,-1 -40,-19 -53,-25 -14,-7 -48,-16 -57,-23 85,-35 142,-147 115,-251 -22,-88 -104,-164 -215,-163 -108,2 -189,79 -210,169 -20,90 17,179 89,228 8,6 21,12 28,18 -99,33 -170,78 -223,170 -46,78 -84,229 -2,298 46,38 81,40 156,40 66,0 132,0 197,0 62,0 136,3 197,-1 29,-2 55,-12 74,-25 10,-7 19,-15 26,-23 3,-3 8,-8 11,-12 4,-6 6,-10 11,-16 104,-4 217,-1 322,0 61,0 89,-3 131,-32 113,-80 43,-272 -19,-348 -25,-31 -49,-54 -84,-78 -53,-36 -101,-45 -111,-52 73,-33 146,-132 117,-247 -58,-224 -373,-216 -426,0 -22,92 16,180 87,231 9,6 23,13 29,18z"
                      />
                    </g>
                  </svg>
                  <span>Special Guest</span>
                </li>
                <li className="splide__slide menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    xmlSpace="preserve"
                    width="8.86mm"
                    height="10mm"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 886 1000"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <g id="_680943552">
                        <path
                          fill="currentColor"
                          d="M654 915c1,-6 5,-19 8,-29 5,-22 -4,-93 73,-108 11,-2 23,-1 35,-2 12,-2 16,-5 30,-7 -9,46 -99,134 -146,146zm-598 -763c0,-37 2,-50 24,-72 18,-18 37,-25 69,-25l588 0c32,0 53,7 71,26 21,22 22,35 22,71l0 475c0,32 -1,42 -17,63 -10,14 -25,26 -47,31 -37,7 -71,-2 -116,42 -46,46 -34,86 -43,118 -10,39 -42,64 -91,64l-367 0c-31,0 -53,-7 -71,-26 -21,-22 -22,-35 -22,-71l0 -696zm-56 -6l0 708c0,83 59,146 142,146l384 0c200,0 360,-162 360,-367l0 -487c0,-82 -58,-146 -142,-146l-600 0c-86,0 -144,63 -144,146z"
                        />
                        <path
                          fill="currentColor"
                          d="M256 499l374 0c47,0 46,-54 -3,-54l-368 0c-49,0 -50,54 -3,54z"
                        />
                        <path
                          fill="currentColor"
                          d="M256 332l374 0c22,0 36,-7 33,-30 -2,-21 -17,-24 -40,-24l-360 0c-23,0 -38,3 -40,24 -3,23 11,30 33,30z"
                        />
                        <path
                          fill="currentColor"
                          d="M256 664l263 0c51,0 43,-53 -3,-53l-253 0c-53,0 -56,53 -7,53z"
                        />
                      </g>
                    </g>
                  </svg>
                  <span>Informasi Tambahan</span>
                </li>
                <li className="splide__slide menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    xmlSpace="preserve"
                    width="9.75mm"
                    height="10mm"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 975 1000"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <g id="_680948376">
                        <path
                          fill="currentColor"
                          d="M502 635c14,-6 55,-40 65,-50 27,-26 65,-77 37,-118 -24,-35 -82,-32 -99,13 -2,3 -2,8 -3,11 -3,-4 -2,-11 -8,-21 -33,-53 -118,-22 -103,44 10,44 57,87 93,110 4,3 13,10 18,11z"
                        />
                        <g>
                          <circle
                            fill="currentColor"
                            cx={911}
                            cy={509}
                            r={64}
                          />
                          <circle
                            fill="currentColor"
                            cx={790}
                            cy={791}
                            r={72}
                          />
                          <circle
                            fill="currentColor"
                            cx={504}
                            cy={920}
                            r={80}
                          />
                          <circle
                            fill="currentColor"
                            cx={210}
                            cy={807}
                            r={89}
                          />
                          <circle fill="currentColor" cx={97} cy={521} r={97} />
                          <circle
                            fill="currentColor"
                            cx={218}
                            cy={226}
                            r={105}
                          />
                          <circle
                            fill="currentColor"
                            cx={496}
                            cy={113}
                            r={113}
                          />
                          <circle
                            fill="currentColor"
                            cx={785}
                            cy={233}
                            r={121}
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span>Story</span>
                </li>
                <li className="splide__slide menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    xmlSpace="preserve"
                    width="11.3998mm"
                    height="10mm"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 1140 1000"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <g id="_609469232">
                        <path
                          fill="currentColor"
                          d="M63 787c38,-23 148,-110 197,-145 72,-51 90,-5 159,52 15,13 28,24 45,41 91,87 138,81 235,23 38,-23 72,-41 109,-64 22,-12 95,-60 114,-59l0 244c-1,27 -8,42 -30,52 -22,11 -575,6 -647,6 -151,0 -183,18 -182,-66 0,-28 -1,-56 0,-84zm0 -84c-3,-108 0,-255 0,-367 0,-38 13,-68 53,-68l743 0c39,0 63,30 63,68 0,57 2,170 -2,220l-212 124c-164,95 -112,75 -307,-87 -98,-81 -165,-8 -233,39 -18,13 -85,67 -105,71zm921 98c-6,-93 6,-464 -3,-504 -8,-41 -47,-76 -87,-86 -41,-11 -586,-3 -680,-5 -2,-17 5,-88 9,-105 8,-32 33,-44 72,-39l622 72c214,24 161,1 136,277l-35 312c-4,25 -4,80 -34,78zm-984 -469l0 555c0,73 43,113 116,113l743 0c41,0 69,-12 92,-33 28,-27 30,-47 35,-96 43,-19 64,-21 83,-69 14,-34 58,-475 68,-554 16,-113 -29,-163 -140,-169 -79,-4 -186,-24 -277,-32 -47,-4 -97,-12 -144,-15 -70,-4 -197,-28 -279,-31 -56,-3 -84,3 -114,41 -30,38 -19,76 -31,127 -9,42 10,37 -40,38 -68,0 -112,49 -112,125z"
                        />
                        <path
                          fill="currentColor"
                          d="M627 493c-36,68 -133,15 -100,-52 31,-62 136,-14 100,52zm-90 -137c-162,75 -50,276 80,225 99,-37 108,-164 23,-215 -21,-12 -70,-26 -103,-10z"
                        />
                      </g>
                    </g>
                  </svg>
                  <span>Gallery</span>
                </li>
                <li className="splide__slide menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    xmlSpace="preserve"
                    width="10.02mm"
                    height="10mm"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 1002 1000"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        fill="currentColor"
                        d="M141 301c146,0 297,0 449,0 102,0 78,0 78,266 0,72 -9,66 -78,66 -154,1 -307,0 -461,1 -76,0 -60,-19 -60,-173 0,-160 -16,-160 72,-160zm595 210l-1 -88c14,-10 157,-92 184,-75 24,19 15,81 15,119 0,134 12,151 -112,89 -29,-14 -61,-27 -86,-45zm-368 -354c20,38 13,44 43,75l-85 2c30,-33 22,-39 42,-77zm69 -6c-20,-93 113,-114 129,-32 18,91 -112,110 -129,32zm-222 -78c82,-32 122,96 44,123 -43,15 -77,-10 -86,-38 -16,-48 11,-74 42,-85zm-71 159c-33,5 -119,-7 -139,78 -9,36 -3,171 -3,218 0,215 66,165 267,173l-110 140c-46,58 -111,116 -80,147 16,17 32,16 49,-1 39,-39 211,-286 240,-286 26,0 204,246 238,283 8,9 8,13 24,15 18,2 20,-3 27,-11 31,-31 -37,-93 -80,-147 -18,-23 -35,-45 -54,-68 -18,-23 -44,-51 -55,-72 139,-6 249,37 268,-111 54,17 125,82 192,66 83,-21 73,-104 73,-189 0,-34 4,-93 -5,-123 -9,-30 -37,-57 -69,-65 -64,-17 -140,47 -192,65 -7,-120 -90,-105 -143,-112 116,-120 -24,-284 -153,-216 -53,27 -46,49 -71,94 -24,-43 -16,-63 -67,-92 -38,-22 -94,-22 -132,0 -82,47 -84,154 -25,214z"
                      />
                    </g>
                  </svg>
                  <span>Video Streaming</span>
                </li>
                <li className="splide__slide menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    xmlSpace="preserve"
                    width="10mm"
                    height="10mm"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 1000 1000"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <g id="_683069848">
                        <path
                          fill="currentColor"
                          d="M897 492c0,164 -90,302 -224,366 -261,123 -564,-60 -569,-352 -5,-223 175,-399 390,-402 217,-4 403,174 403,388zm-448 -489c-260,28 -479,257 -446,554 21,191 153,351 330,415 70,25 147,33 227,25 253,-27 469,-263 437,-553 -28,-254 -260,-472 -548,-441z"
                        />
                        <path
                          fill="currentColor"
                          d="M533 531c72,26 58,115 -1,139l1 -139zm-70 -107c-56,-26 -24,-80 -14,-89 14,-12 -1,-1 14,-8l0 97zm-1 -171c-124,26 -142,209 0,248l1 176c-44,-5 -56,-31 -91,-26 -47,15 -23,85 88,96 7,30 0,61 35,63 38,3 37,-33 37,-66 63,-17 115,-66 119,-144 5,-108 -94,-129 -118,-146l-1 -134c17,5 83,56 87,-7 2,-36 -51,-57 -87,-65 -1,-32 0,-35 -18,-55 -51,-9 -50,17 -52,60z"
                        />
                      </g>
                    </g>
                  </svg>
                  <span>Wallet</span>
                </li>
                <li className="splide__slide menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    xmlSpace="preserve"
                    width="10.25mm"
                    height="10mm"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 1025 1000"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        fill="currentColor"
                        d="M553 465l335 1 5 0 0 5c6,93 4,203 2,305 0,31 -1,61 -1,90 0,59 -18,66 -71,66 -8,0 -16,-1 -25,-1 -14,0 -29,-1 -48,-1l-58 0c-46,0 -93,0 -140,1l-5 0 0 -5 1 -456 0 -5 5 0zm-81 466c-48,-1 -95,-1 -143,-1 -23,0 -47,0 -60,0 -15,0 -28,1 -41,2 -10,0 -20,1 -29,1 -42,0 -68,-9 -68,-67 0,-33 -1,-67 -2,-102 -1,-99 -3,-204 3,-294l0 -5 5 0 336 0 5 0 0 5 -1 456 0 5 -5 0zm80 -664c17,0 43,-1 73,-1 110,-3 281,-6 319,13l2 1 0 2c8,26 15,53 11,74 -3,22 -17,37 -52,37l-305 0 -48 3 -5 0 0 -5 0 -119 0 -5 5 0zm-424 129c-24,-1 -38,-6 -47,-17l0 0c-8,-10 -11,-26 -10,-50 0,-28 5,-43 16,-52l0 0c11,-9 28,-10 53,-11l333 1 5 0 0 5 0 119 0 5 -5 0 -345 0 0 0zm420 -205c-1,-17 -3,-37 -1,-55 2,-18 7,-35 18,-47 22,-23 45,-26 65,-18 19,8 34,25 41,45 7,20 5,42 -9,59 -17,19 -51,30 -110,20l-3 0 -1 -4zm-76 4c-19,3 -41,4 -61,2 -17,-3 -32,-8 -42,-17 -22,-20 -25,-44 -17,-66l0 0c4,-9 9,-17 16,-24 7,-7 15,-13 24,-17 22,-9 47,-6 68,16 11,12 16,29 18,47 2,18 0,38 -1,55l-1 4 -4 0zm-187 3c-19,0 -39,-1 -58,-2 -80,-3 -156,-6 -199,44 -4,5 -8,11 -12,19 -11,24 -18,60 -15,94 2,35 13,68 38,90 6,5 12,9 20,13l3 1 0 3c0,17 -1,44 -2,78 -3,135 -8,366 17,405 36,57 89,57 167,57l0 0 18 0 500 0c179,0 206,-28 206,-211l0 0c0,-34 -1,-72 -2,-116 -1,-60 -3,-131 -3,-213l0 -3 3 -1c7,-4 14,-8 19,-13 25,-21 36,-54 39,-88 3,-35 -3,-71 -15,-95 -3,-8 -7,-15 -12,-20 -43,-50 -119,-47 -199,-44 -19,1 -39,1 -58,1l-6 0 1 -5c9,-49 6,-88 -6,-118 -10,-27 -28,-46 -49,-58 -21,-12 -46,-17 -72,-16 -31,3 -64,15 -92,37l-4 2 -3 -2c-28,-22 -61,-34 -92,-36 -26,-2 -51,3 -72,15 -22,12 -39,31 -49,57 -12,30 -15,69 -6,119l1 6 -6 0z"
                      />
                    </g>
                  </svg>
                  <span>Gift</span>
                </li>
                <li className="splide__slide menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    xmlSpace="preserve"
                    width="8.7mm"
                    height="10mm"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 870 1000"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <g id="_680934168">
                        <path
                          fill="currentColor"
                          d="M662 80l0 -1 -76 -27 0 0c-53,-19 -137,-60 -167,-51 -30,10 -61,24 -91,35l-281 103c-55,19 -45,18 -46,80 0,199 -20,368 102,538 38,54 73,92 123,132 44,36 97,69 160,95 47,20 44,22 93,2 83,-33 131,-68 195,-122 10,-8 27,-26 8,-44 -22,-22 -51,16 -76,35 -39,29 -116,77 -164,91 -18,5 -72,-25 -89,-34 -176,-94 -295,-260 -300,-466 -2,-81 -3,-174 0,-256 41,-8 359,-137 382,-138 7,0 354,127 383,140 0,154 16,313 -42,446 -19,43 28,63 47,22 12,-25 23,-62 31,-91 19,-78 14,-142 15,-222l1 -63 -1 0c0,-138 14,-124 -56,-149 -23,-8 -49,-19 -75,-29l-64 -23c-4,-1 -8,-2 -12,-3z"
                        />
                        <path
                          fill="currentColor"
                          d="M162 268c14,-8 267,-100 273,-100 9,0 252,90 275,100 2,198 15,279 -93,427 -31,41 -141,131 -180,134 -12,1 -58,-27 -69,-33 -23,-14 -41,-30 -60,-45 -76,-60 -135,-168 -146,-273 -4,-46 -5,-165 0,-210zm261 -152c-87,30 -176,65 -261,96 -21,8 -49,12 -52,35 -4,22 -1,66 -1,91 0,55 -3,120 6,173 18,109 57,163 118,238 33,40 171,148 215,133 37,-13 136,-75 161,-104 20,-24 19,-17 44,-47 124,-152 106,-252 108,-424 1,-90 5,-75 -74,-103 -37,-13 -241,-96 -264,-88z"
                        />
                        <path
                          fill="currentColor"
                          d="M396 541c-20,-12 -66,-74 -87,-74 -28,0 -29,31 -15,46l81 81c23,22 38,5 51,-9l161 -161c9,-9 37,-28 23,-51 -16,-27 -41,-2 -52,8 -27,28 -52,53 -80,81 -17,17 -65,69 -82,79z"
                        />
                      </g>
                    </g>
                  </svg>
                  <span>Health Protocol</span>
                </li>
                <li className="splide__slide menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    xmlSpace="preserve"
                    width="10.65mm"
                    height="10mm"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 1065 1000"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <g id="_680961576">
                        <path
                          fill="currentColor"
                          d="M971 954l-877 1c18,-19 330,-239 373,-269 74,-51 90,-26 182,38 37,26 72,50 108,77 30,23 205,141 214,153zm-927 -507c16,3 33,20 47,29l301 211c-24,21 -333,240 -348,245l0 -485zm612 229l182 -117c23,-16 170,-112 183,-114l-1 487c-17,-4 -229,-161 -274,-191 -15,-10 -82,-55 -90,-65zm-225 -17c-22,-10 -210,-144 -235,-162 -41,-28 -46,-21 -46,-53 0,-86 -3,-219 1,-295l763 0 0 313c-18,7 -127,78 -151,94l-146 93c-30,-14 -45,-36 -97,-32 -41,3 -62,26 -89,42zm526 -294c7,3 19,13 23,15l22 21c-10,9 -31,25 -45,28l0 -64zm-896 36c10,-12 32,-28 47,-36l-1 69c-11,-5 -40,-24 -46,-33zm370 -295c12,-15 30,-27 46,-39 15,-12 29,-25 56,-24 33,1 89,50 98,63l-200 0zm626 887c13,-33 6,-314 6,-376 -2,-251 28,-206 -89,-294 -26,-20 -17,-38 -17,-78 -1,-149 12,-139 -57,-139l-190 0c-38,-6 -102,-104 -177,-106 -84,-2 -138,103 -186,106l-190 0c-59,0 -51,0 -49,143 1,69 13,49 -73,118 -26,21 -33,18 -33,64 -1,93 -6,534 5,563 38,9 1023,7 1050,-1z"
                        />
                        <path
                          fill="currentColor"
                          d="M525 856c-16,-14 -77,-62 -40,-85 20,-10 22,2 39,8 24,-3 23,-16 41,-10 39,11 0,68 -40,87zm-51 -127c-77,33 -39,114 31,164 28,20 40,4 60,-12 24,-19 80,-67 50,-123 -27,-51 -68,-25 -100,-31 -19,-4 -23,-5 -41,2z"
                        />
                        <path
                          fill="currentColor"
                          d="M291 410c8,26 58,18 84,17l202 0c27,0 79,8 70,-31 -6,-28 -56,-19 -84,-19l-203 0c-21,0 -82,-8 -69,33z"
                        />
                        <path
                          fill="currentColor"
                          d="M357 303l73 0c22,0 42,0 43,-23 2,-35 -50,-27 -87,-27 -43,0 -95,-10 -96,24 -1,33 41,26 67,26z"
                        />
                      </g>
                    </g>
                  </svg>
                  <span>Guest Book</span>
                </li>
                <li className="splide__slide menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    xmlSpace="preserve"
                    width="11.49mm"
                    height="10mm"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 1149 1000"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <g id="_616279496">
                        <path
                          fill="currentColor"
                          d="M927 376c-16,21 -190,192 -215,216 -29,28 -44,44 -72,72 -48,50 -96,94 -144,144 -12,13 -23,22 -36,35 -17,17 -28,24 -36,36 -5,6 -65,69 -74,72 -15,-13 -33,-32 -46,-46 -14,-15 -31,-31 -46,-45 1,-16 5,-30 3,-50 -1,-13 -9,-28 -15,-37 -18,-23 -40,-33 -75,-31 -38,1 -18,11 -67,-36l-46 -45c-6,-7 -3,-3 -6,-10 3,-7 305,-307 338,-341 13,-12 111,-112 116,-113 6,-1 38,17 37,-21 0,-9 -1,-9 0,-18 12,-12 76,-79 84,-82 17,6 56,56 56,56 7,6 37,23 37,41 0,16 -14,55 21,90 30,29 62,22 88,20 11,-1 15,7 23,15 15,15 71,66 75,78zm-190 -262c3,-8 55,-60 61,-63 15,5 76,78 93,90 1,16 -17,56 19,94 34,35 48,21 100,24 7,10 33,34 44,45 12,12 30,31 46,45 -3,7 -452,453 -541,542 -6,6 -30,33 -38,35 -8,-4 -32,-30 -36,-37 5,-10 285,-286 304,-306l51 -51c9,-8 16,-16 25,-25 49,-48 16,-13 52,-13 15,0 15,-5 22,-11 5,-30 -3,-21 -10,-37l19 -21c19,-20 29,-25 28,-54 -1,-28 -26,-44 -54,-72 -15,-16 -28,-27 -41,-40 -11,-11 -25,-35 -51,-24 -10,4 -15,10 -31,6 -59,-13 -28,-80 -28,-81 1,-17 -26,-36 -34,-46zm-38 -38c-25,-18 -43,-64 -89,-47 -18,7 -59,53 -74,68 -117,115 -241,244 -356,355 -22,21 -49,50 -72,72 -15,15 -95,91 -103,107 -11,22 -3,40 9,53 12,13 22,22 35,35 14,14 61,64 73,71 21,12 30,-10 61,-4 15,3 30,20 34,35 7,25 -17,38 -6,58 7,12 57,59 71,73 13,13 40,45 58,47 39,6 52,-18 88,-56 6,-6 13,-14 21,-17 25,13 43,63 89,48 18,-6 60,-53 76,-69 91,-88 190,-191 285,-285 52,-51 99,-99 144,-143 15,-16 97,-93 103,-110 8,-23 -2,-41 -15,-54 -11,-11 -98,-102 -108,-105 -22,-6 -29,18 -60,8 -25,-9 -39,-38 -26,-67 14,-29 -14,-44 -37,-67 -12,-12 -27,-27 -36,-37 -23,-22 -50,-61 -90,-38 -16,10 -60,66 -75,69z"
                        />
                        <path
                          fill="currentColor"
                          d="M819 467c2,-25 -2,-28 -16,-41 -11,-10 -33,-14 -41,1 -11,23 16,50 36,51 10,0 17,-7 21,-11z"
                        />
                        <path
                          fill="currentColor"
                          d="M622 289c-5,43 44,65 58,40 10,-18 -6,-32 -15,-40 -19,-18 -29,-8 -43,0z"
                        />
                        <path
                          fill="currentColor"
                          d="M702 352c-9,5 -12,4 -12,17 -1,11 3,15 8,21 43,44 68,-2 45,-23 -3,-3 -11,-12 -15,-15 -5,-3 -12,-5 -19,-4 -12,2 -4,2 -7,4z"
                        />
                        <path
                          fill="currentColor"
                          d="M611 261c1,-29 0,-28 -17,-43 -26,-23 -66,6 -24,43 15,13 25,12 41,0z"
                        />
                      </g>
                    </g>
                  </svg>
                  <span>RSVP</span>
                </li>
                <li className="splide__slide menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    xmlSpace="preserve"
                    width="9.92mm"
                    height="10mm"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 992 1000"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        fill="currentColor"
                        d="M497 631c-30,-10 -132,-97 -152,-116 -31,-30 -91,-98 -108,-158 -38,-128 77,-222 185,-185 39,13 45,27 67,48l10 8c26,-50 112,-86 187,-46 51,27 97,98 66,181 -12,34 -31,58 -49,83 -6,9 -8,9 -15,17 -40,48 -139,143 -191,168zm-163 162c13,12 27,34 38,51l75 106c18,26 26,49 46,50 24,1 36,-29 48,-45 14,-19 26,-36 39,-56l77 -107c66,-2 135,0 201,0 164,0 131,-98 131,-270l0 -405c1,-34 -4,-56 -21,-78 -42,-56 -173,-35 -266,-35 -185,0 -435,-7 -606,0 -59,2 -94,44 -95,105 0,71 -4,580 3,608 16,70 73,75 125,75 66,0 139,-3 205,1z"
                      />
                    </g>
                  </svg>
                  <span>Thanks</span>
                </li>
              </ul>
            </div>
          </div>
          {/* end invitation */}
          <div
            style={{
              maxWidth: 500,
              margin: "auto",
              position: "fixed",
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <button
              id="btnMusic"
              onclick="playMusic()"
              className="btn btn-music"
              style={{ display: "none" }}
            >
              <input type="hidden" defaultValue={1} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={20}
                width={20}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M18 3a1 1 0 0 0-1.196-.98l-10 2A1 1 0 0 0 6 5v9.114A4.369 4.369 0 0 0 5 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0 0 15 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
              </svg>
            </button>
          </div>
          {/* lightbox */}
          <div id="lightboxWrapper" className="lightbox-wrapper">
            <div className="lightbox-list" />
            <a href="#" id="lightboxCloseBtn" className="btn-lightbox">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={24}
                width={24}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <div className="lightbox-navigation">
              <a
                href="#"
                id="lightboxPrevBtn"
                className="lightbox-arrow"
                data-index={0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={24}
                  width={24}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m15 19-7-7 7-7"
                  />
                </svg>
              </a>
              <a
                href="#"
                id="lightboxNextBtn"
                className="lightbox-arrow"
                data-index={0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={24}
                  width={24}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* end lightbox */}
          <div
            id="storyModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="rsvpModal"
            aria-hidden="true"
            className="modal fade"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content" style={{ height: "100%" }}>
                <div className="p-4 p-sm-5 rsvp-form success">
                  {/**/}
                  <div className="mb-4">
                    <div className="text-center font-accent h4">Story</div>
                  </div>
                  {/**/}
                  <hr />
                  <div className="story-list">
                    <div className="animate__animated animate__slower">
                      <div className="image-editable">
                        <img
                          src="./themes/assets/demo/preview1/1.jpg"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          draggable="false"
                        />
                      </div>
                      <div className="text-center story-content">
                        <svg
                          width={24}
                          height={24}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity=".4"
                            d="M11.776 21.837a36.258 36.258 0 0 1-6.328-4.957 12.668 12.668 0 0 1-3.03-4.805C1.278 8.535 2.603 4.49 6.3 3.288A6.282 6.282 0 0 1 12.007 4.3a6.291 6.291 0 0 1 5.706-1.012c3.697 1.201 5.03 5.247 3.893 8.787a12.67 12.67 0 0 1-3.013 4.805 36.58 36.58 0 0 1-6.328 4.957l-.25.163-.24-.163Z"
                            fill="currentColor"
                          />
                          <path
                            d="m12.01 22-.234-.163a36.316 36.316 0 0 1-6.337-4.957 12.667 12.667 0 0 1-3.048-4.805c-1.13-3.54.195-7.586 3.892-8.787a6.296 6.296 0 0 1 5.728 1.023V22ZM18.23 10a.719.719 0 0 1-.517-.278.818.818 0 0 1-.167-.592c.022-.702-.378-1.341-.994-1.59-.391-.107-.628-.53-.53-.948.093-.41.477-.666.864-.573a.384.384 0 0 1 .138.052c1.236.476 2.036 1.755 1.973 3.155a.808.808 0 0 1-.23.56.708.708 0 0 1-.537.213Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div style={{ fontSize: "110%" }}>
                          <b>Awal Cerita</b>
                        </div>
                        <div className="mb-2 font-italic">Tahun 2016</div>
                        <div className="mb-2" style={{ textAlign: "center" }}>
                          Berawal dari teman kuliah bersama-sama memperjuangkan
                          S1 Teknik Sipil, bertemu pada tahun 2016 hingga selalu
                          bertemu untuk sesekali makan bersama, lalu menjalin
                          hubungan pacaran 11 November 2017.
                        </div>
                      </div>
                    </div>
                    <div className="animate__animated animate__slower">
                      <div className="image-editable">
                        <img
                          src="./themes/assets/demo/preview1/4.jpg"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          draggable="false"
                        />
                      </div>
                      <div className="text-center story-content">
                        <svg
                          width={24}
                          height={24}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity=".4"
                            d="M11.776 21.837a36.258 36.258 0 0 1-6.328-4.957 12.668 12.668 0 0 1-3.03-4.805C1.278 8.535 2.603 4.49 6.3 3.288A6.282 6.282 0 0 1 12.007 4.3a6.291 6.291 0 0 1 5.706-1.012c3.697 1.201 5.03 5.247 3.893 8.787a12.67 12.67 0 0 1-3.013 4.805 36.58 36.58 0 0 1-6.328 4.957l-.25.163-.24-.163Z"
                            fill="currentColor"
                          />
                          <path
                            d="m12.01 22-.234-.163a36.316 36.316 0 0 1-6.337-4.957 12.667 12.667 0 0 1-3.048-4.805c-1.13-3.54.195-7.586 3.892-8.787a6.296 6.296 0 0 1 5.728 1.023V22ZM18.23 10a.719.719 0 0 1-.517-.278.818.818 0 0 1-.167-.592c.022-.702-.378-1.341-.994-1.59-.391-.107-.628-.53-.53-.948.093-.41.477-.666.864-.573a.384.384 0 0 1 .138.052c1.236.476 2.036 1.755 1.973 3.155a.808.808 0 0 1-.23.56.708.708 0 0 1-.537.213Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div style={{ fontSize: "110%" }}>
                          <b>Pernikahan</b>
                        </div>
                        <div className="mb-2 font-italic">
                          Tahun 2019 - 2020
                        </div>
                        <div className="mb-2" style={{ textAlign: "center" }}>
                          Pada tanggal 23 Maret 2019 kami mengikat diri pada
                          pertunangan dan pada tanggal 29 Oktober 2020 kami pun
                          mengadakan akad nikah. Alhamdulillah perjalanan ini
                          sampai pada akhirnya,
                        </div>
                      </div>
                    </div>
                    <div className="animate__animated animate__slower">
                      <div className="image-editable">
                        <img
                          src="./themes/assets/demo/preview1/5.jpg"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          draggable="false"
                        />
                      </div>
                      <div className="text-center story-content">
                        <svg
                          width={24}
                          height={24}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity=".4"
                            d="M11.776 21.837a36.258 36.258 0 0 1-6.328-4.957 12.668 12.668 0 0 1-3.03-4.805C1.278 8.535 2.603 4.49 6.3 3.288A6.282 6.282 0 0 1 12.007 4.3a6.291 6.291 0 0 1 5.706-1.012c3.697 1.201 5.03 5.247 3.893 8.787a12.67 12.67 0 0 1-3.013 4.805 36.58 36.58 0 0 1-6.328 4.957l-.25.163-.24-.163Z"
                            fill="currentColor"
                          />
                          <path
                            d="m12.01 22-.234-.163a36.316 36.316 0 0 1-6.337-4.957 12.667 12.667 0 0 1-3.048-4.805c-1.13-3.54.195-7.586 3.892-8.787a6.296 6.296 0 0 1 5.728 1.023V22ZM18.23 10a.719.719 0 0 1-.517-.278.818.818 0 0 1-.167-.592c.022-.702-.378-1.341-.994-1.59-.391-.107-.628-.53-.53-.948.093-.41.477-.666.864-.573a.384.384 0 0 1 .138.052c1.236.476 2.036 1.755 1.973 3.155a.808.808 0 0 1-.23.56.708.708 0 0 1-.537.213Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div style={{ fontSize: "110%" }}>
                          <b>Resepsi Pernikahan</b>
                        </div>
                        <div className="mb-2 font-italic">Juni 2020</div>
                        <div className="mb-2" style={{ textAlign: "center" }}>
                          Kami bisa melakukan acara resepsi yang insyAllah
                          diadakan pada tanggal 27 Juni 2020.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  className="btn btn-close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="42px"
                    width="42px"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* startRSVPModal */}
          <div
            id="rsvpModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="rsvpModal"
            aria-hidden="true"
            className="modal fade"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content" style={{ height: "100%" }}>
                <div className="p-4 p-sm-5 rsvp-form success">
                  <div className="mb-4">
                    <div className="text-center font-accent h4">
                      Kirimkan Ucapan
                    </div>
                  </div>
                  <form>
                    <input
                      type="hidden"
                      name="ref_no"
                      defaultValue
                      required="required"
                    />
                    <div className="form-group">
                      <input
                        id="inputName"
                        type="text"
                        name="name"
                        placeholder="Nama..."
                        required="required"
                        maxLength={20}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="inputPhone"
                        type="text"
                        name="write_as"
                        placeholder="Sahabat / Perwakilan dari / dsb.. (Optional)"
                        maxLength={20}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="inputPhone"
                        type="text"
                        name="sosmed"
                        maxLength={20}
                        placeholder="@sosmedkamu (Optional)"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        id="inputComment"
                        name="comment"
                        rows={3}
                        placeholder="Ucapan dan Doa..."
                        required="required"
                        className="form-control"
                        defaultValue={""}
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-4 mb-3 btn btn-primary btn-block"
                    >
                      <span>Kirim RSVP</span>
                    </button>
                  </form>
                  <hr />
                  <div id="view_comment" className="mt-4 comment">
                    <div className="mb-3">
                      <div className="d-flex">
                        <img
                          src="https://ui-avatars.com/api/?background=random&color=random&name=Founder invitema"
                          alt="tes"
                          className="avatar rounded-circle"
                          style={{ height: 30, width: 30 }}
                        />
                        <div className="ml-2 text-left">
                          <p className="mb-0">
                            <b>Founder invitema</b>
                          </p>
                          <p className="mb-0">
                            Selamat ya kak atas acaranya, semoga bahagia selalu
                            😊
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="d-flex">
                        <img
                          src="https://ui-avatars.com/api/?background=random&color=random&name=invitema &
                                Team"
                          alt="tes"
                          className="avatar rounded-circle"
                          style={{ height: 30, width: 30 }}
                        />
                        <div className="ml-2 text-left">
                          <p className="mb-0">
                            <b>invitema &amp; Team</b>
                          </p>
                          <p className="mb-0">
                            Semoga acaranya dilancarkan ya kak. Terima kasih
                            sudah menggunakan{" "}
                            <a href="https://invitema.com">invitema</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  className="btn btn-close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="42px"
                    width="42px"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* endRSVPModal */}
          {/* watermark */}
          <div id="waterMark" className="mt-5" style={{ display: "none" }}>
            <p className="mb-3 animate__animated animate__fadeInDown animate__slower small">
              Made with love by
              <a href="ajakan.me?utm_source=footer" target="_blank">
                ajakan.me
              </a>
            </p>
            <div className="mt-2 text-center animate__animated animate__fadeInDown animate__slower">
              <a
                href="https://invitema.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  style={{ height: 20 }}
                  src="https://s3.ap-southeast-1.wasabisys.com/ajakan/photo/mitra_icon/mitra_icon_405_1693378312.jpg"
                />
              </a>
            </div>
          </div>
          {/* end watermark */}
        </main>
      </div>
    </>
  );
}

export default Tema1;
