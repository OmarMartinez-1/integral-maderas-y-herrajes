import { Link } from "react-router-dom";



type Props = {
  name: string;
  section: string;
  photoMain: string;
  serialNumber: string;
}


function ProductCard({ name, section, photoMain, serialNumber }: Props) {




  return (
    <div className="flex flex-col bg-white w-full min-h-72 border-gray-200/ border rounded-md max-h-96 ">
      <div className="overflow-hidden border-gray-200/50 border rounded-t-md">
        <Link to={serialNumber}>
          <img className="aspect-square w-full object-cover object-center h-56 lg:h-72 " src={photoMain} alt={name}/>
        </Link>
      </div>
      <div className="w-full p-4">

        <p className="text-sm md:text-md font-medium text-opacity-100 text-gray-400 mb-1">{section}</p>
        <p className="capitalize text-lg leading-tight font-medium text-opacity-100 text-gray-900">{name}</p>

      </div>
    </div>
  )
}

export default ProductCard
