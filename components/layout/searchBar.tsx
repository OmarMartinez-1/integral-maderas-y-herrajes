import { useState } from "react"
import { getProducts } from "../../library/service"
import SearchBarProduct from "../searchBarProduct"

const Products = getProducts()

function SearchBar({ onClickSetIsSerching }: { onClickSetIsSerching: () => void }) {



    const [text, setText] = useState("")
    const [matchesProducts, setMatchesProducts] = useState<any>([])


    const onChange = (currentValue: string) => {
        setText(currentValue)        
        if (currentValue === " " || currentValue === "" ) {
            setMatchesProducts([])
        } else { 
            let filterProducts = Products.filter(({ name }) =>
                name.toLowerCase().split("").filter(l => l !== " ").join("").includes(currentValue.split("").filter(l => l !== " ").join(""))
        ).slice(0, 7)
        setMatchesProducts(filterProducts) 
        }
    }


    

    return (
        <div className="flex flex-1  flex-col  overflow-visible align-middle items-center justify-between gap-4 m-2 sm:m-4  md:mx-8" >
            <div className="  w-full   bg-white    border-b border-b-gray-900/10">
                <div className="flex h-16  px-7 py-2 justify-between gap-8 items-end">

                    <label htmlFor="searchInput" className="flex w-full items-center gap-3">
                        <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                        </svg>

                        <input id="searchInput" autoFocus value={text} onChange={({ target }) => { onChange(target.value.toLowerCase()) }} type="text" placeholder="Buscar" className="w-full h-9 text-justify text-xl outline-none border-spacing-0 rounded-2xl pl-4 align-middle bg-gray-200/40 hover:bg-gray-200"  />
                   
                    </label>



                    <button
                        type="button"
                        className="size-9 text-gray-700"
                        onClick={() => onClickSetIsSerching()}
                    >
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>

                    </button>

                </div>

            </div>
            {
                matchesProducts.length > 0
                    ?

                    <div className="sticky max-lg:overflow-y-scroll w-[96%] flex  sm:p-4  min-h-52 bg-white rounded-md  border-b-gray-900/10">


                        <div className="flex flex-col w-full gap-4">
                        {
                            matchesProducts?.map(({ name, photoMain, serialNumber }: any) => <SearchBarProduct key={name} name={name} photoMain={photoMain} serialNumber={serialNumber} onClickSetIsSerching={onClickSetIsSerching} />)
                        }
                        </div>
                    </div>
                    : <div className="sticky flex flex-col -bottom-20 w-[96%] min-h-min p-4 gap-4 bg-white rounded-md text-gray-900/50 pl-14  border-b-gray-900/10"><span>Sin Coincidencias Aún</span></div>
            }



        </div>
    )
}

export default SearchBar
