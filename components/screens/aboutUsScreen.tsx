import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"



function AboutUsScreen() {

    
  const { id } = useParams()

  const [outletId, setOutletId] = useState<string>()


  useEffect(() => {

    if (id) {
      setOutletId(id)
    }

  }, [id])


    return (

        <>
        {id && <Outlet context={[outletId, setOutletId]} />}
        
        <div className="relative pb-10  w-full h-[100dvh] isolate overflow-hidden   before:absolute before:content-[''] before:-z-10 before:bg-black/85 before:h-full before:w-full">





            <img src="https://incassa.mx/wp-content/uploads/2023/10/wepik-export-20230921233256cn1I.jpg" alt="background image" className="absolute inset-0 -z-20 h-full w-full object-cover object-right md:object-center " />

            <div className="size-full max-sm:overflow-y-scroll">

                <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
                <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>


                <div className="flex flex-col justify-between h-full mx-auto max-w-7xl px-6 lg:px-8 pt-36 pb-28 sm:pt-36 ">
                    <div className="mx-auto max-w-4xl lg:mx-0">
                        <p className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Sobre Nosotros</p>
                        <div className="mt-6 text-lg leading-8 text-gray-300 capitalize ">
                            <h1 className="inline">Contamos con más de 10 años de experiencia dedicados a la venta de herrajes y bisagras, así como puertas de closet, manijas, pasadores y herramientas para la fabricación de muebles</h1>
                            <p className="inline">. Durante algunos años, nos hemos dedicado a integrar todo lo necesario para el fabricante, carpintero, así como el cliente final</p>


                            <label htmlFor="draft" className="peer-checked/draft:hidden cursor-pointer">
                                <input id="draft" className="peer/draft hidden" type="radio" name="status" />

                                <div className="text-sky-500 peer-checked/draft:hidden">
                                    Leer mas...
                                </div>
                            </label>

                            <label htmlFor="published" className="peer-checked/published:hidden">
                                <input id="published" className="peer/published hidden" type="radio" name="status" defaultChecked />
                                <div className=" inline peer-checked/published:hidden">
                                    . Especializados en herrajes, iluminación, materiales y herramientas que pudieras necesitar en el proceso de fabricación, mantenimiento y preparación. Nuestro compromiso es garantizar la satisfacción de nuestros clientes, consiguiendo lo que con otros no puedes encontrar. Con nosotros podrás encontrar desde una pija hasta un sistema más especializado.
                                </div>
                                <div className="text-sky-500 peer-checked/published:hidden cursor-pointer">
                                    Leer menos
                                </div>
                            </label>

                        </div>

                    </div>

                    <h2 className="absolute -z-40">Sobre Nosotros</h2>

                    <div className=" text-2xl font-bold leading-9 tracking-tight text-white mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-2xl">
                        <p>Nuestro objetivo</p>

                        <p className="text-base leading-7 text-gray-300">En Integral Maderas y Herrajes tenemos como objetivo comercializar artículos de primera calidad, los cuales pueden ser adquiridos a los precios más competitivos de la zona. Al visitar nuestras instalaciones comprobarás que somos profesionales en el ramo, razón por la que quiénes ya nos conocen nos recomiendan ampliamente.</p>

                    </div>

                </div>
            </div>
        </div>
                        </>
    )
}

export default AboutUsScreen
