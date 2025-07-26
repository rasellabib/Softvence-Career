import React from "react";
import "./Resources.css";
const Resources = () => {
  return (
    <div className="Resources-bg">
      <div className="sce-padding">
        <div className="container">
          <div className="row">
            <div className="section-title section-title-div">
              <h1>Other Resources You’ll Like</h1>
              <button className="Resources-btn">view more</button>
            </div>
          </div>
          <div className="row">
            <div className="resources-card-div">
                <div className="resources-card">
                    <img src="/resources1.png" alt="" />
                    <div className="resources-content">
                        <div className="date"> May 9, 2024</div>
                        <h5>
                        Investor’s Guide To Real Estate Wholetailing
                        </h5>
                        <p className="font-normal-18 mt-16">
                        Real estate wholetailing investment technique that combines the best aspects of two of the most common strategies - flipping houses and wholesaling. With wholetailing, you can earn large.
                        </p>
                    </div>
                </div>
                <div className="resources-card">
                    <img src="/resources2.png" alt="" />
                    <div className="resources-content">
                        <div className="date"> May 9, 2024</div>
                        <h5>
                        Investor’s Guide To Real Estate Wholetailing
                        </h5>
                        <p className="font-normal-18 mt-16">
                        Real estate wholetailing investment technique that combines the best aspects of two of the most common strategies - flipping houses and wholesaling. With wholetailing, you can earn large.
                        </p>
                    </div>
                </div>
                <div className="resources-card">
                    <img src="/resource3.png" alt="" />
                    <div className="resources-content">
                        <div className="date"> May 9, 2024</div>
                        <h5>
                        Investor’s Guide To Real Estate Wholetailing
                        </h5>
                        <p className="font-normal-18 mt-16">
                        Real estate wholetailing investment technique that combines the best aspects of two of the most common strategies - flipping houses and wholesaling. With wholetailing, you can earn large.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
