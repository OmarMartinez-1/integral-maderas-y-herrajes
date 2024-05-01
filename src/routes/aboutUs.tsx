import AboutUsScreen from "../../components/screens/aboutUsScreen"
import Header from "../../components/layout/header"
import {  Meta, Title } from "react-head"
import { useParams } from "react-router-dom"

function AboutUs() {
  const { id } = useParams()
  return (
    <>
    
    {!id && <Meta name="robots" content="INDEX,FOLLOW"></Meta>}
    <Meta name="title" content="Integral Maderas y Herrajes | Sobre Nosotros"></Meta>
      <Title>Integral Maderas y Herrajes | Sobre Nosotros</Title>
      <Meta name="description" content="Descubre quiénes somos en Integral Maderas y Herrajes. Conoce nuestra historia, nuestros valores y nuestra dedicación a ofrecer productos de alta calidad para puertas, ventanas, muebles, canceles y más." />


      <Header />
      <AboutUsScreen />
    </>
  )
}

export default AboutUs
