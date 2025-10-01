import React from 'react'

function Footer() {
  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ backgroundColor: "rgba(16, 79, 79, 0.95)" }}>
          <div className="col-md-1"></div>

          {/* Logo */}
          <div className="col-md-3" id="logo">
            <img
             src="/react-vite-files/343-3436359_leaflet-transparent-logo-removebg-preview.png"
              style={{ width: "80%", marginTop: "2cm" }}
              alt="EcoPoint Logo"
            />
          </div>

          <div className="col-md-1"></div>

          {/* Footer Content */}
          <div className="col-md-6">
            <h1 className="aaa text-light mt-4">
              <span style={{ color: "orange" }}>ABOUT</span>
              <span> US</span>
            </h1>
            <p
              style={{
                lineHeight: "30px",
                wordSpacing: "1px",
                fontSize: "18px",
                color: "aliceblue",
              }}
            >
              <strong>Leaflet</strong> is an initiative dedicated to promoting eco-friendly lifestyles
              through awareness, rewards, and community action. Together, we can build a greener and
              more sustainable future. 🌍🌱
            </p>

            <div className="row">
              <div className="col-md-6">
                <h6 className="aaa" style={{ color: "orange" }}>
                  Address
                </h6>
                <p className="text-light">
                  Leaflet, ITM University Park,
                  <br />
                  MP Gwalior, India – 474001
                </p>
              </div>

              <div className="col-md-6">
                <h6 className="aaa" style={{ color: "orange" }}>
                  Enquiry
                </h6>
                <p className="text-light" style={{ marginBottom: "3cm" }}>
                  Email:{" "}
                  <b style={{ color: "orange", fontWeight: 400 }}>
                    support@leaflet.org
                  </b>
                </p>
              </div>

              {/* Social Links */}
              <div className="row">
                <div className="col-md-6 mb-5">
                  <a href="#">
                    <i
                      className="fa-brands fa-facebook"
                      style={{ color: "orange", fontSize: "40px" }}
                    ></i>
                  </a>
                  <a href="#">
                    <i
                      className="fa-brands fa-instagram"
                      style={{ color: "orange", fontSize: "40px", marginLeft: "8px" }}
                    ></i>
                  </a>
                  <a href="#">
                    <i
                      className="fa-brands fa-whatsapp"
                      style={{ color: "orange", fontSize: "40px", marginLeft: "8px" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="container-fluid"
        style={{ backgroundColor: "rgba(2, 46, 46, 0.95)" }}
      >
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 text-light">
            <center>
              <p className="mt-3" style={{ fontWeight: 250 }}>
                PRIVACY POLICY | TERMS & CONDITIONS | BLOG | APP
                <hr style={{ border: "1px solid rgba(255,255,255,0.2)" }} />
              </p>
            </center>
            <b
              style={{ fontWeight: 250, marginLeft: "2.5cm" }}
              className="foot"
            >
              COPYRIGHT © 2025  <span style={{ color: "orange" }}>Leaflet</span> | Made with 🌱 for a Greener Future
            </b>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
