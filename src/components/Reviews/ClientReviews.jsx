import React, { useState } from "react";
import "./ClientReviews.css";

const reviewsData = [
  { id: 1, img: "/client.png", name: "Client 1" },
  { id: 2, img: "/client1.png", name: "Client 2" },
  { id: 3, img: "/client2.png", name: "Client 3" },
  { id: 4, img: "/clients3.png", name: "Client 4" },
  { id: 5, img: "/client.png", name: "Client 5" },
  { id: 6, img: "/client1.png", name: "Client 6" },
];

// const VISIBLE_COUNT = 4;
function VISIBLE_COUNT() {
  const width = window.innerWidth;
  if (width < 576) return 1;
  if (width < 992) return 2;
  return 3;
}

const ClientReviews = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + VISIBLE_COUNT() < reviewsData.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleCards = reviewsData.slice(
    startIndex,
    startIndex + VISIBLE_COUNT()
  );

  return (
    <div className="reviews-sec">
      <div className="reviews-sec-div ">
      <button className="arrow-left" onClick={handlePrev}>
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
      <button className="arrow-right" onClick={handleNext}>
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
            <h1 className="sec-padding-bottom">Ridge Street Client Reviews</h1>
          </div>
          <div className="carousel-row">
            {visibleCards.map((review, index) => (
              <div className="carousel-card" key={review.id}>
                <div className="reviews-card">
                  <div className="client-img">
                    <img className="client-img-div" src={review.img} alt="" />
                  </div>
                  <h4>{review.name}</h4>
                  <h6>What an amazing experience</h6>
                  <p className="text-14">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    quisquam error ipsum aliquid sunt iure quidem nulla quam ut
                    dolore, rem quibusdam id consectetur delectus magnam odio
                    impedit incidunt amet ab. Laboriosam quidem cupiditate,
                    nostrum exercitation
                  </p>
                </div>
              </div>
            ))}
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
  );
};

export default ClientReviews;
