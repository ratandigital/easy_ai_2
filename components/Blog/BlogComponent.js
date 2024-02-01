import React from 'react'

export default function BlogComponent() {
  return (
    <div className="list-blog pt-100 pb-100">
    <div className="container">
      <div className="cursor flex-center gap-12">
        <i className="ph ph-caret-left text-white" />
        <i className="ph ph-caret-right text-white" />
      </div>
      <div className="heading flex-between">
        <div className="heading3">Our Blogs</div>
        <a href="blog.html">
          <u className="fw-700 text-blue-hover">View All</u>
        </a>
      </div>
      <div className="row list mt-40">
        <div className="item">
          <div className="blog-item bg-line-dark overflow-hidden bora-24">
            <a className="main-item" href="blog-detail.html">
              <div className="bg-img w-100 overflow-hidden">
                <img
                  className="w-100 h-100 display-block"
                  src="assets/images/blog/item1.png"
                  alt="Exploring AI Generation Create Image"
                />
              </div>
              <div className="infor p-24">
                <div className="heading flex-item-center gap-8">
                  <div className="text-button-uppercase">Creative</div>
                  <i className="ph-fill ph-dot-outline text-placehover"></i>
                  <div className="caption1 text-placehover">Oct 12, 2023</div>
                </div>
                <div className="heading6 mt-8">
                  Exploring AI Generation Create Image
                </div>
                <div className="text-placehover mt-8">
                  Cryptocurrencies operate on decentralized networks...
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="item">
          <div className="blog-item bg-line-dark overflow-hidden bora-24">
            <a className="main-item" href="blog-detail.html">
              <div className="bg-img w-100 overflow-hidden">
                <img
                  className="w-100 h-100 display-block"
                  src="assets/images/blog/item3.png"
                  alt="Breaking the Barriers of Creativity"
                />
              </div>
              <div className="infor p-24">
                <div className="heading flex-item-center gap-8">
                  <div className="text-button-uppercase">3d cartoon</div>
                  <i className="ph-fill ph-dot-outline text-placehover"> </i>
                  <div className="caption1 text-placehover">Oct 11, 2023</div>
                </div>
                <div className="heading6 mt-8">
                  Breaking the Barriers of Creativity
                </div>
                <div className="text-placehover mt-8">
                  Cryptocurrencies operate on decentralized networks...
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="item">
          <div className="blog-item bg-line-dark overflow-hidden bora-24">
            <a className="main-item" href="blog-detail.html">
              <div className="bg-img w-100 overflow-hidden">
                <img
                  className="w-100 h-100 display-block"
                  src="assets/images/blog/item4.png"
                  alt="A Game-Changer for E-Commerce"
                />
              </div>
              <div className="infor p-24">
                <div className="heading flex-item-center gap-8">
                  <div className="text-button-uppercase">realistic</div>
                  <i className="ph-fill ph-dot-outline text-placehover"></i>
                  <div className="caption1 text-placehover">Oct 10, 2023</div>
                </div>
                <div className="heading6 mt-8">A Game-Changer for E-Commerce</div>
                <div className="text-placehover mt-8">
                  Cryptocurrencies operate on decentralized networks...
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="item">
          <div className="blog-item bg-line-dark overflow-hidden bora-24">
            <a className="main-item" href="blog-detail.html">
              <div className="bg-img w-100 overflow-hidden">
                <img
                  className="w-100 h-100 display-block"
                  src="assets/images/blog/item2.png"
                  alt="Breaking the Barriers of Creativity"
                />
              </div>
              <div className="infor p-24">
                <div className="heading flex-item-center gap-8">
                  <div className="text-button-uppercase">3d cartoon</div>
                  <i className="ph-fill ph-dot-outline text-placehover"> </i>
                  <div className="caption1 text-placehover">Oct 10, 2023</div>
                </div>
                <div className="heading6 mt-8">
                  Breaking the Barriers of Creativity
                </div>
                <div className="text-placehover mt-8">
                  Cryptocurrencies operate on decentralized networks...
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}
