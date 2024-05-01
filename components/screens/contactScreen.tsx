import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"

function ContactScreen() {
    



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
        <div className="w-full  pt-28   pb-16" >
            <div className="flex flex-col gap-14 items-center justify-center size-full">
                <h1 className="absolute -z-10">Contacto & Ubicación</h1>

                <div className="flex w-full px-4 max-sm:flex-col max-sm:gap-8 items-center justify-center">

                    <div className="flex w-full max-w-sm flex-col   md:w-[80%]   lg:w-[70%]">
                        <div className="flex items-center gap-2 border-l py-2 pl-4 border-green-400 font-semibold">
                            <div className="size-6" >
                            </div>
                            <h2 >SUCURSAL NAUCALPAN</h2>
                        </div>
                        <div className="flex items-center gap-3 border-l py-2 pl-4  border-gray-200">
                            <div className="h-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" ><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"></path></svg>
                            </div>
                            <a className="hover:text-green-400 hover:duration-500" href="https://maps.app.goo.gl/sFzyc9X3VGGjJcEj9" target="_blank" >Av. Dr. Gustavo Baz 37, Naucalpan Centro, 53000 Naucalpan de Juárez.</a>
                        </div>
                        <div className="flex items-center gap-3 border-l py-2 pl-4 border-gray-200">
                            <div >
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Zm0-360Zm112 168 56-56-128-128v-184h-80v216l152 152ZM224-866l56 56-170 170-56-56 170-170Zm512 0 170 170-56 56-170-170 56-56ZM480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160Z" /></svg>
                            </div>
                            <div>
                                <p>lun a vie: 8:15 am. - 6 pm.</p>
                                <p>sab: 8:15 am. - 2 pm.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 border-l py-2 pl-4 hover:text-green-400 hover:duration-500 border-gray-200">
                            <div >
                                <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 16 16" fill="#000000" className="size-5 ml-1">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                </svg>
                            </div>
                            <a
                                href="https://api.whatsapp.com/send?phone=525553601865&text=%22%C2%A1Buen%20d%C3%ADa!%20:)%20Bienvenido%20al%20chat%20de%20Integral%20Maderas%20y%20Herrajes.%20Estamos%20aqu%C3%AD%20para%20ayudarte%20de%208%3A00%20am%20a%205%3A00%20pm%2C%20de%20lunes%20a%20sabado.%20%C2%BFEn%20qu%C3%A9%20podemos%20asistirte%20hoy%3F%22"
                                target="_blank"
                            >+52 55 5360 1865</a>
                        </div>
                    </div>

                    <div className="flex w-full max-w-sm flex-col   md:w-[80%]   lg:w-[70%]">
                        <div className="flex items-center gap-2 border-l py-2 pl-4 border-green-400 font-semibold">
                            <div className="size-6" >
                            </div>
                            <h2 >SUCURSAL TLALNEPANTLA</h2>
                        </div>
                        <div className="flex items-center gap-3 border-l py-2 pl-4  border-gray-200">
                            <div className="h-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" ><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"></path></svg>
                            </div>
                            <a className="hover:text-green-400 hover:duration-500" href="https://maps.app.goo.gl/h4f5Svu3vBxvF1YLA" target="_blank">
                                <p >Av. Pdte. Juárez 96-Local C, Bella Vista Puente de Vigas, 54080 Tlalnepantla.</p>
                            </a>
                        </div>
                        <div className="flex items-center gap-3 border-l py-2 pl-4  border-gray-200">
                            <div >
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Zm0-360Zm112 168 56-56-128-128v-184h-80v216l152 152ZM224-866l56 56-170 170-56-56 170-170Zm512 0 170 170-56 56-170-170 56-56ZM480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160Z" /></svg>
                            </div>
                            <div >
                                <p>lun a vie: 8:15 am. - 6 pm.</p>
                                <p>sab: 8:15 am. - 2 pm.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 border-l py-2 pl-4  hover:text-green-400 hover:duration-500 border-gray-200">
                            <div >
                                <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 16 16" fill="#000000" className="size-5 ml-1">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                </svg>
                            </div>
                            <a
                                href="https://api.whatsapp.com/send?phone=525571604544&text=%22%C2%A1Buen%20d%C3%ADa!%20:)%20Bienvenido%20al%20chat%20de%20Integral%20Maderas%20y%20Herrajes.%20Estamos%20aqu%C3%AD%20para%20ayudarte%20de%208%3A00%20am%20a%205%3A00%20pm%2C%20de%20lunes%20a%20sabado.%20%C2%BFEn%20qu%C3%A9%20podemos%20asistirte%20hoy%3F%22"
                                target="_blank">
                                +52 55 7160 4544
                            </a>
                        </div>
                    </div>


                </div>

                <div className="flex  w-full flex-col items-center md:w-[80%]   lg:w-[70%]">
                    <div className="flex flex-wrap justify-center gap-x-3 mb-6 px-5 py-3 font-bold text-2xl text-green-400 hover:text-white rounded-md hover:shadow-green-400/70 hover:bg-green-400/70  hover:shadow-md  hover:duration-500  ">SUCURSAL<div className="text-black ">NAUCALPAN</div></div>



                    <iframe
                        className="max-sm:aspect-square aspect-video w-full rounded-md shadow-md"


                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15045.942217619793!2d-99.2325002!3d19.4777349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6d3fa61a8a5ebe9c!2sINTEGRAL%20MADERAS%20Y%20HERRAJES!5e0!3m2!1ses!2smx!4v1653279855609!5m2!1ses!2smx"
                        loading="lazy"
                    >
                    </iframe>
                    <h3 className="text-md mt-2">Av. Gustavo Baz Prada 37, Naucalpan.</h3>
                </div>


                <div className="flex w-full flex-col items-center md:w-[80%]  lg:w-[70%] ">
                    <div className="flex flex-wrap max-w justify-center gap-x-3 mb-6 px-5 py-3 font-bold text-2xl text-green-400 hover:text-white rounded-md hover:shadow-green-400/70 hover:bg-green-400/70  hover:shadow-md  hover:duration-500  ">SUCURSAL<div className="text-black ">TLALNEPANTLA</div></div>

                    <iframe
                        className="max-sm:aspect-square aspect-video w-full rounded-md shadow-md"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC68ugt4DcZp2_ZrFa2z-eKwXXsGQu3weo&q=INTEGRAL MADERAS Y HERRAJES, Avenida Presidente Juárez MZ 035, Bella Vista Puente de Vigas, Tlalnepantla de Baz, Estado de México, México"
                        loading="lazy">
                    </iframe>

                    <h3 className="text-md mt-2">Av.Presidente Juárez, Tlalnepantla De Baz, Méx.</h3>
                </div>
            </div>
        </div >
                            </>
    )
}

export default ContactScreen
