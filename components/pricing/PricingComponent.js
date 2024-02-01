import React from 'react'

export default function PricingComponent() {
  return (
    <div className="section-pricing style-one pt-100">
  <div className="bg-blur" />
  <div className="container">
    <div className="bg-blur" />
    <div className="row flex-between row-gap-40">
      <div className="col-xl-3 col-12">
        <div className="heading">
          <div className="heading3 text-white">Find Your Right Plan</div>
          <div className="body2 text-placehover mt-16">
            We offer a variety of pricing packages to meet the unique needs of
            our services. Contact us today to discuss which package is right for
            you.
          </div>
          <div className="choose-type bg-line-dark bora-8 p-8 flex-between gap-8 mt-32 display-inline-flex">
            <button
              className="button text-white text-button-small bg-transparent pt-12 pb-12 pl-16 pr-16 active"
              data-name="monthly"
            >
              Pay Monthly
            </button>
            <button
              className="button text-white text-button-small bg-transparent pt-12 pb-12 pl-16 pr-16"
              data-name="yearly"
            >
              Pay Yearly
            </button>
          </div>
        </div>
      </div>
      <div className="col-xl-9 col-12 pl-65">
        <div className="list-pricing" data-name="monthly">
          <div className="row row-gap-32">
            <div className="col-md-6 col-12">
              <div className="pricing-item bg-line-dark p-40 bora-20 h-100">
                <div className="heading5 text-white">Freebie</div>
                <div className="body3 text-placehover mt-12">
                  Ideal for individuals who need quick access to basic features.
                </div>
                <div className="heading2 text-white mt-20">Free</div>
                <a
                  className="button text-white w-100 mt-24"
                  href="pricing.html"
                >
                  {" "}
                  <span>
                    {" "}
                    <span> </span>
                  </span>
                  <span className="bg-line-dark">Get Started</span>
                </a>
                <div className="list-feature d-flex flex-column gap-12 mt-40">
                  <div className="item flex-item-center gap-16">
                    {" "}
                    <i className="ph-bold ph-check fs-12 text-white p-8 bora-50 bg-blue" />
                    <div className="feature text-white">
                      20,000+ of PNG &amp; SVG graphics
                    </div>
                  </div>
                  <div className="item flex-item-center gap-16">
                    {" "}
                    <i className="ph ph-x fs-12 p-8 bora-50 bg-placehover text-white" />
                    <div className="feature text-placehover">
                      Upload custom icons and fonts
                    </div>
                  </div>
                  <div className="item flex-item-center gap-16">
                    {" "}
                    <i className="ph ph-x fs-12 p-8 bora-50 bg-placehover text-white" />
                    <div className="feature text-placehover">
                      Unlimited Projects
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="pricing-item bg-line-dark p-40 bora-20 h-100">
                <div className="heading5 text-white">Premium</div>
                <div className="body3 text-placehover mt-12">
                  Ideal for individuals who who need advanced features and tools
                  for client work.
                </div>
                <div className="price d-flex mt-20">
                  <div className="heading2 text-white">$9.99</div>
                  <div className="text-white">/month</div>
                </div>
                <a
                  className="button text-white w-100 mt-24"
                  href="pricing.html"
                >
                  {" "}
                  <span>
                    {" "}
                    <span></span>
                  </span>
                  <span className="bg-line-dark">Get Started</span>
                </a>
                <div className="list-feature d-flex flex-column gap-12 mt-40">
                  <div className="item flex-item-center gap-16">
                    {" "}
                    <i className="ph-bold ph-check fs-12 text-white p-8 bora-50 bg-blue" />
                    <div className="feature text-white">
                      20,000+ of PNG &amp; SVG graphics
                    </div>
                  </div>
                  <div className="item flex-item-center gap-16">
                    {" "}
                    <i className="ph-bold ph-check fs-12 text-white p-8 bora-50 bg-blue" />
                    <div className="feature text-placehover">
                      Upload custom icons and fonts
                    </div>
                  </div>
                  <div className="item flex-item-center gap-16">
                    {" "}
                    <i className="ph-bold ph-check fs-12 text-white p-8 bora-50 bg-blue" />
                    <div className="feature text-placehover">
                      Access to 100 million stock images
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="list-pricing hide" data-name="yearly">
          <div className="row row-gap-32">
            <div className="col-md-6 col-12">
              <div className="pricing-item bg-line-dark p-40 bora-20 h-100">
                <div className="heading5 text-white">Freebie</div>
                <div className="body3 text-placehover mt-12">
                  Ideal for individuals who need quick access to basic features.
                </div>
                <div className="heading2 text-white text-white mt-20">Free</div>
                <a
                  className="button text-white w-100 mt-24"
                  href="pricing.html"
                >
                  {" "}
                  <span>
                    {" "}
                    <span> </span>
                  </span>
                  <span className="bg-line-dark">Get Started</span>
                </a>
                <div className="list-feature d-flex flex-column gap-12 mt-40">
                  <div className="item flex-item-center gap-16">
                    {" "}
                    <i className="ph-bold ph-check fs-12 text-white p-8 bora-50 bg-blue" />
                    <div className="feature text-white">
                      20,000+ of PNG &amp; SVG graphics
                    </div>
                  </div>
                  <div className="item flex-item-center gap-16">
                    {" "}
                    <i className="ph ph-x fs-12 p-8 bora-50 text-white" />
                    <div className="feature text-placehover">
                      Upload custom icons and fonts
                    </div>
                  </div>
                  <div className="item flex-item-center gap-16">
                    {" "}
                    <i className="ph ph-x fs-12 p-8 bora-50 text-white" />
                    <div className="feature text-placehover">
                      Unlimited Projects
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="pricing-item bg-line-dark p-40 bora-20 h-100">
                <div className="heading5 text-white">Premium</div>
                <div className="body3 text-placehover mt-12">
                  Ideal for individuals who who need advanced features and tools
                  for client work.
                </div>
                <div className="price d-flex mt-20">
                  <div className="heading2 text-white">$89.99</div>
                  <div className="text-white">/year</div>
                </div>
                <a
                  className="button text-white w-100 mt-24"
                  href="pricing.html"
                >
                  {" "}
                  <span>
                    {" "}
                    <span></span>
                  </span>
                  <span className="bg-line-dark">Get Started</span>
                </a>
                <div className="list-feature d-flex flex-column gap-12 mt-40">
                  <div className="item flex-item-center gap-16">
                    {" "}
                    <i className="ph-bold ph-check fs-12 text-white p-8 bora-50 bg-blue" />
                    <div className="feature text-white">
                      20,000+ of PNG &amp; SVG graphics
                    </div>
                  </div>
                  <div className="item flex-item-center gap-16">
                    {" "}
                    <i className="ph-bold ph-check fs-12 text-white p-8 bora-50 bg-blue" />
                    <div className="feature text-placehover">
                      Upload custom icons and fonts
                    </div>
                  </div>
                  <div className="item flex-item-center gap-16">
                    {" "}
                    <i className="ph-bold ph-check fs-12 text-white p-8 bora-50 bg-blue" />
                    <div className="feature text-placehover">
                      Access to 100 million stock images
                    </div>
                  </div>
                </div>
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
