import Home from "../../components/screens/homeScreen.tsx"
import Header from "../../components/layout/header.tsx"
import { Meta, Title } from "react-head"
import { useParams } from "react-router-dom"

function Root() {
  const { id } = useParams()

  return (
    <>
      {!id && <Meta name="robots" content="INDEX,FOLLOW"></Meta>}
      <Meta name="title" content="Integral Maderas y Herrajes"></Meta>
      <Title>Integral Maderas y Herrajes</Title>
      <Meta name="description" content="Somos especialistas en herrajes y material para fabricación de muebles, closets y cocinas. Contamos con las más nuevas tecnologías, además de descuentos" />

      <Header />
      <Home />

    </>
  )
}

export default Root