import Content from '@/components/Content/Content'
import FooterComponent from '@/components/Footer/FooterComponent'
import HeaderComponent from '@/components/Header/HeaderComponent'
import ScriptComponent from '@/components/ScriptComponent'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <ScriptComponent/>
   <HeaderComponent/>
    <Content/>
   <FooterComponent/>
  </>
  
  )
}
