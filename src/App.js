import logo from "./logo.svg";
// import "./App.css";
import Tema1 from "./tema1/Tema1";

const angkaAcak = (min = 5, max = 10) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const portfolio = [
  {
    label: "DIGILIR",
    platform: ["Web"],
    feature: [
      "Sosial Media",
      "Video Call",
      "Live Stream",
      "Forum",
      "Chat",
      "Status Post",
      "Booking system, etc",
    ],
    image1: "amantara1.png",
    image2: "amantara2.png",
  },
  {
    label: "AMANTARA",
    platform: ["Android"],
    feature: [
      "Reward System",
      "Ticketing & Voucher",
      "Profile system",
      "Report system, etc",
    ],
    image1: "amantara1.png",
    image2: "amantara2.png",
  },
  {
    label: "ElecTricWare house",
    platform: ["WEB"],
    feature: ["Warehouse System", "Sales Order", "Purchase Order", "Reporting"],
    image1: "house1.png",
    image2: "house2.png",
  },
  {
    label: "Intranet App",
    platform: ["WEB"],
    feature: [
      "Mastering Data",
      "Ticketing System",
      "Document Documentation",
      "Warehouse System",
      "Chat System",
      "Educational Center",
      "Reporting",
    ],
    image1: "interanet1.png",
    image2: "interanet2.png",
  },
  {
    label: "sekolah digi",
    platform: ["Android", "IOS", "Web"],
    feature: [
      "Product System",
      "Checkout System",
      "Payment System",
      "Online Course System",
      "Reward system",
      "etc",
    ],
    image1: "sekolah1.png",
    image2: "sekolah2.png",
  },
  {
    label: "Cari Montir",
    platform: ["Android"],
    feature: [
      "Product System",
      "Ticketing & Voucher",
      "Checkout System",
      "payment System",
      "Seller system",
      "Report system",
      "etc",
    ],
    image1: "montir1.png",
    image2: "montir2.png",
  },
  {
    label: "BantuBeli Cashier",
    platform: ["Android", "IOS"],
    feature: [
      "Product System",
      "Ticketing System",
      "Driver Tracking",
      "Reporting System",
      "etc",
    ],
    image1: "cashier1.png",
    image2: "cashier2.png",
  },
  {
    label: "bantubeli driver",
    platform: ["Android"],
    feature: [
      "Order System",
      "Chat & Calls",
      "Auto Replay System",
      "Tracking Location",
      "Payment System",
      "etc",
    ],
    image1: "driver1.png",
    image2: "driver2.png",
  },

  {
    label: "bantubeli",
    platform: ["Android", "IOS", "Web"],
    feature: [
      "Product System",
      "Checkout System",
      "Payment System",
      "Seller System",
      "AWB Tracking",
      "etc",
    ],
    image1: "bantubeli1.png",
    image2: "bantubeli2.png",
  },
  {
    label: "Safe2Trip",
    platform: ["Android", "Web"],
    feature: [
      "Blog",
      "Forum",
      "Booking System",
      "Sosial Media",
      "Panic Action",
    ],
    image1: "safe2trip1.png",
    image2: "safe2trip2.png",
  },
];

