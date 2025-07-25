import React from "react";
import "./ClientReviews.css";

const ClientReviews = () => {
  return (
    <div>
      <div className="reviews-sec ">
        <button className="arrow-left">
          <svg
            width="32"
            height="55"
            viewBox="0 0 32 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.666 50.9045L4.33268 27.5711L27.666 4.23779"
              
              stroke-width="7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button className="arrow-right">
          <svg
            width="32"
            height="55"
            viewBox="0 0 32 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.33301 4.23714L27.6663 27.5705L4.33301 50.9038"
              stroke-width="7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div className="reviews-div position-absolute">
          <div className="container">
            <div className="text-center">
              <h1 className=" sec-padding-bottom">
                Ridge Street Client Reviews
              </h1>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="reviews-card">
                  <div className="client-img">
                    <img className="client-img-div" src="/client.png" alt="" />
                  </div>
                  <h4>Labib Rasel</h4>
                  <h6>What an amazing experience</h6>
                  <p className="text-14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    auctor ex ut turpis congue, a accumsan elit ultricies.
                    Vivamus sit amet ligula at libero ullamcorper fringilla.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Integer euismod libero eu
                    quam efficitur, a elementum sem fermentum. Fusce vel ante
                    vel ex cursus.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="reviews-card">
                  <div className="client-img">
                    <img className="client-img-div" src="/client1.png" alt="" />
                  </div>
                  <h4>Labib Rasel</h4>
                  <h6>What an amazing experience</h6>
                  <p className="text-14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    auctor ex ut turpis congue, a accumsan elit ultricies.
                    Vivamus sit amet ligula at libero ullamcorper fringilla.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Integer euismod libero eu
                    quam efficitur, a elementum sem fermentum. Fusce vel ante
                    vel ex cursus.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="reviews-card">
                  <div className="client-img">
                    <img className="client-img-div" src="/client2.png" alt="" />
                  </div>
                  <h4>Labib Rasel</h4>
                  <h6>What an amazing experience</h6>
                  <p className="text-14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    auctor ex ut turpis congue, a accumsan elit ultricies.
                    Vivamus sit amet ligula at libero ullamcorper fringilla.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Integer euismod libero eu
                    quam efficitur, a elementum sem fermentum. Fusce vel ante
                    vel ex cursus.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="reviews-card">
                  <div className="client-img">
                    <img
                      className="client-img-div"
                      src="/clients3.png"
                      alt=""
                    />
                  </div>
                  <h4>Labib Rasel</h4>
                  <h6>What an amazing experience</h6>
                  <p className="text-14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    auctor ex ut turpis congue, a accumsan elit ultricies.
                    Vivamus sit amet ligula at libero ullamcorper fringilla.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Integer euismod libero eu
                    quam efficitur, a elementum sem fermentum. Fusce vel ante
                    vel ex cursus.
                  </p>
                </div>
              </div>
            </div>
            <div className="button-div sec-padding-top">
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
  );
};

export default ClientReviews;
