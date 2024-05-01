import ProductsScreens from "../../components/screens/productsScreen"
import Header from "../../components/layout/header"
import {  Meta, Title } from "react-head"
import { useParams } from "react-router-dom"

function Products() {
  const { id } = useParams()
  return (
    
    <>
    {!id && <Meta name="robots" content="INDEX,FOLLOW"></Meta>}
 <Meta name="title" content="Integral Maderas y Herrajes | perfiles de aluminio"></Meta>
      <Title>Integral Maderas y Herrajes | perfiles de aluminio</Title>
      <Meta name="description" content="Descubre una variedad de perfiles de aluminio ideales para una amplia gama de aplicaciones, desde puertas y ventanas hasta muebles y cancelas. Encuentra soluciones versátiles y funcionales para tus necesidades de diseño y construcción." />
      <Header />
      <ProductsScreens />
    </>
  )
}

export default Products
