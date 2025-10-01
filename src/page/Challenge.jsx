import React from 'react'

function Challenge() {
  return (
    <>
            {/* Hero Section */}
      <section className="hero">
        <h1>Challenges in Agriculture</h1>
        <p>
          Discover the key issues farmers face today and explore possible solutions.
        </p>
      </section>

      {/* Challenges Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Major Challenges</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Card 1 */}
          <div className="col">
            <div className="card challenge-card h-100 border-2">
              <div className="card-body text-center">
                <div className="challenge-icon">💧</div>
                <h5 className="card-title mt-3">Water Scarcity</h5>
                <p className="card-text">
                  Farmers struggle with limited access to irrigation and clean water
                  sources for crops.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col">
            <div className="card challenge-card h-100 border-2">
              <div className="card-body text-center">
                <div className="challenge-icon">🐛</div>
                <h5 className="card-title mt-3">Pest Infestation</h5>
                <p className="card-text">
                  Crops face heavy damage from pests and diseases, reducing yield and
                  income.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col">
            <div className="card challenge-card h-100 border-2">
              <div className="card-body text-center">
                <div className="challenge-icon">🌱</div>
                <h5 className="card-title mt-3">Soil Degradation</h5>
                <p className="card-text">
                  Over-farming and chemicals reduce soil fertility, affecting crop
                  productivity.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col">
            <div className="card challenge-card h-100 border-2">
              <div className="card-body text-center">
                <div className="challenge-icon">☀️</div>
                <h5 className="card-title mt-3">Climate Change</h5>
                <p className="card-text">
                  Unpredictable weather patterns and global warming disrupt farming
                  cycles.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col">
            <div className="card challenge-card h-100 border-2">
              <div className="card-body text-center">
                <div className="challenge-icon">🛒</div>
                <h5 className="card-title mt-3">Market Access</h5>
                <p className="card-text">
                  Small farmers face difficulty in selling their produce at fair prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-light py-5 text-center">
        <h3>Do you face a challenge in farming?</h3>
        <p>Share your experience with us and help build solutions.</p>
        <a href="#contact" className="btn btn-success">
          Report a Challenge
        </a>
      </section>

    </>
  )
}

export default Challenge
