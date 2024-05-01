import logo from "../../public/IMH-logo.webp"


function Footer() {
    return (
        <footer className="flex w-full flex-col items-center px-6 align-middle justify-center bg-gray-200/50">

            <div className="flex  flex-col w-full   bg-transparen py-16 px-4 mt-16 mx-4 gap-y-10 border-y-[1.5px] border-gray-200/50">
                <a href="/IntegralMaderasYHerrajes/" className="size-min ">
                    <div className=" flex  justify-center align-center overflow-hidden bg-green-400 shadow-2xl hover:shadow-green-400 hover:duration-500 rounded-md w-24 h-24 ml-4 ">
                        <img src={logo} alt="logo de integral maderas y herrajes"
                            className="object-contain w-full h-auto " />
                    </div>
                </a>

                <div className="grid  grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-4 text-center sm:text-start gap-y-16 gap-x-12">



                    <div className="flex flex-col max-w-56">
                        <h3 className="text-xl font-semibold  text-gray-900/100 pb-6">Integral Maderas y Herrajes</h3>
                        <h3 className="text-lg text-gray-500/100">Somos Especialistas En Herramientas Y Material Para Fabricación De Muebles.</h3>
                    </div>


                    <div className="flex flex-col ">
                        <p className="text-xl font-semibold  text-gray-900/100 pb-6">Productos en Tienda</p>
                        <ul role="list" className="flex flex-col gap-5">
                            <li className="text-base text-gray-500/100"><h3>Accesorios para closet</h3></li>
                            <li className="text-base text-gray-500/100"><h3>Accesorios para cocina</h3></li>
                            <li className="text-base text-gray-500/100"><h3>Herramientas</h3></li>
                            <li className="text-base text-gray-500/100"><h3>Barnices para madera</h3></li>
                        </ul>
                    </div>

                    <div className="flex flex-col max-w-56 ">
                        <p className="text-xl font-semibold  text-gray-900/100 pb-6">Dirección</p>
                        <ul role="list" className="flex flex-col gap-5">
                            <li className="text-base text-gray-500/100 hover:text-green-400 hover:duration-500"><address><a href="https://maps.app.goo.gl/sFzyc9X3VGGjJcEj9" target="_blank" >Av. Gustavo Baz Prada 37, Naucalpan, Méx.</a></address></li>
                            <li className="text-base text-gray-500/100 hover:text-green-400 hover:duration-500"><address><a href="https://maps.app.goo.gl/h4f5Svu3vBxvF1YLA" target="_blank">Av.Presidente Juárez, Tlalnepantla De Baz, Méx.</a></address></li>
                            <li className="text-base text-gray-500/100 hover:text-green-400 hover:duration-500"><a href="mailto:contacto@integralmyh.com" target="_blank" >contacto@<div>integralmyh.com</div></a></li>
                            <li className="text-base text-gray-500/100 hover:text-green-400 hover:duration-500"><a href="https://api.whatsapp.com/send?phone=525553601865&text=%22%C2%A1Buen%20d%C3%ADa!%20:)%20Bienvenido%20al%20chat%20de%20Integral%20Maderas%20y%20Herrajes.%20Estamos%20aqu%C3%AD%20para%20ayudarte%20de%208%3A00%20am%20a%205%3A00%20pm%2C%20de%20lunes%20a%20sabado.%20%C2%BFEn%20qu%C3%A9%20podemos%20asistirte%20hoy%3F%22" target="_blank">+52 55 5360 1865</a></li>
                        </ul>

                    </div>

                    <div className="flex flex-col max-w-56">
                        <p className="text-xl font-semibold  text-gray-900/100 pb-6">Identidad</p>
                        <ul role="list" className="flex flex-col gap-5">

                            <li className="text-base text-gray-500/100">Nosotros</li>
                            <li className="text-base text-gray-500/100">Politica de privacidad</li>
                            <li className="text-base text-gray-500/100">Terminos y condiciones</li>
                            <li className="text-base text-gray-500/100">Contacto</li>
                        </ul>
                    </div>








                </div>
            </div>
            <p className="text-center py-10 text-gray-500/100">© 2024 Integral Maderas Y Herrajes, Inc. All rights reserved.</p>
        </footer>
    )
}

export default Footer
