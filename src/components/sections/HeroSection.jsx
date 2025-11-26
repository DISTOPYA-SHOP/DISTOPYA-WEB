import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-logo">
            <img src="/logo.svg" alt="DYSTOPIA" />
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line1">FUTURE</span>
            <span className="hero-title-line2">IS NOW</span>
          </h1>

          <p className="hero-description">
            Lorem ipsum dolor sit amet <span className="highlight-green">consectetur adipiscing</span> elit
            sed do <span className="highlight-white">eiusmod tempor incididunt</span>
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">Compre AGORA</button>
            <button className="btn btn-secondary">ENTRAR NA DYSTOPIA</button>
          </div>

          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-dot green"></span>
              <span className="feature-text">DROPS LIMITADOS</span>
            </div>
            <div className="feature-item">
              <span className="feature-dot purple"></span>
              <span className="feature-text">QUALIDADE PREMIUM</span>
            </div>
            <div className="feature-item">
              <span className="feature-dot red"></span>
              <span className="feature-text">AUTÊNTICO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
