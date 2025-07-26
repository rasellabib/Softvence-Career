import React from "react";
import "./FooterHero.css";

const FooterHero = () => {
  return (
    <div>
      <div className="hero-image">
        <div className="overly">{/* <img src="/house.webp" alt="" /> */}</div>
        <div className="Subtract1">
          {/* <img src="/Subtract.png" alt="" /> */}
        </div>
        <div className="glass"></div>
        <div className="hero-padding-top-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-content-center">
                <div className="hero-content">
                  <h1 className="mb-40">Ready To Get Started</h1>
                  <p className="mb-40">
                    With Ridge Street, obtaining a private mortgage loan is
                    easier than you think! You can get pre-approved online and a
                    Term Sheet that Meet’s your needs will be sent to you within
                    the hour.
                  </p>
                  <div className="button-white-div margin-top-60">
                    <button href="#" class="custom-button-white">
                      <div className="button-white"></div>
                      <p>Get Approved Online</p>
                      <div className="arrow-btn-white">
                        <svg
                          width="27"
                          height="28"
                          viewBox="0 0 27 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.2285 1.4043C15.6944 1.43152 16.1351 1.61572 16.4805 1.92383L16.623 2.0625L16.6289 2.06934L16.6348 2.07715L26.0039 13.0078C26.3241 13.3809 26.4999 13.856 26.5 14.3477C26.5 14.778 26.3655 15.1962 26.1172 15.5439L26.0039 15.6885L16.623 26.6328C16.2611 27.0245 15.7609 27.2609 15.2285 27.292C14.6962 27.3231 14.1726 27.1467 13.7676 26.7998C13.3625 26.4529 13.1078 25.9625 13.0566 25.4316C13.0055 24.9008 13.1618 24.3709 13.4932 23.9531L13.499 23.9453L13.5049 23.9385L21.7236 14.3477L13.5049 4.75781L13.499 4.75L13.4932 4.74316C13.1619 4.32542 13.0056 3.79537 13.0566 3.26465C13.1078 2.73385 13.3626 2.24338 13.7676 1.89648C14.1726 1.54962 14.6962 1.37322 15.2285 1.4043Z"
                            fill="#175730"
                            stroke="#175730"
                          />
                          <path
                            d="M2.72168 1.36328C3.26671 1.4058 3.77255 1.66369 4.12793 2.0791L13.4971 13.0098H13.498C13.8173 13.3831 13.9921 13.8584 13.9922 14.3496C13.9922 14.8408 13.8172 15.3161 13.498 15.6895L13.4971 15.6904L4.12207 26.6279L4.11523 26.6348C3.75334 27.0264 3.25401 27.2628 2.72168 27.2939C2.18936 27.325 1.66578 27.1486 1.26074 26.8018C0.855687 26.4549 0.60096 25.9644 0.549805 25.4336C0.498665 24.9028 0.654981 24.3729 0.986328 23.9551L0.992188 23.9473L0.998047 23.9404L9.2168 14.3496L0.995117 4.75977V4.75879C0.639767 4.34329 0.46337 3.80386 0.505859 3.25879C0.548383 2.71371 0.806209 2.20792 1.22168 1.85254C1.63713 1.49722 2.17667 1.32085 2.72168 1.36328Z"
                            fill="#175730"
                            stroke="#175730"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterHero;
