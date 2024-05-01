import React from "react"
import { HeadProvider } from "react-head";
import ReactDOM from "react-dom/client"
import Root from "./routes/root.tsx"
import Products from "./routes/products.tsx"
import Footer from "../components/layout/footer.tsx"
import { createHashRouter, RouterProvider } from "react-router-dom";
import ProductViewModal from "../components/productViewModal.tsx"
import AboutUs from "./routes/aboutUs.tsx"
import Contact from "./routes/contact.tsx"
import "../public/index.css"
import "../public/root.css"


const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [{
      path: ":id",
      element: <ProductViewModal />,
    }]
  },
  {
    path: "/Aluminio",
    element: <Products />,
    children: [{
      path: ":id",
      element: <ProductViewModal />,
    }]
  },
  {
    path: "/Sobre-Nosotros",
    element: <AboutUs/>,
    children: [{
      path: ":id",
      element: <ProductViewModal />,
    }]
  },
  {
    path: "/Contactanos",
    element: <Contact/>,
    children: [{
      path: ":id",
      element: <ProductViewModal />,
    }]
    
  },
])



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>

    <HeadProvider>
    <main className="flex flex-col items-center bg-gray-50 w-full border-gray-200/100 border-b-[2px]" >
      <RouterProvider router={router} />
    </main>
    <Footer />
    </HeadProvider>

  </React.StrictMode>,
)