import React from 'react'

function Home() {
  return (
    <>
      {/* Carousel */}
      <div className="carousel slide" data-bs-ride="carousel" id="abc">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#abc" data-bs-slide-to="0"></button>
          <button type="button" data-bs-target="#abc" data-bs-slide-to="1"></button>
          <button
            type="button"
            data-bs-target="#abc"
            data-bs-slide-to="2"
            className="active"
            aria-current="true"
          ></button>
          <button type="button" data-bs-target="#abc" data-bs-slide-to="3"></button>
        </div>

        <div className="carousel-inner" id="slide_photo">
          <div className="carousel-item" data-bs-interval="1000">
            <img
              src="https://img.freepik.com/premium-photo/soybean-farm_951562-59440.jpg"
              alt=""
              className="w-100 "
            />
            <div className="carousel-caption"></div>
          </div>

          <div className="carousel-item" data-bs-interval="1000">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.RPX1hkuN8uttIbaGwMtjRgHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
              className="w-100"
            />
            <div className="carousel-caption"></div>
          </div>

          <div className="carousel-item active" data-bs-interval="1000">
            <img
              src="https://c.wallhere.com/photos/1f/4a/field_lettuce_cultivation_vegetables-559734.jpg!d"
              alt=""
              className="w-100"
            />
            <div className="carousel-caption"></div>
          </div>

          <div className="carousel-item" data-bs-interval="1000">
            <img
              src="https://blog.machinefinder.com/wp-content/uploads/2017/12/2013_sprayer2_large.jpg"
              alt=""
              className="w-100"
            />
            <div className="carousel-caption"></div>
          </div>
        </div>
      </div>

      <br />
      <br />

      {/* Cards Section */}
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
          <div className="col">
            <div className="card">
              <img src="/react-vite-files/test-kit image.png" className="card-img-top" alt="Soil Testing Kit" />
              <div className="card-body">
                <h5 className="card-title">Soil Testing Kit</h5>
                <p className="card-text">
                  Test soil health, pH levels and nutrients contents.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card p-4">
              <img
                src="/react-vite-files/fertilizer image.png"
                className="card-img-top"
                alt="Organic Fertilizer"
              />
              <div className="card-body">
                <h5 className="card-title">Organic Fertilizer Bio-Stimulants</h5>
                <p className="card-text">
                  Enhance soil fertility with natural ingredients.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card p-2">
              <img
                src="/react-vite-files/irrigation-ctrl image.png"
                className="card-img-top"
                alt="Smart Irrigation"
              />
              <div className="card-body">
                <h5 className="card-title">Smart Irrigation Controllers</h5>
                <p className="card-text">
                  Automate watering schedules based on soil moisture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      {/* Fluid Container */}
      <div className="container-fluid py-5 bg-light text-center">
  <h1 className="display-5 fw-bold text-success mb-4">Eco-Friendly & Practical</h1>
  <p className="lead mx-auto w-75" id="fluidtext">
    Sustainable farming starts with the right tools. Explore our range of fluid containers
    designed to help you manage water and nutrients responsibly while protecting the
    environment and improving crop yields.
  </p>
</div>
    </>
  )
}

export default Home