function App() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          overflowX: "hidden",
          position: "relative",
        }}
      >
        <img
          src="/asset/Logo_SP-removebg-preview.png"
          alt="Logo_SP-removebg-preview"
          style={{
            position: "absolute",
            top: "0%",
            width: "30%",
          }}
        />
        <img
          src="/asset/Dot-removebg-preview.png"
          alt="Dot-removebg-preview"
          style={{
            position: "absolute",
            top: "60%",
            left: "-10%",
            width: "20%",
          }}
        />
        <img
          src="/asset/Lane_-_No_Transparancy-removebg-preview.png"
          alt="Lane_-_No_Transparancy-removebg-preview"
          style={{
            position: "absolute",
            top: "60%",
            right: "0%",
            width: "10%",
            transform: "rotate(-90deg)",
          }}
        />
        <img
          className="globe"
          src="/asset/Globe_-_No_Transparancy-removebg-preview.png"
          alt="Globe_-_No_Transparancy-removebg-preview"
          style={{
            position: "absolute",
            right: "-20%",
            width: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "31%",
          }}
        >
          <h1
            style={{
              color: "#004AAD",
              fontSize: "9vw",
              margin: 0,
            }}
          >
            COMPANY
          </h1>
          <h1
            style={{
              color: "#2AB2D2",
              fontSize: "8vw",
              margin: 0,
            }}
          >
            PROFILE
          </h1>
        </div>
        <div
          style={{
            position: "absolute",
            top: "100%",
            width: "100%",
          }}
        >
          <div
            style={{
              borderLeft: "3vw solid #004AAD",
              paddingLeft: "3vw",
              color: "#004AAD",
              // fontSize: "10%",
              fontSize: "3vw",
              left: "8%",
              position: "absolute",
            }}
          >
            <h1
              style={{
                margin: 0,
              }}
            >
              TABLE OF
            </h1>
            <h1
              style={{
                margin: 0,
              }}
            >
              CONTENT
            </h1>
          </div>
          <div
            style={{
              position: "absolute",
              right: "8%",
              top: 0,
              width: "40%",
            }}
          >
            <img
              src="/asset/Blue_box_1-removebg-preview.png"
              alt="Blue_box_1-removebg-preview"
              style={{
                width: "40%",
              }}
            />
            <br />
            <img
              src="/asset/Yellow_box_1-removebg-preview.png"
              alt="Yellow_box_1-removebg-preview"
              style={{
                marginTop: "-5%",
                width: "40%",
              }}
            />
            <img
              src="/asset/Dot-removebg-preview.png"
              alt="Dot-removebg-preview"
              style={{
                position: "absolute",
                left: "-14%",
                top: "45%",
                width: "30%",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              marginTop: "40%",
              left: "10%",
            }}
          >
            <h1
              style={{
                color: "#545454",
                fontSize: "3vw",
                marginTop: "3vw",
                marginBottom: "3vw",
              }}
            >
              01. About Company
            </h1>
            <h1
              style={{
                color: "#545454",
                fontSize: "3vw",
                marginTop: "3vw",
                marginBottom: "3vw",
              }}
            >
              02. Vision and Mission
            </h1>
            <h1
              style={{
                color: "#545454",
                fontSize: "3vw",
                marginTop: "3vw",
                marginBottom: "3vw",
              }}
            >
              03. Our Services
            </h1>

            <h1
              style={{
                color: "#545454",
                fontSize: "3vw",
                marginTop: "3vw",
                marginBottom: "3vw",
              }}
            >
              04. Portfolio
            </h1>
          </div>
          <div
            style={{
              position: "absolute",
              right: "-60%",
              marginTop: "20%",
              width: "100%",
            }}
          >
            <img
              src="/asset/Net_1_-_No_Trans-removebg-preview.png"
              alt="Net_1_-_No_Trans-removebg-preview"
              style={{
                width: "100%",
              }}
            />
          </div>
        </div>
        <div className="aftar-tablecontent">
          <div
            style={{
              width: "100%",
              textAlign: "center",
              // position: "absolute",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <img
              // className="globe"
              src="/asset/Globe_-_No_Transparancy-removebg-preview.png"
              alt="Globe_-_No_Transparancy-removebg-preview"
              style={{
                width: "50%",
                animation:
                  "rotate 10s linear infinite" /* 4s adalah durasi rotasi, sesuaikan sesuai kebutuhan Anda */,
                minWidth: "200px",
              }}
            />
            <img
              className="logo"
              src="/asset/Logo_SP-removebg-preview.png"
              alt="Logo_SP-removebg-preview"
            />
          </div>
          <div
            style={{
              marginRight: "20%",
              marginLeft: "20%",
            }}
          >
            <h1
              style={{
                textDecoration: "underline",
                textDecorationColor: "#0048A8",
                fontSize: "5vw",
                color: "#0048A8",
              }}
            >
              About Company
            </h1>
            <p
              style={{
                fontSize: "3vw",
                color: "black",
                marginTop: "0px",
              }}
            >
              SoftPro.One Solutions is an IT software house company that
              provides services, solutions, and innovative information
              technology products for small to large-scale applications and
              systems. By mastering many development tools such as web,
              mobile-based and desktop-based. We can provide an appropriate and
              integrated system and application solutions.
            </p>

            <div
              style={{
                color: "#0048A8",
                backgroundImage: "linear-gradient(to right, #004AAD , #545454)",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
              }}
            >
              <h1
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "white",
                  fontSize: "5vw",
                  color: "white",
                }}
              >
                VISION AND MISSION
              </h1>
            </div>
            <div>
              <h1
                style={{
                  fontSize: "4vw",
                  color: "#0048A8",
                  marginBottom: 0,
                  marginLeft: "5vw",
                }}
              >
                VISION
              </h1>
              <p
                style={{
                  fontSize: "3vw",
                  color: "black",
                  marginTop: "0px",
                }}
              >
                To become one of the best international scale companies in the
                field of IT Solutions and advance the national IT industry with
                international competitiveness.
              </p>
            </div>

            <div>
              <h1
                style={{
                  fontSize: "4vw",
                  color: "#0048A8",
                  marginBottom: 0,
                  marginLeft: "5vw",
                }}
              >
                MISSION
              </h1>
              <p
                style={{
                  fontSize: "3vw",
                  color: "black",
                  marginTop: "0px",
                }}
              >
                To achieve the company vision, SoftPro.One Solutions has the
                following company mission:
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
              </p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
            }}
          >
            <img
              src="/asset/Blue_box_1-removebg-preview.png"
              alt="Blue_box_1-removebg-preview"
              style={{
                // position: "absolute",
                /* left: 36%, */
                width: "10%",
              }}
            />
            <img
              src="/asset/Dot-removebg-preview.png"
              alt="Dot-removebg-preview"
              style={{
                position: "absolute",
                marginLeft: "-5%",
                marginTop: "5%",
                width: "8%",
              }}
            />
            <div
              style={{
                marginTop: "10%",
              }}
            >
              <h1
                style={{
                  fontSize: "4vw",
                }}
              >
                Our services
              </h1>
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <img
                  src="/asset/Checklist-removebg-preview.png"
                  alt="Checklist-removebg-preview"
                  width={"3%"}
                  style={{
                    marginRight: "1%",
                  }}
                />
                <label
                  style={{
                    fontSize: "3vw",
                    fontWeight: "bold",
                    color: "#004AAD",
                  }}
                >
                  Web Apps Development
                </label>
              </div>

              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <img
                  src="/asset/Checklist-removebg-preview.png"
                  alt="Checklist-removebg-preview"
                  width={"3%"}
                  style={{
                    marginRight: "1%",
                  }}
                />
                <label
                  style={{
                    fontSize: "3vw",
                    fontWeight: "bold",
                    color: "#004AAD",
                  }}
                >
                  Mobile Android Development
                </label>
              </div>

              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <img
                  src="/asset/Checklist-removebg-preview.png"
                  alt="Checklist-removebg-preview"
                  width={"3%"}
                  style={{
                    marginRight: "1%",
                  }}
                />
                <label
                  style={{
                    fontSize: "3vw",
                    fontWeight: "bold",
                    color: "#004AAD",
                  }}
                >
                  Mobile iOS Development
                </label>
              </div>

              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <img
                  src="/asset/Checklist-removebg-preview.png"
                  alt="Checklist-removebg-preview"
                  width={"3%"}
                  style={{
                    marginRight: "1%",
                  }}
                />
                <label
                  style={{
                    fontSize: "3vw",
                    fontWeight: "bold",
                    color: "#004AAD",
                  }}
                >
                  Desktop-Based Development
                </label>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "10%",
            }}
          >
            <img
              src="/asset/Lane_-_No_Transparancy-removebg-preview.png"
              alt="Lane_-_No_Transparancy-removebg-preview"
              style={{
                position: "absolute",
                width: "10%",
                height: "20%",
              }}
            />
            <div
              style={{
                marginLeft: "10vw",
                backgroundImage: "linear-gradient(to right, #004AAD , #545454)",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
              }}
            >
              <h1
                style={{
                  fontSize: "4vw",
                  margin: 0,
                  color: "white",
                }}
              >
                PORTFOLIO
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                fontSize: "3.5vw",
                fontWeight: "normal",
              }}
            >
              <ul>
                <li>Digilir</li>
                <li>Electrical Warehouse</li>
                <li>Intranet</li>
                <li>Sekolah Digi</li>
                <li>Carimontir</li>
                <li>BantuBeli Cashier</li>
                <li>BantuBeli Driver</li>
              </ul>
              <ul>
                <li>BantuBeli</li>
                <li>Safe2Trip</li>
                <li>Etc</li>
              </ul>
            </div>
            <div
              style={{
                position: "relative",
                textAlign: "center",
              }}
            >
              {portfolio.map((data, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      position: "relative",
                    }}
                  >
                    <img
                      src="/asset/Globe_-_No_Transparancy-removebg-preview.png"
                      alt="Globe_-_No_Transparancy-removebg-preview"
                      style={{
                        position: "absolute",
                        right: `-${angkaAcak(25, 50)}%`,
                      }}
                    />
                    <img
                      src={`/asset/${data.image1}`}
                      style={{
                        width: "25%",
                        border: `${angkaAcak(1, 4)}px solid #004AAC`,
                        borderRadius: `${angkaAcak(10, 20)}px`,
                        boxShadow: `${angkaAcak(5, 10)}px ${angkaAcak(
                          5,
                          10
                        )}px 10px rgba(0, 0, 0, 0.5)`,
                      }}
                    />
                    <img
                      src={`/asset/${data.image2}`}
                      style={{
                        width: "25%",
                        position: "absolute",
                        left: "50%",
                        top: "20%",
                        border: `${angkaAcak(1, 4)}px solid #004AAC`,
                        borderRadius: `${angkaAcak(10, 20)}px`,
                        boxShadow: `${angkaAcak(5, 10)}px ${angkaAcak(
                          5,
                          10
                        )}px 10px rgba(0, 0, 0, 0.5)`,
                      }}
                    />

                    <div
                      style={{
                        textAlign: "left",
                      }}
                    >
                      <h1
                        style={{
                          marginTop: 0,
                          marginBottom: 0,
                          fontStyle: "italic",
                          color: "#004AAC",
                          fontWeight: "bold",
                          fontSize: "4vw",
                        }}
                      >
                        {data.label}
                      </h1>
                      <div
                        style={{
                          display: "flex",
                          width: "50%",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <h2
                            style={{
                              color: "#004AAC",
                              fontWeight: "bold",
                              marginTop: 0,
                              marginBottom: 0,
                              fontSize: "3vw",
                            }}
                          >
                            Platform
                          </h2>
                          <ul
                            style={{
                              fontSize: "2vw",
                            }}
                          >
                            {data.platform.map((data, index) => {
                              return <li key={index}>{data}</li>;
                            })}
                          </ul>
                        </div>
                        <div>
                          <h2
                            style={{
                              color: "#004AAC",
                              fontWeight: "bold",
                              marginTop: 0,
                              marginBottom: 0,
                              fontSize: "3vw",
                            }}
                          >
                            Feature
                          </h2>
                          <ul
                            style={{
                              fontSize: "2vw",
                            }}
                          >
                            {data.feature.map((data, index) => {
                              return <li key={index}>{data}</li>;
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
