import React from 'react'

export default function IntelligentComponent() {
  return (
    <div className="how-it-work pt-100 pb-100">
  <div className="container">
    <div className="row heading flex-between row-gap-8">
      <div className="col-lg-6">
        <div className="heading3">
          Intelligent Solutions for Enhanced Customer{" "}
        </div>
      </div>
      <div className="col-lg-5">
        <div className="body1 text-placehover">
          Power up your website with our advanced chat bot that offers image and
          video tools, as well as quick and accurate question answering
          capabilities
        </div>
      </div>
    </div>
    <div className="row flex-between mt-40 row-gap-40">
      <div className="col-lg-4">
        <div className="feature-item flex-item-center gap-24 scroll-bottom-to-top1">
          <div className="icon">
            <i className="icon-box-group icon-white fs-40 p-16 bg-line-dark bora-50" />
          </div>
          <div className="infor">
            <div className="heading6">Sign up</div>
            <div className="text-placehover mt-8">
              Online banking allows you to manage your finances from anywhere,
              anytime.
            </div>
          </div>
        </div>
        <div className="feature-item flex-item-center gap-24 mt-40 scroll-bottom-to-top2">
          <div className="icon">
            <i className="icon-chart-box icon-white fs-40 p-16 bg-line-dark bora-50" />
          </div>
          <div className="infor">
            <div className="heading6">Get personalized </div>
            <div className="text-placehover mt-8">
              Empowering you to achieve your goals with precision and
              efficiency.
            </div>
          </div>
        </div>
        <div className="feature-item flex-item-center gap-24 mt-40 scroll-bottom-to-top3">
          <div className="icon">
            <i className="icon-flash icon-white fs-40 p-16 bg-line-dark bora-50" />
          </div>
          <div className="infor">
            <div className="heading6">Explore and engage</div>
            <div className="text-placehover mt-8">
              Embark on a journey of discovery and engagement with our dynamic
              content.
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="bg-img bora-24 overflow-hidden">
          <img
            className="w-100"
            src="assets/images/components/bg-how-it-work.png"
            alt=""
          />
          <div className="count bg-blue bora-12 flex-item-center gap-60 pt-20 pb-20 pl-32 pr-32 scroll-left-to-right4">
            <div className="item">
              <div className="heading4">
                1.77<span>k+</span>
              </div>
              <div className="text-button">Business Problem </div>
            </div>
            <div className="item">
              <div className="heading4">
                2.3<span>k+</span>
              </div>
              <div className="text-button">Business Setup </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
