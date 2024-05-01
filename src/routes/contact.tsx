import ContactScreen from "../../components/screens/contactScreen"
import Header from "../../components/layout/header"
import { Meta, Title } from "react-head"
import { useParams } from "react-router-dom"

function Contact() {
  const { id } = useParams()
  return <>
  
  {!id && <Meta name="robots" content="INDEX,FOLLOW"></Meta>}
  <Meta name="title" content="Integral Maderas y Herrajes | Contactanos"></Meta>
    <Title>Integral Maderas y Herrajes | Contactanos</Title>
    <Meta name="description" content="Encuentra nuestras sucursales y los datos de contacto. Contáctanos para obtener más información sobre nuestros productos para maderas, herrajes, perfiles de aluminio  y más" />


    <Header />
    <ContactScreen />
  </>
}

export default Contact
