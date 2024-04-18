import { ReactElement } from "react"
import { Outlet } from "react-router-dom"
import { NavigationBar } from "../components/NavigationBar"
// Puede ser util para la barra de navagacion
export const Layout=():ReactElement=>{
  return (
    <>
    <NavigationBar/>
        <main>
          <h1>Home</h1>
            {/* Aquí se renderizarán los componentes */}
            <Outlet>
            </Outlet>
        </main>
    </>
    
  )
}