import React from 'react'

export default function SliderComponent() {
  return (
    <div className="slider-block style-one">
    <div className="slider-main">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="text-content">
              <div className="heading1 scroll-bottom-to-top2">
                Unleash <span className="scroll-bottom-to-top3">the </span>
                <span className="scroll-bottom-to-top4">Power </span>
                <span className="scroll-bottom-to-top5">of </span>
                <span className="scroll-bottom-to-top6">Conversational </span>
                <span className="scroll-bottom-to-top7">Technology</span>
              </div>
              <div className="body2 text-placehover mt-40">
                We are a full-service creative agency that helps businesses build
                brands, tell stories, and engage audiences through bold and
                strategic design.
              </div>
              <a className="button button-blue-hover mt-40" href="about.html">
                {" "}
                <span>
                  {" "}
                  <span />
                </span>
                <span className="bg-blue">
                  Explore more
                  <i className="ph-bold ph-arrow-up-right fs-18 flex-center" />
                </span>
              </a>
            </div>
          </div>
          <div className="col-xl-6 scroll-right-to-left2">
            <div className="bg-img">
              {" "}
              <img src="assets/images/slider/user1.png" alt="" />
              <img src="assets/images/slider/frame-above.png" alt="" />
              <img src="assets/images/slider/frame-below.png" alt="" />
            </div>
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={68}
                height={67}
                viewBox="0 0 68 67"
                fill="none"
              >
                <path
                  d="M19.5202 46C23.5662 38.2807 35.6305 19.4737 51.5202 5.99999M32.0899 63.5741C37.1814 61.3503 50.7952 56.8307 64.5188 56.5417M3.00006 35.66C3.23721 30.1091 5.15276 15.8931 10.9177 3.43579"
                  stroke="#3D89FB"
                  strokeWidth={5}
                  strokeLinecap="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={165}
                height={121}
                viewBox="0 0 165 121"
                fill="none"
              >
                <path
                  d="M2.00006 67C26.6785 44.4479 36.5001 29.5 80.5001 5C55.5001 48.5 36.162 82.718 33.5001 104.5C51.9116 87.0666 132.511 13.8811 138.5 2C124.081 19.8767 76.4868 118.534 76.4868 118.534C76.4868 118.534 116.5 85.5 163 59.1285"
                  stroke="#3D89FB"
                  strokeWidth={4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="user-infor bora-24 p-16 flex-item-center gap-12">
              <i className="ph-fill ph-user fs-24 p-8 bora-50 bg-blue"> </i>
              <div className="infor">
                <div className="heading7">Maverick Nguyen</div>
                <div className="text-button-small text-placehover">
                  UI UX Designer, Avitex Inc
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}
