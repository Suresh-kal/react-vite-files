import React from 'react'

function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero text-center text-white d-flex align-items-center">
        <div className="container">
          <h1>
            About <span style={{ color: "orange" }}>Leaflet</span>
          </h1>
          <p className="lead">Connecting people with sustainable solutions 🌱</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story py-5">
        <div className="container text-center">
          <h2 className="mb-4">Our Story</h2>
            <div>
      <video
        src="/react-vite-files/040a4d17-3dd0-4795-a497-d78e7913657f.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ width: '50vw', height: '360px', objectFit: 'cover' }}
      />
    </div>

          <p className="w-75 mx-auto">
            <strong>Leaflet</strong> was created with the vision of making
            eco-friendly choices simple and accessible. From awareness to action,
            we help individuals and communities take meaningful steps toward a
            greener future.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision py-5 bg-light">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-6">
              <h3>🌍 Our Mission</h3>
              <p>To inspire and support sustainable living through awareness and rewards.</p>
            </div>
            <div className="col-md-6">
              <h3>🌱 Our Vision</h3>
              <p>A future where small steps lead to a big positive impact on the environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values py-5  ">
        <div className="container text-center">
          <h2 className="mb-4">Our Core Values</h2>
          <div className="row">
            <div className="col-md-3">
              <h3>🌍</h3>
              <p>Sustainability</p>
            </div>
            <div className="col-md-3">
              <h3>♻️</h3>
              <p>Innovation</p>
            </div>
            <div className="col-md-3">
              <h3>🌱</h3>
              <p>Community</p>
            </div>
            <div className="col-md-3">
              <h3>💧</h3>
              <p>Responsibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta py-5 text-center text-white" id="contactUs">
        <div className="container">
          <h2>Be Part of the Change 🌱</h2>
          <p>Join Leaflet and take your first step toward a greener tomorrow.</p>
          <a href="/" className="btn btn-success">
            Contact Us
          </a>
        </div>
      </section>
     
    </>
  )
}

export default About
