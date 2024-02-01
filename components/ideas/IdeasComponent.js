import React from 'react'

export default function IdeasComponent() {
  return (
    <div className="about-us style-one pt-100 pb-100 bg-black-surface">
    <div className="container pb-60">
      <div className="row row-gap-40 flex-between">
        <div className="col-12 col-lg-5 flex-column row-gap-20">
          <div className="heading3">
            We Provide <span>Brilliant </span>
            <p>Ideas &amp; Adding</p>
          </div>
          <div className="body2 text-placehover mt-16">
            We are a full-service creative agency that helps businesses build
            brands, tell stories, and engage audiences through bold and strategic
            design.
          </div>
          <div className="list-service mt-32">
            <div className="service-item flex-item-center scroll-right-to-left1">
              <i className="ph-bold ph-check text-blue fs-24"> </i>
              <div className="heading7 pl-12">Free Live Chat Software</div>
            </div>
            <div className="service-item flex-item-center mt-12 scroll-right-to-left2">
              <i className="ph-bold ph-check text-blue fs-24"> </i>
              <div className="heading7 pl-12">Real Time Language Translation</div>
            </div>
            <div className="service-item flex-item-center mt-12 scroll-right-to-left3">
              <i className="ph-bold ph-check text-blue fs-24"> </i>
              <div className="heading7 pl-12">Free Question</div>
            </div>
          </div>
          <div className="button-block mt-32">
            <a className="button button-blue-hover" href="about.html">
              <span>
                <span />
              </span>
              <span className="pt-16 pb-16 bg-blue">
                Find out more
                <i className="ph-bold ph-arrow-up-right fs-18 flex-center" />
              </span>
            </a>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="bg w-100 h-100" />
          <div className="bg-img">
            <img src="assets/images/components/avatar-about1-1.png" alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={66}
              height={68}
              viewBox="0 0 66 68"
              fill="none"
            >
              <path
                d="M45.5642 19.8299C37.8449 23.8759 19.0379 35.9403 5.56419 51.8299M63.1383 32.3997C60.9145 37.4912 56.3949 51.105 56.1059 64.8286M35.2242 3.30982C29.6733 3.54696 15.4573 5.46251 3 11.2275"
                stroke="#3D89FB"
                strokeWidth={5}
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="bg-img">
            <img src="assets/images/components/avatar-about1-2.png" alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={68}
              height={67}
              viewBox="0 0 68 67"
              fill="none"
            >
              <path
                d="M19.5201 46C23.5661 38.2807 35.6305 19.4737 51.5201 5.99999M32.0899 63.5741C37.1813 61.3503 50.7952 56.8307 64.5187 56.5417M3 35.66C3.23715 30.1091 5.1527 15.8931 10.9177 3.43579"
                stroke="#3D89FB"
                strokeWidth={5}
                strokeLinecap="round"
              />
            </svg>
          </div>
          <img src="assets/images/components/line-about1.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  
  )
}
