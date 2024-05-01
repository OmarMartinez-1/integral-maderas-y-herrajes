import Products from './data/Products.json'

export type Product = {
    name: string;
    serialNumber: string;
    section: string;
    photoMain: string;
    photoCollection: string[];
}

export const getProducts = (): Product[] => {
    return Products
}


export const getProductById = (id: string) => {
    return Products.find((p) => p.serialNumber === id )
}