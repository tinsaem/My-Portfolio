import './home_style/home.css'

    function Header() {
  return (
  <header className="topbar">
      <div className="logo">
        <a href="Home.html">
          <img
            src="https://logo-teka.com/wp-content/uploads/2025/07/aliexpress-logo.svg"
            alt="AliExpress Logo"
            style={{ maxWidth: "147px" }} 
          />
        </a>
      </div>

      <div className="search-container">
        <input type="text" placeholder="Xxxxxxxl Woman Dresses" />

        <button className="image-icon">
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="6" height="2" rx="1" fill="black" />
            <rect x="3" y="3" width="2" height="6" rx="1" fill="black" />

            <rect x="15" y="3" width="6" height="2" rx="1" fill="black" />
            <rect x="19" y="3" width="2" height="6" rx="1" fill="black" />

            <rect x="3" y="19" width="6" height="2" rx="1" fill="black" />
            <rect x="3" y="15" width="2" height="6" rx="1" fill="black" />

            <rect x="15" y="19" width="6" height="2" rx="1" fill="black" />
            <rect x="19" y="15" width="2" height="6" rx="1" fill="black" />

            <circle
              cx="12"
              cy="12"
              r="3"
              stroke="black"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </button>

        <button className="search-btn">
          <svg width="18" height="18" viewBox="0 0 24 24">
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="white"
              strokeWidth="4"
              fill="none"
            />
            <line
              x1="20"
              y1="20"
              x2="16"
              y2="16"
              stroke="white"
              strokeWidth="4"
            />
          </svg>
        </button>
      </div>

      <div className="right-section">
        <div className="item">
          <a href="#">
            <svg width="25" height="25" viewBox="0 0 24 24">
              <rect
                x="3"
                y="3"
                width="6"
                height="6"
                stroke="black"
                strokeWidth="2"
                fill="none"
              />
              <rect x="4.5" y="4.5" width="3" height="3" fill="black" />

              <rect
                x="15"
                y="3"
                width="6"
                height="6"
                stroke="black"
                strokeWidth="2"
                fill="none"
              />
              <rect x="16.5" y="4.5" width="3" height="3" fill="black" />

              <rect
                x="3"
                y="15"
                width="6"
                height="6"
                stroke="black"
                strokeWidth="2"
                fill="none"
              />
              <rect x="4.5" y="16.5" width="3" height="3" fill="black" />

              <rect x="14" y="14" width="2" height="2" fill="black" />
              <rect x="18" y="14" width="2" height="2" fill="black" />
              <rect x="14" y="18" width="2" height="2" fill="black" />
              <rect x="18" y="18" width="2" height="2" fill="black" />
            </svg>
          </a>

          <span>
            <a href="#">Download the</a>
            <br />
            <a href="#">AliExpress app</a>
          </span>
        </div>

        <div className="item">
          <span className="flag">
            <img src="/img/Flag_of_Ethiopia.svg" alt="Ethiopia flag" />
          </span>

          <span>
            <a href="#">EN/</a>
            <br />
            <b>
              <a href="#">ETB</a>
            </b>
          </span>
        </div>

        <div className="item">
          <svg width="30" height="30" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4" stroke="black" fill="none" />
            <path d="M4 20c2-4 14-4 16 0" stroke="black" fill="none" />
          </svg>

          <span>
            Welcome
            <br />
            <b>
              <a href="#">Sign in / Register</a>
            </b>
          </span>
        </div>

        <div className="item cart">
          <svg width="30" height="30" viewBox="0 0 24 24">
            <circle cx="9" cy="20" r="1" />
            <circle cx="17" cy="20" r="1" />
            <path d="M3 4h2l2 12h10l2-8H7" stroke="black" fill="none" />
          </svg>

          <span>
            <a href="#">Cart</a>
          </span>
        </div>
      </div>
    </header>
    
  )
}

export default Header;