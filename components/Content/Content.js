import React from 'react'
import SliderComponent from './Slider/SliderComponent'
import ClientComponent from './Client/ClientComponent'
import ChatComponent from './ChatBoat/ChatComponent'
import IdeasComponent from '../ideas/IdeasComponent'
import SolutionComponent from '../Solution/SolutionComponent'
import IntelligentComponent from '../Solution/IntelligentComponent'
import PeopleSayComponent from '../peoplesay/PeopleSayComponent'
import PortFollioComponent from '../portfollio/PortFollioComponent'
import PricingComponent from '../pricing/PricingComponent'
import BlogComponent from '../Blog/BlogComponent'
import PopupComponent from '../popup/PopupComponent'
import TopToUp from '../totoup/TopToUp'

export default function Content() {
  return (
    <div id="content">
        <SliderComponent></SliderComponent>
        <ClientComponent/>
        <ChatComponent/>
        <IdeasComponent/>
        <SolutionComponent/>
        <IntelligentComponent/>
        <PeopleSayComponent/>
        <PortFollioComponent/>
        <PricingComponent/>
        <BlogComponent/>
        <PopupComponent/>
        <TopToUp/>
    </div>
  )
}
