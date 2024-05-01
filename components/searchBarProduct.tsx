import { Link } from "react-router-dom"


function SearchBarProduct({ photoMain, name, serialNumber, onClickSetIsSerching }: any) {


    return (

        <div className="flex items-center gap-3 ">
            

            <img className="w-14 max-h-14 aspect-square rounded-md " src={photoMain} alt={name} />
         
            

            <div className="h-full border border-b-gray-900/10" />

            <Link className="w-full" onClick={()=> onClickSetIsSerching()} to={serialNumber}>
                <p className="font-semibold capitalize">{name}</p>
            </Link>

        </div>
    )
}

export default SearchBarProduct
