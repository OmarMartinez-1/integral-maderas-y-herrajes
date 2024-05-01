import { Link, Outlet, useParams } from "react-router-dom"
import ProductCard from "../productCard"
import { getProducts } from "../../library/service"
import { useEffect, useState } from "react"


export default function Home() {

  const Products = getProducts().slice(0, 4)

  const { id } = useParams()

  const [outletId, setOutletId] = useState<string>()


  useEffect(() => {

    if (id) {
      setOutletId(id)
    }

  }, [id])





  return (

    <div className="flex w-full flex-col items-center" >
      <div className="relative w-full ">


        {id && <Outlet context={[outletId, setOutletId]} />}


        <div className="before:absolute before:content-[''] before:z-20 before:bg-black/50 before:h-[533px] before:w-full">

          <img className="aspect-square h-[533px] w-full object-cover absolute top-0 z-10"
          alt="background image"

            src="https://assets.telkitchens.co.uk/srcane/uploads/2021/07/12104046/Black-Wardrobe-Designs-8.jpg" />
        </div>





        <div className="flex flex-col items-center relative top-0 z-30 right-0">

          <div className="mt-28 mb-16 md:mb-24 md:mt-36 lg:mb-28 lg:mt-40 flex flex-col items-center gap-5 ">
            <h1 className="text-4xl text-center text-slate-50 max-w-xl font-bold ">Explora Nuestro Catálogo De Perfiles De Aluminio</h1>
            <Link to="/Aluminio" className=" text-slate-50 rounded-md bg-green-500  shadow-lg shadow-green-500/70 hover:shadow-xl hover:shadow-green-400/70  hover:duration-500 font-medium text-xl  text-center px-8 py-3">
              Ver Catálogo
            </Link>

          </div>

          <div className="grid grid-rows-3 grid-cols-[90%] sm:grid-cols-[416px] md:grid-rows-1 md:grid-cols-3 md:w-[88%]  gap-x-16 gap-y-16 px-6  justify-center md:gap-x-12 ">

            <div className="relative rounded-lg overflow-hidden h-full  w-full  mb-4 shadow-xl before:absolute before:content-[''] before:z-10 hover:before:bg-black/50 before:size-full" >
              <div className=" flex flex-col absolute z-10 h-full justify-end pl-4 pb-7 lg:text-2xl text-slate-50">
                <h2 className="font-medium">Perfiles de alumino para</h2>
                <p className="text-2xl font-bold">Ropero</p>
              </div>
              <img className="aspect-auto h-full w-full object-cover relative top-0 " src="https://assets.telkitchens.co.uk/srcane/uploads/2021/07/12104025/Black-Wardrobe-Designs-7.jpg" alt="background image" />
            </div>

            <div className="relative  rounded-lg overflow-hidden h-full w-ful mb-4 shadow-xl before:absolute before:content-[''] before:z-10 hover:before:bg-black/50 before:size-full">
              <div className=" flex flex-col absolute z-10 h-full justify-end pl-4 pb-7 lg:text-2xl text-slate-50">
                <p className="font-medium">Perfiles de alumino para</p>
                <h2 className="text-2xl font-bold">Correderas</h2>
              </div>
              <img className="aspect-auto h-full w-full object-cover relative top-0 " src="https://idealbarndoors.com.au/wp-content/uploads/2023/09/Slimline-3D.jpg" alt="background image"/>
            </div>

            <div className="relative  rounded-lg overflow-hidden h-full w-full mb-4 shadow-xl before:absolute before:content-[''] before:z-10 hover:before:bg-black/50 before:size-full">
              <div className=" flex flex-col absolute z-10 h-full justify-end pl-4 pb-7 lg:text-2xl text-slate-50">
                <p className="  font-medium">Perfiles de alumino para</p>
                <h2 className="text-2xl font-bold">Cosina</h2>
              </div>
              <img className="aspect-auto h-full w-full object-cover relative top-0 " src="https://www.planetfurniture.co.uk/wp-content/uploads/2022/12/the-kitchen-island-planet-furniture-2.jpg" alt="background image" />
              <h3 className="absolute -z-20">Productos Mas Solicitados</h3>
            </div>

          </div>



          <div className="grid columns-1 items-center  w-full h-fit px-4 py-20 gap-y-6">


            <div className="flex mb-1 row-start-1 row-end-1 col-start-1 col-end-3  lg:col-end-1">
              <div className="flex gap-3  px-5 py-3 font-bold text-2xl text-green-400 hover:text-white rounded-md hover:shadow-green-400/70 hover:bg-green-400/70  hover:shadow-md  hover:duration-500">Productos<div className="font-bold text-black text-2xl">Mas Solicitados</div></div>
            </div>

           


            <Link to='/Aluminio' className="row-start-3 row-end-3 col-start-1 lg:row-start-1 lg:row-end-1 lg:col-start-2 lg:text-end font-semibold text-green-400 text-start text-lg">Ver Colección →</Link>

            <div className="col-start-1 col-end-3 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 ">

              {Products.map(({ name, section, photoMain, serialNumber }) => <ProductCard key={serialNumber} serialNumber={serialNumber} name={name} section={section} photoMain={photoMain} />)}


            </div>
          </div>

        </div>

      </div>

    </div>


  );
}
