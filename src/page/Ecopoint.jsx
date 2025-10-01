import React from 'react'

function Ecopoint() {
  return (
    <>
      <section className="hero1">
        <h1>
          EcoPoint <br /> Your Step Towards <br />
          a Greener Future
        </h1>
        <p>Earn points, make impact, and contribute to sustainability.</p>
      </section>

      {/* News Marquee */}
      <div className="news">
        <marquee behavior="scroll" direction="left" scrollamount="6">
          🌍 Join EcoPoint today – Small actions, big impact! ♻️ Recycle, Save,
          Earn EcoPoints – Let’s build a greener future together. 💧 Every drop
          saved counts! 🌱
        </marquee>
      </div>

      {/* About EcoPoint Section */}
      <section className="about-ecopoint">
        <div className="container text-center text-white py-5">
          <h2 className="mb-4">🌍 About EcoPoint</h2>
          <p className="lead">
            <strong>EcoPoint</strong> is an initiative designed to encourage
            eco-friendly habits through awareness, rewards, and community
            participation. Every small step — like saving water, recycling, or
            reducing energy use — earns you EcoPoints.
          </p>

          <div className="row mt-5">
            <div className="col-md-3">
              <div className="feature-box">
                <h3>🌍</h3>
                <p>
                  <strong>Protect the Planet</strong>
                  <br />
                  Reduce pollution and carbon footprint.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-box">
                <h3>♻️</h3>
                <p>
                  <strong>Encourage Recycling</strong>
                  <br />
                  Turn waste into valuable resources.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-box">
                <h3>🌱</h3>
                <p>
                  <strong>Promote Green Living</strong>
                  <br />
                  Inspire sustainable choices in daily life.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-box">
                <h3>💧</h3>
                <p>
                  <strong>Save Natural Resources</strong>
                  <br />
                  Conserve water and energy for the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Ecopoint
