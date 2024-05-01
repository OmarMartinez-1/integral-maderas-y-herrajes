import headerLogo from "../../public/logo.png"
import sidebarLogo from "../../public/IMH-logo.webp"
import { useEffect, useState } from "react"
import SearchBar from "./searchBar"
import { Link } from "react-router-dom"




function Header() {


  const [isSearching, setIsSearching] = useState(false)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  let body = document.getElementById("body")
  if (mobileMenuOpen || isSearching) {
    if (body) body.style.overflow = "hidden"
  } else {
    if (body) body.style.overflow = "visible"
  }

  useEffect(() => {
    function handleResize() {
      let { innerWidth } = window
      if (innerWidth >= 768) setMobileMenuOpen(false)
    }
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])



  const [isVisible, setIsVisible] = useState("hiddenHeader")
  let lastScrollTop = 0

  useEffect(() => {
    function handleScroll() {
      let { scrollY } = window
      if (!mobileMenuOpen && isVisible !== "visible" && scrollY > lastScrollTop) {
        setIsVisible("notVisible")
      } else setIsVisible("visible")

      lastScrollTop = scrollY
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])








  return (
    <header

      className={isVisible + " fixed  z-50 top-0  w-full max-w-[1440px] bg-white border-b border-gray-200"}  >

      {
        isSearching ?

          <SearchBar onClickSetIsSerching={() => setIsSearching(false)} />

          :

          <div className="flex flex-1  flex-row  align-middle items-center justify-between m-4 ml-8 md:mr-8" >

            <Link to="/">
              <div className="w-16 ">

                <img
                  className="aspect-square object-cover"
                  src={headerLogo}
                  alt="logo de integral maderas y herrajes"
                />
              </div>
            </Link>



            <div className="hidden md:flex items-center justify-center gap-12">
              <Link
                to="/Aluminio"
                className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Productos
              </Link>
              <Link
                to="/"
                className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Inicio
              </Link>
              <Link
                to="/Sobre-Nosotros"
                className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Nosotros
              </Link>
              <Link
                to="/Contactanos"
                className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Contacto
              </Link>

            </div>


            <div className="flex flex-row gap-5">

              <button
                type="button"
                className=" flex  rounded-md  text-gray-700"
                onClick={() => setIsSearching(true)}
              >
                <div className="flex flex-row gap-1 items-center rounded-md hover:bg-gray-50 py-1 px-2">
                  <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                  </svg>
                  <p className="text-base font-semibold  text-gray-900">Buscar</p>

                </div>
              </button>





              {mobileMenuOpen ?
                <div className="slide-in-right  fixed flex justify-end md:hidden inset-y-0 right-0 z-10 w-full h-[100dvh]  bg-black/50 ">
                  <button className="size-full hidden sm:block" onClick={() => setMobileMenuOpen(false)} />

                  <div className="md:hidden inset-y-0  overflow-y-scroll  w-full h-[100dvh]  bg-white px-6  pb-6 pt-9 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 border">
                    <div className="flex items-center justify-end">

                      <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 pr-2 text-gray-700"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>

                      </button>
                    </div>



                    <div className="mt-6  flow-root">
                      <div className=" border-b border-gray-500/10 " />
                      <div className="-my-6 h- divide-y divide-gray-500/10 ">
                        <div className="flex flex-col gap-7 space-y-2 py-6 ">
                          <div className="-mx-3">

                          </div>

                          <Link
                            to="/Aluminio"
                            className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            Productos
                          </Link>
                          <Link
                            to="/"
                            className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            Inicio
                          </Link>
                          <Link
                            to="/Sobre-Nosotros"
                            className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            Nosotros
                          </Link>
                          <Link
                            to="/Contactanos"
                            className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            Contacto
                          </Link>
                          
                        </div>

                        <div className="h-full flex flex-col justify-end items-center gap-6 py-16 mt-8">


                          <Link to="/" className="h-min w-min  ">
                            <div className=" flex  justify-center align-center overflow-hidden bg-green-400 shadow-2xl hover:shadow-green-400 hover:duration-500 rounded-md w-24 h-24">
                              <img src={sidebarLogo} alt="logo de integral maderas y herrajes"
                                className="object-contain w-full h-auto " />
                            </div>
                          </Link>

                          <p className="w-48 text-center text-base font-semibold leading-7 text-gray-900">Integral Maderas Y Herrajes. Inc ©</p>


                        </div>
                      </div>


                    </div>
                    

                  </div>
                </div>
                :
                <button
                  type="button"
                  className=" md:hidden -m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => { setMobileMenuOpen(true); setIsVisible("visible") }}
                >
                  <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                  </svg>
                </button>
              }


            </div>

          </div>
      }
    </header>
  )
}

export default Header
