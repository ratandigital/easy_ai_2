import React from 'react'

export default function PopupComponent() {
  return (
    <div id="popup-newsletter-block">
    <div className="popup-newsletter-main">
      <div className="bg-img">
        {" "}
        <img
          className="w-100 h-100"
          src="assets/images/components/bg-popup-newsletter.png"
          alt=""
        />
      </div>
      <div className="content p-40 bg-on-surface">
        <div className="close-block text-end">
          <i className="ph-bold ph-x d-block fs-18 text-white pointer" />
        </div>
        <div className="heading6 text-white">News letter</div>
        <div className="text-placehover mt-8">
          Sign up to get all the latest AIZAN news, website updates, offers and
          promos.
        </div>
        <form className="mt-32">
          <div className="form-input">
            <input
              className="bg-line-dark text-white"
              type="text"
              placeholder="Email"
            />
            <button>
              <i className="ph ph-paper-plane-tilt text-placehover" />
            </button>
          </div>
          <div className="flex-item-center gap-8 mt-12">
            <input
              className="prevent-popup-input"
              type="checkbox"
              name="prevent"
            />
            <div className="caption1 text-placehover">Prevent this Pop-up</div>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  )
}
