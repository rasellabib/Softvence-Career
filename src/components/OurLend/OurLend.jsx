import React from "react";
import "./OurLend.css";

const OurLend = () => {
  return (
    <div>
      <div>
        <div className="lend-sec sce-padding">
          <div className="container">
            <div className="lend-div">
              <div className="lend-content">
                
                <h2 className=" text-white">Where We Lend</h2>
                <p className="lend-p">
                  Ridge Street provides hard money loans to real estate
                  investors in 35 states. <br />
                  We focus our efforts in <span>Texas</span> and{" "}
                  <span>Florida</span>.
                </p>
              </div>
              <div className="lend-img">
                <img src="/map.svg" alt="" />
              </div>
              <div className="lend-card-div">
                <div className=" card1">
                  <div className="lend-card"></div>
                  <div className="card-in-content">
                    <div className="card-text">
                      <h2 className="text-white">Texas</h2>
                      <p className="lend-p">Hard Money Loans | DSCR Loans</p>
                    </div>
                    <button>VIEW ALL LOCATIONS</button>
                  </div>
                </div>
                <div className="card2">
                  <div className="lend-card"></div>
                  <div className="card-in-content">
                    <div className="card-text">
                      <h2 className="text-white">Texas</h2>
                      <p className="lend-p">Hard Money Loans | DSCR Loans</p>
                    </div>
                    <button>VIEW ALL LOCATIONS</button>
                  </div>
                </div>
              </div>
              <div className="button-div">
                <button href="#" class="custom-button">
                  <div className="button"></div>
                  <p>VIEW ALL LOCATIONS</p>
                  <div className="arrow-btn">
                    <img src="/arrow.svg" alt="" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLend;
