import { useEffect, useState } from "react"
import { Link, useOutletContext } from "react-router-dom"
import { getProductById } from "../library/service"






function ProductViewModal() {

    const [outletId, _] = useOutletContext<any>()
    const product = getProductById(outletId)
    const [currentPhoto, setCurrentPhoto] = useState<string>()

    useEffect(() => {
        if (product?.photoMain !== currentPhoto)
            setCurrentPhoto(product?.photoMain)

    }, [product?.photoMain])






    return (

        <div className="fixed z-50 flex justify-center items-center w-full h-[100vh] bg-gray-700/35 ">

            <div className="relative grid place-content-center place-items-center w-full h-[100vh] bg-gray-700/35 ">

                <div className="flex flex-col  box-border my-24 max-h-[100dvh]  w-full  sm:w-[90%] lg:w-[75%] xl:w-[55%] 2xl:w-[50%]  p-6 rounded-lg bg-gray-50">
                    <div className="flex justify-between w-full mb-4 gap-8">

                        <div className="">
                            <p className="text-xl md:text-2xl font-bold capitalize">{product?.name}</p>
                            <p className="text-sm md:text-md font-medium text-opacity-100 text-gray-400 ">{product?.section}</p>
                            <p className="text-sm md:text-md font-medium text-opacity-100 text-gray-400 ">{product?.serialNumber}</p>
                        </div>

                        <Link  className="h-7 w-7" to="..">
                            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </Link>
                    </div>


                    <div className="flex max-sm:flex-col w-full gap-4">

                        <div className="flex  sm:w-[15%] sm:flex-col gap-2 items-center  ">

                            {product?.photoCollection.map((p: any, i: any) => <button key={i + 1} className={"flex max-sm:size-11 overflow-hidden rounded-md" + (p === currentPhoto && " p-2 border-[1.5px] border-black")} onClick={() => setCurrentPhoto(p)}><img src={p} className="aspect-square w-full rounded-md" alt={p.name} /></button>)}

                        </div>


                        <div className="flex w-full overflow-hidden rounded-lg"><img src={currentPhoto} className="w-full" alt="main photo"/></div>


                    </div>

                </div>
            </div>

        </div>

    )
}

export default ProductViewModal
