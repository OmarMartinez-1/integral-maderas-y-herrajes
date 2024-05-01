import { Outlet, useParams } from "react-router-dom"
import ProductCard from "../productCard"
import { getProducts } from "../../library/service"
import { useEffect, useState } from "react"

function ProductsScreens() {


  const { id } = useParams()

  const Products = getProducts()

  const [outletId, setOutletId] = useState<string>()

  useEffect(()=>{

    if(id){
      setOutletId(id)
    }
  
  },[id])


  return (
    <>

      {id && <Outlet context={[outletId, setOutletId]}/>}

      <div className="flex w-[88%] mt-8 mb-8">
        <h1 className="absolute -z-10">Perfiles De Aluminio</h1>
      <div className="flex gap-3  px-5 py-3 font-bold text-2xl text-green-400 hover:text-white rounded-md hover:shadow-green-400/70 hover:bg-green-400/70  hover:shadow-md  hover:duration-500">Perfiles<div className="font-bold text-black text-2xl">De Aluminio</div></div>
      </div>

      <div className="w-[88%] mb-28 grid grid-cols-1 sm:grid-cols-2 md:w-[85%] md:gap-x-12 lg:w-[90%] lg:gap-x-8 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-4 ">

        {Products.map(({ name, section, photoMain, serialNumber }) => <ProductCard key={serialNumber} name={name} section={section} photoMain={photoMain} serialNumber={serialNumber}  />)}

      </div>
    </>
  )
}

export default ProductsScreens