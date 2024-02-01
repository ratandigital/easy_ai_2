import React from 'react';
import bgChatbotImage from '@/public/assets/images/components/bg-chatbot1.png'; // Update the path accordingly
import { PhPlus, PhPaperPlaneTilt } from 'phosphor-react'; // Assuming you are using phosphor-react for icons

const ChatComponent = () => {
    return (
        <div className="section-form-chat pt-100 pb-100">
  <div className="bg-img">
    {" "}
    <img src="assets/images/components/bg-chatbot1.png" alt="" />
  </div>
  <div className="container">
    <div className="heading2 text-center">AI chat bot</div>
    <div className="body2 text-placehover text-center mt-24">
      Power up your website with our advanced chat bot that offers image and
      video tools.
    </div>
    <div className="row flex-center">
      <div className="col-sm-11">
        <div className="form-chat-block mt-60">
          <div className="form-content bora-16 overflow-hidden">
            <div className="heading bg-blue pt-28 pb-28 pl-40 pr-40 flex-between">
              <div className="text-button">How can i help you?</div>
              <div className="new-chat flex-item-center gap-8">
                <div className="text-button">New chat</div>
                <i className="ph-bold ph-plus" />
              </div>
            </div>
            <div className="content p-40 bg-on-surface">
              <ul className="chatbox"> </ul>
              <div className="form-chat p-12 bora-99 flex-between gap-16">
                <textarea
                  className="text-white"
                  placeholder="Send a message..."
                  defaultValue={""}
                />
                <span className="flex-center" id="send-chat-btn">
                  <i className="ph ph-paper-plane-tilt fs-20" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}

export default ChatComponent;
